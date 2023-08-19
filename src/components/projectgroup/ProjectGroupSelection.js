import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import getprojectgroups from "../../services/projectgroup/getprojectgroups";

function ProjectGroupSelection({ selectedGroupIds, setSelectedGroupIds }) {
    const [selectedGroups, setSelectedGroups] = useState({});
    const [projectGroups, setProjectGroups] = useState([]);

    useEffect(() => {
        async function fetchProjectGroups() {
            const groups = await getprojectgroups();
            setProjectGroups(groups);

            // Initialisierung des State mit den abgerufenen Projektgruppen
            const initialState = {};
            groups.forEach(group => {
                initialState[group.name] = selectedGroupIds.includes(group.id);
            });
            setSelectedGroups(initialState);
        }

        fetchProjectGroups();
    }, []);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedGroups(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const handleSubmit = () => {
        const selected = projectGroups.filter(group => selectedGroups[group.name]);
        const selectedIds = selected.map(group => group.id);
        setSelectedGroupIds(selectedIds);
    };

    return (
        <Container>
            <h3>Bitte wählen Sie die gewünschten Projektgruppen aus:</h3>
            <Form>
                {projectGroups.map(group => (
                    <Form.Check
                        key={group.name}
                        type="checkbox"
                        id={group.name}
                        label={
                            <span>
                            <span
                                style={{
                                    display: "inline-block",
                                    width: "16px",
                                    height: "16px",
                                    borderRadius: "50%",
                                    backgroundColor: group.color,
                                    marginRight: "8px"
                                }}
                            ></span>
                                {group.name}
                        </span>
                        }
                        name={group.name}
                        checked={selectedGroups[group.name] || false}
                        onChange={handleCheckboxChange}
                    />
                ))}
                <Button className="mt-3" variant="primary" onClick={handleSubmit}>Auswählen</Button>
            </Form>
        </Container>
    );
}

export default ProjectGroupSelection;

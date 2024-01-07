import React, { useState, useEffect } from 'react';
import {Form, Button, Container, Spinner} from 'react-bootstrap';
import getprojectgroups from "../../services/projectgroup/getprojectgroups";

function ProjectGroupSelection(props) {
    const [selectedGroups, setSelectedGroups] = useState({}); // selected project groups
    const [projectGroups, setProjectGroups] = useState([]); // all existing project groups
    const [loadingGroup, setIsLoadingGroup] = useState(false);

    useEffect(() => {
        async function fetchProjectGroups() {
            setIsLoadingGroup(true);
            const groups = await getprojectgroups();
            setProjectGroups(groups);

            // Initialisierung des State mit den abgerufenen Projektgruppen
            const initialState = {};
            groups.forEach(group => {
                initialState[group.name] = props.selectedGroupIds.includes(group.id);
            });
            setSelectedGroups(initialState);
            setIsLoadingGroup(false);
        }

        fetchProjectGroups();
    }, []);

    // update the selectedGroups state when a checkbox is clicked
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedGroups(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    // change the props.selectedGroupIds depending on a change of the selectedGroups state
    useEffect(() => {
        const selectedGroupIds = projectGroups
            .filter((group) => selectedGroups[group.name])
            .map((group) => group.id);
        props.setSelectedGroupIds(selectedGroupIds);
    }, [selectedGroups]);

    return (
        <div>
            <h3>Auswahl Projektgruppe:</h3>
            {loadingGroup ? (
                <div className="d-flex justify-content-center mt-5">
                    <Spinner animation="border" role="status" variant="primary">
                    </Spinner>
                </div>
            ):(
                <div>
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
                    </Form>
                </div>
            )}
        </div>
    );
}

export default ProjectGroupSelection;

import React, {useEffect} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {getAllProjects} from "../../services/projects/projectfunctions";

function ProjectGroupSelection({selectedGroupIds, setSelectedGroupIds, projectGroups, selectedGroups, setSelectedGroups, groupColors, setGroupColors, setIsLoadingSearch, searchHistoryRef, setProjects}) {
    // update the selectedGroups state when a checkbox is clicked
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedGroups(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    // change the selectedGroupIds depending on a change of the selectedGroups state
    useEffect(() => {
        const selectedGroupIds = projectGroups
            .filter((group) => selectedGroups[group.name])
            .map((group) => group.id);
        setSelectedGroupIds(selectedGroupIds);
    }, [selectedGroups]);

    // Function to reset colors to default
    const resetColors = () => {
        const defaultColors = {};
        projectGroups.forEach(group => {
            defaultColors[group.name] = group.color || "#000000";
        });
        setGroupColors(defaultColors);
    };

    const handleColorChange = (event) => {
        const { name, value } = event.target;
        setGroupColors(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function clickAllProjects() {
        getAllProjects(searchHistoryRef, setIsLoadingSearch, setProjects, selectedGroupIds);
    }

    return (
        <div>
            <h3>Auswahl Projektgruppe:</h3>
            <div>
                <Form>
                    {projectGroups.map(group => (
                        <div key={group.name}>
                            <Row>
                                <Col xs={9}>
                                    <Form.Check
                                        type="checkbox"
                                        id={group.name}
                                        label={group.name}
                                        name={group.name}
                                        checked={selectedGroups[group.name] || false}
                                        onChange={handleCheckboxChange}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        type="color"
                                        name={group.name}
                                        value={groupColors[group.name] || group.color}
                                        onChange={handleColorChange}
                                        className="color-picker"
                                    />
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Form>
                <Row className="mt-2">
                    <Col>
                        <Button type='button' variant='primary' onClick={clickAllProjects}>
                            Projektgruppen auswählen
                        </Button>
                        <Button className="ms-2 mt-0" onClick={resetColors}>Farben zurücksetzen</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ProjectGroupSelection;

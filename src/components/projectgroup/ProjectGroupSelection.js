import React, {useState, useEffect, useRef} from 'react';
import {Form, Button, Container, Spinner, Row, Col} from 'react-bootstrap';
import { ChromePicker } from 'react-color'; // Importieren Sie den ColorPicker

function ProjectGroupSelection(props) {
    // update the selectedGroups state when a checkbox is clicked
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        props.setSelectedGroups(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    // change the props.selectedGroupIds depending on a change of the selectedGroups state
    useEffect(() => {
        const selectedGroupIds = props.projectGroups
            .filter((group) => props.selectedGroups[group.name])
            .map((group) => group.id);
        props.setSelectedGroupIds(selectedGroupIds);
    }, [props.selectedGroups]);

    // Function to reset colors to default
    const resetColors = () => {
        const defaultColors = {};
        props.projectGroups.forEach(group => {
            defaultColors[group.name] = group.color || "#000000";
        });
        props.setGroupColors(defaultColors);
    };

    const handleColorChange = (event) => {
        const { name, value } = event.target;
        props.setGroupColors(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <h3>Auswahl Projektgruppe:</h3>
            <div>
                <Form>
                    {props.projectGroups.map(group => (
                        <div key={group.name}>
                            <Row>
                                <Col xs={9}>
                                    <Form.Check
                                        type="checkbox"
                                        id={group.name}
                                        label={group.name}
                                        name={group.name}
                                        checked={props.selectedGroups[group.name] || false}
                                        onChange={handleCheckboxChange}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        type="color"
                                        name={group.name}
                                        value={props.groupColors[group.name] || group.color}
                                        onChange={handleColorChange}
                                        className="color-picker"
                                    />
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Form>
                <Button onClick={resetColors} className="mt-2">Farben zurücksetzen</Button>
            </div>
        </div>
    );
}

export default ProjectGroupSelection;

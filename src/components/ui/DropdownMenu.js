import {Dropdown} from "react-bootstrap";
import {useState} from "react";

function DropdownMenu(props) {

    const handleSelect = (item) => {
        props.setSelectedProgress(item);
    };

    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.translationProgressNames[props.selectedProgress] || 'Bitte auswählen'} {/* Hier wird das ausgewählte Element oder ein Platzhalter angezeigt */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {props.progressNames.map((item)=>(
                    <Dropdown.Item eventKey={item} key={item}>{props.translationProgressNames[item]}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownMenu;

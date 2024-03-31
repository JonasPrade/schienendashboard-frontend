import {ButtonGroup, ToggleButton} from "react-bootstrap";
import React from "react";


function SwitchButton({allowedValues, currentValue, changeValue}) {
    return(
        <ButtonGroup className="w-100">
            {allowedValues.map((value) => (
                <ToggleButton
                    key={value}
                    id={value}
                    type="radio"
                    variant={currentValue === value ? "success" : "primary"}
                    active={currentValue === value}
                    onClick={(e) => {
                        e.preventDefault()
                        changeValue(value)
                    }}
                >
                    {value}
                </ToggleButton>
            ))}
        </ButtonGroup>
        )
}

export default SwitchButton;



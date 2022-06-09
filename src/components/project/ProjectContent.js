import {Button, ButtonGroup} from "react-bootstrap";
import {useState} from "react";
import ProjectDetailBewertung from "./ProjectDetail/ProjectDetailBewertung";
import ProjectDetailContent from "./ProjectDetail/ProjectDetailContent";

function ProjectContent(props) {
    const [selectedCategorie, changeSelectedCategorie] = useState(1)

    function clickCategeorie(e) {
        changeSelectedCategorie(parseInt(e.target.value))
        e.setState({ active: e.state.active})
    }

    return(
        <div>
            <h4 className="mb-2 mt-2">Projektinhalt</h4>
            <ProjectDetailContent activeProjectVariant={props.activeProjectVariant}/>

            <h4 className="mb-2 mt-2">Projektstatus</h4>
            <p>TO-DO</p>

            <h4 className="mb-2 mt-2">Kennzahlen</h4>

            <div className="mb-2">
                <ButtonGroup className={'d-flex'}>
                    <Button variant={selectedCategorie === 1 ? "outline-secondary active":"outline-secondary"} value="1" onClick={clickCategeorie}>Bewertung</Button>
                    <Button variant={selectedCategorie === 2 ? "outline-secondary active":"outline-secondary"} value="2" onClick={clickCategeorie}>Umwelt</Button>
                    <Button variant={selectedCategorie === 3 ? "outline-secondary active":"outline-secondary"} value="3" onClick={clickCategeorie}>Finanzen</Button>
                </ButtonGroup>
            </div>

            {selectedCategorie===1 &&
                <ProjectDetailBewertung activeProjectVariant={props.activeProjectVariant}/>
            }
            {selectedCategorie===2 &&
                <h4>Umwelt</h4>
            }
            {selectedCategorie===3 &&
                <h4>Finanzen</h4>
            }
        </div>
    );
}

export default ProjectContent
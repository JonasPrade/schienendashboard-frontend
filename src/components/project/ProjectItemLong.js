import {useState, useEffect} from "react";
import ProjectContent from "./ProjectContent";
import {Accordion, ButtonGroup, Dropdown, Button} from "react-bootstrap";
import ProjectMap from "./ProjectMap";
import ProjectContentDropdownSelector from "./ProjectContentDropdownSelector";

function ProjectItemLong(props) {
    const projectData = props.projectData.projectData

    const firstProjectContent = getFirstProjectContent(projectData.first_project_content)
    function getFirstProjectContent(projectcontentid) {
        if (projectData.project_contents) {
            let firstProjectContentArrayId =  projectData.project_contents.findIndex(object => {
                return object.id===projectcontentid
            })
            return projectData.project_contents[firstProjectContentArrayId]
        }
        else {
            return false
        }
    }
    const [activeProjectVariant, changeActiveProjectVariant] = useState(firstProjectContent)

    return(
        <div>
            <h2>{projectData.name}</h2>
            {projectData.description &&
                <p>{projectData.description}</p>
            }
            <div style={{'height': '400px', 'width': '100%'}} className='p-2'>
                <ProjectMap geodata={firstProjectContent.projectcontent_railway_lines}/>
            </div>

            {projectData.project_contents.length>1 &&
                <div className='mt-3 p-2 bg-light'>
                    <h3>Projektauswahl</h3>
                    <ProjectContentDropdownSelector activeProjectVariant={activeProjectVariant} changeActiveProjectVariant={changeActiveProjectVariant} projectData={projectData}/>
                </div>
            }
            {projectData.project_contents.length>0 &&
                <div className='mt-3 p-2 bg-light'>
                    <h3>{activeProjectVariant.name}</h3>
                    <ProjectContent activeProjectVariant={activeProjectVariant}/>
                </div>
            }
        </div>
    );
}

export default ProjectItemLong;
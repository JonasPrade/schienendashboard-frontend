import { CircleMarker } from "react-leaflet";
import ProjectPopup from "./ProjectPopup";

function ProjectMapStation(props) {
    const defaultStyle = {
        color: 'red',      // Kreisfarbe
        fillColor: 'red',  // Füllfarbe
        fillOpacity: 0.6,
        radius: 6
    };

    const hoveredStyle = {
        color: 'blue',     // Hover-Kreisfarbe
        fillColor: 'blue', // Hover-Füllfarbe
        fillOpacity: 0.6,
        radius: 6
    };

    function handleMouseOver(e) {
        e.target.setStyle(hoveredStyle);
    }

    function handleMouseOut(e) {
        e.target.setStyle(defaultStyle);
    }

    return props.projectcontent.railway_stations.map(station => (
        <CircleMarker
            key={station.id}
            center={[
                station.railway_points[0].coordinates.coordinates[0][1],
                station.railway_points[0].coordinates.coordinates[0][0]
            ]}
            {...defaultStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {props.showpopup &&
                <ProjectPopup projectId={props.projectcontent.id} projectName={props.projectcontent.name} />
            }
        </CircleMarker>
    ));
}

export default ProjectMapStation;

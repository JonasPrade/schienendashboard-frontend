import {GeoJSON} from "react-leaflet";
import L from 'leaflet';
import { useRef } from "react"; // Importieren Sie den useRef Hook
import colors from '../../custom.scss'

function ProjectGeoJson(props) {
    const projectColor = props.color;
    const style = { color: projectColor, weight: 4 };

    const selectedProject_id = parseInt(localStorage.selected_project_id)

    // Verwenden Sie useRef für geoJsonLayer
    const geoJsonLayer = useRef(null);

    function highlightAllRelatedFeatures(layer) {
        const targetProjectContentId = layer.feature.properties.projectcontent_id;
        geoJsonLayer.current.eachLayer((l) => {
            if (l.feature.properties.projectcontent_id === targetProjectContentId) {
                if (l instanceof L.CircleMarker) {
                    l.setStyle({
                        fillColor: selectedProject_id === props.projectcontent.id ? colors.danger : colors.diagram_color_2
                    });
                } else {
                    l.setStyle({
                        color: selectedProject_id === props.projectcontent.id ? colors.danger : colors.diagram_color_2
                    });
                }
            }
        });
    }

    function resetAllRelatedFeatures(layer) {
        const targetProjectContentId = layer.feature.properties.projectcontent_id;
        geoJsonLayer.current.eachLayer((l) => { // Verwenden Sie .current hier
            if (l.feature.properties.projectcontent_id === targetProjectContentId) {
                if (l instanceof L.CircleMarker) {
                    l.setStyle({
                        fillColor: selectedProject_id === props.projectcontent.id ? colors.danger : projectColor
                    });
                } else {
                    l.setStyle({
                        color: selectedProject_id === props.projectcontent.id ? colors.danger : projectColor
                    });
                }
            }
        });
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: (e) => {
                highlightAllRelatedFeatures(e.target);
            },
            mouseout: (e) => {
                resetAllRelatedFeatures(e.target);
            },
            click: (e) => {
                openPopupHandler(e);
            },
            touchend: (e) => {
                openPopupHandler(e);
            }
        });
    }

    const pointStyle = {
        fillColor: projectColor,
        fillOpacity: 1,
        radius: 6.5,
        stroke: false
    };

    function pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, pointStyle);
    }

    function openPopupHandler(e) {
        props.setSelectedProject(props.projectcontent);
    }

    return (
        <GeoJSON
            ref={(ref) => { geoJsonLayer.current = ref; }} // Aktualisieren Sie .current direkt
            key={props.projectcontent.id}
            data={props.projectcontent.geojson_representation}
            onEachFeature={onEachFeature}
            style={style}
            pointToLayer={pointToLayer}
        >
        </GeoJSON>
    );
}

export default ProjectGeoJson;

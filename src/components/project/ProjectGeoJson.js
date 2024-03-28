import {GeoJSON} from "react-leaflet";
import L from 'leaflet';
import {useEffect, useMemo, useRef} from "react"; // Importieren Sie den useRef Hook

function ProjectGeoJson(props) {
    const style = { color: props.colorToProject[props.projectcontent.id], weight: props.LineWeight };
    const geoJsonLayer = useRef(null);

    useEffect(() => {
        geoJsonLayer.current.eachLayer((layer) => {
            layer.off("mouseover");
            layer.off("mouseout");
            layer.on({
                mouseover: (e) => {
                    props.highlightAllRelatedFeatures(e.target, geoJsonLayer);
                },
                mouseout: (e) => {
                    props.resetAllRelatedFeatures(e.target, geoJsonLayer);
                },
                click: (e) => {
                    openPopupHandler(e);
                },
                touchend: (e) => {
                    openPopupHandler(e);
                },
                touchstart: (e) => {
                    openPopupHandler(e);
                }
            });
        });
    }, [props.colorToProject]);

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: (e) => {
                props.highlightAllRelatedFeatures(e.target, geoJsonLayer);
            },
            mouseout: (e) => {
                props.resetAllRelatedFeatures(e.target, geoJsonLayer);
            },
            click: (e) => {
                openPopupHandler(e);
            },
            touchend: (e) => {
                openPopupHandler(e);
            },
            touchstart: (e) => {
                openPopupHandler(e);
            }
        });
    }

    function pointToLayer(feature, latlng) {
        const pointStyle = {
            fillColor: props.colorToProject[props.projectcontent.id],
            fillOpacity: 0.6,
            radius: props.CircleRadius,
            weight: 2,
            stroke: true,
        };

        return L.circleMarker(latlng, pointStyle);
    }

    function openPopupHandler(e) {
        props.setSelectedProject(props.projectcontent);
    }

    return (
        <GeoJSON
            ref={(ref) => { geoJsonLayer.current = ref; }}
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

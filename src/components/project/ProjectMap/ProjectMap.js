import { MapContainer } from 'react-leaflet/MapContainer';
import { GeoJSON } from "react-leaflet/GeoJSON";
import { TileLayer } from 'react-leaflet/TileLayer';

import 'leaflet/dist/leaflet.css';
import L from "leaflet";

function ProjectMap(props) {
    var style= { color: '#17C3B2', weight:4};
    var centroid = [51.3127114, 9.4797461]

    const pointStyle = {
        fillColor: "#17C3B2",
        fillOpacity: 1,
        radius: 8,
        stroke: false
    };

    if (props.project.hasOwnProperty('centroid')) {
        if (props.project.centroid != null) {
            centroid = [props.project.centroid.coordinates[1],props.project.centroid.coordinates[0]]
        }
    }

    function pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, pointStyle);
    }

    return(
        <MapContainer center={centroid} zoom={10} scrollWheelZoom={true} style={{"height": "100%"}}>
            <TileLayer
                attribution='Kartenhintergrund: <a href="http://www.bkg.bund.de">Bundesamt für Kartographie und Geodäsie</a>'
                url={process.env.REACT_APP_TILE_LAYER_URL}
            />
            <GeoJSON
                key={props.project}
                data={props.project.geojson_representation}
                style={style}
                pointToLayer={pointToLayer}
            />
        </MapContainer>
    )
}

export default ProjectMap;
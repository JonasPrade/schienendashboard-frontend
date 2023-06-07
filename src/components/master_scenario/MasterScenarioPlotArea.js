import {GeoJSON} from "react-leaflet/GeoJSON";
import getColorMasterAreaTraction from "../../services/master_areas/master_area_color";


function MasterScenarioPlotArea(props) {
    var style = { color: getColorMasterAreaTraction()[props.master_area.traction_minimal_cost], weight:4};

    function openArea(){
        props.setMasterArea(props.master_area);
    }

    function oneachfeature(feature, layer){
        layer.on({
            click: openArea,
            mouseover: highlightFeature,
            mouseout: resetHighlight
        })
    }

    function highlightFeature(e) {
        e.target.setStyle({
            color: '#E09A1A'  // diagram_color_2
        })
    };

    function resetHighlight(e) {
        e.target.setStyle(style)
    }

    return(
            <GeoJSON
                key={props.master_area.id}
                data={props.master_area.coords}
                onEachFeature={oneachfeature}
                style={style}
            />
    )
}

export default MasterScenarioPlotArea
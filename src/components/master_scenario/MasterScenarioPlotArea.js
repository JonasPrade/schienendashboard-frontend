import {GeoJSON} from "react-leaflet/GeoJSON";
import {useNavigate} from "react-router-dom";
import getColorMasterAreaTraction from "../../services/master_areas/master_area_color";


function MasterScenarioPlotArea(props) {
    var style = { color: getColorMasterAreaTraction()[props.master_area.traction_minimal_cost] };

    function openArea(){
        props.setMasterArea(props.master_area);
    }

    function oneachfeature(feature, layer){
        layer.on({
            click: openArea,
            // mouseover: highlightFeature
        })
    }

    return(
        props.master_area.railway_lines.map(line=> (
            <GeoJSON
                key={line.id}
                data={line.coordinates}
                onEachFeature={oneachfeature}
                style={style}
            />
        ))

    )
}

export default MasterScenarioPlotArea
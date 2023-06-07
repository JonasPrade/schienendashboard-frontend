import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";

import TimetableTrainGroupMapLine from "./TimetableTrainGroupMapLine";
import TimetableTrainGroupMapStation from "./TimetableTrainGroupMapStation";


function TimetableTrainGroupMap(props) {

    return(
        <div>
            <h3>Linienverlauf</h3>
            <div style={{'height': '500px', 'width': '100%'}}>
                <MapContainer center={[props.stations[0].coordinates[0][1],props.stations[0].coordinates[0][0]]} zoom={11} style={{"height": "100%"}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url={process.env.REACT_APP_TILE_LAYER_URL}
                    />
                    <TimetableTrainGroupMapLine
                        key={props.activeLine.id}
                        TimetableTrainGroup={props.activeLine}
                    />
                    {props.stations.map(station =>
                            <TimetableTrainGroupMapStation key={station.id} station={station}/>
                    )}

                </MapContainer>
            </div>
        </div>
    )
}

export default TimetableTrainGroupMap
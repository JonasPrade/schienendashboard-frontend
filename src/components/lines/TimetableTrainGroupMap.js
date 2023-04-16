import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";
import {GeoJSON} from "react-leaflet/GeoJSON";
import {renderToStaticMarkup} from "react-dom/server";
import {divIcon} from "leaflet/dist/leaflet-src.esm";
import {Marker} from "react-leaflet";


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
                    {props.activeLine.railway_lines.map(route =>
                        <GeoJSON
                            key={route.id}
                            data={route.railway_line.coordinates}
                        />
                    )}
                    {props.stations.map(station => {
                            var iconMarkup = renderToStaticMarkup(<div>{station.name} {station.db_kuerzel}</div>);
                            var customMarkerIcon = divIcon({
                                html: iconMarkup
                            });
                            return <Marker
                                position={[station.coordinates[0][1], station.coordinates[0][0]]}
                                icon={customMarkerIcon}
                                key={station.id}
                            />
                        }
                    )}

                </MapContainer>
            </div>
        </div>
    )
}

export default TimetableTrainGroupMap
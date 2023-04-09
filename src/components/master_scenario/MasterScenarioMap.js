import {Col, Row} from "react-bootstrap";
import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";
import MasterScenarioPlotArea from "./MasterScenarioPlotArea";
import Loading from "../layout/Loading";
import MasterAreaShort from "../master_area/MasterAreaShort";
import {useState} from "react";

function MasterScenarioMaps(props) {

    const [activeMasterArea, setMasterArea] = useState(null)

    return(
        <Row>
            <Col xl="8">
                <h3>Karte</h3>
                {!props.areaLoading ?
                    <div style={{'height': '500px', 'width': '100%'}}>
                        <MapContainer center={[51.3127114, 9.4797461]} zoom={7} style={{"height": "100%"}}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url={process.env.REACT_APP_TILE_LAYER_URL}
                            />
                            {props.masterAreas.map(area =>
                                <MasterScenarioPlotArea
                                    key={area.id}
                                    master_area={area}
                                    activeMasterArea={activeMasterArea}
                                    setMasterArea={setMasterArea}
                                />
                            )}
                        </MapContainer>
                    </div> :
                    <Loading/>
                }
            </Col>
            <Col xl="4">
                <div>
                    <h4>Ausgewähltes Untersuchungsgebiet</h4>
                    {activeMasterArea ?
                        <MasterAreaShort
                            key ={activeMasterArea.id}
                            area={activeMasterArea}
                            activeMasterArea={activeMasterArea}
                            setMasterArea={setMasterArea}
                        />:
                        <p>Untersuchungsgebiet in Karte auswählen</p>
                    }
                </div>
            </Col>
        </Row>
    )
}

export default MasterScenarioMaps
import Container from "react-bootstrap/Container";
import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";
import {GeoJSON} from "react-leaflet/GeoJSON";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

function MasterAreaDetail(props) {
    var start_centroid = [props.master_area.railway_lines[0].coordinates.coordinates[0][1], props.master_area.railway_lines[0].coordinates.coordinates[0][0]]

    return(
        <Container>
            <h2>Szenario {props.master_area.scenario.name}</h2>
            <h3>Untersuchungsgebiet Nr. {props.master_area.id}</h3>

            <Row>
                <Col xl="8">
                    <h4>Karte</h4>
                    <div style={{'height':'500px', 'width': '100%'}}>
                        <MapContainer center={start_centroid} zoom={8} style={{"height": "100%"}}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url={process.env.REACT_APP_TILE_LAYER_URL}
                            />
                            {props.master_area.railway_lines.map(line =>
                                <GeoJSON
                                    key={line.id}
                                    data={line.coordinates}
                                />
                            )}
                        </MapContainer>
                    </div>
                </Col>

                <Col xl="4">
                    <div className="mt-5">
                        <h4>Traingroups</h4>
                        <ul>
                            {props.master_area.traingroups.map(traingroup =>
                                <li key={traingroup.id}>
                                    <Link to={"../../lines/"+traingroup.id}>{traingroup.id}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </Col>

            </Row>

        </Container>
    )
}

export default MasterAreaDetail
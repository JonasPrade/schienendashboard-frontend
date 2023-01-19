import Container from "react-bootstrap/Container";
import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";
import {GeoJSON} from "react-leaflet/GeoJSON";
import {Link} from "react-router-dom";
import {Col, Row, Table} from "react-bootstrap";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from "react-chartjs-2";

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function MasterAreaDetail(props) {
    var start_centroid = [props.master_area.railway_lines[0].coordinates.coordinates[0][1], props.master_area.railway_lines[0].coordinates.coordinates[0][0]]

    var labels = []
    var infrastructure_cost = []
    for (const [key, value] of Object.entries(props.master_area.infrastructure_cost)) {
        labels.push(key)
        infrastructure_cost.push(value)
    }
    var train_cost = []
    for (const [key, value] of Object.entries(props.master_area.train_cost)) {
        train_cost.push(value)
    }

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Diagramm Übersicht Traktionskosten nach Kostenkategorie',
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                title: {
                    text: 'Kosten [Tsd. €]',
                    display: true
                },
                stacked: true,
            },
        },
    };

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
                    <h4>Vergleich Antriebe</h4>
                    <p>präferierte Traktion: {props.master_area.cost_effective_traction}</p>
                    <h5>Übersicht Kosten</h5>
                    <Table>
                        <tbody>
                            <tr>
                                <td>vollständige Elektrifizierung</td>
                                <td>{Math.round(props.master_area.cost_traction["electrification"]).toLocaleString('de')} Tsd. € Barwert</td>
                            </tr>
                            <tr>
                                <td>E-Fuel</td>
                                <td>{Math.round(props.master_area.cost_traction["efuel"]).toLocaleString('de')} Tsd. € Barwert</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div>
                        <Bar options={options} data={
                            {
                                labels,
                                datasets:[{
                                    label:"Infrastrukturkosten",
                                    data:infrastructure_cost,
                                    backgroundColor: '#1D3449'
                                },{
                                    label:"Betriebskosten",
                                    data:train_cost,
                                    backgroundColor: '#E9806E'
                                }
                                ]

                            }
                        }/>
                    </div>
                </Col>
            </Row>
            <Row>

                <Col xl="4"  className="mt-5">
                    <div>
                        <h4>Verkehrskategorien</h4>
                        <ul>
                            {props.master_area.categories.map(category =>
                            <li key={category}>
                                {category}
                            </li>
                            )}
                        </ul>
                    </div>
                    <div>
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
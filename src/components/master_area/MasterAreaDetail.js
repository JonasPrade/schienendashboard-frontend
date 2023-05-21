import Container from "react-bootstrap/Container";
import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";
import {GeoJSON} from "react-leaflet/GeoJSON";
import {Link} from "react-router-dom";
import {Col, Row, Table} from "react-bootstrap";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from "react-chartjs-2";
import MasterAreaProjectShort from "./MasterAreaProjectShort";
import MasterScenarioPlotArea from "../master_scenario/MasterScenarioPlotArea";
import {useState} from "react";
import MasterAreaShort from "./MasterAreaShort";

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
    for (const [key, value] of Object.entries(props.master_area.cost_overview.operating_cost)) {
        labels.push(key)
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

    const [activeMasterArea, setMasterArea] = useState(null)

    return(
        <Container className="mt-5">
            <h2>Szenario {props.master_area.scenario.name}</h2>
            <h3>Untersuchungsgebiet Nr. {props.master_area.id}</h3>

            <Row>
                <Col xl="8">
                    <h4>Karte</h4>
                    <div style={{'height':'800px', 'width': '100%'}}>
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
                {props.master_area.cost_overview.minimal_cost &&
                    <Col xl="4">
                        <h4>Vergleich Antriebe</h4>
                        <p>präferierte Traktion: {props.master_area.cost_overview.minimal_cost}</p>
                        <h5>Übersicht Kosten</h5>
                        <Table>
                            <tbody>
                            {labels.map(label =>
                                <tr id={label}>
                                    <td>{label}</td>
                                    <td>{Math.round(props.master_area.cost_overview.sum_cost[label]).toLocaleString('de')} Tsd. € Barwert</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                        <div style={{height: "200px"}}>
                            <Bar options={options} data={
                                {
                                    labels,
                                    datasets: [{
                                        label: "Infrastrukturkosten",
                                        data: props.master_area.cost_overview.infrastructure_cost,
                                        backgroundColor: '#1D3449'
                                    }, {
                                        label: "Betriebskosten",
                                        data: props.master_area.cost_overview.operating_cost,
                                        backgroundColor: '#E9806E'
                                    }
                                    ]

                                }
                            }/>
                        </div>
                    </Col>
                }
            </Row>
            <Row className="mt-3">
                <Col xl="4">
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
                    <div className="mt-3">
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
                <Col xl="8">
                    <h4>Infrastrukturkosten</h4>
                    <div>
                        {props.master_area.project_contents.map(project =>
                            <div>
                                <MasterAreaProjectShort
                                    key={project.id}
                                    project={project}
                                />
                            </div>
                        )}
                    </div>

                </Col>
            </Row>
            <Row>
                <Col xl="8">
                    <h4>Optimierte Elektrifizierung</h4>
                    <div style={{'height':'500px', 'width': '100%'}}>
                        <MapContainer center={[51.3127114, 9.4797461]} zoom={7} style={{"height": "100%"}}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url={process.env.REACT_APP_TILE_LAYER_URL}
                            />
                            {props.master_area.sub_master_areas.map(area =>
                                <MasterScenarioPlotArea
                                    key={area.id}
                                    master_area={area}
                                    activeMasterArea={activeMasterArea}
                                    setMasterArea={setMasterArea}
                                />
                            )}
                        </MapContainer>
                    </div>
                </Col>
                <Col xl="4">
                    <div>
                        <h4>Ausgewähltes Untersuchungsgebiet</h4>
                        {activeMasterArea &&
                            <MasterAreaShort
                                key ={activeMasterArea.id}
                                area={activeMasterArea}
                                activeMasterArea={activeMasterArea}
                                setMasterArea={setMasterArea}
                            />
                        }
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <p>Barwert bezieht sich auf 2015</p>
                </Col>
            </Row>

        </Container>
    )
}

export default MasterAreaDetail
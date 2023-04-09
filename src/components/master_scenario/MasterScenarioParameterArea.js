import {Col, Row, Table} from "react-bootstrap";
import {Pie} from "react-chartjs-2";
import getColorMasterAreaTraction from "../../services/master_areas/master_area_color";


function MasterScenarioParameterArea(props) {

    const labels = ['electrification', 'battery', 'diesel', 'efuel', 'h2', 'optimised_electrification']
    const labels_no_oe = ['electrification', 'battery', 'diesel', 'efuel', 'h2']
    var colors = []
    var colors_no_oe = []
    const color_by_traction = getColorMasterAreaTraction()

    for (const index in labels) {
        colors.push(color_by_traction[labels[index]])

    }

    for (const index in labels_no_oe) {
        colors_no_oe.push(color_by_traction[labels[index]])
    }

    return(
        <div>
            <Row>
                <Col xl='6'>
                    <h4>Anteil Traktion nach Anzahl Untersuchungsgebiete</h4>
                    <div style={{height: "400px"}}>
                        <Pie
                            data={{
                                labels: labels,
                                datasets: [{
                                    label: 'Anzahl Untersuchungsgebiete',
                                    data: [props.scenario.count_area_electrification, props.scenario.count_area_battery, props.scenario.count_area_diesel, props.scenario.count_area_efuel, props.scenario.count_area_h2, props.scenario.count_area_optimised_electrification],
                                    backgroundColor: colors
                                }]
                            }}
                        />
                    </div>
                </Col>
                <Col xl='6'>
                    <Row>
                        <h4>Kenngrößen Kosten</h4>
                        <Table hover>
                            <tbody>
                            <tr>
                                <td>Betriebskosten (Barwert 2016)</td>
                                <td>{Math.round(props.scenario.operating_cost_sum).toLocaleString('de')} Tsd. €</td>
                            </tr>
                            <tr>
                                <td>Infrastrukturkosten (Barwert 2016) </td>
                                <td>{Math.round(props.scenario.infrastructure_cost_sum).toLocaleString('de')} Tsd. €</td>
                            </tr>
                            <tr>
                                <td>Gesamtkosten (Barwert 2016) </td>
                                <td>{Math.round(props.scenario.operating_cost_sum + props.scenario.infrastructure_cost_sum).toLocaleString('de')} Tsd. €</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <h4>Kenngrößen CO<sub>2</sub>-Bilanz</h4>
                        <Table hover>
                            <tbody>
                            <tr>
                                <td>CO2-Bilanz keine Maßnahmen (jährlich)</td>
                                <td>{Math.round(props.scenario.co2_diesel).toLocaleString('de')} t CO<sub>2</sub></td>
                            </tr>
                            <tr>
                                <td>CO2-Bilanz Szenario (jährlich) </td>
                                <td>{Math.round(props.scenario.co2_new).toLocaleString('de')} t CO<sub>2</sub></td>
                            </tr>
                            <tr>
                                <td>jährliche Einsparung</td>
                                <td>{Math.round(props.scenario.co2_diesel - props.scenario.co2_new).toLocaleString('de')} t CO<sub>2</sub></td>
                            </tr>
                            <tr>
                                <td>jährliche Einsparung monetarisiert</td>
                                <td>{Math.round((props.scenario.co2_diesel - props.scenario.co2_new)*670/1000).toLocaleString('de')} Tsd. €</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xl='6'>
                    <h4>Anteil Zugkilometer (täglich, inkl. optimierter Elektrifizierung)</h4>
                    <div style={{height: "400px"}}>
                        <Pie
                            data={{
                                labels: labels,
                                datasets: [{
                                    data: [props.scenario.running_km_electrification, props.scenario.running_km_battery, props.scenario.running_km_diesel, props.scenario.running_km_efuel, props.scenario.running_km_h2, props.scenario.running_km_optimised_electrification],
                                    backgroundColor: colors
                                }]
                            }}
                        />
                    </div>
                </Col>
                <Col xl='6'>
                    <h4>Anteil Zugkilometer (täglich, optimierter Elektrifizierung aufgeteilt)</h4>
                    <div style={{height: "400px"}}>
                        <Pie
                            data={{
                                labels: labels_no_oe,
                                datasets: [{
                                    data: [props.scenario.running_km_electrification + props.scenario.running_km_oe_to_electrification, props.scenario.running_km_battery + props.scenario.running_km_oe_to_battery, props.scenario.running_km_diesel, props.scenario.running_km_efuel, props.scenario.running_km_h2],
                                    backgroundColor: colors_no_oe
                                }]
                            }}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="pt-4">
                <Col xl='6'>
                    <h4>Anteil Infrastrukturkilometer (inkl. optimierter Elektrifizierung)</h4>
                    <div style={{height: "400px"}}>
                        <Pie
                            data={{
                                labels: labels,
                                datasets: [{
                                    data: [props.scenario.infrastructure_km_electrification, props.scenario.infrastructure_km_battery, props.scenario.infrastructure_km_diesel, props.scenario.infrastructure_km_efuel, props.scenario.infrastructure_km_h2, props.scenario.infrastructure_km_optimised_electrification],
                                    backgroundColor: colors
                                }]
                            }}
                        />
                    </div>
                </Col>
                <Col xl='6'>
                    <h4>Anteil Infrastrukturkilometer (optimierter Elektrifizierung aufgeteilt)</h4>
                    <div style={{height: "400px"}}>
                        <Pie
                            data={{
                                labels: labels_no_oe,
                                datasets: [{
                                    data: [props.scenario.infrastructure_km_electrification + props.scenario.infrastructure_km_oe_to_electrification, props.scenario.infrastructure_km_battery + props.scenario.infrastructure_km_oe_to_battery, props.scenario.infrastructure_km_diesel, props.scenario.infrastructure_km_efuel, props.scenario.infrastructure_km_h2],
                                    backgroundColor: colors_no_oe
                                }]
                            }}
                        />
                    </div>
                </Col>
            </Row>
            {/*<Row className='mt-4'>*/}
            {/*    <Table striped="columns" hover bordered>*/}
            {/*        <thead>*/}
            {/*            <tr>*/}
            {/*                <td>Kategorie</td>*/}
            {/*                {props.parameters.tractions.map(traction =>*/}
            {/*                    <td key={traction}>*/}
            {/*                        {traction}*/}
            {/*                    </td>*/}
            {/*                )}*/}
            {/*            </tr>*/}
            {/*        </thead>*/}
            {/*        <tbody>*/}
            {/*            <tr>*/}
            {/*                <td>Anzahl Untersuchungsgebiete</td>*/}
            {/*                {Object.values(props.parameters.area_traction_count).map(cost =>*/}
            {/*                    <td key={cost}>*/}
            {/*                        {Math.round(cost).toLocaleString('de')}*/}
            {/*                    </td>*/}
            {/*                )}*/}
            {/*            </tr>*/}
            {/*            <tr>*/}
            {/*                <td>Streckenkilometer</td>*/}
            {/*                {Object.values(props.parameters.optimised_electrification).map(cost =>*/}
            {/*                    <td key={cost}>*/}
            {/*                        {Math.round(cost).toLocaleString('de')}*/}
            {/*                    </td>*/}
            {/*                )}*/}
            {/*            </tr>*/}
            {/*            <tr>*/}
            {/*                <td>Streckenkilometer (inkl. opt. Elektrifizierung)</td>*/}
            {/*                {Object.values(props.parameters.area_traction_km).map(cost =>*/}
            {/*                    <td key={cost}>*/}
            {/*                        {Math.round(cost).toLocaleString('de')}*/}
            {/*                    </td>*/}
            {/*                )}*/}
            {/*            </tr>*/}
            {/*        </tbody>*/}
            {/*    </Table>*/}
            {/*</Row>*/}
        </div>
    )
}

export default MasterScenarioParameterArea
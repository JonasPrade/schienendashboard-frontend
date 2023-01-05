import {Table} from "react-bootstrap";

function ProjectDetailBewertung(props) {
    // TODO Add a css file https://css-tricks.com/two-issues-styling-the-details-element-and-how-to-solve-them/

    // check if a part of use exists
    var sum_use_change_present_value = props.activeProjectVariant.sum_use_change_present_value
    if (sum_use_change_present_value == null) {
        sum_use_change_present_value = "nicht berechnet"
    }

    var use_sum_passenger_present_value = props.activeProjectVariant.use_sum_passenger_present_value
    if (use_sum_passenger_present_value == null) {
        use_sum_passenger_present_value = "nicht berechnet"
    }

    var use_sum_cargo_present_value = props.activeProjectVariant.use_sum_cargo_present_value
    if (use_sum_cargo_present_value == null) {
        use_sum_cargo_present_value = "nicht berechnet"
    }

    // noise can be null -> for that we need some alternative Text
    var use_change_noise_intown_yearly = props.activeProjectVariant.use_change_noise_intown_yearly
    if (use_change_noise_intown_yearly == null) {
        use_change_noise_intown_yearly = "nicht berechnet"
    }

    var use_change_noise_intown_present_value = props.activeProjectVariant.use_change_noise_intown_present_value
    if (use_change_noise_intown_present_value == null) {
        use_change_noise_intown_present_value = "nicht berechnet"
    }

    var use_change_noise_outtown_yearly = props.activeProjectVariant.use_change_noise_outtown_yearly
    if (use_change_noise_outtown_yearly == null) {
        use_change_noise_outtown_yearly = "nicht berechnet"
    }

    var use_change_noise_outtown_present_value = props.activeProjectVariant.use_change_noise_outtown_present_value
    if (use_change_noise_outtown_present_value == null) {
        use_change_noise_outtown_present_value = "nicht berechnet"
    }

    return (
        <div>
            <div id='useSummary'>
                <Table bordered hover>
                    <tbody>
                    <tr>
                        <td>NKV</td>
                        <td>{props.activeProjectVariant.nkv.toLocaleString('de')}</td>
                    </tr>
                    <tr>
                        <td>Nutzen Personenverkehr (Barwert - Mio. €)</td>
                        <td>{use_sum_passenger_present_value.toLocaleString('de')}</td>
                    </tr>
                    <tr>
                        <td>Nutzen Güterverkehr (Barwert -  Mio. €)</td>
                        <td>{use_sum_cargo_present_value.toLocaleString('de')}</td>
                    </tr>
                    <tr>
                        <td>Summe Nutzen (Barwert  - Mio. €)</td>
                        <td>{sum_use_change_present_value.toLocaleString('de')}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>

            {props.activeProjectVariant.use_sum_passenger_present_value &&
                <div id='usePassenger'>
                    <details>
                        <summary> <h5>Nutzenfaktoren Personenverkehr</h5> </summary>
                        <Table bordered hover id='usePassengerTable'>
                            <tbody>
                            <tr>
                                <th></th>
                                <th>Faktor</th>
                                <th>Jährlich [T€/a]</th>
                                <th>Barwert [Mio. €]</th>
                            </tr>
                            <tr>
                                <td rowSpan={3}>Änderung Betriebskosten</td>
                                <td>Pkw</td>
                                <td>{props.activeProjectVariant.use_change_operation_cost_car_yearly.toLocaleString('de')} </td>
                                <td>{props.activeProjectVariant.use_change_operation_cost_car_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>SPV</td>
                                <td>{props.activeProjectVariant.use_change_operating_cost_rail_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_operating_cost_rail_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>Luftverkehr</td>
                                <td>{props.activeProjectVariant.use_change_operating_cost_air_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_operating_cost_air_present_value.toLocaleString('de')}</td>
                            </tr>

                            <tr>
                                <td rowSpan={3}>Änderung Abgasbelastung</td>
                                <td>Pkw</td>
                                <td>{props.activeProjectVariant.use_change_pollution_car_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_pollution_car_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>SPV</td>
                                <td>{props.activeProjectVariant.use_change_pollution_rail_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_pollution_rail_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>Luftverkehr</td>
                                <td>{props.activeProjectVariant.use_change_pollution_air_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_pollution_air_present_value.toLocaleString('de')}</td>
                            </tr>

                            <tr>
                                <td rowSpan={2}>Änderung Sicherheit</td>
                                <td>Pkw</td>
                                <td>{props.activeProjectVariant.use_change_safety_car_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_safety_car_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>SPV</td>
                                <td>{props.activeProjectVariant.use_change_safety_rail_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_safety_rail_present_value.toLocaleString('de')}</td>
                            </tr>

                            <tr>
                                <td rowSpan={5}>Reisezeit</td>
                                <td>verbleibende Verkehre</td>
                                <td>{props.activeProjectVariant.use_change_travel_time_rail_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_travel_time_rail_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>induziert</td>
                                <td>{props.activeProjectVariant.use_change_travel_time_induced_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_travel_time_induced_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>Pkw ⇄ SPV</td>
                                <td>{props.activeProjectVariant.use_change_travel_time_pkw_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_travel_time_pkw_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>Luft ⇄ SPV</td>
                                <td>{props.activeProjectVariant.use_change_travel_time_air_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_travel_time_air_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>Reisezeit &lt; 2 min </td>
                                <td>{props.activeProjectVariant.use_change_travel_time_less_2min_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_travel_time_less_2min_present_value.toLocaleString('de')}</td>
                            </tr>

                            <tr>
                                <td rowSpan={3}>Impliziter Nutzen</td>
                                <td>aus induziertem Verkehr</td>
                                <td>{props.activeProjectVariant.use_change_implicit_benefit_induced_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_implicit_benefit_induced_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>Pkw ⇄ SPV</td>
                                <td>{props.activeProjectVariant.use_change_implicit_benefit_pkw_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_implicit_benefit_pkw_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>Luft ⇄ SPV</td>
                                <td>{props.activeProjectVariant.use_change_implicit_benefit_air_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_implicit_benefit_air_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Gesamter Nutzen Personenverkehr</td>
                                <td>{props.activeProjectVariant.use_sum_passenger_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_sum_passenger_present_value.toLocaleString('de')}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </details>
                </div>
            }

            {props.activeProjectVariant.use_sum_cargo_present_value &&
                <div id='useCargo'>
                    <details>
                        <summary><h5>Nutzenfaktoren Güterverkehr</h5></summary>
                        <Table bordered hover id='useCargo'>
                            <tbody>
                            <tr>
                                <th></th>
                                <th>Faktor</th>
                                <th>Jährlich [T€/a]</th>
                                <th>Barwert [Mio. €]</th>
                            </tr>
                            <tr>
                                <td rowSpan={3}>Änderung Betriebskosten</td>
                                <td>Lkw</td>
                                <td>{props.activeProjectVariant.use_change_operating_cost_truck_yearly.toLocaleString('de')} </td>
                                <td>{props.activeProjectVariant.use_change_operating_cost_truck_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>SGV</td>
                                <td>{props.activeProjectVariant.use_change_operating_cost_rail_cargo_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_operating_cost_rail_cargo_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>Schiff</td>
                                <td>{props.activeProjectVariant.use_change_operating_cost_ship_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_operating_cost_ship_present_value.toLocaleString('de')}</td>
                            </tr>

                            <tr>
                                <td rowSpan={3}>Änderung Abgasbelastung</td>
                                <td>Lkw</td>
                                <td>{props.activeProjectVariant.use_change_pollution_truck_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_pollution_truck_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>SGV</td>
                                <td>{props.activeProjectVariant.use_change_pollution_rail_cargo_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_pollution_rail_cargo_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>Schiff</td>
                                <td>{props.activeProjectVariant.use_change_pollution_ship_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_pollution_ship_present_value.toLocaleString('de')}</td>
                            </tr>

                            <tr>
                                <td rowSpan={3}>Änderung Sicherheit</td>
                                <td>Lkw</td>
                                <td>{props.activeProjectVariant.use_change_safety_truck_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_safety_truck_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>SGV</td>
                                <td>{props.activeProjectVariant.use_change_safety_rail_cargo_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_safety_rail_cargo_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>Schiff</td>
                                <td>{props.activeProjectVariant.use_change_safety_ship_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_safety_ship_present_value.toLocaleString('de')}</td>
                            </tr>

                            <tr>
                                <td rowSpan={3}>Veränderung der Transportzeit der Ladung</td>
                                <td>aus verbleibendem Verkehr</td>
                                <td>{props.activeProjectVariant.use_change_running_time_rail_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_running_time_rail_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>Lkw ⇄ SGV</td>
                                <td>{props.activeProjectVariant.use_change_running_time_lkw_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_running_time_lkw_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>Schiff ⇄ SGV</td>
                                <td>{props.activeProjectVariant.use_change_running_time_ship_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_running_time_ship_present_value.toLocaleString('de')}</td>
                            </tr>

                            <tr>
                                <td rowSpan={2}>Implizite Nutzen</td>
                                <td>Lkw ⇄ SGV</td>
                                <td>{props.activeProjectVariant.use_change_implicit_benefit_truck_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_implicit_benefit_truck_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>Schiff ⇄ SGV</td>
                                <td>{props.activeProjectVariant.use_change_implicit_benefit_ship_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_implicit_benefit_ship_present_value.toLocaleString('de')}</td>
                            </tr>

                            <tr>
                                <td>Veränderung Zuverlässigkeit</td>
                                <td>aus verbleibendem Verkehr</td>
                                <td>{props.activeProjectVariant.use_change_reliability_yearly}</td>
                                <td>{props.activeProjectVariant.use_change_reliability_present_value}</td>
                            </tr>

                            <tr>
                                <td colSpan={2}>Gesamter Nutzen</td>
                                <td>{props.activeProjectVariant.use_sum_cargo_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_sum_cargo_present_value.toLocaleString('de')}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </details>
                </div>
            }


            <div id='useOther'>
                <details>
                    <summary><h5>Sonstige Nutzenfaktoren</h5></summary>
                    <Table bordered hover id='useOtherId'>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Faktor</th>
                                <th>Jährlich [T€/a]</th>
                                <th>Barwert [Mio. €]</th>
                            </tr>
                            <tr>
                                <td colSpan={2}>Veränderung der Instandhaltung- und Betriebskosten der Verkehrswege</td>
                                <td>{props.activeProjectVariant.use_change_maintenance_cost_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_maintenance_cost_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Veränderung der Lebenszyklusemissionen von Treibhausgasen der Infrastruktur</td>
                                <td>{props.activeProjectVariant.use_change_lcc_infrastructure_yearly.toLocaleString('de')}</td>
                                <td>{props.activeProjectVariant.use_change_lcc_infrastructure_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Geräuschbelastung</td>
                                <td>innerorts</td>
                                <td>{use_change_noise_intown_yearly.toLocaleString('de')}</td>
                                <td>{use_change_noise_intown_present_value.toLocaleString('de')}</td>
                            </tr>
                            <tr>
                                <td>außerorts</td>
                                <td>{use_change_noise_outtown_yearly.toLocaleString('de')}</td>
                                <td>{use_change_noise_outtown_present_value.toLocaleString('de')}</td>
                            </tr>
                        </tbody>
                    </Table>
                </details>
            </div>

            <p>SPV = Schienenpersonenverkehr</p>
        </div>
    )
}

export default ProjectDetailBewertung
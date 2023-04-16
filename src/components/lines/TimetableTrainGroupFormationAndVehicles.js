
function TimetableTrainGroupFormationAndVehicles(props) {

    return(
        <div>
            <h3>Zugkonfiguration</h3>
            <div>
                <h4>Formation</h4>
                <div>
                    <ul>
                        <li>Formation: {props.activeLine.trains[0].train_part.formation.id}</li>
                        <li>Geschwindigkeit: {props.activeLine.trains[0].train_part.formation.speed} km/h</li>
                        <li>Länge: {props.activeLine.trains[0].train_part.formation.length} m</li>
                    </ul>
                </div>
                <h5>Wagenmaterial</h5>
                <div>
                    {props.activeLine.trains[0].train_part.formation.vehicles.map(vehicle =>
                        <div key={vehicle.id}>

                            <h6>{props.activeLine.trains[0].train_part.formation.vehicles_ids_composition[vehicle.id]} x {vehicle.name} {vehicle.id}</h6>
                            <ul key={vehicle.id}>
                                <li>Gewicht: {vehicle.brutto_weight} t</li>
                                <li>Länge: {vehicle.length} m</li>
                                <li>Geschwindigkeit: {vehicle.speed} km/h</li>
                                <li>Antrieb: {vehicle.engine.toString()}</li>
                                <li>Waggon: {vehicle.wagon.toString()}</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TimetableTrainGroupFormationAndVehicles


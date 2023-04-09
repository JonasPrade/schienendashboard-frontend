import getColorMasterAreaTraction from "./master_area_color";

function getMasterAreaParameter(master_areas) {
    const tractions = [
        "electrification",
        "battery",
        "optimised_electrification",
        "efuel",
        "diesel",
        "h2",
        "no calculated cost"
    ]

    // prepare parameter
    var area_traction_count = {}
    var area_traction_km = {}
    var trains_traction_count = {}
    var trains_traction_km = {}
    var trains_traction_km_optimised = {}
    var optimised_electrification = {}
    var colors = {}
    var infrastructure_cost_sum = 0
    var operating_cost_sum = 0
    var infrastructure_cost_by_traction = {}
    var operating_cost_by_traction = {}

    for (const [key, value] of Object.entries(tractions)) {
        area_traction_count[value] = 0;
        area_traction_km[value] = 0;
        trains_traction_count[value] = 0;
        trains_traction_km[value] = 0;
        optimised_electrification[value] = 0;
        trains_traction_km_optimised[value] = 0;
        colors[value] = getColorMasterAreaTraction()[value]
    }

    if (master_areas !== null) {
        for (const [key, value] of Object.entries(master_areas)) {
            const preferred_traction = value.cost_overview.minimal_cost
            area_traction_count[preferred_traction] += 1;
            area_traction_km[preferred_traction] += value.length/1000;
            optimised_electrification.battery += value.proportion_traction_optimised_electrification.battery
            optimised_electrification.electrification += value.proportion_traction_optimised_electrification.electrification
            infrastructure_cost_sum += value.cost_overview.infrastructure_cost[preferred_traction]
            operating_cost_sum += value.cost_overview.operating_cost[preferred_traction]

            for (const [traingroup_id, traingroup_km] of Object.entries(value.running_km_traingroups_by_transport_mode)) {
                if (preferred_traction === 'optimised_electrification') {
                    trains_traction_km[value.traction_optimised_traingroups[traingroup_id]] += traingroup_km;
                    trains_traction_km_optimised[preferred_traction] += traingroup_km;
                    trains_traction_count[value.traction_optimised_traingroups[traingroup_id]] += 1;
                } else {
                    trains_traction_km[preferred_traction] += traingroup_km;
                    trains_traction_km_optimised[preferred_traction] += traingroup_km;
                    trains_traction_count[preferred_traction] += 1;
                }}
        }
    }

    const parameters = {tractions, colors, area_traction_count, area_traction_km, trains_traction_count, trains_traction_km, optimised_electrification, trains_traction_km_optimised, infrastructure_cost_sum, operating_cost_sum}
    return parameters
}

export default getMasterAreaParameter
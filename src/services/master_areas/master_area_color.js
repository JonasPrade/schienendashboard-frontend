import colors from '../../custom.scss';


function getColorMasterAreaTraction() {
    var color_by_traction = {
        "electrification": colors.info,
        "battery": colors.diagram_color_3,
        "optimised_electrification": colors.diagram_color_4,
        "efuel": colors.danger,
        "diesel": colors.diagram_color_2,
        "h2": colors.diagram_color,
        "no calculated cost": colors.primary
    }
    return color_by_traction
}

export default getColorMasterAreaTraction
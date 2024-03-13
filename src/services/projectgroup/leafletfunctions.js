import L from "leaflet";
import settings from "../../config/settings";

export function highlightAllRelatedFeatures(layer, geoJsonLayer) {
    const targetProjectContentId = layer.feature.properties.projectcontent_id;
    geoJsonLayer.current.eachLayer((l) => {
        if (l.feature.properties.projectcontent_id === targetProjectContentId) {
            if (l instanceof L.Polyline) {
                l.setStyle({
                    weight: settings.LineWeightHover // Set line thickness to 6 on hover
                });
            } else if (l instanceof L.CircleMarker) {
                l.setStyle({
                    radius: settings.CircleRadiusHover // Set circle radius to 10 on hover
                });
            }
        }
    });
}

export function resetAllRelatedFeatures(layer, geoJsonLayer, colorToProject) {
    const targetProjectContentId = layer.feature.properties.projectcontent_id;
    geoJsonLayer.current.eachLayer((l) => {
        if (l.feature.properties.projectcontent_id === targetProjectContentId) {
            if (l instanceof L.Polyline) {
                l.setStyle({
                    weight: settings.LineWeight // Set line thickness back to 2 on mouseout
                });
            } else if (l instanceof L.CircleMarker) {
                l.setStyle({
                    radius: settings.CircleRadius // Set circle radius back to 6.5 on mouseout
                });
            }
        }
    });
}

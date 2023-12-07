var size = 0;
var placement = 'point';
function categories_CoopUtilityTerritoriesTouchstoneEnergyCooperatives_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'CENTRAL ELECTRIC COOP, INC - (PA)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(179,18,24,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SULLIVAN COUNTY R E C, INC - (PA)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,87,62,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VALLEY RURAL ELECTRIC COOP INC':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,179,152,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ADAMS ELECTRIC COOPERATIVE INC':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(103,0,13,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CLAVERACK RURAL ELEC COOP INC':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(221,42,37,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'TRI-COUNTY RURAL ELEC COOP INC (PA)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,134,102,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_CoopUtilityTerritoriesTouchstoneEnergyCooperatives_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAME");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_CoopUtilityTerritoriesTouchstoneEnergyCooperatives_10(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};

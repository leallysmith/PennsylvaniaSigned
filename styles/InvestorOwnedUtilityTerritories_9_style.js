var size = 0;
var placement = 'point';
function categories_InvestorOwnedUtilityTerritories_9(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'WELLSBOROUGH ELECTRIC CO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(57,42,110,0.7843137254901961)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'WEST PENN POWER COMPANY':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(127,33,221,0.8274509803921568)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PPL ELECTRIC UTILITIES CORP':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,133,202,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PECO ENERGY CO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,206,154,0.796078431372549)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'METROPOLITAN EDISON CO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,71,159,0.7725490196078432)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PENNSYLVANIA ELECTRIC CO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(147,196,255,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_InvestorOwnedUtilityTerritories_9 = function(feature, resolution){
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
    
var style = categories_InvestorOwnedUtilityTerritories_9(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};

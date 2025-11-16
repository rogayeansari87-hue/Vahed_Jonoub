ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32639").setExtent([529481.934300, 3935975.038300, 539503.149700, 3950921.592500]);
var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'محدوده واحد جنوب',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> محدوده واحد جنوب'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'بیمارستان',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> بیمارستان'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'مرکز',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> مرکز'
            });

lyr_OSM_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OSM_0,lyr__1,lyr__2,lyr__3];
lyr__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr__2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NAME': 'NAME', });
lyr__3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'X': 'X', 'Y': 'Y', 'Full_Name': 'Full_Name', });
lyr__1.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr__2.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'NAME': 'TextEdit', });
lyr__3.set('fieldImages', {'OBJECTID': 'TextEdit', 'OID_': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'TextEdit', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'TextEdit', 'LabelID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Full_Name': 'TextEdit', });
lyr__1.set('fieldLabels', {'OBJECTID': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'header label - always visible', });
lyr__2.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'NAME': 'inline label - visible with data', });
lyr__3.set('fieldLabels', {'OBJECTID': 'no label', 'OID_': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', 'X': 'no label', 'Y': 'no label', 'Full_Name': 'inline label - visible with data', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
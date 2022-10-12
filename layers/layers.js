ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:9518").setExtent([31.392121, 29.141342, 38.699482, 33.557529]);
var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_egm2008_1 = new ol.format.GeoJSON();
var features_egm2008_1 = format_egm2008_1.readFeatures(json_egm2008_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_egm2008_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_egm2008_1.addFeatures(features_egm2008_1);cluster_egm2008_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_egm2008_1
});
var lyr_egm2008_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_egm2008_1, 
                style: style_egm2008_1,
                interactive: true,
                title: '<img src="styles/legend/egm2008_1.png" /> egm2008'
            });
var format_UPtsShp_2 = new ol.format.GeoJSON();
var features_UPtsShp_2 = format_UPtsShp_2.readFeatures(json_UPtsShp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_UPtsShp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPtsShp_2.addFeatures(features_UPtsShp_2);cluster_UPtsShp_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_UPtsShp_2
});
var lyr_UPtsShp_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_UPtsShp_2, 
                style: style_UPtsShp_2,
                interactive: true,
                title: '<img src="styles/legend/UPtsShp_2.png" /> UPtsShp'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_egm2008_1.setVisible(true);lyr_UPtsShp_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_egm2008_1,lyr_UPtsShp_2];
lyr_egm2008_1.set('fieldAliases', {'Lon': 'Lon', 'Lat': 'Lat', 'Undu': 'Undu', });
lyr_UPtsShp_2.set('fieldAliases', {'U_Nr': 'U_Nr', 'Lat': 'Lat', 'Lon': 'Lon', 'he': 'he', 'Ho': 'Ho', 'N': 'N', });
lyr_egm2008_1.set('fieldImages', {'Lon': '', 'Lat': '', 'Undu': '', });
lyr_UPtsShp_2.set('fieldImages', {'U_Nr': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'he': 'TextEdit', 'Ho': 'TextEdit', 'N': 'TextEdit', });
lyr_egm2008_1.set('fieldLabels', {'Lon': 'no label', 'Lat': 'no label', 'Undu': 'no label', });
lyr_UPtsShp_2.set('fieldLabels', {'U_Nr': 'no label', 'Lat': 'no label', 'Lon': 'no label', 'he': 'no label', 'Ho': 'no label', 'N': 'header label', });
lyr_UPtsShp_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
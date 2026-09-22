var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google (Satellite)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_kenyanewscores_1 = new ol.format.GeoJSON();
var features_kenyanewscores_1 = format_kenyanewscores_1.readFeatures(json_kenyanewscores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenyanewscores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenyanewscores_1.addFeatures(features_kenyanewscores_1);
var lyr_kenyanewscores_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kenyanewscores_1, 
                style: style_kenyanewscores_1,
                popuplayertitle: 'kenya-new-scores',
                interactive: true,
    title: 'kenya-new-scores<br />\
    <img src="styles/legend/kenyanewscores_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/kenyanewscores_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/kenyanewscores_1_2.png" /> 2 - 3<br />\
    <img src="styles/legend/kenyanewscores_1_3.png" /> 3 - 4<br />\
    <img src="styles/legend/kenyanewscores_1_4.png" /> 4 - 5<br />' });
var format_kenyaadmin_2 = new ol.format.GeoJSON();
var features_kenyaadmin_2 = format_kenyaadmin_2.readFeatures(json_kenyaadmin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenyaadmin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenyaadmin_2.addFeatures(features_kenyaadmin_2);
var lyr_kenyaadmin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kenyaadmin_2, 
                style: style_kenyaadmin_2,
                popuplayertitle: 'kenya - admin',
                interactive: true,
                title: '<img src="styles/legend/kenyaadmin_2.png" /> kenya - admin'
            });
var format_ActiveStations496_3 = new ol.format.GeoJSON();
var features_ActiveStations496_3 = format_ActiveStations496_3.readFeatures(json_ActiveStations496_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActiveStations496_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActiveStations496_3.addFeatures(features_ActiveStations496_3);
var lyr_ActiveStations496_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActiveStations496_3, 
                style: style_ActiveStations496_3,
                popuplayertitle: 'Active Stations (496)',
                interactive: true,
                title: '<img src="styles/legend/ActiveStations496_3.png" /> Active Stations (496)'
            });
var format_MegaStations179_4 = new ol.format.GeoJSON();
var features_MegaStations179_4 = format_MegaStations179_4.readFeatures(json_MegaStations179_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MegaStations179_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MegaStations179_4.addFeatures(features_MegaStations179_4);
var lyr_MegaStations179_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MegaStations179_4, 
                style: style_MegaStations179_4,
                popuplayertitle: 'Mega Stations(179)',
                interactive: true,
                title: '<img src="styles/legend/MegaStations179_4.png" /> Mega Stations(179)'
            });
var format_FastChargers92_5 = new ol.format.GeoJSON();
var features_FastChargers92_5 = format_FastChargers92_5.readFeatures(json_FastChargers92_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastChargers92_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastChargers92_5.addFeatures(features_FastChargers92_5);
var lyr_FastChargers92_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastChargers92_5, 
                style: style_FastChargers92_5,
                popuplayertitle: 'Fast Chargers(92)',
                interactive: true,
                title: '<img src="styles/legend/FastChargers92_5.png" /> Fast Chargers(92)'
            });
var format_PetrolStations158_6 = new ol.format.GeoJSON();
var features_PetrolStations158_6 = format_PetrolStations158_6.readFeatures(json_PetrolStations158_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetrolStations158_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetrolStations158_6.addFeatures(features_PetrolStations158_6);
var lyr_PetrolStations158_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetrolStations158_6, 
                style: style_PetrolStations158_6,
                popuplayertitle: 'Petrol Stations(158)',
                interactive: true,
                title: '<img src="styles/legend/PetrolStations158_6.png" /> Petrol Stations(158)'
            });
var format_Phase3InactvieSites_7 = new ol.format.GeoJSON();
var features_Phase3InactvieSites_7 = format_Phase3InactvieSites_7.readFeatures(json_Phase3InactvieSites_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Phase3InactvieSites_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Phase3InactvieSites_7.addFeatures(features_Phase3InactvieSites_7);
var lyr_Phase3InactvieSites_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Phase3InactvieSites_7, 
                style: style_Phase3InactvieSites_7,
                popuplayertitle: 'Phase 3 Inactvie Sites',
                interactive: true,
                title: '<img src="styles/legend/Phase3InactvieSites_7.png" /> Phase 3 Inactvie Sites'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_kenyanewscores_1.setVisible(true);lyr_kenyaadmin_2.setVisible(true);lyr_ActiveStations496_3.setVisible(true);lyr_MegaStations179_4.setVisible(true);lyr_FastChargers92_5.setVisible(true);lyr_PetrolStations158_6.setVisible(true);lyr_Phase3InactvieSites_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_kenyanewscores_1,lyr_kenyaadmin_2,lyr_ActiveStations496_3,lyr_MegaStations179_4,lyr_FastChargers92_5,lyr_PetrolStations158_6,lyr_Phase3InactvieSites_7];
lyr_kenyanewscores_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_kenyaadmin_2.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_pcode': 'adm1_pcode', 'area_sqkm': 'area_sqkm', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Hub_Count': 'Hub_Count', 'Swap Site_count': 'Swap Site_count', 'Active': 'Active', 'Active-Zero Swaps': 'Active-Zero Swaps', 'Not Started': 'Not Started', 'WIP ': 'WIP ', 'Drop_Count': 'Drop_Count', });
lyr_ActiveStations496_3.set('fieldAliases', {'Station ID': 'Station ID', 'Station Name': 'Station Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Planned Racks': 'Planned Racks', 'Plan': 'Plan', 'Status': 'Status', 'Business Model': 'Business Model', });
lyr_MegaStations179_4.set('fieldAliases', {'Name': 'Name', 'latitude': 'latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Province': 'Province', 'Station Config': 'Station Config', });
lyr_FastChargers92_5.set('fieldAliases', {'Name': 'Name', 'Region': 'Region', 'latitude': 'latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Province': 'Province', 'Station Config': 'Station Config', });
lyr_PetrolStations158_6.set('fieldAliases', {'Name': 'Name', 'latitude': 'latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Province': 'Province', 'Station Config': 'Station Config', });
lyr_Phase3InactvieSites_7.set('fieldAliases', {'STATION NAME': 'STATION NAME', 'Type': 'Type', 'County': 'County', 'Constituency': 'Constituency', 'Sub-County': 'Sub-County', 'Province': 'Province', 'REGIONAL ENERGY LEAD': 'REGIONAL ENERGY LEAD', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'STATUS': 'STATUS', 'Comment': 'Comment', });
lyr_kenyanewscores_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_kenyaadmin_2.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_pcode': 'TextEdit', 'area_sqkm': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Hub_Count': 'Range', 'Swap Site_count': 'Range', 'Active': 'Range', 'Active-Zero Swaps': 'Range', 'Not Started': 'Range', 'WIP ': 'Range', 'Drop_Count': 'Range', });
lyr_ActiveStations496_3.set('fieldImages', {'Station ID': 'TextEdit', 'Station Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Planned Racks': 'TextEdit', 'Plan': 'TextEdit', 'Status': 'TextEdit', 'Business Model': 'TextEdit', });
lyr_MegaStations179_4.set('fieldImages', {'Name': 'TextEdit', 'latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Province': 'TextEdit', 'Station Config': 'TextEdit', });
lyr_FastChargers92_5.set('fieldImages', {'Name': '', 'Region': '', 'latitude': '', 'Longitude': '', 'Type': '', 'Province': '', 'Station Config': '', });
lyr_PetrolStations158_6.set('fieldImages', {'Name': 'TextEdit', 'latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Province': 'TextEdit', 'Station Config': 'TextEdit', });
lyr_Phase3InactvieSites_7.set('fieldImages', {'STATION NAME': 'TextEdit', 'Type': 'TextEdit', 'County': 'TextEdit', 'Constituency': 'TextEdit', 'Sub-County': 'TextEdit', 'Province': 'TextEdit', 'REGIONAL ENERGY LEAD': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'STATUS': 'TextEdit', 'Comment': 'TextEdit', });
lyr_kenyanewscores_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'no label', });
lyr_kenyaadmin_2.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_pcode': 'no label', 'area_sqkm': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', 'Hub_Count': 'no label', 'Swap Site_count': 'no label', 'Active': 'no label', 'Active-Zero Swaps': 'no label', 'Not Started': 'no label', 'WIP ': 'no label', 'Drop_Count': 'no label', });
lyr_ActiveStations496_3.set('fieldLabels', {'Station ID': 'no label', 'Station Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Planned Racks': 'no label', 'Plan': 'no label', 'Status': 'no label', 'Business Model': 'no label', });
lyr_MegaStations179_4.set('fieldLabels', {'Name': 'no label', 'latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', 'Province': 'no label', 'Station Config': 'no label', });
lyr_FastChargers92_5.set('fieldLabels', {'Name': 'no label', 'Region': 'no label', 'latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', 'Province': 'no label', 'Station Config': 'no label', });
lyr_PetrolStations158_6.set('fieldLabels', {'Name': 'no label', 'latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', 'Province': 'no label', 'Station Config': 'no label', });
lyr_Phase3InactvieSites_7.set('fieldLabels', {'STATION NAME': 'no label', 'Type': 'no label', 'County': 'no label', 'Constituency': 'no label', 'Sub-County': 'no label', 'Province': 'no label', 'REGIONAL ENERGY LEAD': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'STATUS': 'no label', 'Comment': 'no label', });
lyr_Phase3InactvieSites_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
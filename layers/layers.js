var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Orthomosaic_processed_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Orthomosaic_processed",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Orthomosaic_processed_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [14740407.903310, -1616677.196761, 14741344.147027, -1615305.773043]
                            })
                        });
var format_benchmark_2 = new ol.format.GeoJSON();
var features_benchmark_2 = format_benchmark_2.readFeatures(json_benchmark_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_benchmark_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_benchmark_2.addFeatures(features_benchmark_2);
var lyr_benchmark_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_benchmark_2, 
                style: style_benchmark_2,
                popuplayertitle: "benchmark",
                interactive: true,
    title: 'benchmark<br />\
    <img src="styles/legend/benchmark_2_0.png" /> BM<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Orthomosaic_processed_1.setVisible(true);lyr_benchmark_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Orthomosaic_processed_1,lyr_benchmark_2];
lyr_benchmark_2.set('fieldAliases', {'eastings': 'eastings', 'northing': 'northing', 'title': 'title', });
lyr_benchmark_2.set('fieldImages', {'eastings': '', 'northing': '', 'title': '', });
lyr_benchmark_2.set('fieldLabels', {'eastings': 'inline label - always visible', 'northing': 'inline label - visible with data', 'title': 'no label', });
lyr_benchmark_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

//Server Request from API ArcGIS
require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
], (
    esriConfig,
    Map,
    MapView,
    FeatureLayer,
) => {

    esriConfig.apiKey = "AAPKe20f1ced218f4ac18f5a46c4a0018389eG8snuTWy2jko2JsGR8J_-2cQw45n5pxuChuqbhseTNn9CwxYkWMqzZ-vntg8F2y";

    let map = new Map({
        basemap: "dark-gray",
    });

    let view = new MapView({
        container: "map",
        map: map,
        center: [29.9317758, 31.2118386],
        zoom: 11.7,

    });


    var basemapSelector = document.getElementById("basemapSelector");
    basemapSelector.addEventListener("change", function () {
        var selectedBasemap = basemapSelector.value;
        map.basemap = selectedBasemap;
    });

    //Bus Line
    var featureLinebus = new FeatureLayer({
        url: "https://services8.arcgis.com/KoIzcsvMfmaIZSW9/ArcGIS/rest/services/Touristic_Map_WFL1/FeatureServer/10",

        visible: false,
    });
    var featurestopbus = new FeatureLayer({
        url: "https://services8.arcgis.com/KoIzcsvMfmaIZSW9/ArcGIS/rest/services/Touristic_Map_WFL1/FeatureServer/9",

        visible: false,
        popupTemplate: {

            title: `<h3 style="color: #5d86a2;">Bus Station Name </h3>`,
            content: `
  
  <img src='{Path}';></img>
  <br>
  <h5 style="color: #a35a42;">{Name}</h5>
  
  `,
            overwriteActions: true
        }

    });
    var featuresugbus = new FeatureLayer({
        url: "https://services8.arcgis.com/KoIzcsvMfmaIZSW9/ArcGIS/rest/services/Touristic_Map_WFL1/FeatureServer/8",

        visible: false,
    });
    var featurestopbus2 = new FeatureLayer({
        url: "https://services8.arcgis.com/KoIzcsvMfmaIZSW9/ArcGIS/rest/services/Touristic_Map_WFL1/FeatureServer/7",

        visible: false,

    });


    map.add(featureLinebus)
    map.add(featurestopbus)
    map.add(featuresugbus)
    map.add(featurestopbus2)

    var toggleButton = document.getElementById("rnd1");
    toggleButton.addEventListener("click", function () {
        featureLinebus.visible = !featureLinebus.visible;
        featurestopbus.visible = !featurestopbus.visible;
        featuresugbus.visible = !featuresugbus.visible;
        featurestopbus2.visible = !featurestopbus2.visible;
    });


    //Pedestrian
    var featureLineMN = new FeatureLayer({
        url: "https://services8.arcgis.com/KoIzcsvMfmaIZSW9/ArcGIS/rest/services/Touristic_Map_WFL1/FeatureServer/16",

        visible: false,
    });
    map.add(featureLineMN)
    var toggleButton1 = document.getElementById("rnd0");
    toggleButton1.addEventListener("click", function () {
        featureLineMN.visible = !featureLineMN.visible;
    });


    //TramLine

    var featureLinetram = new FeatureLayer({
        url: "https://services8.arcgis.com/KoIzcsvMfmaIZSW9/ArcGIS/rest/services/Touristic_Map_WFL1/FeatureServer/5",

        visible: false,
    });
    var featurestoptram = new FeatureLayer({
        url: "https://services8.arcgis.com/KoIzcsvMfmaIZSW9/ArcGIS/rest/services/Touristic_Map_WFL1/FeatureServer/4",

        visible: false,
        popupTemplate: {

            title: `<h3 style="color: #5d86a2;">Tram Station Name </h3>`,
            content: `
  
  <img src='{Path}';></img>
  <br>
  <h5 style="color: #a35a42;">{Name}</h5>
  
  `,
            overwriteActions: true
        }
    });

    map.add(featureLinetram)
    map.add(featurestoptram)

    var toggleButton1 = document.getElementById("rnd2");
    toggleButton1.addEventListener("click", function () {
        featureLinetram.visible = !featureLinetram.visible;
        featurestoptram.visible = !featurestoptram.visible;
    });


    //CyclingPaths
    var featureLinecycling = new FeatureLayer({
        url: "https://services8.arcgis.com/KoIzcsvMfmaIZSW9/ArcGIS/rest/services/Touristic_Map_WFL1/FeatureServer/14",

        visible: false,
    });
    var featurestopcyc = new FeatureLayer({
        url: "https://services8.arcgis.com/KoIzcsvMfmaIZSW9/ArcGIS/rest/services/Touristic_Map_WFL1/FeatureServer/17",

        visible: false,

        popupTemplate: {

            title: `<h3 style="color: #5d86a2;">Cycling Station Name </h3>`,
            content: `
  
  <img src='{Path}';></img>
  <br>
  <h5 style="color: #a35a42;">{Name}</h5>
  
  `,
            overwriteActions: true
        }

    });

    var featuresugcyc = new FeatureLayer({
        url: "https://services8.arcgis.com/KoIzcsvMfmaIZSW9/ArcGIS/rest/services/Touristic_Map_WFL1/FeatureServer/12",

        visible: false,
        popupTemplate: {

            title: `<h3 style="color: #5d86a2;">Maintainance Shop Name </h3>`,
            content: `
  
  <img src='{Path}';></img>
  <br>
  <h5 style="color: #a35a42;">{Name}</h5>
  
  `,
            overwriteActions: true
        }

    });

    map.add(featureLinecycling)
    map.add(featurestopcyc)
    map.add(featuresugcyc)

    var toggleButton3 = document.getElementById("rnd3");
    toggleButton3.addEventListener("click", function () {
        featureLinecycling.visible = !featureLinecycling.visible;
        featurestopcyc.visible = !featurestopcyc.visible;
        featuresugcyc.visible = !featuresugcyc.visible;
    });


    //Attractions
    var featureattrac = new FeatureLayer({
        url: "https://services8.arcgis.com/KoIzcsvMfmaIZSW9/ArcGIS/rest/services/Touristic_Map_WFL1/FeatureServer/18",

        visible: false,
        popupTemplate: {

            title: "{Name}",
            content: `
  
  <img src='{Path}';></img>
  <br>
  <h3 style="color: #5d86a2;">Description :</h3>
  <h5 style="color: #a35a42;">{Description}</h5>

  `,
            overwriteActions: true
        }
    });

    map.add(featureattrac)
    var toggleButton4 = document.getElementById("rnd4");
    toggleButton4.addEventListener("click", function () {
        featureattrac.visible = !featureattrac.visible;

    });
});
// export default {
//   id: 'charterSchools',
//   type: 'esri',
//   dependent: 'none',
//   resettable: false,
//   url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/CharterSchools_AN/FeatureServer/1',
//   options: {
//     relationship: 'where',
//     // geometryServerUrl: '//gis-utils.databridge.phila.gov/arcgis/rest/services/Utilities/Geometry/GeometryServer/',
//     // calculateDistance: true,
//     // distances: 500,
//   },
//   // success: function(data) {
//   //   return data;
//   // }
// };

export default {
  id: 'ost',
  type: 'http-get',
  appType: 'ost',
  dependent: 'none',
  endpoint: 'arcgis',
  resettable: false,
  url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/OST_Points_pub/FeatureServer/0/query',
  options: {
    params: {
      f: 'pjson',
      where: '1=1',
      returnGeometry: 'true',
      outFields: '*',
    },
  },
};

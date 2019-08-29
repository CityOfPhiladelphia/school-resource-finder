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

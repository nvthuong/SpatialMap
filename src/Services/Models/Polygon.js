import Realm from 'realm';

class Polygon extends Realm.Object { }

Polygon.schema = {
    name: 'Polygon',
    primaryKey: 'PolygonNumber',
    properties: {
        PolygonNumber: { type: 'int', indexed: true },
        CentroidLatitude: 'string',
        CentroidLongitude: 'string',
        CentroidCoordinateMethod: 'string',
        Erea: 'string',
        DateTimeCreated: 'date',
        DateTimeModified: 'date',
        DateTimeRetired: 'date'
    }
}

export default new Realm({ schema: [Polygon] });
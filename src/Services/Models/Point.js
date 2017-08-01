import Realm from 'realm';

class Point extends Realm.Object { }

Point.schema = {
    name: 'Point',
    primaryKey: 'PointNumber',
    properties: {
        PointNumber: { type: 'int' },
        Latitude: { type: 'string', indexed: true },
        Longitude: { type: 'string', indexed: true },
        Zoom: 'int',
        Name: 'string',
        DateTimeCreated: 'date',
        DateTimeModified: 'date',
        DateTimeRetired: 'date'
    }
}

export default new Realm({ schema: [Point] });
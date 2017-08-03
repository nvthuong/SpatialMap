import Realm from 'realm';

class SpatialLocation extends Realm.Object { }

SpatialLocation.schema = {
    name: 'SpatialLocation',
    primaryKey: 'Id',
    properties: {
        Id: { type: 'int' },
        Name: { type: 'string', endexed: true},
        TypeName: { type: 'string'},
        TypeId: { type: 'int'},
    }
}

export default new Realm({ schema: [SpatialLocation] });
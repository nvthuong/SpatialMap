import Realm from 'realm';

class History extends Realm.Object { }

History.schema = {
    name: 'History',
    properties: {
        Name: 'string'
    }
}

export default new Realm({ schema: [History] });
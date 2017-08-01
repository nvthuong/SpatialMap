import Realm from 'realm';

class Line extends Realm.Object { }

Line.schema = {
    name: 'Line',
    primaryKey: 'LineNumber',
    properties: {
        LineNumber: { type: 'int' },
        StartPointNumber: { type: 'int', indexed: true },
        EndPointNumber: { type: 'int', indexed: true },
        DateTimeCreated: 'date',
        DateTimeModified: 'date',
        DateTimeRetired: 'date'
    }
}

export default new Realm({ schema: [Line] });
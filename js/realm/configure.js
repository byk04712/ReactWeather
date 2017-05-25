/**
 * @flow
 */

'use strict';

import Realm from 'realm';
import Schema from './schema';

function configureRealm() {
    var schema = new Schema();
    var currentVersion = Realm.schemaVersion(Realm.defaultPath);

    if (currentVersion > 0) {
        while (currentVersion < schema.schemas.length) {
            var migratedSchema = schema.schemas[currentVersion++];
            var migratedRealm = new Realm(migratedSchema);
            migratedRealm.close();
        }
    }

    var current = schema.current();
    var realm = new Realm(current);
    realm.close();
}

module.exports = configureRealm;

/**
 * flow
 */

'use strict';

import realm from '../realm';
import { weatherApiKey, weatherApiUrl } from '../config';

const defaultLocations = [
    {name: 'Canberra', postcode: '2600', state: 'ACT'},
    {name: 'Sydney', postcode: '2000', state: 'NSW'},
    {name: 'Melbourne', postcode: '3000', state: 'VIC'},
    {name: 'Brisbane', postcode: '4000', state: 'QLD'},
    {name: 'Perth', postcode: '6000', state: 'WA'},
    {name: 'Adelaide', postcode: '5000', state: 'SA'},
    {name: 'Hobart', postcode: '7000', state: 'TAS'},
    {name: 'Darwin', postcode: '0800', state: 'NT'},
];

class LocationService {
    async initialise() {
        const context = realm.current();
        try {
            const locations = context.objects('Location');

            if (locations.length > 0) {
                return;
            }

            for (var i = 0; i < defaultLocations.length; i++) {
                const location = defaultLocations[i];
                const openWeatherId = await this.getLocationIdFromApi(location.name);
                context.write(() => {
                    context.create('Location', {
                        name: location.name,
                        postcode: location.postcode,
                        state: location.state,
                        openWeatherId: openWeatherId.toString()
                    });
                });
            }
        } finally {
            context.close();
        }
    }

    getAllLocations() {
        const context = realm.current();

        const data = [];
        try {
            const locations = context.objects('Location');

            for (var i = 0; i < locations.length; i++) {
                const location = locations[i];
                const item = {
                    name: location.name,
                    postcode: location.postcode,
                    state: location.state,
                    openWeatherId: location.openWeatherId
                };

                if (location.weather) {
                    item.observation = {
                        current: location.weather.observation.current,
                        low: location.weather.observation.low,
                        high: location.weather.observation.high,
                        icon: location.weather.observation.icon
                    }
                }
                data.push(item);
            }
        } finally {
            context.close();
        }
        return data;
    }

    deleteLocation(openWeatherId:string) {
        const context = realm.current();
        try {
            const location = context
                .objects('Location')
                .filtered(`openWeatherId = "${openWeatherId}"`);

            context.write(() => {
                context.delete(location);
            });
        } finally {
            context.close();
        }
    }

    async addLocation(name:string, postcode:string, state:string) {
        const context = realm.current();
        try {
            const openWeatherId = await this.getLocationIdFromApi(name);
            const location = context
                .objects('Location')
                .filtered(`openWeatherId = "${openWeatherId}"`);

            if (location.length > 0) {
                return;
            }

            context.write(() => {
                context.create('Location', {
                    name: name,
                    postcode: postcode,
                    state: state,
                    openWeatherId: openWeatherId.toString()
                });
            });
        } finally {
            context.close();
        }
    }

    clearAllData() {
        const context = realm.current();
        try {
            const locations = context.objects('Location');
            context.write(() => {
                context.delete(locations);
            });
        } finally {
            context.close();
        }
    }

    async getLocationIdFromApi(location:string) {
        const url = `${weatherApiUrl}/find?q=${location},AU&type=accurate&units=metric&appid=${weatherApiKey}`;
        try {
            const response = await fetch(url);
            const result = await response.json();
            return result.list[0].id;
        } catch (error) {
            global.log(error);
        }
    }
}

module.exports = LocationService;

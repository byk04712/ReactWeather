/**
 * flow
 */

'use strict';

import realm from '../realm';
import { weatherApiKey, weatherApiUrl } from '../config';

const defaultLocations = [
    { id: 1, province: '北京', city: '北京', district: '北京' },
    { id: 16, province: '上海', city: '上海', district: '上海' },
    { id: 2202, province: '广东', city: '广州', district: '广州' },
    { id: 2235, province: '广东', city: '深圳', district: '深圳' }
];


export function initialise() {
    return new Promise(resolve => {
        const context = realm.current();
        try {
            const locations = context.objects('Location');
            if (locations.length > 0) {
                return;
            }
            for (var i = 0; i < defaultLocations.length; i++) {
                const location = defaultLocations[i];
                context.write(() => {
                    context.create('Location', {
                        id: location.id,
                        province: location.province,
                        city: location.city,
                        district: location.district
                    });
                });
            }
        } finally {
            context.close();
            resolve();
        }
    });
}

export function getAllLocations() {
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

export function deleteLocation(openWeatherId:string) {
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

export async function addLocation(name:string, postcode:string, state:string) {
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

export function clearAllData() {
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

export async function getLocationIdFromApi(location:string) {
    const url = `${weatherApiUrl}/find?q=${location},AU&type=accurate&units=metric&appid=${weatherApiKey}`;
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result.list[0].id;
    } catch (error) {
        global.log(error);
    }
}

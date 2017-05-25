'use strict';

import { Action, ActionTypes } from '../actions/types';
import { WeatherModel } from '../models/view';

type State = {
    isLoading: bool,
    isRefreshing: bool,
    data: Array <WeatherModel>,
    current: number
};

const initial:State = {
    isLoading: false,
    isRefreshing: false,
    data: [],
    current: 0
};

function weather(state:State = initial, action:Action):State {
    switch (action.type) {
        case ActionTypes.WEATHER_SET_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.WEATHER_SET_REFRESHING:
            return {
                ...state,
                isRefreshing: true
            };
        case ActionTypes.WEATHER_GET_ALL:
            return {
                ...state,
                isLoading: false,
                isRefreshing: false,
                data: action.data
            };
        default:
            return state;
    }
}

module.exports = weather;

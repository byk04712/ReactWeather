/**
 * 天气详情
 */
const Forecast = {
    name: 'Forecast',
    properties: {
        temperature: 'string',
        weather: 'string',
        wind: 'string',
        week: 'string',
        date: 'string'
    }
};


/**
 * 当前实况天气
 */
const Latest = {
    name: 'Latest',
    properties: {
        temp:  'int',               // 当前温度
        wind_direction: 'string',   // 当前风向
        wind_strength: 'string',    // 当前风力
        humidity: 'string',         // 当前湿度
        time: 'string'              // 更新时间
    }
};


/**
 * 今天天气
 */
const Today = {
    name: 'Today',
    properties: {
        temperature: 'string',
        weather: 'string',
        wind: 'string',
        week: 'string',
        city: 'string',
        date_y: 'string',
        dressing_index: 'string',
        dressing_advice: 'string',
        uv_index: 'string',
        wash_index: 'string',
        travel_index: 'string',
        exercise_index: 'string'
    }
};


/**
 * 位置
 */
const Location = {
    name: 'Location',
    properties: {
        id: 'int',
        province: 'string',
        city: 'string',
        district: 'string',
        today: 'Today',
        latest: 'Latest',
        future: {
            type: 'list',
            objectType: 'Forecast'
        }
    }
};

module.exports = {
    schema: [ Forecast, Latest, Today, Location ],
    schemaVersion: 1,
    migration: () => {
    }
};

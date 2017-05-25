# React Weather
ReactNative写的一个简单的天气预报app

# 涉及技术栈
+ [Flow](http://flowtype.org/) 捕获 React Native 代码错误信息。
+ 使用 [Realm](https://realm.io/) 作持久化数据存储。
+ 使用 [WebStorm](https://www.jetbrains.com/webstorm/) 开发工具开发，WebStorm 对 ReactNative 语法有良好的支持。
+ 使用 redux 来管理数据流。

# APIs
+ Weather data is retrieved from http://openweathermap.org/
+ Australia postcode and suburb data is retrieved from http://postcodeapi.com.au/
+ You can see examples of API data in [react-weather/api](https://github.com/stage88/react-weather/tree/master/api)

# Note about API data
The weather data retrived from Open Weather is not very accurate. Most of the time, the weather forecast is not correct.
The most reliable Australian weather data is hosted by Australian Bureau of Meteorology, however it is not very API friendly.  

# External packages
+ [react-native-parallax-scroll-view](https://github.com/jaysoo/react-native-parallax-scroll-view): A ScrollView-like component with parallax and sticky header support. I use a customised version of the component to modify behaviour of animations.
+ [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views): A React component for swipeable views

# Weather images
Images are used _without permission_ from Google Weather, for example: [Canberra Weather](https://www.google.com.au/?gws_rd=ssl#safe=active&q=Canberra+weather).

# Current progress
- [x] App skeleton
- [x] Basic UI prototype
- [x] Call weather APIs for data
- [x] Add React Redux, implement store
- [x] Create first actions, reducers
- [x] Implement weather service
- [x] Add scroll view animations
- [x] Add pull to refresh
- [x] Implement basic settings UI prototype with navigation
- [x] Create location and weather repositories backed by Realm
- [x] Add support for Android devices
- [ ] Create settings repositories backed by Realm
- [ ] Call Australian postcode APIs when adding locations

Pocket Weather | React Weather
-------------- | --------------
<img src="https://github.com/byk04712/ReactWeather/blob/master/screenshots/pw-1.PNG" width="300"> | <img src="https://github.com/byk04712/ReactWeather/blob/master/screenshots/rw-1.PNG" width="300">
<img src="https://github.com/byk04712/ReactWeather/blob/master/screenshots/pw-2.PNG" width="300"> | <img src="https://github.com/byk04712/ReactWeather/blob/master/screenshots/rw-2.PNG" width="300">
<img src="https://github.com/byk04712/ReactWeather/blob/master/screenshots/pw-3.PNG" width="300"> | <img src="https://github.com/byk04712/ReactWeather/blob/master/screenshots/rw-3.PNG" width="300">
<img src="https://github.com/byk04712/ReactWeather/blob/master/screenshots/pw-4.PNG" width="300"> | <img src="https://github.com/byk04712/ReactWeather/blob/master/screenshots/rw-4.PNG" width="300">

# Running

## Clone & install

+ Clone this repo `git clone https://github.com/byk04712/ReactWeather.git`
+ `cd ReactWeather`
+ run `npm install && react-native run-ios`

## API keys
+ Get your API key from http://openweathermap.org/
+ No key is required to use http://postcodeapi.com.au/
+ Modify file `config.js`:
```jsx
module.exports = {
    weatherApiKey: 'Your key here'
};
```


## License

Released under the [MIT License](http://opensource.org/licenses/MIT).
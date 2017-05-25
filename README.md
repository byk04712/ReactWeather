# React Weather
ReactNative写的一个简单的天气预报app

# 涉及技术栈
+ [Flow](http://flowtype.org/) 捕获 React Native 代码错误信息。
+ 使用 [Realm](https://realm.io/) 作持久化数据存储。
+ 使用 [WebStorm](https://www.jetbrains.com/webstorm/) 开发工具开发，WebStorm 对 ReactNative 语法有良好的支持。
+ 使用 redux 来管理数据流。

# APIs
+ 天气数据来自于 http://openweathermap.org/
+ 澳大利亚的 postcode 和 周边数据来自于 http://postcodeapi.com.au/
+ 你也可以看本案例中的测试数据 [ReactWeather/api](https://github.com/byk04712/ReactWeather/tree/master/api)

# Preview

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
+ 注册账号获取 API key http://openweathermap.org/
+ 无需使用可以，可以前往 http://postcodeapi.com.au/
+ 修改文件 `config.js` 替换成你自己的key
```jsx
module.exports = {
    weatherApiKey: 'Your key here'
};
```


## License

Released power by [MIT License](https://github.com/stage88/react-weather).
import { StackNavigator } from 'react-navigation';
import Weather from '../components/weather';
import Settings from '../components/settings/settings';
import Locations from '../components/settings/locations';


const ApplicationNavigator = new StackNavigator({
    Weather: {
        screen: Weather
    },
    SettingsNavigator:{
        screen: Settings
    },
    Locations: {
        screen: Locations
    }
});

export default ApplicationNavigator;

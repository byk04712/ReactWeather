import { StackNavigator } from 'react-navigation';
import Weather from '../components/weather';
import Settings from '../components/settings/settings';
import Locations from '../components/settings/locations';
import AddLocation from '../components/settings/addlocation';
import AboutSettings from '../components/settings/about';
import UserGuide from '../components/settings/userguide';


const ApplicationNavigator = new StackNavigator({
    Weather: {
        screen: Weather,
        navigationOptions: {
            header: null
        }
    },
    Settings:{
        screen: Settings
    },
    Locations: {
        screen: Locations
    },
    AddLocation: {
        screen: AddLocation
    },
    AboutSettings: {
        screen: AboutSettings
    },
    UserGuide: {
        screen: UserGuide
    }
});

export default ApplicationNavigator;

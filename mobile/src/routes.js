import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Pages
import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'DevRadar',
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil no Github',
      }
    }
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#7d40e7'
      },
      headerTitleAlign: 'center'
    }
  })
);

export default Routes;
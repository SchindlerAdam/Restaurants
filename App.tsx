import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import SearchScreen from "./src/screens/SearchScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantDetailsScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantDetails: RestaurantDetailsScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title : "Business Search"
    }
  }
);

export default createAppContainer(navigator);
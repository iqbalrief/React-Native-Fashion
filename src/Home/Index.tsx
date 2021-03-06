import * as React from "react"
import { createDrawerNavigator, } from "@react-navigation/drawer";
// import DrawerContent from "./Drawer/Drawer"
// import OutfitIdeas from './OutfitIdeas'
import { HomeRoutes } from "../components/Navigation";
import OutfitIdeas from "./OutfitIdeas";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer";



const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator 
    drawerContent={DrawerContent}
    screenOptions={{ drawerStyle: { width: DRAWER_WIDTH } }} >
  
    <Drawer.Screen options={{ headerShown: false }}
      name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
);
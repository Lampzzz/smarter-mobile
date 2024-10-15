import clsx from "clsx";
import { Text, View } from "react-native";
import { Tabs } from "expo-router";

import { icons } from "@/constant";
import { TabIconProps } from "@/types/type";

const TabIcon = ({ Icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="justify-center items-center gap-2 relative">
      <Icon width={24} height={24} className="text-gray" />
      <Text
        className={clsx("text-xs", focused ? "font-bold" : "font-regular")}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#F58509",
        tabBarInactiveTintColor: "#696969",
        tabBarStyle: {
          borderTopWidth: 1,
          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              Icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="emergency"
        options={{
          title: "Emergency",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              Icon={icons.emergency}
              color={color}
              name="Emergency"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              Icon={icons.map}
              color={color}
              name="Map"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              Icon={icons.user}
              color={color}
              name="Account"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

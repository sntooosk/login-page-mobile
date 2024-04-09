import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  Home: undefined | any;
  Log: undefined | any;
  Cad: undefined | any;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;

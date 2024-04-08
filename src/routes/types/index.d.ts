import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  Home: undefined | any;
  Login: undefined | any;
  Cadastrar: undefined | any;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;

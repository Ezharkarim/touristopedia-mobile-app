import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import {ModalPortal} from "react-native-modals";
import { Provider } from 'react-redux';
import { TailwindProvider } from "tailwindcss-react-native";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";

import store from "./store"
export default function App() {
  return (
    <>
      <AuthContextProvider value={AuthContext}>
        <SearchContextProvider>
          <TailwindProvider>
            <Provider store={store}>
              <StackNavigator />
              <ModalPortal />
            </Provider>
          </TailwindProvider>
        </SearchContextProvider>
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

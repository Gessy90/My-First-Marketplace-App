import React , {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from "./app/components/AppText";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from './app/components/AppButton';
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import colors from './app/config/colors';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';


export default function App() {
  const categories = [
    { label: "Jumper", value: 1 },
    { label: "Trousers", value: 2 },
    { label: "Trainers", value: 3 },
  ];
  const [category, setCategory] = useState(categories[0]);
return (
  <Screen>
   <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
    <AppTextInput icon="email" placeholder="Email"/>
  </Screen>
)
}



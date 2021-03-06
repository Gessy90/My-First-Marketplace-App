import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";


import{AppForm,AppFormField,AppFormPicker,SubmitButton} from '../components/forms';

import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Jumper", value: 1, backgroundColor:"#dca49c", icon:"account-outline"},
  { label: "Trousers", value: 2, backgroundColor:"#f4d4d4", icon:"alpha-j-circle"},
  { label: "Trainers", value: 3, backgroundColor: "#f4dcd4", icon:"shoe-print"},
];

function ListingEditScreen() {

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          //even if price it's a number inside a form it's represented as a string otherwise we should've put it to 0 and we would see it displayed in the input field
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;

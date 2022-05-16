import React from 'react';
import Icons from "react-native-vector-icons/Feather";

import * as Styles from "./styles"

export function InputTextSearch({
  onChangeText = () => {},
  onSubmitEditing = () => {},
  placeholder = '',
}) {
  return (
    <Styles.ContainerTextInput>
      <Styles.InputSearch
        onChangeText={text => onChangeText(text)}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
      />
      <Icons name="search" size={24} color="white" />
    </Styles.ContainerTextInput>
  );
}

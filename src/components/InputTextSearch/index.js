import React from 'react';
import Icons from 'react-native-vector-icons/Feather';

import * as Styles from './styles';

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
      <Styles.ButtonSearch onPress={() => onSubmitEditing()}>
        <Icons name="search" size={24} color="white" />
      </Styles.ButtonSearch>
    </Styles.ContainerTextInput>
  );
}

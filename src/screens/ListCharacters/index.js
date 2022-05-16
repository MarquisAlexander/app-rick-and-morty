import React, {useEffect, useState, useContext} from 'react';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import Icons from 'react-native-vector-icons/Feather';

import Context from '../../Context';

import * as Styles from './styles';
import {GET_CHARACTERS} from '../../utils/querys';
import {InputTextSearch} from '../../components/InputTextSearch';

export function ListCharacters({navigation}) {
  const [total, setTotal] = useContext(Context);
  const [listCharacter, setListCharacter] = useState([]);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState('');
  const [oldName, setOldName] = useState('');
  const [name, setName] = useState('');
  const {loading, error, data} = useQuery(GET_CHARACTERS, {
    variables: {page, name},
  });

  useEffect(() => {
    getListCharacter({});
  }, [data]);

  function updatePage({reset = false}) {
    if (reset) setPage(1);
    else setPage(page + 1);
  }

  function getListCharacter({filter = false}) {
    if (oldName !== name) {
      setListCharacter(data?.characters?.results);
      setOldName(name);
    } else if (data && listCharacter) {
      let array = [];
      array = listCharacter;
      array = array.concat(data?.characters?.results);
      setListCharacter(array);
    } else {
      setListCharacter(data?.characters?.results);
    }
  }

  function handleProfile({id = 0}) {
    setTotal(id);
    navigation.navigate('Perfil');
  }

  function updateTextInput({text = ''}) {
    setInput(text);
  }

  function sendSearch() {
    updatePage({reset: true});
    setName(input);
  }

  return (
    <Styles.Container>
      {loading && listCharacter?.length === 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <ActivityIndicator size={24} color={'red'} />
        </View>
      ) : (
        <>
          <InputTextSearch
            onChangeText={text => updateTextInput({text})}
            onSubmitEditing={sendSearch}
            placeholder="Buscar por nome"
          />
          <FlatList
            data={listCharacter}
            keyExtractor={item => item?.id}
            onEndReached={() => updatePage({})}
            onEndReachedThreshold={0.1}
            numColumns={3}
            renderItem={({item}) => (
              <Styles.ContainerCharacter
                onPress={() => handleProfile({id: item.id})}>
                <Image
                  source={{uri: item?.image}}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                  }}
                />
                <Styles.Name>{item?.name}</Styles.Name>
              </Styles.ContainerCharacter>
            )}
          />
        </>
      )}
    </Styles.Container>
  );
}

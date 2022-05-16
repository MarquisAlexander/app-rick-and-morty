import React, {useEffect, useState, useContext} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {useQuery} from '@apollo/react-hooks';

import Context from '../../Context';

import * as Styles from './styles';
import {GET_EPISODES} from '../../utils/querys';
import {InputTextSearch} from '../../components/InputTextSearch';

export function Episodes({navigation}) {
  const [listCharacter, setListCharacter] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useContext(Context);
  const [input, setInput] = useState('');
  const [oldName, setOldName] = useState('');
  const [name, setName] = useState('');
  const {loading, error, data} = useQuery(GET_EPISODES, {
    variables: {page, name},
  });

  useEffect(() => {
    getListCharacter({});
  }, [data]);

  async function getListCharacter({page = 1}) {
    if (oldName !== name) {
      setListCharacter(data?.episodes?.results);
      setOldName(name);
    } else if (data && listCharacter) {
      let array = [];
      array = listCharacter;
      array = array.concat(data?.episodes?.results);
      setListCharacter(array);
    } else {
      setListCharacter(data?.episodes?.results);
    }
  }

  function updateTextInput({text = ''}) {
    setInput(text);
  }

  function handleProfile({id = 0}) {
    console.log(id)
    // setTotal(id);
    navigation.navigate('Detalhes', {id});
  }

  function updatePage({reset = false}) {
    if (reset) setPage(1);
    else setPage(page + 1);
  }

  function sendSearch() {
    updatePage({reset: true});
    setName(input);
  }

  return (
    <Styles.Container>
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
        numColumns={2}
        renderItem={({item}) => (
          <Styles.ContainerCharacter
            onPress={() => handleProfile({id: item.id})}>
            <Styles.Name>Episodio: {item?.id}</Styles.Name>
            <Styles.Name>{item?.name}</Styles.Name>
            <Styles.Name>Exibido: {item?.air_date}</Styles.Name>
          </Styles.ContainerCharacter>
        )}
      />
    </Styles.Container>
  );
}

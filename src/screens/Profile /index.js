import React, {useContext, useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

import {api} from '../../services/api';

import Context from '../../Context';

import * as Styles from './styles';

export function Profile() {
  const [total, setTotal] = useContext(Context);
  const [dataProfile, setDataProfile] = useState({});

  useEffect(() => {
    getDataCharacter();
  }, [total]);

  async function getDataCharacter() {
    try {
      let url = `/character/${total}`;
      const response = await api.get(url);
      setDataProfile(response.data);
    } catch (error) {}
  }

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.ImageProfile source={{uri: dataProfile?.image}} />
          <Styles.Name>{dataProfile?.name}</Styles.Name>
        <View style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            backgroundColor: "#2D2F53",
            borderRadius: 24
        }}>
          <Styles.defaultText>
            Origem: {dataProfile?.origin?.name}
          </Styles.defaultText>
          <Styles.defaultText>-></Styles.defaultText>
        </View>
      </Styles.Header>
      <Styles.defaultText>Episódios nos quais participou</Styles.defaultText>
      <FlatList 
        data={dataProfile?.episode}
        keyExtractor={item => item}
        numColumns={3}
        renderItem={({item, index}) => (
            <Styles.EpisodeContainer>
                <Styles.defaultText>{index + 1}</Styles.defaultText>
            </Styles.EpisodeContainer>
        )}
      />
    </Styles.Container>
  );
}

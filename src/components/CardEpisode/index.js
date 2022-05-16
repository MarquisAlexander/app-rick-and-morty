import React from 'react';

import * as Styles from './styles';

export function CardEpisode({episode = '', title = '', air_date = '', onPress= () => {}}) {
  return (
    <Styles.EpisodeContainer onPress={onPress}>
      <Styles.defaultText>Episodio: {episode}</Styles.defaultText>
      <Styles.defaultText>{title}</Styles.defaultText>
      {air_date ? (
        <Styles.defaultText>Exibido: {air_date}</Styles.defaultText>
      ) : null}
    </Styles.EpisodeContainer>
  );
}

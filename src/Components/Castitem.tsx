import React, {FunctionComponent} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/movieDb';

interface CastItemProps {
  actor: Cast;
}

const CastItem: FunctionComponent<CastItemProps> = ({actor}: CastItemProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  const uriAvatar = `https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png`;

  return (
    <View style={styles.container}>
      {actor.profile_path ? (
        <Image
          source={{uri}}
          style={{width: '100%', height: 150, borderRadius: 8, minWidth: 150}}
        />
      ) : (
        <Image
          source={{uri: uriAvatar}}
          style={{width: '100%', height: 150, borderRadius: 8, minWidth: 150}}
        />
      )}

      <View style={styles.actorInfo}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
          {actor.name}
        </Text>
        <Text style={{fontSize: 12, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginRight: 15,
    borderRadius: 8,
    height: 240,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    marginHorizontal: 20,
  },
  actorInfo: {
    padding: 10,
  },
});

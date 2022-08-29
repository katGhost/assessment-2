import * as React from 'react';
import { View, Text, FlatList} from 'react-native';
import ItemDetailsOutline from './Utils/ItemDetailsOutline';
import data from '../Data/data';

export default function ItemDetails() {
  return (
    <View style={{
      backgroundColor: '',
      width: '100%',
      height: '100%'
      }}>
      
      <FlatList
      data={data}
      renderItem={
        ({ item }) => <ItemDetailsOutline data={ item } />
      }
       />
      
    </View>
  )
}
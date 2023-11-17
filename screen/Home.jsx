import { FlatList, SafeAreaView, View ,StyleSheet} from 'react-native'
import React from 'react'
import {COLORS,SIZES,DATA} from '../constants'
import NFTCard from '../components/NFTCard'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
      <FlatList
      data = {DATA}
      renderItem={({item})=> <NFTCard NFTData = {item}/>}
      keyExtractor={(item)=>item.id}
      ></FlatList>
      </View>
    </SafeAreaView>
  )
}
const styles =StyleSheet.create(
  {
    container:{
      paddingHorizontal:SIZES.small +10,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      backgroundColor: COLORS.bg,
    }
  }
);
export default Home


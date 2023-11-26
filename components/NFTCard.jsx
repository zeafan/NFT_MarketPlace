import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SIZES,COLORS } from '../constants'

const NFTCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity >
        <Text>NFT image</Text>
      </TouchableOpacity>
      <View style={styles.cardTop}>
      <Text>NFT Avatar</Text>
      </View>
      <View  style={styles.cardBottom}>
        <Text>NFT Title</Text>
        <View style={{marginTop:SIZES.small+5}}>
           <Text>NFT nfo</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container:{
      backgroundColor: COLORS.cardBg,
      borderRadius:SIZES.medium,
      marginBottom:SIZES.xLarge,
      marginVertical:SIZES.small-5,
      marginHorizontal:14,
      flex:1,
      justifyContent:'center',
      padding:12
      },
      cardTop:{
        width:"100%",
        paddingHorizontal:SIZES.medium,
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-between"
      },
      cardBottom:{
        width:"100%",
       padding:SIZES.medium
      }


})
export default NFTCard
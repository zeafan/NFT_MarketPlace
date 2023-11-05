import { View, Text,Image,StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import {FONTS,COLORS,SIZES} from '../constants'
import ntf08 from '../assets/images/nft08.jpg'
import ntf06 from '../assets/images/nft06.jpg'
import ntf04 from '../assets/images/nft04.jpg'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {

  const navigation = useNavigation();
  const handlerStart = ()=>{
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageCard}>
        <Image style={styles.image}source={ntf04}></Image>
        </View>
        <View style={[styles.imageCard,{top:SIZES.xLarge}]}>
          <Image style={styles.image}source={ntf06}></Image>
        </View>
        <View style={styles.imageCard}>
        <Image style={styles.image}source={ntf08}></Image>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Find, Collect and Sell Amazing NFTs</Text>
        <Text style={styles.subText}>expore the top collectio of ntfs and buy ans sell your NFTs as well</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button styleButton={styles.button}
        title={'Start'}
        styleText={styles.mainText}
        preeHandler={handlerStart}
        ></Button>
      </View>
    </View>
  )
}

export default Welcome

const styles =StyleSheet.create(
  {
    mainText:{
      textAlign:'center',
      color:COLORS.white,
      fontSize: SIZES.xLarge+5,
      fontFamily:FONTS.bold
    },
    subText:{
      textAlign:'center',
      color:COLORS.gray,
      marginTop: SIZES.large,
      fontFamily:FONTS.light
    },
    container:{
      paddingHorizontal:SIZES.small +10,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      backgroundColor: COLORS.bg,
    },
    textContainer:{
      padding:SIZES.small,
      margin:SIZES.small,
      marginVertical:SIZES.large
    },
    buttonContainer:{
      position:'absolute',
      bottom:SIZES.large,
      marginVertical:SIZES.large
    },
    button:{
      backgroundColor:COLORS.second,
      padding:SIZES.small+4,
      borderRadius:SIZES.medium,
      width:240,
      alignItems:'center',

    },
    imageContainer:{
     top:-SIZES.medium,
     gap:SIZES.small,
     flexDirection:'row'
    },
    imageCard:{
      backgroundColor:COLORS.cardBg,
      padding:SIZES.small,
      borderRadius:SIZES.medium
    },
     image:{
     width:200,
     height:200,
     borderRadius:SIZES.medium
    }
  }
);
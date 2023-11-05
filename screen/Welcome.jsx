import { View, Text,Image,StyleSheet, TouchableHighlight, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import {FONTS,COLORS,SIZES} from '../constants'
import ntf08 from '../assets/images/nft08.jpg'
import ntf06 from '../assets/images/nft06.jpg'
import ntf04 from '../assets/images/nft04.jpg'

import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const duration = 1000;
  const delay =duration +500;
  const anim_fada = useRef(new Animated.Value(0)).current;
  const anim_move = useRef(new Animated.ValueXY({x:100,y:100})).current;
  const anim_text = useRef(new Animated.Value(0)).current;
  const anim_buttom = useRef(new Animated.Value(1)).current;

  const handleButtom = ()=>{
    Animated.spring(anim_buttom,{
      toValue:0,
      duration,
      delay,
      useNativeDriver:true,
      friction:4
    }
    ).start();
  }

  const handleText = ()=>{
    Animated.timing(anim_text,{
    
      toValue:1,
      duration,
      
      delay,
      useNativeDriver:true
    }
    ).start();
  }

  const navigation = useNavigation();
  const handlerStart = ()=>{
    navigation.navigate('Home')
  }



  const handleAnimed =()=>{
     Animated.sequence([
    Animated.timing(anim_fada,{
      toValue:1,
      duration,
      useNativeDriver:true
    })
   ,
    Animated.spring(anim_move,{
      toValue: {x:0,y:0},
      duration,
      useNativeDriver:true
    }),
  ]).start();
  };

useEffect(()=>{
  handleAnimed();
  handleText();
  handleButtom();
},[handleAnimed,handleText,handleButtom]);

 
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer,{
        opacity:anim_fada,
        transform:anim_move.getTranslateTransform(),
      },
      ]}
      >
        <View style={styles.imageCard}>
          <Image style={styles.image}source={ntf04}></Image>
        </View>
        <View style={[styles.imageCard,{top:SIZES.xLarge}]}>
          <Image style={styles.image}source={ntf06}></Image>
        </View>
        <View style={styles.imageCard}>
          <Image style={styles.image}source={ntf08}></Image>
        </View>
      </Animated.View>
      <Animated.View style={[styles.textContainer,{
        opacity:anim_text,
      }]}>
        <Text style={styles.mainText}>Find, Collect and Sell Amazing NFTs</Text>
        <Text style={styles.subText}>expore the top collectio of ntfs and buy ans sell your NFTs as well</Text>
      </Animated.View>
      <Animated.View style={[styles.buttonContainer,{
        transform:[{
          translateY:anim_buttom.interpolate({
            inputRange:[0,1],
            outputRange:[0,200]
          }),
        }]
      }]}>
        <Button styleButton={styles.button}
        title={'Start'}
        styleText={styles.mainText}
        preeHandler={handlerStart}
        ></Button>
      </Animated.View>
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
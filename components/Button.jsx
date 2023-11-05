import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({preeHandler,Icon,styleText,title,styleButton}) => {
const RenderContentIconORText =()=>{
    if(!Icon)
    {
        return <Text style={styleText}>{title && title}</Text>
    }else{
        return Icon;
    }
}
  return (
    <View>
        <TouchableOpacity 
        onPress ={preeHandler}
        style={styleButton}>
            <RenderContentIconORText />
        </TouchableOpacity>
    </View>
  )
}

export default Button
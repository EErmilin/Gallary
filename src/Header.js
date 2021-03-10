import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = props => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe',
    height: 116,
    paddingLeft: 22,
    paddingTop: 71,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    justifyContent: 'center',
    elevation: 2,
    position: 'relative',
  },
  textStyle:{
	  fontSize: 28,
    color: '#fff',
  },
});

export default  Header 

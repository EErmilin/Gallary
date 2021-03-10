import React, {Component} from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default  class Menu extends Component {

  render() {
    return (
      <ScrollView>
      <View>
        <TouchableOpacity onPress={()=>{ this.props.updateUri("http://lorempixel.com/400/200/sports/")}}>
          <View style={styles.Button}><Text>Cпорт</Text></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{ this.props.updateUri("http://lorempixel.com/400/200/animals/")}}>
          <View style={styles.Button}><Text>Животные</Text></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{ this.props.updateUri("http://lorempixel.com/400/200/nature/")}}>
          <View style={styles.Button}><Text>Природа</Text></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{ this.props.updateUri("http://lorempixel.com/200/100/city/")}}>
          <View style={styles.Button}><Text>Город</Text></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{ this.props.updateUri("http://lorempixel.com/200/100/technics/")}}>
          <View style={styles.Button}><Text>Техника</Text></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{ this.props.updateUri("http://lorempixel.com/200/100/abstract/")}}>
          <View style={styles.Button}><Text>Абстракция</Text></View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>{ this.props.updateUri("http://lorempixel.com/200/100/transport/")}}>
          <View style={styles.Button}><Text>Транспорт</Text></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{ this.props.updateUri("http://lorempixel.com/200/100/food/")}}>
          <View style={styles.Button}><Text>Еда</Text></View>
        </TouchableOpacity>
     </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Button:{
    backgroundColor: '#30d0fe',
    height: 60,
    paddingLeft: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    justifyContent: 'center',
    elevation: 2,
    position: 'relative',
},
})
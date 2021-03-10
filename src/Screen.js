import React, {Component} from 'react';
import { ScrollView, Image, StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import Header from './Header'
import Menu from './Menu'

export default class Screen extends Component {

    state = {
      toggle: true,
      uri:'http://lorempixel.com/400/200/sports/',
      menuFlag: true,
      fullImg: false,
      minImg: true,  
    }

  _updateUri = (value) => {
      this.setState({ uri: value })
      this._onPressMenu()
   }

  _updateUriFull = (value) => {
    this.setState({ uriFull: this.state.uri + value })
  }

  _onPressImg(){
  const newState = !this.state.toggle
  this.setState({toggle:newState})
  }

  _onPressMenu(){
  const menuState = !this.state.menuFlag
  this.setState({menuFlag:menuState})
  }
  
    render() {
      const url = "";
      const win = Dimensions.get('window')
      const {menuFlag} = this.state;
      const h = win.height/2;
      const w = win.width;
      if(this.props.screen){
        if(menuFlag){
         return (
          <ScrollView>
            <View>
                <TouchableOpacity onPress={()=>this._onPressMenu()}>
                  <Header title ={ 'Категории' } />
                </TouchableOpacity>

                <View style={styles.conteiner}>
                
                  <TouchableOpacity style={styles.ImgPlace} onPress={()=>{ this.props.updateData(this.state.fullImg),this._updateUriFull(1)}}>
                    <Image style={styles.Img} source={{uri:this.state.uri +'1'} }/>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.ImgPlace} onPress={()=>{ this.props.updateData(this.state.fullImg),this._updateUriFull(2)}}>
                    <Image style={styles.Img} source={{uri:this.state.uri +'2'} }/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.ImgPlace} onPress={()=>{ this.props.updateData(this.state.fullImg),this._updateUriFull(3)}}>
                    <Image style={styles.Img} source={{uri:this.state.uri +'3'} }/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.ImgPlace} onPress={()=>{ this.props.updateData(this.state.fullImg),this._updateUriFull(4)}}>
                    <Image style={styles.Img} source={{uri:this.state.uri +'4'} }/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.ImgPlace} onPress={()=>{ this.props.updateData(this.state.fullImg),this._updateUriFull(5)}}>
                    <Image style={styles.Img} source={{uri:this.state.uri +'5'} }/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.ImgPlace} onPress={()=>{ this.props.updateData(this.state.fullImg),this._updateUriFull(6)}}>
                    <Image style={styles.Img} source={{uri:this.state.uri +'6'} }/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.ImgPlace} onPress={()=>{ this.props.updateData(this.state.fullImg),this._updateUriFull(7)}}>
                    <Image style={styles.Img} source={{uri:this.state.uri +'7'} }/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.ImgPlace} onPress={()=>{ this.props.updateData(this.state.fullImg),this._updateUriFull(8)}}>
                    <Image style={styles.Img} source={{uri:this.state.uri +'8'} }/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.ImgPlace} onPress={()=>{ this.props.updateData(this.state.fullImg),this._updateUriFull(9)}}>
                    <Image style={styles.Img} source={{uri:this.state.uri +'9'} }/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.ImgPlace} onPress={()=>{ this.props.updateData(this.state.fullImg),this._updateUriFull(10)}}>
                    <Image style={styles.Img} source={{uri:this.state.uri +'10'} }/>
                  </TouchableOpacity>
                    
                </View>
              </View>
            </ScrollView>
      );
      }
      else{
        return(
        <View>
          <TouchableOpacity onPress={()=>this._onPressMenu()} onPressMenu={this._onPressMenu}>
            <Header title ={ 'Категории' } />
          </TouchableOpacity>
          <Menu updateUri={this._updateUri}/>
        </View> 
        );
      }
    }
    else{
      return(
        <View style={{alignItems: 'center'}}>
           <TouchableOpacity onPress={()=>{ this.props.updateData(this.state.minImg)}}>
            <Image style={ { borderRadius:10, marginTop: h/2, width:w, height:h} } source={{uri:this.state.uriFull}}/>
          </TouchableOpacity>
        </View>
      );
    }
  }
  }

  const styles = StyleSheet.create({

    conteiner:{
      marginTop: 30,
      marginBottom: 150,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },

    ImgPlace:{
      borderWidth: 2,
      borderRadius:10,
      marginTop: 10, 
      borderColor: '#30d0fe',
    }, 

    Img:{
      borderRadius:10,
      width:100,
      height:100
    }, 

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
  
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import DefaultInput from './components/DefaultInput';

export default class App extends React.Component {

state = {
  name: ''
}
updateValue = (val) => {
  // this.state.name = val;
  this.setState({name: val})
}
butonClick = () => {
  alert(`me clickeaste este momazo! ${this.state.name}`);
}

  render() { 
    return (
      <View style={styles.container}>
        <Text>Bienvenidos a mi app de Dogs v2.5</Text>
        <DefaultInput
        placeholder='Ingresa tu nombre'
        value={this.state.name}
        onChangeText={this.updateValue}
        />
       <View style={styles.btnCont} >
        <Button
          title='click me please'
          color='red'
          onPress={this.butonClick} >
          </Button>
          </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCont: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});

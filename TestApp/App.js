import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import {Store} from './store/store';
import allActions from './actions/actionBundler';
import {useSelector, useDispatch} from 'react-redux';
import {loadTextThunk} from './actions/textActions';

export default function App() {
  //const count = useSelector(state => state.countReducer);
  return (
      <Provider store={Store}>
       <CounterStuff/>
      </Provider>

  );
}

const CounterStuff = () => {
    const count = useSelector(state => state.countReducer);

    const [helloText, setHelloText] = useState("Text loaded??"); //working to load with local network from the python backend
    const dispatch = useDispatch(); 
    const externalServerURL = 'http://192.168.1.154:3000/';

    const moreText = useSelector(state => state.textReducer);

    const onHelloWorldClicked = async () => {
      fetch(externalServerURL)
      .then(res => res.json())
      .then(data => {console.log('success');
                      console.log(data.text);
                    setHelloText(data.text)})
      .catch(error => console.log(error));
    };

    const testThunk2 = () => {
      return async dispatch => {
        console.log('pressed the button');
          console.log('HELOOOOOOOOOOOOOOOO?');
          fetch(externalServerURL)
          .then(res => res.json())
          .then(data =>  {console.log('success', data); dispatch(allActions.textActions.setTextDifferent(data.text))})
          .catch(error => console.log(error));
      }
    }


    return (
      <View style={styles.container}>
          <Text>Redux counter {count}</Text>
          <Button title='add!' onPress ={()=> dispatch(allActions.counts.increment())}/>
          <Button title='subtract!' onPress ={()=> dispatch(allActions.counts.changeCount())}/>
          <Text> API call with useState: {helloText}</Text>
          <Button title="load hello world with useState!" onPress = {onHelloWorldClicked}/>
          <Text> New Text with redux: {moreText.text}</Text>
          <Button title='load hello world with redux' onPress ={()=>dispatch(testThunk2())}/>
          <Button title='reset texts' onPress ={()=>{dispatch(allActions.textActions.setTextDifferent('Someone there?'));
                                                    setHelloText('Someone there?')}}/>
          <StatusBar style="auto" />
        </View>
    );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


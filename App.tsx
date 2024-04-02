import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards'
import FancyCards from './Components/FancyCards'
import Action from './Components/Action'
import ContactList from './Components/ContactList'

const App = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#F5BCBA'}}>
      <ScrollView>
      <StatusBar
                backgroundColor={'#F5BCBA'}
                barStyle={'dark-content'}
                hidden={false}
            />

        <ContactList/>
      </ScrollView>
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({

})
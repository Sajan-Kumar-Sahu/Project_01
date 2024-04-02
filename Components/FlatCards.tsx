import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>

      <Text style={styles.HeadingTextView}>Flat Cards</Text>

      <View  >
        <ScrollView horizontal={true} style={styles.container}>
          <View style={[styles.card, styles.cyanCard]}>
            <Text style={styles.innerTextView}>CYAN</Text>
          </View>
          <View style={[styles.card, styles.yellowCard]}>
            <Text style={styles.innerTextView}>YELLOW</Text>
          </View>
          <View style={[styles.card, styles.pinkCard]}>
            <Text style={styles.innerTextView}>PINK</Text>
          </View>
          <View style={[styles.card, styles.cyanCard]}>
            <Text style={styles.innerTextView}>CYAN</Text>
          </View>
          <View style={[styles.card, styles.pinkCard]}>
            <Text style={styles.innerTextView}>PINK</Text>
          </View>
          <View style={[styles.card, styles.yellowCard]}>
            <Text style={styles.innerTextView}>YELLOW</Text>
          </View>
          <View style={[styles.card, styles.cyanCard]}>
            <Text style={styles.innerTextView}>CYAN</Text>
          </View>
          <View style={[styles.card, styles.yellowCard]}>
            <Text style={styles.innerTextView}>YELLOW</Text>
          </View>
          <View style={[styles.card, styles.pinkCard]}>
            <Text style={styles.innerTextView}>PINK</Text>
          </View>
          <View style={[styles.card, styles.cyanCard]}>
            <Text style={styles.innerTextView}>CYAN</Text>
          </View>
          <View style={[styles.card, styles.pinkCard]}>
            <Text style={styles.innerTextView}>PINK</Text>
          </View>
          <View style={[styles.card, styles.yellowCard]}>
            <Text style={styles.innerTextView}>YELLOW</Text>
          </View>
        </ScrollView>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  HeadingTextView: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    padding: 10
  },
  container: {
    padding: 10,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 10,
    marginRight: 20,
    shadowOffset:{
      width:20,
      height:10
    },
    shadowColor:'red',
    elevation:20
  },
  cyanCard: {
    backgroundColor: 'cyan',
    color: 'black',
    fontWeight: 'bold',
  },
  yellowCard: {
    backgroundColor: 'yellow',
    color: 'black',
    fontWeight: 'bold'
  },
  pinkCard: {
    backgroundColor: 'pink',
    color: 'black',
    fontWeight: 'bold'  
  },
  innerTextView: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  }

})
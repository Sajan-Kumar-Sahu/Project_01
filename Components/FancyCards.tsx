import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.HeadingText}>Trending Places</Text>
      <View style={styles.cardBody}>
        <View>
          <Text style={styles.cardTitle}>Prem Mandir</Text>
        </View>
        <Image
          source={{ uri: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/a3/d6/4a.jpg" }}
          style={styles.cardImage}
        />
        <View>
          <Text style={styles.cardLevel}>Vrindavan, Mathura, India</Text>

          <Text style={styles.cardDescription}>Prem Mandir is a Hindu temple in Vrindavan, Mathura, India. The complex is on a 54-acre site on the outskirts of Vrindavan, and is dedicated to Lord Radha Krishna and Sita Ram.</Text>

          <Text style={styles.cardFooter}>14KM away from Mathura Junction</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  HeadingText: {
    marginStart: 8,
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  cardBody:{
    backgroundColor:'white',
    marginTop:10,
    borderRadius:10
  },
  cardTitle: {
    fontSize: 28,
    marginStart: 8,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black'
  },
  cardLevel: {
    fontSize: 22,
    marginStart: 8,
    fontWeight: 'bold',
    color: 'black'
  },
  cardDescription: {
    fontSize: 18,
    marginStart: 8,
    marginTop: 10,
    marginRight:2,
    color: 'black'
  },
  cardFooter: {
    marginTop: 20,
    color: 'red',
    fontSize: 15,
    textAlign: 'right',
    fontWeight:'bold',
    marginRight:8,
    marginBottom:10,
  },
  cardImage: {
    marginTop: 10,
    height: 300,
    margin: 10,
    borderRadius: 20,
  }
})
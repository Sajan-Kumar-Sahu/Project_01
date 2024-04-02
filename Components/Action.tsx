import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Button } from 'react-native'
import React from 'react'

export default function Action() {
    function openWebsite(websiteUrl: string) {
        Linking.openURL(websiteUrl)
    }
    return (
        <View>
            <Text style={styles.titleText}>Blog Card</Text>
            <View style={[styles.card,styles.elevatedCard]}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>
                        What's New in JavaScript?
                    </Text>
                </View>

                <Image
                    style={styles.cardImage}
                    source={{ uri: "https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" }}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3} style={styles.bodyText}>
                        Just like every year, Javascript brings in new features. This year javascript is bringing 4 new features, which are almost in production rollout. I won't be wasting much more time and directly jump to code with easy to understand examples.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite("https://blog.learncodeonline.in/whats-new-in-javascript-21-es12")}
                    >
                        <Text style={styles.footerText}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
        paddingHorizontal: 8
    },
    card: {
        height: 450,
        backgroundColor:'#FFF222',
        marginHorizontal:16,
        marginVertical:12,
        borderRadius:6
    },
    elevatedCard:{
        elevation:4,
    },
    headerText: {
        fontSize:24,
        color:'black',
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center'
    },
    headerContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    cardImage:{
        height:230,
    },
    bodyContainer:{
        padding:10,
        flexDirection:'row',
        justifyContent:'center'
    },
    bodyText:{
        fontSize:18,
        color:'black'
    },
    footerContainer:{
        flexDirection:'row',
        justifyContent:'center',
    },
    footerText:{
        fontSize:18,
        color:'black',
        backgroundColor:'cyan',
        fontWeight:'bold',
        paddingHorizontal:20,
        paddingVertical:8,
        borderRadius:6,
        elevation:5
        
    }
})
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: "23MCC2005",
            name: "SAJAN KUMAR SAHU",
            status: "Full-stack React Native Developer",
            ImageUrl: "https://media.licdn.com/dms/image/D5603AQFocneavibiwA/profile-displayphoto-shrink_800_800/0/1704808178384?e=1717632000&v=beta&t=955DMIXCIvj0KJX-Xjq2mDum_bAt5DDtzKgxaU2Idms"
        },
        {
            uid: "23MCC2007",
            name: "SANKARSHAN PRADHAN",
            status: "Solution Architect",
            ImageUrl: "https://media.licdn.com/dms/image/C4E03AQFUnjB3pTEPlQ/profile-displayphoto-shrink_800_800/0/1663782721045?e=1717632000&v=beta&t=dWLXTfihCC57q0fnn39GyeK5qqCvwefH2eUjTBmFAkI"
        },
        {
            uid: "23MCC2037",
            name: "SANJAY RABIDAS",
            status: "DevOps Engineer",
            ImageUrl: "https://media.licdn.com/dms/image/D5635AQEp2DgEXI_Rsg/profile-framedphoto-shrink_800_800/0/1710009253338?e=1712660400&v=beta&t=CrAsRjct2Km_U9hzvoul8D5o0e7WMvdbGqIAwrNC9kU"
        },
        {
            uid: "23MCC2085",
            name: "ARYAN BANSAL",
            status: "Cloud Architect",
            ImageUrl: "https://media.licdn.com/dms/image/D4D35AQFFbNC3SeSaIQ/profile-framedphoto-shrink_800_800/0/1696441539377?e=1712660400&v=beta&t=pW8F2S_opzfwr2bZkM5x0n0howbQ-o02d7vIkh8rHaA"
        },
        {
            uid: "23MCC20026",
            name: "Jyotiraditya Mishra",
            status: "React Native Developer",
            ImageUrl: "https://magarticles.magzter.com/articles/6446/311858/5be0359e5a5ee/AparshaktiKhurana.jpg"
        },
        {
            uid: "23MCC20069",
            name: "DOLAMANI SAHU",
            status: "Python Developer",
            ImageUrl: "https://media.licdn.com/dms/image/D5603AQGFqjhHcP-0HA/profile-displayphoto-shrink_800_800/0/1706774122929?e=1717632000&v=beta&t=ExZnLlwtYPlR7vF07jLEFK3w47KigP29eWR5BMIicO8"
        },
        {
            uid: "23MCC20068",
            name: "NAIMISH PRADHAN",
            status: "Data Scientist",
            ImageUrl: "https://media.licdn.com/dms/image/D5603AQFhQcinwysvQA/profile-displayphoto-shrink_800_800/0/1711875527039?e=1717632000&v=beta&t=3YREPR77xBp8SWb_O2nhJZpRLIX5aEE99yEjbv1y_Vc"
        },
        {
            uid: "23MCC20032",
            name: "Gaurav Kumar",
            status: "AWS Administrator",
            ImageUrl: "https://media.licdn.com/dms/image/C4E03AQGPtJc1_i9kAQ/profile-displayphoto-shrink_800_800/0/1615045048079?e=1717632000&v=beta&t=y4uSDVLdr_ctUkLZS5b1BKBxSJM2LRvE6CPoDkUbUtE"
        },
        {
            uid: "23MCC20017",
            name: "GOVIND SINGH SODHI",
            status: "Cloud Practitioner",
            ImageUrl: "https://media.licdn.com/dms/image/D4D35AQF2CImtihHySQ/profile-framedphoto-shrink_800_800/0/1679553160685?e=1712667600&v=beta&t=MUChp55COCbf3Bol6Qadxe5QXHnVK6XQGTqXAD15Zjc"
        }
        
    ]
    return (
        <View>
            <Text style={styles.titleText}>Contact List</Text>
            <ScrollView
                scrollEnabled={false}
                style={styles.container}
            >
                {contacts.map(({ uid, name, status, ImageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{ uri: ImageUrl }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        marginTop:10,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal:13,
        marginBottom:20
    },
    container: {
        paddingHorizontal: 10,
    },
    userCard: {
        flexDirection: 'row',
        marginBottom: 8,
        backgroundColor:'#2B2B52',
        borderColor:'magenta',
        borderWidth:2,
        borderRadius:14,
        paddingHorizontal:6,
        paddingVertical:8,
        alignItems:'center',
    },
    userImage: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        marginHorizontal:10
    },
    userName: {
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    },
    userStatus: {
        fontSize:16,
        color:'#99AAAB',
    }
})
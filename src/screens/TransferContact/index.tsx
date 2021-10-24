import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { TextInput } from 'react-native-gesture-handler';

type ContactProps = {
    id: string,
    cpf: string,
    name: string
}

interface Props {
    item: ContactProps[];
}

export function TransferContact() {

    const contacts = [
    {
        "id": '1',
        "cpf": '000.000.000-00',
        "name": 'Rogerio da Silva' 
    }];


    return(
        <View style={styles.container}>

            <TouchableOpacity style={styles.contentButton}>
                <Feather style={styles.iconButton} name="user-plus"/>
                <Text style={styles.titleButton}>Novo Contato</Text>
            </TouchableOpacity>

            <View style={styles.separator}/>

            <View style={styles.searchSection}>
                <Feather style={styles.searchIcon} name="search"/>
                <TextInput 
                placeholderTextColor = "#113259" 
                style={styles.searchInput} 
                placeholder="Buscar por um contato"/>
            </View>

            <View style={styles.contactContent}>
                <Text style={styles.contactTitle}>Seus contatos</Text>

                    <FlatList
                        data={contacts}
                        renderItem={({item})=> { 
                        return(
                            <View style={styles.contactsContent}>
                                <Feather 
                                    name="user"
                                    style={styles.contactIcon}
                                />
                                <Text>{item.name}</Text>
                            </View>
                        )}}
                        keyExtractor={item => item.id}
                    />

                    {!contacts && (
                        <View style={styles.withoutUserContent}>
                            <Image 
                            style={styles.withoutUserImage} 
                            source={{uri: 'https://i.imgur.com/iUE5Mms.png'}}
                            />
                            <Text style={styles.withoutUserTitle}>Nenhum contato cadastrado</Text>
                        </View>
                    )}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 36
    },

    contentButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 23,
        paddingLeft: 12
    },

    iconButton: {
        paddingRight: 16,
        fontSize: 24,
        color: '#113259',
    },

    titleButton: {
        fontSize: 14,
        color: '#113259',
        fontFamily: 'Montserrat_700Bold',
    },

    searchSection: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        paddingVertical: 11,
        paddingHorizontal: 17,
        marginBottom: 23
    },

    searchIcon: {
        paddingRight: 11,
        fontSize: 15,
        color: '#113259',
    },

    searchInput: {
        flex: 1,
        color: '#113259',
        fontFamily: 'Montserrat_500Medium',
        fontSize: 12,
    },

    separator: {
        height: 2,
        backgroundColor: '#D8E1EB',
        marginBottom: 23
    },

    contactContent:{

    },

    contactTitle: {
        color: '#6E87BD',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 13,
        marginBottom: 24
    },

    withoutUserContent: {
        alignItems: 'center'
    },

    withoutUserImage: {
        width: 80,
        height: 80,
        marginBottom: 24
    },

    withoutUserTitle: {
        color: '#6E87BD',
        fontFamily: 'Montserrat_500Medium',
        fontSize: 18,
        marginBottom: 24
    },

    contactsContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    contactIcon: {
        fontSize: 24,
        paddingRight: 23
    }
})

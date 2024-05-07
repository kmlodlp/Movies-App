import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback, Alert, FlatList, Image } from 'react-native';
import { useFetch } from '../hooks/useFetch'

export const MoviesList = ({ url, page }) => {

    const { data, isLoading, errors } = useFetch(url, page)
    const Item = ({ title, overview, image }) => (
        <TouchableNativeFeedback onPress={(event) => { watchDetail(title, overview) }}>
            <View styls={styles.item}>
                <Text style={styles.title}>{title}</Text>

                <Image
                    style={styles.image}
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500/${image}`
                    }}
                />
            </View>
        </TouchableNativeFeedback>
    )
    const watchDetail = (title, overview) => {
        Alert.alert(title, overview, [
            { text: 'OK', onPress: () => console.log("OK Pressed") }
        ])
    }
        return (

            <View style={styles.list}>
                {isLoading ?
                    <Text> Cargando..</Text> :

                    <FlatList
                        data={data.results}
                        renderItem={({ item }) => <Item title={item.title} image={item.poster_path} overview={item.overview} />}
                        keyExtractor={item => item.id}

                    ></FlatList>}
            </View>
        )
    }


    const styles = StyleSheet.create({

        List: {
            width: '80%'
        },
        item: {
            width: '100%',
            alignItems: 'center',
            marginTop: 20,
            borderColor: '#fff',
        },
        title: {
            marginTop: 2,
            marginBottom: 5,
            color: '#fff',
            fontSize: 20,
            textAling: 'center'
        },
        image: {
            with: '100%',
            height: 450
        }
    });


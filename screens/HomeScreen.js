import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";


export default class HomeScreen extends React.Component{


    constructor(props){
        super(props);

        this.state ={
            loading: false, 
            pokemon: [],
            url: "https://pokeapi.co/api/v2/pokemon",
        }
    }

    componentDidMount(){
        this.getPokemon();
        
    }

    getPokemon=()=>{

        this.setState({loading: true})
        //Esta funcion nos permite dar la peticion
        fetch(this.state.url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                pokemon: res.results,
                url: res.next,
                loading:false,
            })

        });
    }

    render(){
        if(this.state.loading){
             return(
            <View>
                <Text>Descargando Pokemon</Text>
            </View>
        );
        }

        return(
            <View>
               <FlatList
               data={this.state.pokemon}
               renderItem ={
                ({item}) => <Text>{item.name}</Text>
               }
               />
            </View>
        );
       
    }

}


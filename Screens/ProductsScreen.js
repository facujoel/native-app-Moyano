import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import {Searcher} from '../Components/Searcher';
import { Entypo } from '@expo/vector-icons';
import { Header } from 'react-native/Libraries/NewAppScreen';



export const ProductsScreen = ( {category = {id:1, category: "Ropa"}, handleCategory} ) => {

  const [input, setInput] = useState("");
  const [initialProducts, setInitialProducts] = useState([])
  const [productsFiltered, setProductsFiltered] = useState([])

  const handleErase = () => {
      setInput("")
  }

  useEffect(()=> {
    if(initialProducts.length !== 0){
        if (input === "") setProductsFiltered(initialProducts)
        else {
            const productosFiltrados = initialProducts.filter(product => product.description.toLowerCase().includes(input.toLowerCase()))
            setProductsFiltered(productosFiltrados)
        }
    }
}, [input, initialProducts])

  return (
    <>
        <Header title={category.category}/>
            <View style={styles.container}>
                <Searcher additionalStyles={{
                    backgroundColor: colors.lightBlue
                }}>
                    <TextInput
                        value={input}
                        onChangeText={setInput}
                        keyboardType="default"
                        style={styles.input}
                        placeholder = "Ingrese producto a buscar"
                    />
                    <TouchableOpacity onPress={handleErase}>
                        <Entypo name="erase" size={30} color="black" />
                    </TouchableOpacity>
                </Searcher>
                <View style={styles.listContainer}>
                    <List data={productsFiltered} itemType ={"Producto"} onPress={()=> {}}/>
                    <Button title='Go back' onPress={()=>handleCategory(null)}/>
                </View>
            </View>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      flexDirection: 'column',
  },
  input: {
      width: '80%',
      padding: 10,
      margin: 10,
      backgroundColor: 'black',
      borderRadius: 10,
      color: 'white',
      height: 50,
  },
  listContainer:{
      flex: 1,
  }
})


import React, {useEffect, useState} from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getProducts } from "../services/ProductService";
import { Product } from "../components/Product";

export function ProductList(){

    function renderProduct({item: product}){

        return (
            <Product
                {...product}
                OnPress={()=> {
                    navigation.navigate('ProductDetails', {productId: product.id})
                }}
            />
        )
    }
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        setProducts(getProducts())
    })

    return(
        <FlatList
            style={styles.productList}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(item)=> item.id.toString()}
            data={products}
            renderItem= { renderProduct}
            
        />
    )
}

const styles = StyleSheet.create({
    productsList: {
      backgroundColor: "#eeeeee",
    },
    productsListContainer: {
      backgroundColor: "#eeeeee",
      paddingVertical: 8,
      marginHorizontal: 8,
    },
  });
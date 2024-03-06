import ProductGrid from "./ProductGrid";
import ProductCard from "./ProductCard";
import {Box} from "@chakra-ui/react";
import useMealContext from "../hooks/useMealContext";
import {useEffect, useState} from "react";
import axios from "axios";


const ProductsList = () => {
    const {products, text} = useMealContext()
    const [categories, setCategories] = useState([])

    useEffect(() => {
       axios('https://www.themealdb.com/api/json/v1/1/categories.php')
           .then(({data}) => setCategories(data.categories))
    },[])

    return (
        <Box
            maxW="7xl"
            mx="auto"
            px={{
                base: '4',
                md: '8',
                lg: '12',
            }}
            py={{
                base: '6',
                md: '8',
                lg: '12',
            }}
        >
            <ProductGrid>
                {categories.map((product) => (
                    <ProductCard key={product.idCategory} product={product}/>
                ))}
            </ProductGrid>
        </Box>
    );
};

export default ProductsList;
import React, {useEffect, useState} from 'react';
import {AspectRatio, Box, Button, Image, Skeleton, Stack} from "@chakra-ui/react";
import ProductGrid from "../../components/ProductGrid";
import ProductCard from "../../components/ProductCard";
import {useNavigate, useParams} from 'react-router-dom'
import axios from "axios";

const Products = () => {

    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    const params = useParams()



    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.productsName}`)
            .then(({data}) => setProducts(data.meals))
    }, []);
    return (
        <div>
            <Button style={{marginLeft: '11%'}} onClick={() => navigate(-1)} colorScheme="blue" width="min-content">
                Вернуться
            </Button>

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
                    {products.map((product) => (
                        <Stack
                            spacing={{
                                base: '4',
                                md: '5',
                            }}

                        >
                            <Box position="relative">
                                <AspectRatio ratio={4 / 3}>
                                    <Image
                                        src={product.strMealThumb}
                                        alt={product.strMeal}
                                        draggable="false"
                                        fallback={<Skeleton/>}
                                        borderRadius={{
                                            base: 'md',
                                            md: 'xl',
                                        }}
                                    />
                                </AspectRatio>
                                <p>{product.strMeal}</p>
                            </Box>
                            <Stack align="center">
                                <Button onClick={() => navigate(`/product/${product.strMeal}`)} colorScheme="blue" width="full">
                                    Подробнее
                                </Button>
                            </Stack>
                        </Stack>
                    ))}

                </ProductGrid>
            </Box>
        </div>
    );
};

export default Products;
import React, {useEffect, useState} from 'react';
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Spinner} from "@chakra-ui/react";
import ProductGrid from "../../components/ProductGrid";
import ProductCard from "../../components/ProductCard";
import { useParams,Link} from 'react-router-dom'
import axios from "axios";
import {FaChevronRight} from "react-icons/fa";

const Products = () => {


    const [products, setProducts] = useState([])
    const params = useParams()



    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`)
            .then(({data}) => setProducts(data.meals))
    }, []);

    return (
        <Container maxW={'1200px'}>
            <Breadcrumb spacing='8px' separator={<FaChevronRight color='gray.500' />}>
                <BreadcrumbItem >
                    <BreadcrumbLink style={{color:'green', fontSize:'18px'}} as={Link} to='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink
                        href={`/products/${params.category}`}
                        style={{textTransform:'capitalize',
                            color:'gold',
                            fontSize:'18px',
                            fontFamily: 'Georgia'}}>{params.category}</BreadcrumbLink>
                </BreadcrumbItem>

            </Breadcrumb>

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
                        <ProductCard
                            key={product.idMeal}
                            image={product.strMealThumb}
                            title={product.strMeal}
                            link={`/products/${params.category.toLowerCase()}
                            /${product.strMeal.toLowerCase()}`}
                        />
                    ))}

                </ProductGrid>
            </Box>
        </Container>
    );
};

export default Products;
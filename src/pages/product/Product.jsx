import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams, Link} from "react-router-dom";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Spinner} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import {FaChevronRight} from "react-icons/fa";

const Product = () => {

    const [product, setProduct] = useState(null)
    const params = useParams()


    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.product}`)
            .then(({data}) => {
                setProduct(data.meals[0]);
            });
    }, [params.product])

    if (!product) {
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '20vh'}}>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </div>
        )

    }


    return (
        <Container maxW={'1200px'}>
            <Breadcrumb style={{marginBottom:'40px'}} spacing='8px' separator={<FaChevronRight color='gray.500'/>}>
                <BreadcrumbItem>
                    <BreadcrumbLink style={{color:'green', fontSize:'18px'}} as={Link} to='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink as={Link}
                                    to={`/products/${params.category}`}
                                    style={{textTransform: 'capitalize',
                                        color:'gold',
                                        fontSize:'18px',
                                        fontFamily: 'Georgia'
                                        }}>
                        {params.category}
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink
                        href={`/products/${params.category}/${params.product}`}
                        style={{textTransform: 'capitalize',
                            color:'fuchsia',
                            fontSize:'18px',
                            fontFamily: 'Georgia'}}>
                        {params.product}
                    </BreadcrumbLink>
                </BreadcrumbItem>

            </Breadcrumb>

            <h2 style={{
                paddingLeft: '15%',
                color: 'teal',
                fontSize: '22px',
                fontFamily: 'Verdana'
            }}>{product.strMeal}</h2>

            <h3 style={{
                paddingLeft: '15%',
                color: 'red',
                fontSize: '22px',
                fontFamily: 'Georgia',
                marginTop: '20px'
            }}>{product.strCategory} {product.strArea}</h3>

            <img src={product.strMealThumb} alt=""
                 style={{
                     width: '290px',
                     height: '290px',
                     marginLeft: '15%',
                     marginTop: '20px',
                     borderRadius: '25px'
                 }}/>

            <h3 style={{
                paddingLeft: '45%',
                color: 'royalblue',
                marginTop: '20px',
                fontFamily: 'Verdana',
                fontSize: '25px'
            }}>{product.strTags}</h3>

            <p style={{
                paddingLeft: '30px',
                marginTop: '20px',
                color: 'orange',
                marginBottom: '40px'
            }}>{product.strInstructions}</p>


            <ReactPlayer style={{marginLeft: '22%'}}
                         url={product.strYoutube}
                         controls={true}
            />


            <div style={{display: 'flex', columnGap: '17%', marginLeft: '34%', marginTop: '45px'}}>
                <ul style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                    {
                        Object.entries(product).filter((item) => item[0].includes('strIngredient') && item[1] !== null && item[1].trim().length)
                            .map((item) => (
                                <li style={{listStyle: 'none', fontSize: '19px', color: 'lime', fontFamily: 'Palatino'}}
                                    key={item[0]}>{item[1]}</li>
                            ))
                    }
                </ul>


                <ul style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                    {
                        Object.entries(product).filter((item) => item[0].includes('strMeasure') && item[1] !== null && item[1].trim().length)
                            .map((item) => (
                                <li style={{
                                    listStyle: 'none',
                                    fontSize: '19px',
                                    color: 'tomato',
                                    fontFamily: 'Palatino'
                                }} key={item[0]}>{item[1]}</li>
                            ))
                    }
                </ul>
            </div>


        </Container>
    );
};

export default Product;
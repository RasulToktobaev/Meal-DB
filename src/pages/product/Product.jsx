import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "@chakra-ui/react";
import ReactPlayer from "react-player";

const Product = () => {

    const [product, setProduct] = useState(null)

    const params = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.productName}`)
            .then(({data}) => setProduct(data.meals[0]))
    }, [])

    if (!product) {
        return <h2>Loading...</h2>
    }



    return (
        <div>
            <Button style={{marginLeft: '6%', position:'absolute', top:'2%', left:'14%'}} onClick={() => navigate(-1)} colorScheme="blue" width="min-content">
                Назад
            </Button>

            <h2 style={{paddingLeft:'15%', color:'teal', fontSize:'20px', fontFamily:'Verdana'}}>{product.strMeal}</h2>

            <h3 style={{paddingLeft:'15%', color:'red', fontSize:'20px', fontFamily: 'Georgia', marginTop:'20px'}}>{product.strCategory} {product.strArea}</h3>

            <img src={product.strMealThumb} alt="" style={{width: '280px', height: '280px',marginLeft:'15%', marginTop:'20px', borderRadius:'20px' }}/>

            <h3 style={{paddingLeft:'45%', color:'royalblue', marginTop:'20px', fontSize:'25px' }}>{product.strTags}</h3>

            <p style={{paddingLeft:'30px',marginTop:'20px', color:'orange', marginBottom:'40px'}}>{product.strInstructions}</p>


            <ReactPlayer style={{marginLeft:'28%'}}
                url={product.strYoutube}
                controls={true}
            />



            <div style={{display: 'flex', columnGap: '17%',marginLeft:'35%', marginTop:'45px'}}>
                <ul style={{display:'flex', flexDirection:'column', gap:'15px'}}>
                    {
                        Object.entries(product).filter((item) => item[0].includes('strIngredient') && item[1] !== null && item[1].trim().length )
                            .map((item) => (
                                <li style={{listStyle:'none', fontSize:'19px', color:'lime', fontFamily:'Palatino'}} key={item[0]}>{item[1]}</li>
                            ))
                    }
                </ul>


                <ul style={{display:'flex', flexDirection:'column', gap:'15px'}}>
                    {
                        Object.entries(product).filter((item) => item[0].includes('strMeasure') && item[1] !== null && item[1].trim().length )
                            .map((item) => (
                                <li style={{listStyle:'none', fontSize:'19px', color:'tomato', fontFamily:'Palatino'}} key={item[0]}>{item[1]}</li>
                            ))
                    }
                </ul>
            </div>


            <h3></h3>

        </div>
    );
};

export default Product;
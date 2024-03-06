import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const Product = () => {

    const [product, setProduct] = useState(null)

    const params = useParams()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.productName}`)
            .then(({data}) => setProduct(data.meals[0]))
    }, [])

    if (!product) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2 style={{paddingLeft:'15%', color:'teal', fontSize:'18px', fontFamily:'Tahoma, serif'}}>{product.strMeal}</h2>

            <h3 style={{paddingLeft:'15%', color:'red', fontSize:'18px', fontFamily: 'Helvetica, sans-serif', marginTop:'20px'}}>{product.strCategory} {product.strArea}</h3>

            <img src={product.strMealThumb} alt="" style={{width: '280px', height: '280px',marginLeft:'15%', marginTop:'20px', borderRadius:'20px' }}/>

            <h3 style={{paddingLeft:'45%', color:'royalblue', marginTop:'20px', fontSize:'25px' }}>{product.strTags}</h3>

            <p style={{paddingLeft:'30px',marginTop:'20px', color:'orange', marginBottom:'40px'}}>{product.strInstructions}</p>


            <iframe style={{marginLeft:'30%'}} width="560" height="315" src="https://www.youtube.com/embed/1IszT_guI08?si=J-MKt-xtdBxdaowu"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>

            <div style={{display: 'flex', columnGap: '50px',marginLeft:'15%'}}>
                <ul style={{display:'flex', flexDirection:'column', gap:'15px'}}>
                    {
                        Object.entries(product).filter((item) => item[0].includes('strIngredient') && item[1] !== null && item[1].trim().length )
                            .map((item) => (
                                <li style={{listStyle:'none', fontSize:'17px', color:'darkgreen', fontFamily:'Arial'}} key={item[0]}>{item[1]}</li>
                            ))
                    }
                </ul>


                <ul>
                    {
                        Object.entries(product).filter((item) => item[0].includes('strMeasure') && item[1] !== null && item[1].trim().length )
                            .map((item) => (
                                <li key={item[0]}>{item[1]}</li>
                            ))
                    }
                </ul>
            </div>


            <h3></h3>

        </div>
    );
};

export default Product;
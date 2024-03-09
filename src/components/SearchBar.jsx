import React, {useEffect, useState} from 'react';
import {Button, Input, InputGroup, InputRightElement, Stack, Box} from "@chakra-ui/react";
import {FaSearchengin} from "react-icons/fa6";
import axios from "axios";
import {Link} from 'react-router-dom'
import useDebounce from "../hooks/useDebounce";

const SearchBar = () => {


    const [options, setOptions] = useState([])

    const onSearch = useDebounce(value => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
            .then(({data}) => setOptions(data.meals ?? []))
    },300)

    const handleSearch = (e) => {
        const value = e.target.value
        if(value.trim().length === 0){
            setOptions([])
        }else {
            onSearch(value)
        }
    }

    return (
        <Stack position='relative'>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type='text'
                    placeholder='Please write the meal name'
                    onChange={handleSearch}
                />
                <InputRightElement width='5rem'>
                    <Button h='1.75rem' size='sm'>
                        <FaSearchengin/>
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Box position='absolute'
                 w='100%'
                 display='flex'
                 flexDirection='column'
                 gap='2px'
                 top='calc(100% + 4px)'
                 zIndex='10'
                 maxH='60vh'
                 overflowY='scroll'
                 color='white'>
                {options?.length ?
                    options.map((option) => (
                    <Box py={2} borderRadius={6}
                         px={4}
                         w='100%'
                         color='black'
                         border='2px solid gray'>
                        <Link onClick={() => {
                            setOptions([])
                        }} to={`/products/${option.strCategory.toLowerCase()}/${option.strMeal}`}>{option.strMeal.toLowerCase()}</Link>
                    </Box>
                )): null}

            </Box>
        </Stack>
    );
};

export default SearchBar;
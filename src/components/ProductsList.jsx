import ProductGrid from "./ProductGrid";
import ProductCard from "./ProductCard";
import {Box} from "@chakra-ui/react";
import useMealContext from "../hooks/useMealContext";


const ProductsList = () => {
    const {products, text} = useMealContext()

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
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </ProductGrid>
            {text}
        </Box>
    );
};

export default ProductsList;
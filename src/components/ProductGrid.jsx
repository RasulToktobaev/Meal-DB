import { SimpleGrid } from '@chakra-ui/react'
import { Children, isValidElement, useMemo } from 'react'

const ProductGrid = (props) => {
    const columns = useMemo(() => {
        const count = Children.toArray(props.children).filter(isValidElement).length
        return {
            base: Math.min(2, count),
            md: Math.min(3, count),
            lg: Math.min(4, count),
            xl: Math.min(5, count),
        }
    }, [props.children])
    return (
        <SimpleGrid
            columns={columns}
            columnGap={{
                base: '4',
                md: '6',
            }}
            rowGap={{
                base: '8',
                md: '10',
            }}
            {...props}
        />
    )
}

export default ProductGrid
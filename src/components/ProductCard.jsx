import {
    AspectRatio,
    Box,
    Button,
    Image,
    Skeleton,
    Stack,
} from '@chakra-ui/react'
import FavouriteButton from './FavouriteButton'
import {useNavigate} from 'react-router-dom'


const ProductCard = (props) => {
    const {image, title, link, rootProps= {}} = props

    const navigate = useNavigate()


    return (
        <Stack
            spacing={{
                base: '4',
                md: '5',
            }}
            {...rootProps}
        >
            <Box position="relative">
                <AspectRatio ratio={4 / 3}>
                    <Image
                        src={image}
                        alt={title}
                        draggable="false"
                        fallback={<Skeleton />}
                        borderRadius={{
                            base: 'md',
                            md: 'xl',
                        }}
                    />
                </AspectRatio>
                <p>{title}</p>
                <FavouriteButton
                    position="absolute"
                    top="4"
                    right="4"
                    aria-label={`Add ${title} to your favourites`}
                />
            </Box>
            <Stack align="center">
                <Button onClick={() => navigate(link)}
                        colorScheme="blue"
                        width="full" >
                    Перейти
                </Button>
            </Stack>
        </Stack>
    )
}

export default ProductCard
import React from "react";
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    useDisclosure, InputGroup, Input, InputRightElement, Link, Container
} from "@chakra-ui/react";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaSearchengin} from "react-icons/fa6";
import useMealContext from "../hooks/useMealContext";
import SearchBar from "./SearchBar";

const Header = () => {


    const {isOpen, onOpen, onClose} = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <Container maxW={'1200px'}>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding={6}
                color="blue"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <Link to='/'>Meal DB</Link>
                    </Heading>
                </Flex>

                <SearchBar/>

                <Box display={{base: "block", md: "none"}} onClick={handleToggle}>
                    <GiHamburgerMenu/>
                </Box>



                <Box
                    display={{base: isOpen ? "block" : "none", md: "block"}}
                    mt={{base: 4, md: 0}}
                >
                    <Button
                        colorScheme="blue"
                        _hover={{bg: "blue.700", borderColor: "blue.700"}}
                    >
                        <Link to="/register"> Search</Link>
                    </Button>
                </Box>
            </Flex>
        </Container>

    );
};

export default Header;

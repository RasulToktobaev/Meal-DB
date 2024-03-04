import React from "react";
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    useDisclosure, InputGroup, Input, InputRightElement
} from "@chakra-ui/react";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaSearchengin} from "react-icons/fa6";
import useMealContext from "../hooks/useMealContext";

const Header = () => {
    const {setText} = useMealContext()

    const {isOpen, onOpen, onClose} = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
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
                    Meal DB
                </Heading>
            </Flex>

            <Box display={{base: "block", md: "none"}} onClick={handleToggle}>
                <GiHamburgerMenu/>
            </Box>

            <Stack
            >
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type='text'
                        placeholder='Please write the meal name'
                        onChange={(e) => setText(e.target.value)}
                    />
                    <InputRightElement width='5rem'>
                        <Button h='1.75rem' size='sm'>
                            <FaSearchengin/>
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Stack>

            <Box
                display={{base: isOpen ? "block" : "none", md: "block"}}
                mt={{base: 4, md: 0}}
            >
                <Button
                    colorScheme="blue"
                    _hover={{bg: "blue.700", borderColor: "blue.700"}}
                >
                    Create account
                </Button>
            </Box>
        </Flex>
    );
};

export default Header;

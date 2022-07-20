import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('#8BA6A9')}
        color={useColorModeValue('white')}
        fontFamily={'Helvetica Neue'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Map</Link>
            <Link href={'#'}>Contact</Link>
          </Stack>
          <Text>© 2022 Carbon Calc. All rights reserved</Text>
        </Container>
      </Box>
    );
  }
import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  import './Footer.css'
  import { Link as ReactLink} from 'react-router-dom';
  
  export default function Footer() {
    return (
      <div className='footer'>
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
              <ReactLink to="/">Home</ReactLink>
              <ReactLink to="/about">About</ReactLink>
              <ReactLink to="/map">Map</ReactLink>
              <ReactLink to="/contact">Contact</ReactLink>
            </Stack>
            <Text>© 2022 Carbon Calc. All rights reserved</Text>
          </Container>
        </Box>
      </div>
    );
  }
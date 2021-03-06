import { useState, useRef } from 'react';
import Loading from '../Loading/Loading';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';

const center = { lat: 37.8199, lng: -122.4783 }
const milesPerGallon = 20

export default function Maptool() {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  })
  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState("")
  const [carbonFootprint, setCarbonFootprint] = useState("")
  const originRef = useRef()
  const destinationRef = useRef()

  if (!isLoaded) {
    return <Loading />
  }

  async function calculateRoute() {
    if (originRef.current.value === '' | destinationRef.current.value === '') {
      return
    }
    const directionsService = new window.google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: 'DRIVING',
      unitSystem: window.google.maps.UnitSystem.IMPERIAL,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    calculateCarbonFootprint(results.routes[0].legs[0].distance.text)
  } 

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setCarbonFootprint('')
    originRef.current.value = ''
    destinationRef.current.value = ''
    window.location.reload(true)
  }

  function calculateCarbonFootprint(distance) {
    let gallons = parseFloat(distance.split('[')[0])/milesPerGallon
    let footprint = gallons * 8.887
    setCarbonFootprint(footprint.toFixed(2) + ' kg CO2')
  }

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      bgColor='#8BA6A9'
      h='100vh'
      w='100vw'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        <GoogleMap 
          center={center} 
          zoom={10} 
          mapContainerStyle={{width: '100%', height: '100%'}}
          options={{fullscreenControl: false, streetViewControl: false, mapTypeControl: false, zoomControl: false}}
          onLoad={map => setMap(map)}
          >
          <Marker position={center} />
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} /> }
        </GoogleMap>
      </Box>

      <Box
        p={4}
        borderRadius='lg'
        my={28}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='2'
      >
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Autocomplete>
            <Input type='text' placeholder='Origin' ref={originRef} zIndex='100'/>
          </Autocomplete>
          <Autocomplete>
          <Input type='text' placeholder='Destination' ref={destinationRef} zIndex='100'/>
          </Autocomplete>
          <ButtonGroup>
            <Button color='#8BA6A9' type='submit' onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimes color='#8BA6A9'/>}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: {distance} </Text>
          <Text>Carbon Footprint: {carbonFootprint}</Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow color='#8BA6A9'/>}
            isRound
            onClick={() => map.panTo(center)}
          />
        </HStack>
      </Box>
    </Flex>
  );
}
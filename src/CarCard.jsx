import React from 'react'
import { Card, Image, CardBody, CardFooter,Stack,Heading,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const CarCard = ({car}) => {
  return (
    <div>
        <Card maxW='sm'>
  <CardBody>
    <Image
      src={car.pic}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{car.name}</Heading>

      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
    <ButtonGroup spacing='2'>
      <Link to={`/details/${car.id}`}>
      <Button variant='solid' colorScheme='blue' id="btnubfo">
        Info
      </Button></Link>
   
    </ButtonGroup>

</Card>
    </div>
  )
}

export default CarCard
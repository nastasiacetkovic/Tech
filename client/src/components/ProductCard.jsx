import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorMode,
  Icon,
  Button,
  Tolltip,
  Stack,
  Link,
  HStack,
  Text,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link as ReactLink } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';
import { useState } from 'react';
const ProductCard = ({ product }) => {
  return (
    <Stack
      p='2'
      spacing='3px'
      bg={useColorMode('white', 'gray.800')}
      minW='240px'
      h='450px'
      borderWidth='1px'
      rounded='lg'
      shadow='lg'
      position='relative'>
      {product.isNew && <Circle size='10px' position='absolute' top={2} right={2} bg='green.300' />}
      {product.stock <= 0 && <Circle size='10px' position='absolute' top={2} right={2} bg='red.300' />}
      <Image src={product.image} alt={product.name} roundedTop='lg' />
      <Box></Box>
    </Stack>
  );
};

export default ProductCard;

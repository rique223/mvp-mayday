import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Image,
  Heading,
  Text,
  HStack,
  VStack,
  Tag,
  Button,
} from "@chakra-ui/react";

const CardPlano = ({ infoPlano }) => {
  return (
    <VStack
      spacing='47px'
      padding='23px'
      background='#FFFFFF'
      shadow='xl'
      borderWidth='1px'
      borderStyle='solid'
      borderColor='#ccc'
      borderRadius='25px'
      align='flex-start'
    >
      <HStack spacing='15px'>
        <Image
          fallbackSrc='https://via.placeholder.com/100'
          borderRadius='full'
        />
        <VStack spacing='0'>
          <Heading
            fontWeight='400'
            fontSize='2rem'
            lineHeight='42px'
            color='#000000'
          >
            {infoPlano.titulo}
          </Heading>
          <Text
            fontWeight='300'
            fontSize='1.125rem'
            lineHeight='21px'
            color='#808080'
          >
            {infoPlano.subTitulo}
          </Text>
        </VStack>
      </HStack>

      <VStack spacing='8px' align='flex-start'>
        <Heading
          as='h3'
          fontWeight='400'
          fontSize='1.5rem'
          lineHeight='28px'
          color='#000000'
        >
          Principais Agentes
        </Heading>
        <HStack spacing='20px'>
          {infoPlano &&
            infoPlano.principaisAgentes.map((agente) => (
              <HStack key={agente.id} spacing='5px'>
                <Image
                  fallbackSrc='https://via.placeholder.com/32'
                  borderRadius='full'
                />
                <VStack spacing='0' align='flex-start'>
                  <Text
                    fontWeight='400'
                    fontSize='1.125rem'
                    lineHeight='21px'
                    color='#303030'
                  >
                    {agente.nome}
                  </Text>
                  <Text
                    fontWeight='400'
                    fontSize='0.75rem'
                    lineHeight='14px'
                    color='#808080'
                  >
                    {agente.cargo}
                  </Text>
                </VStack>
              </HStack>
            ))}
        </HStack>
      </VStack>

      <VStack align='flex-start'>
        <Heading
          as='h3'
          fontWeight='400'
          fontSize='1.5rem'
          lineHeight='28px'
          color='#000000'
        >
          Tags
        </Heading>
        <HStack>
          {infoPlano &&
            infoPlano.tags.map((tag) => (
              <Tag
                key={tag.id}
                bg={tag.cor}
                borderRadius='50px'
                fontWeight='400'
                fontSize='12px'
                lineHeight='14px'
                color='#FFFFFF'
              >
                {tag.titulo}
              </Tag>
            ))}
        </HStack>
      </VStack>

      <HStack w='100%' justify='flex-end'>
        <Button
          w='60px'
          h='60px'
          borderRadius='50%'
          padding='0'
          boxShadow='lg'
          bg='#fff'
        >
          <AddIcon w='20px' h='20px' color='#007B2F' />
        </Button>
        <Button
          w='60px'
          h='60px'
          borderRadius='50%'
          padding='0'
          boxShadow='lg'
          bg='#fff'
        >
          <HamburgerIcon w='20px' h='20px' color='#007B2F' />
        </Button>
      </HStack>
    </VStack>
  );
};

export default CardPlano;

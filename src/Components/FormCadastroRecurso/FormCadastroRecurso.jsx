import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  VStack,
} from "@chakra-ui/react";
import { inputStyle } from "../../Utils/globalStyles";

const FormCadastroRecurso = ({ setCadastraNovoRecurso }) => {
  const modalButtonStyle = {
    boxShadow: "md",
    borderRadius: "50px",
    color: "#fff",
    fontWeight: "400",
    fontSize: "1.5rem",
    lineHeight: "28px",
    transition: "filter .2s ease",
    _hover: {
      filter: "brightness(120%)",
    },
    _active: {
      filter: "brightness(120%)",
    },
  };

  return (
    <>
      <Heading
        fontWeight='400'
        fontSize='4.5rem'
        lineHeight='5.25rem'
        display='flex'
        alignSelf='center'
        marginBlockEnd='3rem'
        color='#000000'
        opacity='.4'
      >
        Novo Recurso
      </Heading>
      <VStack spacing='2rem'>
        <FormControl>
          <FormLabel htmlFor='nome'>Nome</FormLabel>
          <Input
            id='nome'
            type='text'
            {...inputStyle}
            placeholder='Escreva o nome do recurso'
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='responsavel'>Responsável</FormLabel>
          <Select
            id='responsavel'
            placeholder='Selecione o responsavel por esse recurso'
            {...inputStyle}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='quantidade_inicial'>Quantidade inicial</FormLabel>

          <NumberInput
            id='quantidade_inicial'
            placeholder='Insira a quantidade de recursos inicial'
            defaultValue={0}
            min={0}
            max={999}
          >
            <NumberInputField {...inputStyle} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </VStack>

      <HStack
        spacing='1rem'
        w='100%'
        justifyContent='flex-end'
        marginBlockStart='20px'
      >
        <Button
          bg='#95AE23'
          onClick={() => setCadastraNovoRecurso(false)}
          {...modalButtonStyle}
        >
          Salvar
        </Button>
        <Button
          bg='red'
          onClick={() => setCadastraNovoRecurso(false)}
          {...modalButtonStyle}
        >
          Cancelar
        </Button>
      </HStack>
    </>
  );
};

export default FormCadastroRecurso;

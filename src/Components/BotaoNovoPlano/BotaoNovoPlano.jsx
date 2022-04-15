import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import fetchPlanoAtivacaoById from "../../Helpers/fetchPlanoAtivacaoById";
import fetchDefaultPlanoCidade from "../../Helpers/fetchDefaultPlanoCidade";
import { Link, useNavigate } from "react-router-dom";

const BotaoNovoPlano = ({ children, idCidade }) => {
  const cssValue = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#FFFFFF",
    border: "2px dashed #A0A0A0",
    borderRadius: "25px",
    w: "100%",
    maxW: "530px",
    h: "100%",
    minH: "473px",
    shadow: "xl",
    transition: "opacity .2s ease",
    opacity: 1,
    _hover: {
      cursor: "pointer",
      opacity: ".5",
    },
  };

  const navigate = useNavigate();

  const criarDefault = async (idCidade) => {
    try {
      const data = await fetchDefaultPlanoCidade(idCidade);
      return navigate("/contingenciaInterna/" + data.id)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex {...cssValue} onClick={() => criarDefault(idCidade)}>
      <AddIcon w={100} h={100} color="#A0A0A0" />
    </Flex>
  );
};

export default BotaoNovoPlano;

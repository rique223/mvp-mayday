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
    h: "100%",
    shadow: "xl",
    transition: "filter .2s ease",
    _hover: {
      cursor: "pointer",
      filter: "brightness(120%)",
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
      <AddIcon w={100} h={100} />
    </Flex>
  );
};

export default BotaoNovoPlano;

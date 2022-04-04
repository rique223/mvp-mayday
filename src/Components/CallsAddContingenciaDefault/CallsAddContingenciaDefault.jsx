import { Flex } from '@chakra-ui/layout'
import React from 'react'

export default function CallsAddContingenciaDefault({children}) {

  const cssValue = {
    // w:"30%",
    // h:"full",
    w: "30%",
    // minW: "fit-content",
    marginRight:"1%",
    marginBottom:"0.5%",
    direction:"column",
    borderRadius:"25px",
    borderWidth:"2px",
    borderColor:"gray.400",
    boxShadow:"10px",
    padding:"7px",
    justifyContent:"center",
    fontSize:"300px",
    alignItems:"center",
    textAlign:"center",
    color:"gray.700",
    backgroundColor:"gray.200"
  }  

  return (
      <Flex {...cssValue}>{children}</Flex>
  )
}

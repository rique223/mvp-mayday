import { Badge, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { headingStyle } from "../../Utils/globalStyles";
import Plus from "../../Media/plus.svg";

const TagsContingencia = ({tags}) => {
  const BadgeStyle = {
    variant: "solid",
    marginInlineEnd: "16px",
    paddingInline: "20px",
    borderRadius: "50px",
    height: "47px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "normal",
    marginBlockEnd: "16px",
    cursor: "pointer",
    transition: "filter .2s ease",
    _hover: {
      filter: "brightness(120%)",
      boxShadow: "md",
    },
  };

  return (
    <Flex flexDirection='column' maxW='100%' marginBlockEnd='2rem'>
      <Flex flexDirection='column'>
        <Heading {...headingStyle}>Tags</Heading>
        <Flex flexDirection='row' flexWrap='wrap'>
          {tags.map((t) => (
            <Badge colorScheme='green' {...BadgeStyle}>
              {t.descTags}
            </Badge>
          ))}
          <Button
            variant='solid'
            borderRadius='50px'
            display='flex'
            alignItems='center'
            justifyContent='center'
            height='47px'
            marginBlockEnd='16px'
            background='#007B2F'
            transition='filter .2s ease'
            _hover={{ cursor: "pointer", filter: "brightness(150%)" }}
          >
            <Image src={Plus} boxSize='24px' />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TagsContingencia;

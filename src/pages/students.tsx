import { Button, Card, createListCollection, HStack, Input, InputGroup, Portal, Select, SimpleGrid } from "@chakra-ui/react";
import { BiFilterAlt, BiPlus } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { HeaderTable } from "@/components/HeaderTable";

export default function Students() {
  return (
    <DefaultLayout
      tittle="Gestão de Estudantes"
      descripition="Gerencie informações dos estudantes matrículados"
    >
      <HStack>
        <HeaderTable/>
      </HStack>
    </DefaultLayout>
  )
}

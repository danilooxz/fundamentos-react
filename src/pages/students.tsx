import { HStack } from "@chakra-ui/react";
import { HeaderTable } from "@/components/HeaderTable";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Students() {
  return (
    <DefaultLayout
      tittle="Gestão de Estudantes"
      descripition="Gerencie informações dos estudantes matrículados"
    >
      <HStack>
        <HeaderTable />
      </HStack>
    </DefaultLayout>
  );
}

import { HStack } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Students() {
  return (
    <DefaultLayout
      tittle="Gestão de Estudantes"
      descripition="Gerencie informações dos estudantes matriculados"
    >
      <HStack gap={5}>
        {/*
          Input - Campo de pesquisa - SearchInput

          Select - Filtro de Status
          Button - Filtros
          Button - Exportar
          Button - Action Button - Criar um novo estudante
        */}
      </HStack>
    </DefaultLayout>
  );
}

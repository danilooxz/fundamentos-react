import { HStack } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { IoPeopleSharp } from "react-icons/io5";
import { IndicatorCard } from "@/components/IndicatorCard";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout
      tittle="Dashboard Acadêmico"
      descripition="Visão geral do sistema universitáro"
    >
      <HStack gap={8}>
        <IndicatorCard
          label="Total de Estudantes"
          value={2342}
          indicator="-32% este mes"
          icon={IoPeopleSharp}
          colorPallete="blue"
        />

        <IndicatorCard
          label="Professor Ativos"
          value={53}
          indicator="+1% este mes"
          icon={FaGraduationCap}
          colorPallete="green"
        />

        <IndicatorCard
          label="Cursos Oferecidos"
          value={17}
          indicator="+3% este mes"
          icon={ImBooks}
          colorPallete="red"
        />

        <IndicatorCard
          label="Taxa de Aprovação"
          value={0.32}
          style="percent"
          indicator="+12% este mes"
          icon={FaArrowTrendUp}
          colorPallete="orange"
        />
      </HStack>
    </DefaultLayout>
  );
}

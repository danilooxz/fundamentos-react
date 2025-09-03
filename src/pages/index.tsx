import { Card, Flex, FormatNumber, HStack, Icon, Stat } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { IoPeopleSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Home() {
  return (
    <DefaultLayout
      tittle="Dashboard Acadêmico"
      descripition="Visão geral do sistema universitáro"
    >
    <HStack>
      <Card.Root>
        <Card.Body flexDir="row" alignItems="center" gap={6}>
          <Stat.Root>
            <Stat.Label fontSize="md"> Total de Estudantes </Stat.Label>
            <Stat.ValueText>
              <FormatNumber value={2324} />
            </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start" > +12% from last week </Stat.UpIndicator>
            </Stat.Root>

              <Flex justify="center" align="center" backgroundColor="blue.200" rounded="lg" p={4}>
                <Icon size="xl" color="blue.700">
                  <IoPeopleSharp />
                </Icon>
              </Flex>
          </Card.Body>
        </Card.Root>

        <Card.Root>
        <Card.Body flexDir="row" alignItems="center" gap={6}>
          <Stat.Root>
            <Stat.Label fontSize="md"> Professores Ativos </Stat.Label>
            <Stat.ValueText>
              <FormatNumber value={2324} />
            </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start" > +12% from last week </Stat.UpIndicator>
            </Stat.Root>

              <Flex justify="center" align="center" backgroundColor="green.200" rounded="lg" p={4}>
                <Icon size="xl" color="blue.700">
                  <FaGraduationCap />
                </Icon>
              </Flex>
          </Card.Body>
        </Card.Root>

        <Card.Root>
        <Card.Body flexDir="row" alignItems="center" gap={6}>
          <Stat.Root>
            <Stat.Label fontSize="md"> Cursos Oferecidos </Stat.Label>
            <Stat.ValueText>
              <FormatNumber value={2324} />
            </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start" > +12% from last week </Stat.UpIndicator>
            </Stat.Root>

              <Flex justify="center" align="center" backgroundColor="red.200" rounded="lg" p={4}>
                <Icon size="xl" color="blue.700">
                  <ImBooks />
                </Icon>
              </Flex>
          </Card.Body>
        </Card.Root>

        <Card.Root>
        <Card.Body flexDir="row" alignItems="center" gap={6}>
          <Stat.Root>
            <Stat.Label fontSize="md"> Taxa de Aprovação </Stat.Label>
            <Stat.ValueText>
              <FormatNumber value={2324} />
            </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start" > +12% from last week </Stat.UpIndicator>
            </Stat.Root>

              <Flex justify="center" align="center" backgroundColor="orange.200" rounded="lg" p={4}>
                <Icon size="xl" color="blue.700">
                  <FaArrowTrendUp/>
                </Icon>
              </Flex>
          </Card.Body>
        </Card.Root>

      </HStack>
    </DefaultLayout>
  );
}

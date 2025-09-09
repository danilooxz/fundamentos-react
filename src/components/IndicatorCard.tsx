import { Card, Flex, FormatNumber, Icon, Stat } from "@chakra-ui/react";
import type { ColorPalette } from "@chakra-ui/react/styled-system"
import { IconType } from "react-icons";

interface IndicatorCardProps {
  label: string;
  value: number;
  indicator: string;
  icon: IconType;
  colorPallete: ColorPalette;
}

export function IndicatorCard({ label, value, indicator, icon, colorPallete }: IndicatorCardProps) {
  const isNegative = indicator.trim().startsWith("-");
  const Indicator = isNegative ? Stat.DownIndicator : Stat.UpIndicator;
  return (
    <Card.Root>
      <Card.Body flexDir="row" alignItems="center" gap={6}>
        <Stat.Root>
          <Stat.Label fontSize="md"> {label} </Stat.Label>
          <Stat.ValueText>
            <FormatNumber value={value} />
          </Stat.ValueText>
          <Indicator alignSelf="start" >{indicator} </Indicator>
        </Stat.Root>

        <Flex justify="center" align="center" backgroundColor={`${colorPallete}.200`} rounded="lg" p={4}>
          <Icon size="xl" color={`${colorPallete}.700`}>
            <Icon as ={icon} size="xl" color={`${colorPallete}.700`}/>
          </Icon>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}

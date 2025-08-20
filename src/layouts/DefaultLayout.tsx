import { Flex, Group, IconButton, Image, Separator } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IoMdMoon, IoMdSettings, IoMdSunny } from "react-icons/io";
import { IoHelpCircle, IoNotificationsSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { Avatar } from "@/components/ui/avatar";
import { useColorMode } from "@/components/ui/color-mode";
import logoBranca from "../../public/assets/logo-cesul-branco.png";
import logoPreta from "../../public/assets/logo-cesul-preta.png";

type DefaultLayoutProps = {
  children: ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex flexDir="column">
      <Flex w="full" justify="space-between" borderBottomWidth={1} py={2} px={4}
      >
        <Flex align="center" gap={4}>
          <IconButton variant="ghost" rounded="full">
            <TiThMenu />
          </IconButton>
          {colorMode === "dark" ? (
            <Image w="130px" height="60px" src={logoBranca.src} />
          ) : (
            <Image w="110px" height="60px" src={logoPreta.src} />
          )}
        </Flex>

        <Group>
          <IconButton variant="ghost" rounded="full">
            <IoHelpCircle />
          </IconButton>

          <IconButton variant="ghost" rounded="full">
            <IoNotificationsSharp />
          </IconButton>

          <IconButton variant="ghost" rounded="full">
            <IoMdSettings />
          </IconButton>

          <IconButton variant="ghost" rounded="full" onClick={toggleColorMode}>
            {colorMode === "dark" ? <IoMdMoon /> : <IoMdSunny />}
          </IconButton>

          <Separator h={6} orientation="vertical" mx={2} />

          <Avatar src="https://avatars.githubusercontent.com/u/128654904?v=4" />
        </Group>
      </Flex>

      {children}
    </Flex>
  );
}

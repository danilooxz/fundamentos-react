import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <Heading color="red"> Hello World! </Heading>
    </DefaultLayout>
  );
}

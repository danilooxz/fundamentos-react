import { VStack } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { HeaderTable } from "@/components/HeaderTable";
import { Table } from "@/components/Table";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { api } from "@/services/apiClient";

type Student = {
  fullname: string;
  email: string;
  course: string;
  semester: string;
  status: string;
  enrollment: string;
};

export default function Students() {
  const data: Student[] = [
    {
      fullname: "Ana Beatriz Silva",
      email: "ana.silva@email.com",
      course: "Engenharia de Software",
      semester: "5º",
      status: "Ativo",
      enrollment: "2021001",
    },
    {
      fullname: "Bruno Henrique Souza",
      email: "bruno.souza@email.com",
      course: "Medicina",
      semester: "3º",
      status: "Ativo",
      enrollment: "2021023",
    },
    {
      fullname: "Carla Mendes Oliveira",
      email: "carla.oliveira@email.com",
      course: "Direito",
      semester: "7º",
      status: "Trancado",
      enrollment: "2020008",
    },
    {
      fullname: "Diego Ferreira Costa",
      email: "diego.costa@email.com",
      course: "Markting",
      semester: "4º",
      status: "Ativo",
      enrollment: "2021045",
    },
    {
      fullname: "Eduarda Lima Santos",
      email: "eduarda.santos@email.com",
      course: "Administração",
      semester: "6º",
      status: "Inativo",
      enrollment: "2019056",
    },
    {
      fullname: "Ana Beatriz Silva",
      email: "ana.silva@email.com",
      course: "Estética e Cosmetica",
      semester: "5º",
      status: "Ativo",
      enrollment: "2021001",
    },
    {
      fullname: "Bruno Henrique Souza",
      email: "bruno.souza@email.com",
      course: "Engenharia Civil",
      semester: "3º",
      status: "Ativo",
      enrollment: "2021023",
    },
    {
      fullname: "Carla Mendes Oliveira",
      email: "carla.oliveira@email.com",
      course: "Arquitetura e Urbanismo",
      semester: "7º",
      status: "Trancado",
      enrollment: "2020008",
    },
    {
      fullname: "Diego Ferreira Costa",
      email: "diego.costa@email.com",
      course: "Psicologia",
      semester: "4º",
      status: "Ativo",
      enrollment: "2021045",
    },
    {
      fullname: "Eduarda Lima Santos",
      email: "eduarda.santos@email.com",
      course: "Geografia",
      semester: "6º",
      status: "Inativo",
      enrollment: "2019056",
    },
  ];

  const columnHelper = createColumnHelper<Student>();

  const columns = [
    columnHelper.accessor("fullname", {
      header: "Nome Completo",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("course", {
      header: "Curso",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("semester", {
      header: "Semestre",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("enrollment", {
      header: "Matrícula",
      cell: (info) => info.getValue(),
    }),
  ];

  const [students, setStudents] = useState<Student[]>([]);

  // useEffect(() => {
  //   async function load() {
  //     const { data } = await api.get("/students");

  //     setStudents(data);
  //   }
  //   load();
  // }, []);

  return (
    <DefaultLayout
      tittle="Gestão de Estudantes"
      descripition="Gerencie informações dos estudantes matrículados"
    >
      <VStack align="start">
        <HeaderTable />

        <Table data={data} columns={columns} />
      </VStack>
    </DefaultLayout>
  );
}

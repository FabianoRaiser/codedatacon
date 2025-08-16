// src/components/ListaDados.tsx
import React from "react";
import { List, Title } from "@mantine/core";
import { CustomCard } from "../Card";
const ListaDados = ({label, data}: {label: string, data: { name: string}[]}) => {

  return (
    <CustomCard>
      <Title order={3}>{label}</Title>
      <List>
        {data.map((item: { name: string }, index: number) => (
          <List.Item key={index}> {index + 1} - {item.name}</List.Item>
        ))}
      </List>
    </CustomCard>
  );
};

export default ListaDados;

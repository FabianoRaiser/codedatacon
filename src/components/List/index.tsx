// src/components/ListaDados.tsx
import React from "react";
import { List, Title } from "@mantine/core";
import { CustomCard } from "../Card";

const ListaDados:  = ({label, value}) => {

  return (
    <CustomCard>
      <Title order={3}>{label}</Title>
      <List>
        {data.map((item: any, index: any) => (
          <List.Item key={index}>{item.name}</List.Item>
        ))}
      </List>
    </CustomCard>
  );
};

export default ListaDados;

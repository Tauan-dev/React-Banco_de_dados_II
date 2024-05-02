import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, ListItem, Typography } from "@mui/material";

interface Cliente {
  CPF: string;
  Nome: string;
  Email: string;
  DataCadastro: string;
}

const ListaClientes = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get<Cliente[]>("/clientes") // Adicionando tipo de resposta esperada
      .then((response) => {
        setClientes(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Erro ao buscar clientes.");
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Typography variant="h4">Lista de Clientes</Typography>
      <List>
        {clientes.map((cliente) => (
          <ListItem key={cliente.CPF}>
            {cliente.Nome} - {cliente.CPF}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListaClientes;

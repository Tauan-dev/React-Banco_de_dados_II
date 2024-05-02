import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

interface Ingrediente {
  Nome: string;
  EstoqueAtual: number;
}

const ListaIngredientes = () => {
  const [ingredientes, setIngredientes] = useState<Ingrediente[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/ingredientes")
      .then((response) => {
        setIngredientes(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar ingredientes:", err);
        setError("Erro ao processar a requisição");
        setLoading(false);
      });
  }, []);

  if (loading) return <Typography>Carregando...</Typography>;
  if (error) return <Typography>Erro: {error}</Typography>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Lista de Ingredientes</Typography>
        <List>
          {ingredientes.map((ingrediente, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={ingrediente.Nome}
                secondary={`Estoque Atual: ${ingrediente.EstoqueAtual}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ListaIngredientes;

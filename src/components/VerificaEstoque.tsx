import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
} from "@mui/material";

interface ItemDeEstoque {
  Nome: string;
  EstoqueAtual: number;
}

const VerificaEstoque = () => {
  const [limite, setLimite] = useState("");
  const [itens, setItens] = useState<ItemDeEstoque[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const buscarItensEstoqueBaixo = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`/estoque-baixo/${limite}`);
      setItens(response.data); // Certifique-se de que o backend retorna um array
    } catch (err) {
      setError("Erro ao buscar itens com estoque baixo");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Verificar Itens com Estoque Baixo</Typography>
        <TextField
          label="Limite de Estoque"
          variant="outlined"
          type="number"
          value={limite}
          onChange={(e) => setLimite(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={buscarItensEstoqueBaixo}
          disabled={loading}
        >
          Buscar
        </Button>
        {loading && <Typography>Carregando...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        <List>
          {itens.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Nome: ${item.Nome}`}
                secondary={`Estoque Atual: ${item.EstoqueAtual}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default VerificaEstoque;

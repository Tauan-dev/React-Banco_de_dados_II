import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const EntregarPedido = () => {
  const [pedidoID, setPedidoID] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEntregarPedido = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(`/entregar-pedido/${pedidoID}`);
      setMensagem(response.data);
    } catch (err) {
      setError("Erro ao tentar entregar o pedido. Por favor, tente novamente.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Entregar Pedido</Typography>
        <TextField
          label="ID do Pedido"
          variant="outlined"
          type="number"
          value={pedidoID}
          onChange={(e) => setPedidoID(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleEntregarPedido}
          disabled={loading}
        >
          Entregar Pedido
        </Button>
        {loading && <Typography>Processando...</Typography>}
        {mensagem && <Typography>{mensagem}</Typography>}
        {error && <Typography color="error">{error}</Typography>}
      </CardContent>
    </Card>
  );
};

export default EntregarPedido;

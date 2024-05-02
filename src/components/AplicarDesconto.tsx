import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";

const AplicarDescontoNoPedido = () => {
  const [pedidoID, setPedidoID] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAplicarDesconto = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(`/aplicar-desconto/${pedidoID}`);
      setMensagem(response.data);
    } catch (err) {
      setError("Erro ao aplicar desconto. Por favor, tente novamente.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Aplicar Desconto</Typography>
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
          onClick={handleAplicarDesconto}
          disabled={loading}
        >
          Aplicar Desconto
        </Button>
        {loading && <Typography>Aplicando...</Typography>}
        {mensagem && (
          <Typography style={{ marginTop: 20, color: "green" }}>
            {mensagem}
          </Typography>
        )}
        {error && (
          <Typography color="error" style={{ marginTop: 20 }}>
            {error}
          </Typography>
        )}
      </CardContent>
      <li>
        <Link to="/pedidos">Ver Pedidos</Link>
      </li>
    </Card>
  );
};

export default AplicarDescontoNoPedido;

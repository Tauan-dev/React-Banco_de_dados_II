import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const ConfirmarPedido = () => {
  const [pedidoID, setPedidoID] = useState("");
  const [amount, setAmount] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConfirmarPedido = () => {
    setLoading(true);
    setError("");
    axios
      .post("/confirmar-pedido", { pedidoID, amount })
      .then((response) => {
        setMensagem(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Erro ao confirmar pedido. Por favor, tente novamente.");
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Confirmar Pedido</Typography>
        <TextField
          label="ID do Pedido"
          variant="outlined"
          type="number"
          value={pedidoID}
          onChange={(e) => setPedidoID(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Valor do Pagamento"
          variant="outlined"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleConfirmarPedido}
          disabled={loading}
        >
          Confirmar Pedido
        </Button>
        {loading && <Typography>Processando...</Typography>}
        {mensagem && <Typography>{mensagem}</Typography>}
        {error && <Typography color="error">{error}</Typography>}
      </CardContent>
    </Card>
  );
};

export default ConfirmarPedido;

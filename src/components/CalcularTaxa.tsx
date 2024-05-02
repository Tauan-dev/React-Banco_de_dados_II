import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const CalcularTaxa = () => {
  const [cep, setCep] = useState("");
  const [totalPedido, setTotalPedido] = useState("");
  const [totalComTaxa, setTotalComTaxa] = useState<number | null>(null); // Especificando que pode ser número ou null
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/calcular-taxa", {
        cep,
        totalPedido: parseFloat(totalPedido),
      });
      setTotalComTaxa(response.data.TotalComTaxa);
      setError("");
    } catch (err) {
      setError("Erro ao calcular a taxa. Por favor, tente novamente.");
      console.error(err);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Calcular Taxa</Typography>
        <TextField
          label="CEP"
          variant="outlined"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Total do Pedido"
          variant="outlined"
          type="number"
          value={totalPedido}
          onChange={(e) => setTotalPedido(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Calcular
        </Button>
        {totalComTaxa !== null && (
          <Typography variant="h6" style={{ marginTop: 20 }}>
            Total com Taxa: R$ {totalComTaxa.toFixed(2)}
          </Typography>
        )}
        {error && (
          <Typography color="error" style={{ marginTop: 20 }}>
            {error}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CalcularTaxa;

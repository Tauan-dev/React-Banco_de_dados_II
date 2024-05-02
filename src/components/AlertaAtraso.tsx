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

const AlertaAtraso = () => {
  const [pedidoID, setPedidoID] = useState("");
  const [mensagemAlerta, setMensagemAlerta] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerificarAtraso = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`/alerta-atraso/${pedidoID}`);
      setMensagemAlerta(response.data);
    } catch (err) {
      setError("Erro ao buscar alerta de atraso");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Verificar Alerta de Atraso</Typography>
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
          onClick={handleVerificarAtraso}
          disabled={loading}
        >
          Verificar
        </Button>
        {loading && <Typography>Carregando...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        {mensagemAlerta && (
          <Typography style={{ marginTop: 20 }}>{mensagemAlerta}</Typography>
        )}
      </CardContent>
      <div>
        <Link to="/">Home</Link>
      </div>
    </Card>
  );
};

export default AlertaAtraso;

import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

interface Detalhes {
  PedidoID: number;
  ClienteNome: string;
  ClienteEmail: string;
  Logradouro: string;
  Numero: string;
  Complemento: string;
  Bairro: string;
  Cidade: string;
  Estado: string;
  CEP: string;
  DataHora: string;
  Status: string;
  TotalPedido: number;
}

const DetalhesPedido = () => {
  const [pedidoID, setPedidoID] = useState("");
  const [detalhesPedido, setDetalhesPedido] = useState<Detalhes | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const buscarDetalhesPedido = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`/detalhes-pedido/${pedidoID}`);
      setDetalhesPedido(response.data[0]); // Assumindo que a resposta é um array e pegamos o primeiro item
    } catch (err) {
      setError(
        "Erro ao buscar detalhes do pedido. Por favor, tente novamente."
      );
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Detalhes do Pedido</Typography>
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
          onClick={buscarDetalhesPedido}
          disabled={loading}
        >
          Buscar Detalhes
        </Button>
        {loading && <Typography>Carregando...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        {detalhesPedido && (
          <div>
            <Typography>{`Pedido ID: ${detalhesPedido.PedidoID}`}</Typography>
            <Typography>{`Cliente: ${detalhesPedido.ClienteNome}`}</Typography>
            <Typography>{`Email: ${detalhesPedido.ClienteEmail}`}</Typography>
            <Typography>{`Endereço: ${detalhesPedido.Logradouro}, ${detalhesPedido.Numero}, ${detalhesPedido.Complemento}`}</Typography>
            <Typography>{`Bairro: ${detalhesPedido.Bairro}`}</Typography>
            <Typography>{`Cidade: ${detalhesPedido.Cidade}, ${detalhesPedido.Estado}`}</Typography>
            <Typography>{`CEP: ${detalhesPedido.CEP}`}</Typography>
            <Typography>{`Data e Hora: ${new Date(
              detalhesPedido.DataHora
            ).toLocaleString()}`}</Typography>
            <Typography>{`Status: ${detalhesPedido.Status}`}</Typography>
            <Typography>{`Total do Pedido: R$ ${detalhesPedido.TotalPedido.toFixed(
              2
            )}`}</Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DetalhesPedido;

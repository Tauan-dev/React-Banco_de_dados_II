import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { format } from "date-fns"; // Adicione isso para formatar datas

axios.defaults.baseURL = "http://localhost:4000";

type OrderDetail = {
  pedidoId: number;
  clienteNome: string;
  clienteEmail: string;
  enderecoCompleto: string;
  dataHoraFormatada: string;
  status: string;
  total: number; // Removido o '?' pois a API sempre retorna um total
};

const DetailedOrders = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/pedidos/detalhado")
      .then((response) => {
        const formattedData = response.data.map((item: any) => ({
          pedidoId: item.PedidoID,
          clienteNome: item.ClienteNome,
          clienteEmail: item.ClienteEmail,
          enderecoCompleto: `${item.Logradouro}, ${item.Numero} ${item.Complemento}, ${item.Bairro}, ${item.Cidade}, ${item.Estado}, ${item.CEP}`,
          dataHoraFormatada: format(new Date(item.DataHora), "PPPpp"),
          status: item.Status,
          total: item.TotalPedido,
        }));
        setOrderDetails(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar detalhes dos pedidos:", err);
        setError("Erro ao processar a requisição");
        setLoading(false);
      });
  }, []);

  if (loading) return <Typography>Carregando...</Typography>;
  if (error) return <Typography>Erro: {error}</Typography>;

  return (
    <Grid container spacing={2}>
      {orderDetails.map((detail, index) => (
        <Grid item xs={12} sm={6} md={4} key={detail.pedidoId}>
          <Card>
            <CardContent>
              <Typography variant="h6">Pedido ID: {detail.pedidoId}</Typography>
              <Typography>Cliente: {detail.clienteNome}</Typography>
              <Typography>Email: {detail.clienteEmail}</Typography>
              <Typography>Endereço: {detail.enderecoCompleto}</Typography>
              <Typography>Data e Hora: {detail.dataHoraFormatada}</Typography>
              <Typography>Status: {detail.status}</Typography>
              <Typography>Total: ${detail.total.toFixed(2)}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DetailedOrders;

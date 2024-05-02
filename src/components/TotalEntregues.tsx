import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";

interface TotalEntreguesHoje {
  TotalPedidosEntregues: number;
}

const TotalEntreguesHoje = () => {
  const [totalEntregues, setTotalEntregues] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/total-entregues-hoje")
      .then((response) => {
        setTotalEntregues(response.data.TotalPedidosEntregues);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar o total de pedidos entregues:", err);
        setError("Erro ao processar a requisição");
        setLoading(false);
      });
  }, []);

  if (loading) return <Typography>Carregando...</Typography>;
  if (error) return <Typography>Erro: {error}</Typography>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Total de Pedidos Entregues Hoje:</Typography>
        <Typography variant="h4">${totalEntregues?.toFixed(2)}</Typography>
      </CardContent>
    </Card>
  );
};

export default TotalEntreguesHoje;

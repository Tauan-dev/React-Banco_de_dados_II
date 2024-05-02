import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
} from "@mui/material";

const ListaPedidos = () => {
  interface Pedido {
    ID: number;
    ClienteCPF: string;
    DataHora: string;
    Status: string;
    TotalPedido: number;
  }

  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("/pedidos")
      .then((response) => {
        setPedidos(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar pedidos:", err);
        setError("Erro ao processar a requisição");
        setLoading(false);
      });
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Lista de Pedidos</Typography>
        {loading && <Typography>Carregando...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Data e Hora</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos.map((pedido) => (
                <TableRow key={pedido.ID}>
                  <TableCell>{pedido.ID}</TableCell>
                  <TableCell>{pedido.ClienteCPF}</TableCell>
                  <TableCell>{pedido.DataHora}</TableCell>
                  <TableCell>{pedido.Status}</TableCell>
                  <TableCell>R$ {pedido.TotalPedido.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default ListaPedidos;

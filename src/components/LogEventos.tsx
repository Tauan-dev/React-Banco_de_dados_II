import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

const VisualizarLogsEventos = () => {
  // Definindo a interface dentro do componente
  interface LogEvento {
    ID: number;
    Data: string;
    Evento: string;
    Descricao: string;
  }

  const [logs, setLogs] = useState<LogEvento[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("/logs-eventos")
      .then((response) => {
        setLogs(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Erro ao buscar logs de eventos.");
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Typography>Carregando...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Paper style={{ margin: "20px", padding: "20px" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Logs de Eventos
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Evento</TableCell>
            <TableCell>Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((log, index) => (
            <TableRow key={index}>
              <TableCell>{log.ID}</TableCell>
              <TableCell>{new Date(log.Data).toLocaleString()}</TableCell>
              <TableCell>{log.Evento}</TableCell>
              <TableCell>{log.Descricao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default VisualizarLogsEventos;

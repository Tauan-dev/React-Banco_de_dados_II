import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

interface ResultadoAnalise {
  VendasPeriodoAtual: number;
  VendasPeriodoAnterior: number;
  TendenciaVendas: string;
}

const AnaliseVendas = () => {
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [resultado, setResultado] = useState<ResultadoAnalise | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalisarVendas = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("/analise-vendas", {
        dataInicio,
        dataFim,
      });
      // Verifique se a resposta contém dados e acesse o primeiro item do array
      if (response.data.length > 0) {
        setResultado(response.data[0]);
      } else {
        setResultado(null);
        setError("Nenhum dado encontrado para o período selecionado.");
      }
    } catch (err) {
      setError("Erro ao analisar vendas. Por favor, tente novamente.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Análise de Vendas</Typography>
        <TextField
          label="Data Início"
          type="date"
          value={dataInicio}
          onChange={(e) => setDataInicio(e.target.value)}
          margin="normal"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Data Fim"
          type="date"
          value={dataFim}
          onChange={(e) => setDataFim(e.target.value)}
          margin="normal"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAnalisarVendas}
          disabled={loading}
        >
          Analisar
        </Button>
        {loading && <Typography>Carregando...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        {resultado ? (
          <div>
            <Typography>
              Vendas do Período Atual: R${" "}
              {resultado.VendasPeriodoAtual.toFixed(2)}
            </Typography>
            <Typography>
              Vendas do Período Anterior: R${" "}
              {resultado.VendasPeriodoAnterior.toFixed(2)}
            </Typography>
            <Typography>
              Tendência das Vendas: {resultado.TendenciaVendas}
            </Typography>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default AnaliseVendas;

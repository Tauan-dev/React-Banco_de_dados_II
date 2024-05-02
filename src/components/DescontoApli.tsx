import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Typography, Card, CardContent } from "@mui/material";

const AplicarDesconto = () => {
  const [desconto, setDesconto] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  interface DescontoResponse {
    desconto: number;
  }

  const handleAplicarDesconto = () => {
    setLoading(true);
    setError("");
    axios
      .get("/aplicar-desconto")
      .then((response) => {
        setDesconto(response.data.desconto);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao aplicar desconto:", err);
        setError("Erro ao processar a requisição");
        setLoading(false);
      });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Aplicar Desconto</Typography>
        {loading && <Typography>Aplicando desconto...</Typography>}
        {!loading && desconto !== null && (
          <Typography variant="h6">
            Desconto Aplicado: {desconto * 100}%
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAplicarDesconto}
          disabled={loading}
        >
          Aplicar Desconto
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </CardContent>
    </Card>
  );
};

export default AplicarDesconto;

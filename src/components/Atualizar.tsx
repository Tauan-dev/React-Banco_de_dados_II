import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Typography } from "@mui/material";

const AtualizarCliente = () => {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleUpdate = () => {
    axios
      .put(`/cliente/${cpf}`, { nome })
      .then(() => {
        setMensagem("Cliente atualizado com sucesso.");
      })
      .catch((err) => {
        setMensagem("Erro ao atualizar cliente.");
        console.error(err);
      });
  };

  return (
    <div>
      <Typography variant="h5">Atualizar Cliente</Typography>
      <TextField
        label="CPF do Cliente"
        variant="outlined"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <TextField
        label="Novo Nome"
        variant="outlined"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Button onClick={handleUpdate}>Atualizar</Button>
      <p>{mensagem}</p>
    </div>
  );
};

export default AtualizarCliente;

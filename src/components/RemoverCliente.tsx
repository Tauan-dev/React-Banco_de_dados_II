import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Typography } from "@mui/material";

const RemoverCliente = () => {
  const [cpf, setCpf] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleDelete = () => {
    axios
      .delete(`/cliente/${cpf}`)
      .then(() => {
        setMensagem("Cliente deletado com sucesso.");
      })
      .catch((err) => {
        setMensagem("Erro ao deletar cliente.");
        console.error(err);
      });
  };

  return (
    <div>
      <Typography variant="h5">Remover Cliente</Typography>
      <TextField
        label="CPF do Cliente"
        variant="outlined"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <Button onClick={handleDelete}>Deletar</Button>
      <p>{mensagem}</p>
    </div>
  );
};

export default RemoverCliente;

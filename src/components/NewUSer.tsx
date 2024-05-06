import React, { useState, FormEvent } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const AdicionarUsuario = () => {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/usuarios", { cpf, nome, email });
      setMensagem(response.data);
    } catch (error) {
      setMensagem(
        "Erro ao inserir novo usuário. Por favor, verifique os dados e tente novamente."
      );
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Adicionar Novo Usuário</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="CPF"
            variant="outlined"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Nome"
            variant="outlined"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            Adicionar
          </Button>
          <Typography>{mensagem}</Typography>
        </form>
      </CardContent>
    </Card>
  );
};

export default AdicionarUsuario;

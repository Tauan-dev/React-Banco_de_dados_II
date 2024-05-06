import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import FirstComponent from "./components/FirstComponent";
import DetailedOrders from "./components/DetailedOrders";
import TotalEntreguesHoje from "./components/TotalEntregues";
import Ingredient from "./components/Ingredient";
import AplicarDesconto from "./components/DescontoApli";
import CalcularTaxa from "./components/CalcularTaxa";
import VerificaEstoque from "./components/VerificaEstoque";
import AlertaAtraso from "./components/AlertaAtraso";
import AplicarDescontoNoPedido from "./components/AplicarDesconto";
import ListaPedidos from "./components/Pedidos";
import AnaliseVendas from "./components/AnaliseVendas";
import EntregarPedido from "./components/EntregarPedido";
import DetalhesPedido from "./components/DetalhedePedido";
import ListaClientes from "./components/Clientes";
import AtualizarCliente from "./components/Atualizar";
import RemoverCliente from "./components/RemoverCliente";
import VisualizarLogsEventos from "./components/LogEventos";
import ConfirmarPedido from "./components/ConfirmarPedido";
import AdicionarUsuario from "./components/NewUSer";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FirstComponent />} />
          <Route path="/detailed-orders" element={<DetailedOrders />} />
          <Route path="/entrega-dia" element={<TotalEntreguesHoje />} />
          <Route path="/ingredient" element={<Ingredient />} />
          <Route path="/aplicar-desconto" element={<AplicarDesconto />} />
          <Route path="/calcular-taxa" element={<CalcularTaxa />} />
          <Route path="/estoque-baixo" element={<VerificaEstoque />} />
          <Route path="/alerta-atraso" element={<AlertaAtraso />} />
          <Route
            path="/aplicar-desconto-no-pedido"
            element={<AplicarDescontoNoPedido />}
          />
          <Route path="/pedidos" element={<ListaPedidos />} />
          <Route path="/analise-vendas" element={<AnaliseVendas />} />
          <Route path="/entregar-pedido" element={<EntregarPedido />} />
          <Route path="/detalhes-pedido" element={<DetalhesPedido />} />
          <Route path="/clientes" element={<ListaClientes />} />
          <Route path="/remover-cliente" element={<RemoverCliente />} />
          <Route path="/atualizar-cliente" element={<AtualizarCliente />} />
          <Route path="/logs-eventos" element={<VisualizarLogsEventos />} />
          <Route path="/confirmar-pedido" element={<ConfirmarPedido />} />
          <Route path="/adicionar-usuario" element={<AdicionarUsuario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

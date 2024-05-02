import React from "react";
import { Link } from "react-router-dom";

function FirstComponent() {
  return (
    <div>
      <h1>Bem-vindo à Pizzaria</h1>
      <nav>
        <ul>
          <h1>Views</h1>
          <li>
            <Link to="/detailed-orders">Pedidos Cadastrados</Link>
          </li>
          <li>
            <Link to="/entrega-dia">Entrega dia</Link>
          </li>
          <li>
            <Link to="/ingredient">Estoque de Ingredientes</Link>
          </li>
          <h1>Functions</h1>
          <li>
            <Link to="/aplicar-desconto">Aplicar Desconto</Link>
          </li>
          <li>
            <Link to="/calcular-taxa">Calcular Taxa</Link>
          </li>
          <li>
            <Link to="/alerta-atraso">Alerta de Atraso</Link>
          </li>
          <h1>Procedures</h1>
          <li>
            <Link to="/estoque-baixo">Verifica Estoque</Link>
          </li>
          <li>
            <Link to="/aplicar-desconto-no-pedido">Aplicar Desconto</Link>
          </li>
          <li>
            <Link to="/pedidos">Ver Pedidos</Link>
          </li>
          <li>
            <Link to="/analise-vendas">Análise de Vendas</Link>
          </li>
          <li>
            <Link to="/entregar-pedido">Entregar Pedido</Link>
          </li>
          <li>
            <Link to="/detalhes-pedido">Detalhes do Pedido</Link>
          </li>
          <h1>Triggers</h1>
          <li>
            <Link to="/clientes">Ver Clientes</Link>
          </li>
          <li>
            <Link to="/remover-cliente">Remover Cliente</Link>
          </li>
          <li>
            <Link to="/atualizar-cliente">Atualizar Cliente</Link>
          </li>
          <li>
            <Link to="/logs-eventos">Log de Eventos</Link>
          </li>
          <li>
            <Link to="/confirmar-pedido">Confirmar Pedido</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default FirstComponent;

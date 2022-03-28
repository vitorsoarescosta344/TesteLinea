import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import "./Analytcs.css";

import Footer from "../../Components/Footer/Footer";
import ListItemPedidosRecentes from "../../Components/ListItemPedidosRecentes/Index";
import SidebarContent from "../../Components/SidebarContent/Index";
import Header from "../../Components/Header/Header";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Vendas",
    },
  },
};

const labels = [
  "Domingo",
  "Segunda",
  "Terca",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Vendas na semana",
      data: labels.map(() => faker.datatype.number({ min: 0 })),
      borderColor: "#e7635f",
      backgroundColor: "#e7635f",
    },
  ],
};

export const visitas = {
  labels,
  datasets: [
    {
      label: "Visitas",
      data: labels.map(() => faker.datatype.number({ min: 0 })),
      borderColor: "#27aae2",
      backgroundColor: "#27aae2",
    },
  ],
};

export const conversao = {
  labels,
  datasets: [
    {
      label: "Visitas",
      data: labels.map(() => faker.datatype.number({ min: 0 })),
      borderColor: "#27aae2",
      backgroundColor: "#27aae2",
    },
  ],
};

export const dataPie1 = {
  labels: ["Camiseta 1", "Camiseta 2", "Camiseta 3"],
  datasets: [
    {
      label: "Camisetas",
      data: [50, 25, 25],
      backgroundColor: [
        "rgb(231, 99, 95)",
        "rgb(192, 39, 44)",
        "rgb(42, 169, 224)",
      ],
    },
  ],
};

export const dataPie2 = {
  labels: ["Novo Lead", "Lead Frio"],
  datasets: [
    {
      label: "Camisetas",
      data: [75, 25],
      backgroundColor: ["rgb(231, 99, 95)", "rgb(42, 169, 224)"],
    },
  ],
};

export const dataPie3 = {
  labels: ["Categoria 1", "Categoria 2", "Categoria 3"],
  datasets: [
    {
      label: "Camisetas",
      data: [50, 25, 25],
      backgroundColor: [
        "rgb(231, 99, 95)",
        "rgb(192, 39, 44)",
        "rgb(42, 169, 224)",
      ],
    },
  ],
};

function Analytcs() {
  const dataListUltimosPedidos = [
    {
      id: "2rrfafsf",
      status: true,
      data: "12 de junho de 2021",
      cliente: "Victor",
    },
    {
      id: "3rrfafsf",
      status: true,
      data: "12 de junho de 2021",
      cliente: "Victor",
    },
    {
      id: "1rrfafsf",
      status: true,
      data: "12 de junho de 2021",
      cliente: "Victor",
    },
    {
      id: "4rrfafsf",
      status: true,
      data: "12 de junho de 2021",
      cliente: "Victor",
    },
    {
      id: "5rrfafsf",
      status: true,
      data: "12 de junho de 2021",
      cliente: "Victor",
    },
  ];

  const dataListPedidosPendentes = [
    {
      id: "2rrfafsf",
      status: false,
      data: "12 de junho de 2021",
      cliente: "Victor",
    },
    {
      id: "3rrfafsf",
      status: false,
      data: "12 de junho de 2021",
      cliente: "Victor",
    },
    {
      id: "1rrfafsf",
      status: false,
      data: "12 de junho de 2021",
      cliente: "Victor",
    },
    {
      id: "4rrfafsf",
      status: false,
      data: "12 de junho de 2021",
      cliente: "Victor",
    },
    {
      id: "5rrfafsf",
      status: false,
      data: "12 de junho de 2021",
      cliente: "Victor",
    },
  ];

  return (
    <>
      <div className="container">
        <Header />
        <div className="view">
          <aside className="sidebar">
            <SidebarContent />
          </aside>
          <div className="content">
            <div className="graph-header">
              <div style={{ marginRight: "20px", color: "#e7635f" }}>
                Vendas
              </div>
              <div className="container-button">
                <div>Semana</div>
              </div>
              <div className="container-button">
                <div>Mes</div>
              </div>
              <div className="container-button">
                <div>Dia</div>
              </div>
            </div>
            <Line
              options={options}
              data={data}
              style={{ marginBottom: "50px" }}
            />

            <div className="graph-header">
              <div style={{ marginRight: "20px", color: "#e7635f" }}>
                Mais vendidos
              </div>
              <div className="container-button-blue">
                <div>Semana</div>
              </div>
              <div className="container-button-blue">
                <div>Mes</div>
              </div>
              <div className="container-button-blue">
                <div>Dia</div>
              </div>
            </div>

            <div className="row" style={{ borderBottom: "2px solid #d6d7d8" }}>
              <div className="col">
                <Pie data={dataPie1} />
              </div>
              <div className="col">
                <Pie data={dataPie2} />
              </div>
              <div className="col">
                <Pie data={dataPie3} />
              </div>
            </div>

            <div className="list">
              <div className="cargo">Ultimos pedidos</div>
              {dataListUltimosPedidos.map((item, key) => {
                return (
                  <ListItemPedidosRecentes
                    key={item.id}
                    id={item.id}
                    cliente={item.cliente}
                    data={item.data}
                    status={item.status}
                  />
                );
              })}
            </div>

            <div className="row">
              <div className="col">
                <div className="filter">
                  <div style={{ borderBottom: "1px solid black" }}>
                    <div>pedidos</div>
                    <div>pendentes</div>
                  </div>
                  <div>10</div>
                </div>
              </div>
              <div className="col">
                <div className="filter">
                  <div style={{ borderBottom: "1px solid black" }}>
                    <div>pedidos</div>
                    <div>completados</div>
                  </div>
                  <div>50</div>
                </div>
              </div>
              <div className="col">
                <div className="filter">
                  <div style={{ borderBottom: "1px solid black" }}>
                    <div>pedidos de</div>

                    <div>devolucao</div>
                  </div>
                  <div>0</div>
                </div>
              </div>
              <div className="col">
                <div className="filter">
                  <div style={{ borderBottom: "1px solid black" }}>
                    <div>pedidos por</div>
                    <div>cupom</div>
                  </div>
                  <div>125</div>
                </div>
              </div>
            </div>
            <div className="list">
              {dataListPedidosPendentes.map((item, key) => {
                return (
                  <ListItemPedidosRecentes
                    key={item.id}
                    id={item.id}
                    cliente={item.cliente}
                    data={item.data}
                    status={item.status}
                  />
                );
              })}
            </div>
            <div className="graph-header">
              <div style={{ marginRight: "20px", color: "#e7635f" }}>
                Visitas
              </div>
              <div className="container-button-blue">
                <div>Semana</div>
              </div>
              <div className="container-button-blue">
                <div>Mes</div>
              </div>
              <div className="container-button-blue">
                <div>Dia</div>
              </div>
            </div>
            <Line
              options={options}
              data={visitas}
              style={{ marginBottom: "50px" }}
            />

            <div className="graph-header">
              <div style={{ marginRight: "20px", color: "#e7635f" }}>
                Visitas
              </div>
              <div className="container-button-blue">
                <div>Semana</div>
              </div>
              <div className="container-button-blue">
                <div>Mes</div>
              </div>
              <div className="container-button-blue">
                <div>Dia</div>
              </div>
            </div>
            <Line
              options={options}
              data={conversao}
              style={{ marginBottom: "50px" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Analytcs;

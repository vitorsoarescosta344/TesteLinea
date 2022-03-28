import React from "react";
import { BsCheckLg, BsClock } from "react-icons/bs";

type Pedidos = {
  id: string;
  status: boolean;
  cliente: string;
  data: string;
};

const ListItemPedidosRecentes: React.FC<Pedidos> = ({
  id,
  status,
  cliente,
  data,
}) => {
  return (
    <div
      className="row"
      style={{ borderBottom: "1px solid #e7635f", marginBottom: "10px" }}
    >
      <div className="col">
        {status === true ? (
          <BsCheckLg size={"2em"} color={"green"} />
        ) : (
          <BsClock size={"2em"} color={"orange"} />
        )}
      </div>
      <div className="col">
        <div>{cliente}</div>
      </div>
      <div className="col">
        <div>{data}</div>
      </div>
      <div className="col">
        <div>{id}</div>
      </div>
      <div className="col">
        <div style={{ color: "green" }}>
          {status === true ? "Concluido" : ""}
        </div>
      </div>
    </div>
  );
};

export default ListItemPedidosRecentes;

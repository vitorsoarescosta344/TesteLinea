import React from "react";
import { CgProfile } from "react-icons/cg";
import "./Styled.css";

function SidebarContent() {
  return (
    <>
      <div className="profile-area">
        <CgProfile color={"#e7635f"} size={"13.0em"} />
        <div className="cargo">Lojista</div>
        <div className="edit-perfil">Editar perfil</div>
      </div>
      <div>
        <ul className="list-unstyled">
          <li className="sidebar-button">
            <div className="button-text">Minha loja</div>
          </li>
          <li className="sidebar-button">
            <div className="button-text">Produtos</div>
          </li>
          <li className="sidebar-button">
            <div className="button-text">Carteira</div>
          </li>
          <li className="sidebar-button">
            <div className="button-text">Analytics</div>
          </li>
          <li className="sidebar-button">
            <div className="button-text">Loja</div>
          </li>
          <li className="sidebar-button">
            <div className="button-text">Mensagens</div>
          </li>
          <li className="sidebar-button">
            <div className="button-text">Seguidores</div>
          </li>
          <li className="sidebar-button">
            <div className="button-text">Configuracoes</div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SidebarContent;

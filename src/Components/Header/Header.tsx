import React from "react";
import "./Header.css";
import { Avatar, TextField, Typography } from "@mui/material";
import { BiMenu } from "react-icons/bi";
import { faker } from "@faker-js/faker";

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <BiMenu size="2.5em" color={"black"} />
        <div className="container-input">
          <TextField
            fullWidth
            size="small"
            label="Lojas, Roupas, Estilos..."
            variant="outlined"
          />
        </div>
        <div className="people">
          <h4 className="name-header">{faker.name.firstName()}</h4>
          <Avatar
            src={faker.image.people.toString()}
            sx={{ width: 60, height: 60 }}
          />
        </div>
      </div>
      <div className="container-buttons-header">
        <div className="header-buttons">Loja</div>
        <div className="header-buttons">Chat</div>
      </div>
    </header>
  );
}

export default Header;

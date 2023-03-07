import React from "react";
import { Button } from "@mantine/core";
import { BiChevronRight } from "react-icons/bi";
import { useMediaQuery } from "@mantine/hooks";
import "../App.css";

function Configurator() {

  return (
    <div className="configurator">
      <Button.Group orientation="vertical">
        <Button
          variant="default"
          style={{ position: "relative", display: "flex" }}
        >
          Storlek
          <BiChevronRight style={{ position: "absolute", right: "10px" }} />
        </Button>
        <Button
          variant="default"
          style={{ position: "relative", display: "flex" }}
        >
          Färgval pool
          <BiChevronRight style={{ position: "absolute", right: "10px" }} />
        </Button>
        <Button
          variant="default"
          style={{ position: "relative", display: "flex" }}
        >
          Typ av omfång
          <BiChevronRight style={{ position: "absolute", right: "10px" }} />
        </Button>
        <Button
          variant="default"
          style={{ position: "relative", display: "flex" }}
        >
          Typ av trappa
          <BiChevronRight style={{ position: "absolute", right: "10px" }} />
        </Button>
      </Button.Group>

      <Button.Group
        orientation={
          useMediaQuery("(min-width: 768px)") ? "vertical" : "horizontal"
        }
        style={{
          position: "relative",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          fullWidth
          variant="outline"
          style={{
            position: "relative",
            height: "10vh",
            borderRadius: "20px",
            backgroundColor: "lightblue",
            color: "#000",
            margin: "10px",
            border: "none",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
          }}
        >
          Placera på gården
        </Button>
        <Button
          fullWidth
          variant="outline"
          style={{
            position: "relative",
            height: "10vh",

            borderRadius: "20px",
            backgroundColor: "#f5f5f5",
            color: "#000",
            margin: "10px",
            border: "none",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
          }}
        >
          Hämta PDF
        </Button>
      </Button.Group>
    </div>
  );
}

export default Configurator;

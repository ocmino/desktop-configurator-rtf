import { useState } from "react";
import { Button } from "@mantine/core";
import { BiChevronRight, BiArrowBack } from "react-icons/bi";
import { useMediaQuery } from "@mantine/hooks";
import { useCustomization } from "../Context/Customization";

import "../App.css";

function MainMenu() {
  const [subMenuIndex, setSubMenuIndex] = useState(-1); // -1 means no submenu is open

  const openSubMenu = (index) => {
    setSubMenuIndex(index);
  };

  const closeSubMenu = () => {
    setSubMenuIndex(-1);
  };

  const menuItems = [
    { label: "Storlek", subMenuItems: ["4x6", "5x8"] },
    { label: "Stair", subMenuItems: ["Rak", "Svängd"] },
    { label: "PoolColor", subMenuItems: ["Blå", "Grön"] },
    { label: "Ground", subMenuItems: ["Grå", "Beige"] },
  ];

  const {
    groundColor,
    setGroundColor,
    poolColor,
    setPoolColor,
    stairType,
    setStairType,
    poolSize,
    setPoolSize,
  } = useCustomization();

  return (
    <div>
      {subMenuIndex === -1 && (
        <Button.Group orientation="vertical">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="default"
              style={{
                position: "relative",
                display: "flex",
                fontSize: "10px",
                height: "4vh",
              }}
              onClick={() => openSubMenu(index)}
            >
              {item.label}
              <BiChevronRight style={{ position: "absolute", right: "10px" }} />
            </Button>
          ))}
        </Button.Group>
      )}

      {subMenuIndex === 1 && (
        <Button.Group orientation="vertical">
          <Button
            variant="default"
            style={{
              position: "relative",
              display: "flex",
              fontSize: "10px",
              height: "4vh",
              fontStyle: "italic",
              textDecoration: "underline",
            }}
            onClick={closeSubMenu}
          >
            Tillbaka
          </Button>
          <Button
            variant="default"
            style={{
              position: "relative",
              display: "flex",
              fontSize: "10px",
              height: "4vh",
            }}
            onClick={() => setStairType(1)}
          >
            Rak
            <BiChevronRight style={{ position: "absolute", right: "10px" }} />
          </Button>
          <Button
            variant="default"
            style={{
              position: "relative",
              display: "flex",
              fontSize: "10px",
              height: "4vh",
            }}
            onClick={() => setStairType(2)}
          >
            Svängd
            <BiChevronRight style={{ position: "absolute", right: "10px" }} />
          </Button>
        </Button.Group>
      )}

      {subMenuIndex === 2 && (
        <Button.Group orientation="vertical">
          <Button
            variant="default"
            style={{
              position: "relative",
              display: "flex",
              fontSize: "10px",
              height: "4vh",
              fontStyle: "italic",
              textDecoration: "underline",
            }}
            onClick={closeSubMenu}
          >
            Tillbaka
          </Button>
          <Button
            variant="default"
            style={{
              position: "relative",
              display: "flex",
              fontSize: "10px",
              height: "4vh",
            }}
            onClick={() => setPoolColor("Blå")}
          >
            Blå
            <BiChevronRight style={{ position: "absolute", right: "10px" }} />
          </Button>
          <Button
            variant="default"
            style={{
              position: "relative",
              display: "flex",
              fontSize: "10px",
              height: "4vh",
            }}
            onClick={() => setPoolColor("Grön")}
          >
            Grön
            <BiChevronRight style={{ position: "absolute", right: "10px" }} />
          </Button>
        </Button.Group>
      )}

      {subMenuIndex === 3 && (
        <Button.Group orientation="vertical">
          <Button
            variant="default"
            style={{
              position: "relative",
              display: "flex",
              fontSize: "10px",
              height: "4vh",
              fontStyle: "italic",
              textDecoration: "underline",
            }}
            onClick={closeSubMenu}
          >
            Tillbaka
          </Button>
          <Button
            variant="default"
            style={{
              position: "relative",
              display: "flex",
              fontSize: "10px",
              height: "4vh",
            }}
            onClick={() => setGroundColor("Grå")}
          >
            Grå
            <BiChevronRight style={{ position: "absolute", right: "10px" }} />
          </Button>
          <Button
            variant="default"
            style={{
              position: "relative",
              display: "flex",
              fontSize: "10px",
              height: "4vh",
            }}
            onClick={() => setGroundColor("Beige")}
          >
            Beige
            <BiChevronRight style={{ position: "absolute", right: "10px" }} />
          </Button>
        </Button.Group>
      )}

      {subMenuIndex === 0 && (
        <Button.Group orientation="vertical">
          <Button
            variant="default"
            style={{
              position: "relative",
              display: "flex",
              fontSize: "10px",
              height: "4vh",
              fontStyle: "italic",
              textDecoration: "underline",
            }}
            onClick={closeSubMenu}
          >
            Tillbaka
          </Button>

          <Button
            variant="default"
            style={{
              position: "relative",
              display: "flex",
              fontSize: "10px",
              height: "4vh",
            }}
            onClick={() => setPoolSize(1)}
          >
            3x6 m
            <BiChevronRight style={{ position: "absolute", right: "10px" }} />
          </Button>
          <Button
            variant="default"
            style={{
              position: "relative",
              display: "flex",
              fontSize: "10px",
              height: "4vh",
            }}
            onClick={() => setPoolSize(2)}
          >
            5x8 m
            <BiChevronRight style={{ position: "absolute", right: "10px" }} />
          </Button>
        </Button.Group>
      )}

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
            fontSize: "12px",
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
            fontSize: "12px",
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

function Configurator() {
  return (
    <div className="configurator">
      <MainMenu />
    </div>
  );
}

export default Configurator;

import { useState } from "react";
import { Button } from "@mantine/core";
import { BiChevronRight } from "react-icons/bi";

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
    { label: "Ben", subMenuItems: ["Klassisk", "Design"] },
    { label: "Färg skiva", subMenuItems: ["Vit", "Svart"] },
    { label: "Rygg", subMenuItems: ["Med", "Utan"] },
    { label: "Låda", subMenuItems: ["Höger", "Vänster"] },
    { label: "Färg ben", subMenuItems: ["Vit", "Svart"] },
  ];

  const {
    setBen,

    setFärg,

    setRygg,

    setLåda,

    setFärgBen,
    tillbehör,
    setTillbehör,
  } = useCustomization();

  //toggle function for setTillbehör between 0 and 1
  const toggleTillbehör = () => {
    if (tillbehör === 1) {
      setTillbehör(2);
    } else {
      setTillbehör(1);
    }
  };

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
            onClick={() => setBen(1)}
          >
            Klassisk
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
            onClick={() => setBen(2)}
          >
            Design
            <BiChevronRight style={{ position: "absolute", right: "10px" }} />
          </Button>
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
            onClick={() => setFärg("vit")}
          >
            Vit
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
            onClick={() => setFärg("svart")}
          >
            Svart
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
            onClick={() => setRygg(1)}
          >
            Med
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
            onClick={() => setRygg(2)}
          >
            Utan
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
            onClick={() => setLåda(1)}
          >
            Höger
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
            onClick={() => setLåda(2)}
          >
            Vänster
            <BiChevronRight style={{ position: "absolute", right: "10px" }} />
          </Button>
        </Button.Group>
      )}

      {subMenuIndex === 4 && (
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
            onClick={() => setFärgBen("vit")}
          >
            Vit
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
            onClick={() => setFärgBen("svart")}
          >
            Svart
            <BiChevronRight style={{ position: "absolute", right: "10px" }} />
          </Button>
        </Button.Group>
      )}

      <Button
        variant="default"
        style={{
          display: "block",
          margin: "auto",
          width: "100%",
          height: "10vh",
          borderRadius: "10px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
          backgroundColor: "#B2DFFC",
          color: "#000000",
          border: "none",
        }}
        onClick={() => toggleTillbehör()}
      >
        Visa accessoarer
      </Button>
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

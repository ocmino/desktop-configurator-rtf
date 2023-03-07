import React from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Modal, Group, Button, Affix } from "@mantine/core";
import Experience from "./Components/Experience";
import { CustomizationProvider } from "./Context/Customization";

function App() {
  const [opened, { open, close }] = useDisclosure(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <CustomizationProvider>
        <Modal
          opened={opened}
          onClose={close}
          zIndex={0}
          transitionProps={{
            transition: "fade",
            duration: 600,
            timingFunction: "linear",
          }}
        >
          <Affix
            position={{
              top: isDesktop ? "5%" : "3%",
              left: isDesktop ? "5%" : "5%",
              right: isDesktop ? "5%" : "5%",
              bottom: isDesktop ? "5%" : "5%",
            }}
          >
            <Experience />
          </Affix>
        </Modal>

        <Group>
          <img
            src="/Pictures/Pool.jpg"
            alt="Ekopool"
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
            }}
          />
          <Affix
            position={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Button
              onClick={open}
              style={{
                height: "100px",
                borderRadius: "10px",
                backgroundColor: "#f5f5f5",
                color: "#000",
                border: "none",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
              }}
            >
              Bygg din egen pool
            </Button>
          </Affix>
        </Group>
      </CustomizationProvider>
    </>
  );
}

export default App;

import React from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { LoadingOverlay, Modal, Group, Button, Affix } from "@mantine/core";
import Experience from "./Components/Experience";
import { CustomizationProvider } from "./Context/Customization";
import { useHover } from "@mantine/hooks";
import { useEffect } from "react";
import { ARButton } from "@react-three/xr";

function App() {
  const [opened, { open, close }] = useDisclosure(false);
  const [visible, { toggle }] = useDisclosure();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { hovered, ref } = useHover();

  //set the loading overlay to be visible for 2 seconds
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        toggle();
      }, 1000);
    }
  }, [visible, toggle]);

  return (
    <>
      <LoadingOverlay visible={visible} />

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
            <ARButton
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                zIndex: 1000,
                width: "auto",
                height: "auto",
                borderRadius: "10px",
                color: "black",
                border: "none",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
              }}
            />
            <Experience />
          </Affix>
        </Modal>

        <Group>
          <img
            src="/Pictures/DeskBackground.png"
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
              ref={ref}
              onClick={() => {
                open();
                toggle();
              }}
              style={{
                width: "250px",
                height: "100px",
                borderRadius: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                color: "black",
                border: "none",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
              }}
            >
              {hovered ? "Klicka för att börja!" : "Konfigurera ditt skrivbord"}
            </Button>
          </Affix>
        </Group>
      </CustomizationProvider>
    </>
  );
}

export default App;

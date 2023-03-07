import { createContext } from "react";
import { useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [groundColor, setGroundColor] = useState("GroundColor_1");
  const [poolColor, setPoolColor] = useState("PoolColor_1");
  const [stairType, setStairType] = useState(1);
  const [poolSize, setPoolSize] = useState(1);

  return (
    <CustomizationContext.Provider
      value={{
        groundColor,
        setGroundColor,
        poolColor,
        setPoolColor,
        stairType,
        setStairType,
        poolSize,
        setPoolSize,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};

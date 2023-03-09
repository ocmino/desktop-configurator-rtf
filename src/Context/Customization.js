import { createContext } from "react";
import { useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [ben, setBen] = useState(1);
  const [färg, setFärg] = useState("vit");
  const [rygg, setRygg] = useState(1);
  const [låda, setLåda] = useState(1);
  const [färgBen, setFärgBen] = useState("vit");
  const [tillbehör, setTillbehör] = useState(1);

  return (
    <CustomizationContext.Provider
      value={{
        ben,
        setBen,
        färg,
        setFärg,
        rygg,
        setRygg,
        låda,
        setLåda,
        färgBen,
        setFärgBen,
        tillbehör,
        setTillbehör,
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

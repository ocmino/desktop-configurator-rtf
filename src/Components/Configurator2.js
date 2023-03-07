import { useCustomization } from "../Context/Customization";
import { useState } from "react";

const Configurator2 = () => {

  const {groundColor, setGroundColor, poolColor, setPoolColor, stairType, setStairType, poolSize, setPoolSize} = useCustomization();

  const [groundColorOpen, setGroundColorOpen] = useState(false);
  const [poolColorOpen, setPoolColorOpen] = useState(false);
  const [stairTypeOpen, setStairTypeOpen] = useState(false);
  const [poolSizeOpen, setPoolSizeOpen] = useState(false);

  return (
    <div className="configurator2">
      <div className="configurator__section">
        <div className="configurator__section__title" onClick={() => setPoolSizeOpen(!poolSizeOpen)}>Size</div>
        {poolSizeOpen && (
        <div className="configurator__section__values">
          <div className={`item ${poolSize === 1 ? "item--active" : ""}`} onClick={() => setPoolSize(1)}>
            <div className="item__label">Option 1</div>
          </div>
          <div className={`item ${poolSize === 2 ? "item--active" : ""}`} onClick={() => setPoolSize(2)}>
            <div className="item__label">Option 2</div>
          </div>
        </div>
        )}
      </div>

      <div className="configurator__section">
        <div className="configurator__section__title" onClick={() => setGroundColorOpen(!groundColorOpen)}>Ground</div>
        {groundColorOpen && (
        <div className="configurator__section__values">
          <div className={`item ${groundColor === "GroundColor_1" ? "item--active" : ""}`} onClick={() => setGroundColor("GroundColor_1")}>
            <div className="item__label">Option 1</div>
          </div>
          <div className={`item ${groundColor === "GroundColor_2" ? "item--active" : ""}`} onClick={() => setGroundColor("GroundColor_2")}>
            <div className="item__label">Option 2</div>
          </div>
        </div>
        )}
      </div>

      <div className="configurator__section">
        <div className="configurator__section__title" onClick={() => setPoolColorOpen(!poolColorOpen)}>Color</div>
        {poolColorOpen && (
        <div className="configurator__section__values">
          <div className={`item ${poolColor === "PoolColor_1" ? "item--active" : ""}`} onClick={() => setPoolColor("PoolColor_1")}>
            <div className="item__label">Option 1</div>
          </div>
          <div className={`item ${poolColor === "PoolColor_2" ? "item--active" : ""}`} onClick={() => setPoolColor("PoolColor_2")}>
            <div className="item__label">Option 2</div>
          </div>
        </div>
        )}
      </div>

      <div className="configurator__section">
        <div className="configurator__section__title" onClick={() => setStairTypeOpen(!stairTypeOpen)}>Stairs</div>
        {stairTypeOpen && (
        <div className="configurator__section__values">
          <div className={`item ${stairType === 1 ? "item--active" : ""}`} onClick={() => setStairType(1)}>
            <div className="item__label">Option 1</div>
          </div>
          <div className={`item ${stairType === 2 ? "item--active" : ""}`} onClick={() => setStairType(2)}>
            <div className="item__label">Option 2</div>
          </div>
        </div>   
        )}
      </div>
    </div>
  );
};

export default Configurator2;
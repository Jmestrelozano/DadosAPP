import React, { useEffect, useState } from "react";

export const TemplateDados = ({ ramdon, prop, setCount, ruta }) => {
  const [RamdonNumber, setRamdonNumber] = useState();
  useEffect(() => {
    setRamdonNumber(ramdon);
    setCount(ramdon)
  }, [prop]);

  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/${ruta}/${RamdonNumber}.png`}
        className="dado"
      />
    </div>
  );
};

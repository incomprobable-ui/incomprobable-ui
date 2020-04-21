import React from "react";
import Button from "../../src/components/Button/Button.tsx";

export default { title: "Button" };

export const withText = () => (
  <Button onClick={() => alert("Clicked")}>Hello Button</Button>
);

import React from "react";
import ButtonOutline from "./ButtonOutline";
import ButtonConnect from "./Button";
import ButtonResume from "./ButtonResume";

const ButtonSection = () => {
  return (
    <div className="flex justify-center items-center gap-10 mt-5">
      <ButtonConnect
        href="https://wa.me/9389968605?text=Hello%20Ravi,%20I%20want%20to%20connect%20with%20you!"
        title="Connect"
      />
      <ButtonOutline title="Mail" />
      <ButtonResume />
    </div>
  );
};

export default ButtonSection;

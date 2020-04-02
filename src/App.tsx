import React, { FC } from "react";

import { ChariotSlide } from "./components/ChariotSlide";
import { ThingAMaBob } from "./components/ThingAMaBob";

export const App: FC = () => (
  <ChariotSlide title="Welcome to our Simple Example">
    <ThingAMaBob />
  </ChariotSlide>
);

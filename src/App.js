import { useState } from "react";
import {
  Advice,
  Card,
  CardBottom,
  CardTop,
  Divider,
  GlowingButton,
} from "./components";

export default function App() {
  const [advice, setAdvice] = useState(
    "Remember that spiders are more afraid of you, than you are of them."
  );
  const [id, setId] = useState(1);

  async function getAdvice(e) {
    e.preventDefault();
    let res = await fetch("https://api.adviceslip.com/advice");
    let obj = await res.json();
    setAdvice(obj.slip.advice);
    setId(obj.slip.id);
  }

  return (
    <Card>
      <CardTop>
        <Advice advice={advice} id={id} />
      </CardTop>

      <CardBottom>
        <Divider />
        <GlowingButton getAdvice={getAdvice} />
      </CardBottom>
    </Card>
  );
}

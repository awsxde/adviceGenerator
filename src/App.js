import { useState } from "react";

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

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function CardTop({ children }) {
  return <div className="card-top">{children}</div>;
}

function Advice({ advice, id }) {
  return (
    <>
      <h3 className="advice-id">Advice #{id}</h3>
      <blockquote className="advice">&#8220;{advice}&#8221;</blockquote>
    </>
  );
}

function CardBottom({ children }) {
  return <div className="card-bottom">{children}</div>;
}

function Divider() {
  return (
    <>
      <svg
        width="444"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        alt="divider"
        className="divider divider--desktop"
      >
        <g fill="none" fill-rule="evenodd">
          <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
          <g transform="translate(212)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>
      <svg
        width="295"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        alt="divider"
        className="divider divider--mobile"
      >
        <g fill="none" fill-rule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
          <g transform="translate(138)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>
    </>
  );
}

function GlowingButton({ getAdvice }) {
  return (
    <a href="#root" className="button" onClick={getAdvice}>
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        alt="dice"
        className="dice"
      >
        <path
          d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
          fill="#202733"
        />
      </svg>
    </a>
  );
}
export default function Advice({ advice, id }) {
  return (
    <>
      <h3 className="advice-id">Advice #{id}</h3>
      <blockquote className="advice">&#8220;{advice}&#8221;</blockquote>
    </>
  );
}

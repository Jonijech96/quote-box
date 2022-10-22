import "./Quote.css";

export function Quote({ quote, author, setIndex, size }) {
  const numberRandom = (limit) => Math.floor(Math.random() * limit);
  const arrayColor = [
    "#2b98ca",
    "#2095a2",
    "#23ad85",
    "#b0d39d",
    "#ded599",
    "#fdb795",
    "#fdb795",
    "#f48098",
    "#bb5fba",
    "#006cdc",
    "#de4169",
    "#ed7348",
    "#eeba5c",
    "#e0f59e",
    "#cefee9",
    "#e5baf8",
    "#6886fd",
    "#e4cac8",
    "#aa9295",
    "#715f6a",
    "#553941",
    "#de9590",
  ];
  const colorRandom = arrayColor[numberRandom(arrayColor.length)];
  document.body.style = `background: ${colorRandom}`;
  const changeQuote = () => {
    setIndex(numberRandom(size));
    document.body.style = `background: ${colorRandom}`;
  };
  return (
    <div className="quote-grid">
      <blockquote style={{ color: `${colorRandom}` }}>
        <i className="fa-solid fa-quote-left quote-left"></i>
        {quote}
      </blockquote>
      <i className="left" style={{ color: `${colorRandom}` }}>
        {author}
      </i>
      <button
        className="button-change left"
        style={{ background: `${colorRandom}` }}
        onClick={changeQuote}
      >
        <i className="fa-solid fa-shuffle"></i>
      </button>
    </div>
  );
}

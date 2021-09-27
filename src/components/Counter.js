function Counter({ count, setCount }) {
  return (
    <div className="counter-box">
      <h2>React Hooks & Sass template </h2>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
    </div>
  );
}

export default Counter;

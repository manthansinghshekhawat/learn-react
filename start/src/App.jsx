import "./App.css";
import Card from "./components/cards.jsx";

function App() {
  return (
    <>
      <div className="flex gap-4">
        <Card title="Python" />
        <Card title="Cython" />
      </div>
    </>
  );
}

export default App;

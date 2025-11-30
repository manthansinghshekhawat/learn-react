import "./App.css";
import Card from "./components/cards.jsx";
import Header from "./components/header.jsx";
import Hero from "./components/Hero.jsx";
function App() {
  return (
    <>
      <Hero />
      <div>
        <Header />
      </div>

      <div className="flex gap-4">
        <Card title="Python" />
        <Card title="Cython" />
        <Card title="Dython" />
        <Card title="Rython" />
      </div>
    </>
  );
}

export default App;

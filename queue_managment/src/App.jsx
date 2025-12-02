import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
export default function App() {
  const [queue, setQueue] = useState([]);
  const addToQueue = (customer) => {
    //add to queue
  };
  const updateStatus = (id, newStatus) => {
    // Update the status in queue
  };
  const removeFromQueue = (id) => {
    //remove the data from queue
  };
  return (
    <div className="app">
      <header>
        <h1>Queue Managment Application</h1>
        <p>Manage your customer efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <h1>QueueDisplay</h1>
      </main>
    </div>
  );
}

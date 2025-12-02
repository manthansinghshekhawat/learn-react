import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
export default function App() {
  const [queue, setQueue] = useState([]);
  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };
  const updateStatus = (id, newStatus) => {
    // Update the status in queue
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );
  };

  const removeFromQueue = (id) => {
    // Remove the customer from queue
    setQueue(queue.filter((customer) => customer.id !== id));
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

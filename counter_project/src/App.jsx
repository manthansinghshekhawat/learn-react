import "./App.css";

function App() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        padding: "20px",
        // backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#222", fontWeight: "600" }}>
        Counter
      </h1>
      <div
        style={{
          textAlign: "center",
          fontSize: "3em",
          margin: "20px 0",
          color: "#444",
          fontWeight: "500",
        }}
      >
        Count: 32
      </div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={() => {}}
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1em",
            fontWeight: "500",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {}}
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            backgroundColor: "#FF4757",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1em",
            fontWeight: "500",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Decrease
        </button>
        <button
          onClick={() => {}}
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            backgroundColor: "#6C757D",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1em",
            fontWeight: "500",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Reset
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <input
          style={{
            width: "100px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            marginRight: "10px",
            fontSize: "1em",
          }}
          value="8"
          onChange={() => {}}
        />
        <button
          onClick={() => {}}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28A745",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1em",
            fontWeight: "500",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Set
        </button>
      </div>
    </div>
  );
}

export default App;

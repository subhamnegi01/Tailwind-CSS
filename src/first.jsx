import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <h1 className="bg-red-400 text-2xl">Hello World</h1>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const analyzeImage = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      "http://127.0.0.1:8000/predict",
      formData
    );

    setResult(
      `${response.data.result} (${response.data.confidence}%)`
    );
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Deepfake Detector</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={analyzeImage}>
        Analyze
      </button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>🚀 React Learning Web</h1>
      <p>เว็บนี้สร้างไว้ฝึก React จากศูนย์</p>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>เพิ่ม</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: 10 }}>
        ลด
      </button>
    </div>
  );
}

export default App;

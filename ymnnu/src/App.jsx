import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Demo from "./part-2/demo";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>You Migt Not Need useEffect</h2>
      <Demo />
    </>
  );
}

export default App;

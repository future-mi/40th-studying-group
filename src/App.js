import React from "react"; // import useState
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button>
        <Link to="/">Index</Link>
      </button>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  var navigate = useNavigate();
  function handleClick() {
    navigate("/home");  // 입력받은 경로로 이동한다
  }

  return (
    <>
      <h1>Index</h1>
      <button onClick={handleClick}>Go home</button>
    </>
  );
}

function Home() {
  return (
    <>
      <h2>Home</h2>
      <p>This is home</p>
    </>
  );
}

export default App;

import { GlobalStyle } from "./Constants/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Agendamento from "./Pages/Agendamento";
import Gerenciamento from "./Pages/Gerenciamento";

function App() {
  return (
    <>
      <BrowserRouter className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/agendamento" element={<Agendamento />} />
          <Route exact path="/gerenciamento" element={<Gerenciamento />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;

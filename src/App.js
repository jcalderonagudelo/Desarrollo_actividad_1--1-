import Index from "./pages/index";
import Create from "./pages/create";
import View from "./pages/view";
import About from "./pages/about";
import Docs from "./pages/docs";
import More from "./pages/more";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Store from "./components/store";

function App() {
  return (
    <Store>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="create" element={<Create />} />
          <Route path="view/:bookId" element={<View />} />
          <Route path="about" element={<About />} />
          <Route path="docs" element={<Docs />} />
          <Route path="more" element={<More />} />
        </Routes>
      </div>
    </Store>
  );
}

export default App;

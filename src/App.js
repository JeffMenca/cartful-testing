import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Q2 from "./pages/Q2";
import BaristaTransition from "./pages/BaristaTransition";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<BaristaTransition />} />
          <Route path="*" element={<BaristaTransition />} />
          <Route path="/q2" element={<Q2 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

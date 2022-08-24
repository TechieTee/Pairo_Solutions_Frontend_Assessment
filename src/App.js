import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompletePurchase from "./pages/CompletePurchase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<CompletePurchase />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

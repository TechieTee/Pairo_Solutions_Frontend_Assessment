import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompletePurchase from "./pages/Purchase";
import PurchaseResult from "./pages/PurchaseResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<CompletePurchase />} />
          <Route path="result" element={<PurchaseResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

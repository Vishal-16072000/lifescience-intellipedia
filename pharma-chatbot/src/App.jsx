
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChatProvider } from "./context/ChatContext";

import MainLayout from "./components/layout/MainLayout";
import Chatbot from "./pages/Chatbot";
import SupplierPage from "./pages/SupplierPage";
import ProductSummary from "./pages/ProductSummary";

function App() {
  return (
    <BrowserRouter>
      <ChatProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Chatbot />} />
            <Route path="/suppliers" element={<SupplierPage />} />
            <Route
              path="/product-summary"
              element={<ProductSummary />}
            />
          </Routes>
        </MainLayout>
      </ChatProvider>
    </BrowserRouter>
  );
}

export default App;

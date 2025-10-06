import React from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// Pages
import HomePage from "./features/home/pages/home/home.page";
import OtherPage from "./features/home/pages/other/other.page";
// Styles
import "@repo/generic-components/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/other-page" element={<OtherPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

const container = document.getElementById("page-content");
if (!container) throw new Error("Root element #page-content not found");

createRoot(container).render(<App />);

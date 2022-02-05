import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Index from "./components/Index"
import HousesDetail from "./components/Houses/HousesDetail"

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:houseId" element={<HousesDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router

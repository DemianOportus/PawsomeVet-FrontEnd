import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import BookAReservation from "./pages/book-a-reservation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="book-a-reservation" element={<BookAReservation/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

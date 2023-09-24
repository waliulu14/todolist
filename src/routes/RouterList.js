import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUs } from "../pages/AboutUs";
import { Dashboard } from "../pages/Dashboard";
import { Galery } from "../pages/Galery";
import { LoginPage } from "../pages/LoginPage";
import { TodoList } from "../pages/TodoList";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/1" element={<AboutUs />} />
        <Route path="/2" element={<Dashboard />} />
        <Route path="/3" element={<Galery />} />
        <Route path="/4" element={<LoginPage />} />
        <Route path="/" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

import React from "react";
import Toasts from "./pages/Challenge3/Toasts";
import useToast from "./pages/Challenge3/useToast";

export default function Layout({ children }) {
  const { toasts, addToast } = useToast();
  return (
    <>
      <Toasts toasts={toasts} />
      {children}
    </>
  );
}

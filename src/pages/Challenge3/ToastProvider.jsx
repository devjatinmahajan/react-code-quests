import React from "react";

export const ToastContext = React.createContext();

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: 1,
      title: "default-title",
      description: "default-description",
      action: <button className="toast-action">Undo</button>,
      position: "br",
    },
  ]);
  const addToast = (title, description, action, position) => {
    setToasts((prevToasts) => {
      const newToast = { id: Date.now(), title, description, action, position };
      return [...prevToasts, newToast];
    });
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

import Toast from "./Toast";

export default function Toasts({ toasts }) {
  return (
    <section className="toast-container">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </section>
  );
}

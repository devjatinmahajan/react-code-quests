import useToast from "./useToast";

export default function Toast({ toast }) {
  const { id, title, description, action, position } = toast;
  const { removeToast } = useToast();

  let pos;
  if (position === "tl") pos = { top: 16, left: 16 };
  else if (position === "tr") pos = { top: 16, right: 16 };
  else if (position === "bl") pos = { bottom: 16, left: 16 };
  else pos = { bottom: 16, right: 16 };

  return (
    <section className="single-toast-container" style={pos}>
      <div className="toast-title-desc">
        {title ? <h4 className="toast-title">{title}</h4> : ""}
        {description ? <p className="toast-description">{description}</p> : ""}
      </div>
      <div>{action}</div>
      <button className="toast-close-button" onClick={() => removeToast(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </section>
  );
}

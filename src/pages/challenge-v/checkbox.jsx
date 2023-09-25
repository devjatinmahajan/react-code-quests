export default function Checkbox({ label, checked, onChange }) {
  const handleChange = (e) => {
    onChange && onChange(e.target.checked);
  };
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChange(e)}
      />
      <span>{label}</span>
    </>
  );
}

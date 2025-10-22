function SecondaryButton({ label = "Labels", onClick }) {
  return (
    <button
      className="px-6 py-3 bg-amber-50 font- text-gray-900 rounded-3xl select-none hover-animate-box-glow-w active:scale-[0.9] cursor-none"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default SecondaryButton;

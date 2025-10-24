import AnimatedContent from "../AnimatedContent";

function PrimaryButton({
  labes = "Labels",
  icons = "",
  bgColor = "bg-amber-50",
  textColor = "text-gray-900",
  transDirection = "vertical",
  transDelay = 0.2,
  btnClick,
}) {
  return (
    <AnimatedContent
      distance={50}
      direction={transDirection}
      duration={1.0}
      delay={transDelay}
    >
      <button
        className={`flex items-center gap-x-2 px-4 py-3 ${bgColor} font-semibold rounded border-2 border-amber-50 ${textColor} hover-animate-box-glow-w active:scale-[0.9] cursor-none`}
        onClick={btnClick}
      >
        <i className={icons}></i>
        {labes}
      </button>
    </AnimatedContent>
  );
}

export default PrimaryButton;

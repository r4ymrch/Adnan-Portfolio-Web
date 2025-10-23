import AnimatedContent from "../AnimatedContent";

function PrimaryButton({
  labes = "Labels",
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
        className={`px-6 py-3 ${bgColor} font-semibold border-2 border-amber-50 ${textColor} hover-animate-box-glow-w active:scale-[0.9] cursor-none`}
        onClick={btnClick}
      >
        {labes}
      </button>
    </AnimatedContent>
  );
}

export default PrimaryButton;

import AnimatedContent from "./AnimatedContent";
import SecondaryButton from "./Buttons/SecondaryButton";

function NavItems({ label = "Items", aClass = "" }) {
  return (
    <li
      class={`px-6 py-3 rounded-3xl hover-animate-text-glow-w cursor-target ${aClass}`}
    >
      {label}
    </li>
  );
}

function Navbar({ btnClick }) {
  return (
    <>
      <AnimatedContent
        distance={50}
        direction="vertical"
        duration={1.0}
        delay={0.2}
        reverse={true}
      >
        <nav className="fixed z-50 flex justify-around items-center py-4 w-full text-amber-50 bg-linear-to-b from-gray-950 select-none cursor-none">
          <p className="text-3xl font-bold hover-animate-text-glow-w transition-smooth cursor-target">
            Adnan Dev.
          </p>
          <ul className="flex items-center bg-gray-500/15 rounded-3xl border border-gray-800 backdrop-blur-sm">
            <NavItems label="Home" id="nav-items-1" aClass="selected" />
            <NavItems label="About" id="nav-items-2" />
            <NavItems label="Skills" id="nav-items-3" />
            <NavItems label="Services" id="nav-items-4" />
            <NavItems label="Projects" id="nav-items-5" />
          </ul>
          <div className="cursor-target">
            <SecondaryButton label="Contact Me" onClick={btnClick} />
          </div>
        </nav>
      </AnimatedContent>
    </>
  );
}

export default Navbar;

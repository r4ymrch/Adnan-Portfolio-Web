import AnimatedContent from "./AnimatedContent";

function DisplayAllLogo({ data, selectedKeys }) {
  const allKeys = Object.keys(data);
  const filteredKeys = allKeys.filter((key) => selectedKeys.includes(key));
  return (
    <>
      {filteredKeys.map((key) => {
        return (
          <div key={key} className="flex flex-col gap-y-2">
            <img src={data[key]} alt={key} />
            <p className="text-center font-semibold text-xs">{key}</p>
          </div>
        );
      })}
    </>
  );
}

function SkillsSection() {
  const cdnBaseUrl = import.meta.env.VITE_CDN_BASE_URL;
  const techLogo = {
    HTML: cdnBaseUrl + "html5/html5-original.svg",
    CSS: cdnBaseUrl + "css3/css3-original.svg",
    JS: cdnBaseUrl + "javascript/javascript-original.svg",
    TS: cdnBaseUrl + "typescript/typescript-original.svg",
    TAILWIND: cdnBaseUrl + "tailwindcss/tailwindcss-original.svg",
    REACT: cdnBaseUrl + "react/react-original.svg",
    SVELTE: cdnBaseUrl + "svelte/svelte-original.svg",
    VSCODE: cdnBaseUrl + "vscode/vscode-original.svg",
    NPM: cdnBaseUrl + "npm/npm-original.svg",
    GIT: cdnBaseUrl + "git/git-original.svg",
    GODOT: cdnBaseUrl + "godot/godot-original.svg",
    LUA: cdnBaseUrl + "lua/lua-original.svg",
    PYTHON: cdnBaseUrl + "python/python-original.svg",
    BLENDER: cdnBaseUrl + "blender/blender-original.svg",
    PHOTOSHOP: cdnBaseUrl + "photoshop/photoshop-original.svg",
    GIMP: cdnBaseUrl + "gimp/gimp-original.svg",
  };
  const webDevTechStack = [
    "HTML",
    "CSS",
    "JS",
    "TS",
    "TAILWIND",
    "REACT",
    "SVELTE",
    "VSCODE",
    "NPM",
    "GIT",
  ];
  const gameDevTechStack = [
    "GODOT",
    "LUA",
    "PYTHON",
    "BLENDER",
    "PHOTOSHOP",
    "GIMP",
  ];
  return (
    <div className="py-16">
      <AnimatedContent
        distance={50}
        direction="vertical"
        duration={1.0}
        delay={0.2}
      >
        <div className="mb-12 flex flex-col gap-y-2">
          <h1 className="text-5xl font-bold text-center hover-animate-text-glow-w">
            Skills & Expertize
          </h1>
          <div className="relative w-12 h-2 bg-amber-50/50 rounded-full m-auto"></div>
        </div>
      </AnimatedContent>
      <div className="grid grid-cols-2">
        <div className="p-6">
          <div className="flex flex-col gap-y-4 py-6 px-10 bg-amber-50/5 rounded-2xl border-4 border-amber-50/15">
            <div class="flex flex-col mb-4 mt-2 start-fade-in">
              <p class="text-3xl text-center font-bold hover-anim-tcw">
                Front-End Web Developer
              </p>
              <div class="relative w-12 h-1 bg-amber-50/50 rounded-full m-auto"></div>
            </div>
            <div className="grid grid-cols-5 gap-8">
              <DisplayAllLogo data={techLogo} selectedKeys={webDevTechStack} />
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-col gap-y-4 py-6 px-10 bg-amber-50/5 rounded-2xl border-4 border-amber-50/15">
            <div class="flex flex-col mb-4 mt-2 start-fade-in">
              <p class="text-3xl text-center font-bold hover-anim-tcw">
                Game Developer
              </p>
              <div class="relative w-12 h-1 bg-amber-50/50 rounded-full m-auto"></div>
            </div>
            <div className="grid grid-cols-5 gap-8">
              <DisplayAllLogo data={techLogo} selectedKeys={gameDevTechStack} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;

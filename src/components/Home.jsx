import heroImg from "../assets/img/adnan.webp";
import PrimaryButton from "./Buttons/PrimaryButton";
import AnimatedContent from "./AnimatedContent";
import SplitText from "./SplitText";
import TextType from "./TextType";
import TiltedCard from "./TiltedCard";

function StatsCard({ labels = "", desc = "", icons = "" }) {
  return (
    <div className="z-5 flex justify-center items-center gap-x-2 rounded-full bg-amber-50 text-gray-950 w-30 py-1 cursor-target hover-animate-box-glow-w">
      <i className={icons}></i>
      <div>
        <p className="font-semibold text-[0.65rem]">{labels}</p>
        <p className="text-[0.65rem]">{desc}</p>
      </div>
    </div>
  );
}

function HomeSection() {
  return (
    <div className="pt-10 overflow-x-hidden">
      <div className="flex justify-around items-center py-20 mb-16">
        <div className="flex flex-col gap-y-3 w-[35%]">
          <AnimatedContent
            distance={50}
            direction="vertical"
            duration={1.0}
            delay={0.2}
          >
            <SplitText
              text="Hi There👋"
              className="text-2xl hover-animate-text-glow-w cursor-target"
              delay={100}
              duration={0.3}
              textAlign="left"
            />
            <SplitText
              text="I'm Adnan Naufal"
              className="text-5xl font-semibold hover-animate-text-glow-w cursor-target"
              delay={120}
              duration={0.3}
              textAlign="left"
            />
            <p className="flex text-2xl text-center hover-animate-text-glow-w cursor-target">
              <TextType
                text={["A Front-End Web Developer", "Indie Game Developer"]}
                typingSpeed={100}
                pauseDuration={2500}
                showCursor={true}
                cursorCharacter="|"
              />
            </p>
          </AnimatedContent>
          <AnimatedContent
            distance={50}
            direction="vertical"
            duration={1.0}
            delay={0.4}
          >
            <div className="mt-2 cursor-target">
              <p className="text-[0.8rem] text-justify">
                A student passionate about IT. Transforming ideas and creativity
                into code to create engaging programs. Focused on front-end web
                development and high quality games.
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={50}
            direction="vertical"
            duration={1.0}
            delay={0.5}
          >
            <div className="flex items-center my-2 gap-x-3">
              <p className="font-semibold text-xs">Follow me on</p>
              <i className="fa-brands fa-github text-2xl hover-animate-text-glow-w cursor-target"></i>
              <i className="fa-brands fa-linkedin text-2xl hover-animate-text-glow-w cursor-target"></i>
              <i className="fa-brands fa-instagram text-2xl hover-animate-text-glow-w cursor-target"></i>
              <i className="fa-brands fa-twitter text-2xl hover-animate-text-glow-w cursor-target"></i>
            </div>
          </AnimatedContent>
          <div className="flex gap-x-3">
            <div className="cursor-target">
              <PrimaryButton
                labes="View Projects"
                icons="fa-solid fa-layer-group"
                transDelay={0.6}
              />
            </div>
            <div className="cursor-target">
              <PrimaryButton
                labes="Contact Me"
                icons="fa-solid fa-phone"
                bgColor="bg-amber-50/0"
                textColor="text-amber-50"
                transDelay={0.7}
              />
            </div>
          </div>
          <AnimatedContent
            distance={50}
            direction="vertical"
            duration={1.0}
            delay={0.6}
          >
            <div className="flex flex-col gap-y-2 mt-2">
              <p className="text-xs font-semibold">
                <i class="fa-solid fa-arrow-up-right-dots"></i> Quick Stats :
              </p>
              <div className="flex gap-x-2">
                <StatsCard
                  labels="1+ Years"
                  desc="Experience"
                  icons="fa-solid fa-book"
                />
                <StatsCard
                  labels="JavaScript"
                  desc="Main Language"
                  icons="fa-solid fa-code"
                />
                <StatsCard
                  labels="1+ Projects"
                  desc="Total Projects"
                  icons="fa-solid fa-layer-group"
                />
              </div>
            </div>
          </AnimatedContent>
        </div>
        <AnimatedContent
          distance={50}
          direction="vertical"
          duration={1.0}
          delay={0.4}
        >
          <div className="cursor-target -translate-x-12">
            <TiltedCard
              imageSrc={heroImg}
              altText="Adnan Naufal - Personal Profile"
              captionText="Adnan Naufal"
              rotateAmplitude={35}
              scaleOnHover={1.2}
            />
            <div className="absolute top-0 left-0">
              <i className="fa-brands fa-html5 text-orange-500 text-5xl -translate-x-12 -translate-y-8 -rotate-4 animate-float"></i>
              <i className="fa-brands fa-css text-purple-600 text-5xl translate-x-64 translate-y-8 rotate-4 animate-float"></i>
              <i className="fa-brands fa-js text-yellow-300 text-6xl -translate-x-48 translate-y-56 -rotate-8 animate-float"></i>
              <i className="fa-brands fa-react text-blue-400 text-7xl translate-x-16 translate-y-68 animate-float"></i>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
}

export default HomeSection;

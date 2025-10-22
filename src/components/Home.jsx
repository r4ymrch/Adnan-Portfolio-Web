import heroImg from "../assets/img/adnan.webp";
import PrimaryButton from "./Buttons/PrimaryButton";
import AnimatedContent from "./AnimatedContent";
import SplitText from "./SplitText";
import TextType from "./TextType";
import TiltedCard from "./TiltedCard";
import DecryptedText from "./DecryptedText";

function HomeSection() {
  return (
    <div className="pt-22">
      <div className="flex justify-evenly items-center py-20 mb-16">
        <div className="flex flex-col gap-y-3 w-[35%]">
          <AnimatedContent
            distance={50}
            direction="vertical"
            duration={1.0}
            delay={0.2}
          >
            <SplitText
              text="Hi There👋"
              className="text-3xl hover-animate-text-glow-w cursor-target"
              delay={100}
              duration={0.3}
              textAlign="left"
            />
            <SplitText
              text="I'm Adnan Naufal"
              className="text-5xl font-bold hover-animate-text-glow-w cursor-target"
              delay={120}
              duration={0.3}
              textAlign="left"
            />
            <p className="flex text-3xl text-center hover-animate-text-glow-w cursor-target">
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
            <div className="cursor-target">
              <DecryptedText
                text="A student passionate about IT. Transforming ideas and creativity into code to create engaging programs. Focused on front-end web development and high quality games."
                className="opacity-90"
                speed={20}
                sequential={true}
                animateOn="view"
              />
            </div>
          </AnimatedContent>
          <div className="flex gap-x-3">
            <div className="cursor-target">
              <PrimaryButton labes="View Projects" transDelay={0.6} />
            </div>
            <div className="cursor-target">
              <PrimaryButton
                labes="Contact Me"
                bgColor="bg-amber-50/0"
                textColor="text-amber-50"
                transDelay={0.7}
              />
            </div>
          </div>
        </div>
        <AnimatedContent
          distance={50}
          direction="vertical"
          duration={1.0}
          delay={0.4}
        >
          <div className="cursor-target">
            <TiltedCard
              imageSrc={heroImg}
              altText="Adnan Naufal - Personal Profile"
              captionText="Adnan Naufal"
              rotateAmplitude={35}
              scaleOnHover={1.2}
            />
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
}

export default HomeSection;

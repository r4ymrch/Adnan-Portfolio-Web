import heroImg from "../../assets/img/adnan.webp";
import PrimaryButton from "../Buttons/PrimaryButton";
import AnimatedContent from "../AnimatedContent";
import Stack from "../Stack";

function AboutSection({ btnClick }) {
  const images = [
    { id: 1, img: heroImg },
    { id: 2, img: heroImg },
    { id: 3, img: heroImg },
    { id: 4, img: heroImg },
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
            About Me
          </h1>
          <div className="relative w-12 h-2 bg-amber-50/50 rounded-full m-auto"></div>
        </div>
      </AnimatedContent>
      <div className="flex justify-evenly items-center">
        <div className="flex justify-center mr-4 cursor-target">
          <AnimatedContent
            distance={50}
            direction="vertical"
            duration={1.0}
            delay={0.1}
          >
            <Stack
              randomRotation={true}
              sensitivity={90}
              sendToBackOnClick={true}
              cardDimensions={{ width: 300, height: 400 }}
              cardsData={images}
            />
          </AnimatedContent>
        </div>
        <div className="flex flex-col gap-y-3 w-[45%]">
          <AnimatedContent
            distance={50}
            direction="vertical"
            duration={1.0}
            delay={0.2}
          >
            <div className="flex flex-col gap-y-2">
              <p className="text-justify opacity-90 hover-animate-text-glow-w cursor-target">
                Nama lengkap saya Adnan Naufal Radityo H. Saya seorang pelajar,
                murid tahun ketiga di SMA Negeri 3 Jember yang sebentar lagi
                akan lulus dan melanjutkan studi di perguruan tinggi.
              </p>
              <p className="text-justify opacity-90 hover-animate-text-glow-w cursor-target">
                Saya mulai tertarik dengan pemrograman sejak SMP ketika membuat
                mod untuk game minecraft dan itu kali pertama saya kenal dengan
                pemrograman. saat itu saya menyadari bahwa pemrograman sangat
                luas. Saya sangat menikmati dalam merancang sebuah UI, membuat
                sebuah logika pemrograman, dan menerapkan ide dan kreatifitas
                saya ke dalam kode program.
              </p>
              <p className="text-justify opacity-90 hover-animate-text-glow-w cursor-target">
                Tujuan utama saya memilih IT sebagai skills utama saya adalah
                untuk membangun karir di perusahaan teknologi seperti Google dan
                Microsoft.
              </p>
            </div>
          </AnimatedContent>
          <div className="flex gap-x-3">
            <div className="cursor-target">
              <PrimaryButton
                labes="Download CV"
                icons="fa-solid fa-download"
                transDelay={0.1}
                btnClick={btnClick}
              />
            </div>
            <div className="cursor-target">
              <PrimaryButton
                labes="View Projects"
                icons="fa-solid fa-layer-group"
                bgColor="bg-amber-50/0"
                textColor="text-amber-50"
                transDelay={0.2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

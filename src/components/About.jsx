import Stack from "./Stack";
import adnanImg from "../assets/img/adnan.webp";

function AboutSection() {
  const images = [
    { id: 1, img: adnanImg  },
    { id: 2, img: adnanImg  },
    { id: 3, img: adnanImg  },
    { id: 4, img: adnanImg  },
  ];
  return (
    <div className="grid grid-cols-2">
      <div className="bg-red-600 flex justify-center items-center">
        <Stack
          randomRotation={true}
          sensitivity={50}
          sendToBackOnClick={true}
          cardDimensions={{ width: 300, height: 350 }}
          cardsData={images}
        />
      </div>
      <div className="bg-green-400 flex justify-center items-center">
        <h1>Hello World!</h1>
      </div>
    </div>
  );
}

export default AboutSection;

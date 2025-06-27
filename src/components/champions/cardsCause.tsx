import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Sample data for causes
const causes = [
  {
    title: "Education for All",
    description: [
      "Providing quality education to underserved communities",
      "Building schools and learning centers worldwide",
      "Training teachers and educational leaders",
      "Creating digital learning platforms and resources"
    ],
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
    color: "#4A4A4A"
  },
  {
    title: "Healthcare Access",
    description: [
      "Delivering medical care to remote areas",
      "Training community health workers",
      "Providing essential medicines and equipment",
      "Building sustainable healthcare infrastructure"
    ],
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    color: "#666666"
  },
  {
    title: "Clean Water Initiative",
    description: [
      "Installing water purification systems",
      "Building wells and water distribution networks",
      "Teaching water conservation techniques",
      "Ensuring sustainable water management"
    ],
    src: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&h=600&fit=crop",
    color: "#888888"
  },
  {
    title: "Environmental Protection",
    description: [
      "Reforestation and conservation projects",
      "Renewable energy initiatives",
      "Waste reduction and recycling programs",
      "Climate change awareness campaigns"
    ],
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    color: "#AAAAAA"
  },
  {
    title: "Community Development",
    description: [
      "Empowering local communities through skill development",
      "Supporting small business and entrepreneurship",
      "Building community centers and infrastructure",
      "Fostering social cohesion and leadership"
    ],
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    color: "#CCCCCC"
  }
];

type CauseCardProps = {
  title: string;
  description: string[];
  src: string;
  color: string;
  progress: any; // You can refine this type if you know it
  range: [number, number];
  targetScale: number;
  disableAnimation: boolean;
  isMobile: boolean;
};

const CauseCard = ({
  title,
  description,
  src,
  color,
  progress,
  range,
  targetScale,
  disableAnimation,
  isMobile
}: CauseCardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className={`h-auto py-6 flex flex-col items-center justify-center ${
        isMobile ? "px-4" : "px-6 sticky top-60"
      }`}
    >
      <div ref={container} className="w-full flex justify-center">
        <motion.div
          style={{
            backgroundColor: "white",
            scale: disableAnimation || isMobile ? 1 : scale,
          }}
          className={`flex flex-col h-auto border border-gray-200 rounded-xl p-6 origin-top shadow-md hover:shadow-lg transition-shadow duration-300 ${
            isMobile ? "w-[90%]" : "w-[1000px]"
          }`}
        >
          <h2 className="text-gray-800 font-medium text-2xl m-0 mb-4">
            {title}
          </h2>

          <div
            className={`flex ${
              isMobile ? "flex-col-reverse" : "flex-row"
            } h-full gap-8`}
          >
            {/* Text content */}
            <div
              className={`${
                isMobile ? "w-full" : "w-[40%]"
              } relative`}
            >
              <ul className="list-disc pl-6 text-gray-700 text-base font-normal text-left space-y-2">
                {description.map((point: string, index: number) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Image section */}
            <div
              className={`relative rounded-lg overflow-hidden ${
                isMobile ? "w-full h-[200px] mt-4" : "w-[60%] h-[250px]"
              } flex items-center justify-center`}
            >
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                style={{
                  scale: disableAnimation || isMobile ? 1 : imageScale,
                }}
              >
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-20"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const CausesPage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateWindowSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      

      {/* Cards Section */}
      <main ref={container} className="py-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-gray-800 text-center font-medium text-3xl md:text-4xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Areas of Impact
          </motion.h2>

          <div>
            {causes.map((cause, i) => {
              const targetScale = 1 - (causes.length - i) * 0.05;
              return (
                <CauseCard
                  key={`cause_${i}`}
                  title={cause.title}
                  description={cause.description}
                  src={cause.src}
                  color={cause.color}
                  progress={scrollYProgress}
                  range={[i * 0.2, 1]}
                  targetScale={targetScale}
                  disableAnimation={isMobile}
                  isMobile={isMobile}
                />
              );
            })}
          </div>
          
          <div className="text-center mt-16 mb-8">
            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md">
              Learn More About Our Impact
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CausesPage;
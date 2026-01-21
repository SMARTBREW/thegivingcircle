import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutImpactGallery = () => {
  // 4 images for the carousel
  const carouselImages = [
    {
      id: 1,
      title: "",
      src: "https://res.cloudinary.com/dcdhhylin/image/upload/v1758200608/images/_DSC9857.jpg",
    },
    {
      id: 2,
      title: "",
      src: "https://res.cloudinary.com/dcdhhylin/image/upload/v1758183017/images/animal-protect/animal12.jpg",
    },
    {
      id: 3,
      title: "",
      src: "https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg",
    },
    {
      id: 4,
      title: "",
      src: "https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Auto-rotate images every 3 seconds (only when not paused)
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [carouselImages.length, isPaused]);

  const handleIndexChange = (index: number) => {
    setIsPaused(true);
    setCurrentIndex(index);
    // Resume auto-rotation after 5 seconds of manual interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  return (
    <section className="w-full py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-10"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Our Story
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed break-words px-2">
            Discover how our community giving platform connects Cause Champions with verified social causes across India, creating transparent and meaningful impact.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-12">
            <div className="w-full order-1 md:order-2 flex justify-center items-center md:justify-center">
              <ImageCarousel 
                images={carouselImages} 
                currentIndex={currentIndex}
                onIndexChange={handleIndexChange}
              />
            </div>
            
            <div className="w-full order-2 md:order-1 text-center md:text-left">
              <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-gray-600">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                  The Giving Circle is India's trusted social impact platform, built to connect generous people who want to support genuine social causes and make a difference in India.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                  Founded in 2022, our community giving platform brings Cause Champions together with verified causes and government-certified NGO partners driving real change across India. We make it simple to donate to social causes through our transparent giving platform, ensuring every contribution creates measurable impact.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                  As a legitimate charity platform, we partner only with verified NGO partners who meet government standards. Our transparent approach means all contributions go directly to these trusted partners—we never handle funds, ensuring complete accountability and social responsibility.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                  What makes us the best platform to support social causes in India is our community-driven social impact model. We encourage Cause Champions to visit project sites, meet beneficiaries, and join activities, fostering genuine community partnerships that go beyond donations.
                  {' '}
                  <a
                    href="/the-giving-circle"
                    className="text-green-700 hover:text-green-800 underline font-semibold transition-colors duration-200"
                    aria-label="Learn more about The Giving Circle social impact platform and how to become a Cause Champion"
                  >
                    Learn how to give back to society India
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

interface CarouselImage {
  id: number;
  title: string;
  src: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  currentIndex: number;
  onIndexChange?: (index: number) => void;
}

const ImageCarousel = ({ images, currentIndex, onIndexChange }: ImageCarouselProps) => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (imageId: number) => {
    setImageErrors((prev) => ({ ...prev, [imageId]: true }));
  };

  const handleDotClick = (index: number) => {
    if (onIndexChange) {
      onIndexChange(index);
    }
  };

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex].src;
  }, [currentIndex, images]);

  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {!imageErrors[images[currentIndex].id] ? (
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover"
              onError={() => handleImageError(images[currentIndex].id)}
              loading="eager"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-green-100 via-green-50 to-blue-100 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-gray-700 text-base sm:text-lg font-semibold break-words">
                  {images[currentIndex].title}
                </div>
              </div>
            </div>
          )}
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Image title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-white"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
            {images[currentIndex].title}
          </h3>
        </motion.div>
      </div>

      {/* Modern indicator dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => handleDotClick(index)}
            className="relative cursor-pointer"
            aria-label={`Go to image ${index + 1} of ${images.length}`}
          >
            <motion.div
              animate={{
                width: index === currentIndex ? 32 : 8,
                height: 8,
                backgroundColor: index === currentIndex ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.6)',
              }}
              whileHover={{
                backgroundColor: index === currentIndex ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.8)',
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="rounded-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AboutImpactGallery;
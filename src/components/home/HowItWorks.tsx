import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AboutImpactGallery = () => {

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
            {/* Image Grid - Show first on mobile, right and centered on desktop */}
            <div className="w-full order-1 md:order-2 flex justify-center items-center md:justify-center">
              <ShuffleGrid category="All" />
            </div>
            
            {/* Text Content - Show second on mobile, left on desktop */}
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

// Define the type for our impact items
interface ImpactItem {
  id: number;
  title: string;
  category: string;
  src: string;
}

// Helper function to shuffle array
const shuffle = (array: ImpactItem[]) => {
  // Create a copy of the array to avoid mutating the original
  const newArray = [...array];
  let currentIndex = newArray.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
};

// Impact project data with categories
const impactData: ImpactItem[] = [
  {
    id: 1,
    title: "Tree Plantation Drive",
    category: "Environment",
    src: "https://res.cloudinary.com/dcdhhylin/image/upload/v1758200608/images/_DSC9857.jpg",
  },
  {
    id: 2,
    title: "Medical Camp",
    category: "Health",
    src: "https://www.kokanngo.org/public/website/images/food-donation.png",
  },
  {
    id: 3,
    title: "School Library Setup",
    category: "Education",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQFAdoTdcoEjHxmw67XXMWJ-WnSGBdipUaFiyzA2-r-TI1De95ZwXqfp8SJVomhBXiJVs&usqp=CAU",
  },
  {
    id: 4,
    title: "Clean Water Project",
    category: "Environment",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4sFgOjHemVWRJiBDp4GTnefpSHRJLN-NBTtZq9y2zOUMQ3YEXb2MxHJ6gu9E6deN_xyE&usqp=CAU",
  },
  {
    id: 5,
    title: "Children's Health Checkup",
    category: "Health",
    src: "https://www.animalcareindia.org.in/wp-content/uploads/2025/03/Untitled-design-4.png",
  },
  {
    id: 6,
    title: "Digital Learning Center",
    category: "Education",
    src: "https://mamtahimc.in/image/rmnch-m.jpg",
  },
  {
    id: 7,
    title: "Community Garden",
    category: "Environment",
    src: "https://www.animalcareindia.org.in/wp-content/uploads/2025/03/Untitled-design-5.png",
  },
  {
    id: 8,
    title: "Nutrition Program",
    category: "Health",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KYdM7ttZiKqM_iV54OC5Gp03vcgMjDjq3bRpZQskQQp9MK61Yp9cOq6PVfrokmAP-aI&usqp=CAU",
  },
  {
    id: 9,
    title: "Scholarship Program",
    category: "Education",
    src: "https://media.licdn.com/dms/image/v2/D5622AQGJyDl8RVn79A/feedshare-shrink_800/B56ZYaPfI8GoAg-/0/1744196991489?e=2147483647&v=beta&t=dRCGgTukqeyAdz4b-PjY_UWmakEK0VXXJkv1Bl9mHJM",
  },
  {
    id: 10,
    title: "Reforestation Project",
    category: "Environment",
    src: "https://mamtahimc.in/wp-content/uploads/2023/12/abmb-m.jpg",
  },
  {
    id: 11,
    title: "Mobile Health Clinic",
    category: "Health",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeVOz7GMpfSRpYY1RVvrMbqRFwEdqkMj1vDrl2iDE-3nsbxyq81H33gvEx1bPQrxonaA&usqp=CAU",
  },
  {
    id: 12,
    title: "STEM Education Workshop",
    category: "Education",
    src: "https://khushii.org/wp-content/uploads/2023/03/ppf-donatemm.jpg",
  },
  {
    id: 13,
    title: "Solar Energy Initiative",
    category: "Environment",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIt0-4UbfJjTK5jtZScdINO3UhAj7oxPRuw&s",
  },
  {
    id: 14,
    title: "Mental Health Support",
    category: "Health",
    src: "https://khushii.org/wp-content/uploads/2022/05/MobBanner_C.jpg",
  },
  {
    id: 15,
    title: "Teacher Training Program",
    category: "Education",
    src: "https://www.kokanngo.org/public/URL/popupboximagenew_1.png",
  },
  {
    id: 16,
    title: "Waste Management Project",
    category: "Environment",
    src: "https://www.kokanngo.org/public/OurGallery/3.png",
  },
];

// Image Square Component with error handling
const ImageSquare = ({ item }: { item: ImpactItem }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <motion.div
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-md overflow-hidden bg-gray-200 relative group"
    >
      {!imageError ? (
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
          <div className="text-center p-2">
            <div className="text-gray-600 text-[8px] sm:text-[10px] font-medium break-words">{item.title}</div>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end pointer-events-none">
        <div className="p-1.5 sm:p-2 md:p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
          <div className="font-medium text-[10px] sm:text-xs md:text-sm lg:text-base break-words">{item.title}</div>
          <span className="text-[10px] sm:text-xs text-white/80">{item.category}</span>
        </div>
      </div>
    </motion.div>
  );
};

const generateSquares = (category: string) => {
  const filteredData = category === "All" 
    ? impactData 
    : impactData.filter(item => item.category === category);
  
  // If we have less than 16 items after filtering, duplicate some to fill the grid
  let dataToUse = [...filteredData];
  while (dataToUse.length < 16) {
    dataToUse = [...dataToUse, ...filteredData];
  }
  
  // Take only the first 16 items
  dataToUse = dataToUse.slice(0, 16);
  
  return shuffle(dataToUse).map((item, index) => (
    <ImageSquare key={`${item.id}-${index}`} item={item} />
  ));
};

interface ShuffleGridProps {
  category: string;
}

// ShuffleGrid component with category filter support
const ShuffleGrid = ({ category = "All" }: ShuffleGridProps) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState(generateSquares(category));

  useEffect(() => {
    // Reset squares when category changes
    setSquares(generateSquares(category));
    
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Start new shuffle cycle
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [category]);

  const shuffleSquares = () => {
    setSquares(generateSquares(category));
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] gap-1 sm:gap-2">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default AboutImpactGallery;
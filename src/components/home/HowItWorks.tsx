"use client"

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const AboutImpactGallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const filters = ["All", "Health", "Education", "Environment"];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-50/30 via-green-50/20 to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-text mb-4 sm:mb-6 md:mb-8 px-4">
            About{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl text-text/70 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6 leading-relaxed">
            We're on a mission to bridge the gap between good intentions and verified impact, 
            creating a world where every act of kindness leaves a permanent, traceable mark.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 md:mb-24 lg:mb-28"
        >
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text mb-6 sm:mb-8">
                Our Story
              </h2>
              <div className="space-y-4 sm:space-y-6 text-text/70">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Founded in 2023, we started with a simple question: "How can we make social impact 
                  more transparent and verifiable?" After witnessing countless well-intentioned donations 
                  disappear into organizational overhead, we knew there had to be a better way.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Our breakthrough came when we realized that blockchain technology could create permanent, 
                  immutable records of impact stories. By partnering with verified NGOs and documenting 
                  every project from start to finish, we've created a new model of accountable philanthropy.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Today, thousands of champions trust us to turn their compassion into verified change, 
                  one impact story at a time.
                  {' '}
                  <a
                    href="/the-giving-circle"
                    className="text-purple-600 hover:text-pink-600 underline font-semibold transition-colors duration-200"
                  >
                    Know more
                  </a>
                </p>
              </div>
            </div>
            
            <div className="md:order-2">
              <ShuffleGrid category={activeFilter} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-text mb-6 sm:mb-8">
            See the Change
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-text/70 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Witness the real impact of our collective giving through these moments of change in health, education, and environmental initiatives.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-md font-medium transition-all",
                  activeFilter === filter 
                    ? "bg-purple-600 text-white" 
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <button className={cn(
            "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-6 rounded-md",
            "transition-all hover:shadow-lg active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
          )}>
            Join our circle
          </button>
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
    src: "https://kokanngo.org/articles/wp-content/uploads/2024/01/Pioneering-Change-Education.png",
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
    src: "https://media.licdn.com/dms/image/v2/D5622AQGJyDl8RVn79A/feedshare-shrink_800/B56ZYaPfI8GoAg-/0/1744196991489?e=2147483647&v=beta&t=dRCGgTukqeyAdz4b-PjY_UWmakEK0VXXJkv1Bl9mHJM ",
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

// Generate squares based on active filter
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
  
  return shuffle(dataToUse).map((item) => (
    <motion.div
      key={item.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-md overflow-hidden bg-gray-100 relative group"
      style={{
        backgroundImage: `url(${item.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
        <div className="p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h4 className="font-medium text-sm">{item.title}</h4>
          <span className="text-xs text-white/80">{item.category}</span>
        </div>
      </div>
    </motion.div>
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
    <div className="grid grid-cols-4 grid-rows-4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default AboutImpactGallery;
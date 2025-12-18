import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GivingPhilosophy = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const impactLines = [
    ["1,000+ Trees Planted", "500 Children Educated", "200 Families Fed", "50 Wells Built", "300 Animals Rescued", "100 Schools Built", "2000+ Lives Changed", "₹10L+ Donated", "75 NGOs Supported"],
    ["₹5L+ Donated", "25 NGOs Supported", "100 Volunteers Active", "15 Cities Reached", "1000+ Lives Touched", "50 Communities Helped", "30 Projects Completed", "5000+ Meals Served", "200+ Scholarships"],
    ["Clean Water Access", "Educational Support", "Healthcare Aid", "Environmental Care", "Community Building", "Women Empowerment", "Child Welfare", "Elder Care", "Disability Support"]
  ];

  // Removed scroll animations to keep cards static

  return (
    <>
      <style>{`
        .text-glow {
          text-shadow: 0 0 20px rgba(21, 128, 61, 0.3);
        }
        
        .glassmorphism {
          background: white;
          border: 2px solid #e5e7eb;
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.05),
            0 1px 3px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      
      <section className="py-8 sm:py-10 md:py-12 lg:py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Philosophy Text */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Giving Matters
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Every act of giving creates ripples of hope that reach farther than we can imagine. When we unite as a circle, our individual sparks of compassion join to become a powerful force for change.

              </p>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
              The Giving Circle isn’t just about donations - it’s about people standing beside one another, turning kindness into action. Here, your generosity grows through connection, shared purpose, and the belief that together we can transform lives, uplift communities, and change the world. 

              </p>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
              The Giving Circle shows how ordinary people can bring about extraordinary change. 

              </p>
              <div className="pt-4">
              <motion.button
            onClick={() => navigate("/onboarding")}
            className="bg-green-700 text-white text-bold px-4 py-2 sm:py-3 font-medium text-sm sm:text-base transition-all duration-300 backdrop-blur-sm w-1/2 rounded-full hover:bg-green-800"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              transition: { type: "spring", stiffness: 400, damping: 20 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="whitespace-nowrap">Join Our Mission</span>
          </motion.button>
              </div>
            </div>

            {/* Right: Static Impact Columns with Zigzag Layout */}
            <div className="grid grid-cols-3 gap-3 h-96 overflow-hidden">
              {impactLines.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className="flex flex-col space-y-2"
                  style={{
                    transform: columnIndex === 1 ? 'translateY(-20px)' : 'translateY(0)'
                  }}
                >
                  {/* Display only the first set of items without repetition */}
                  {column.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="glassmorphism p-4 rounded-lg text-center min-h-20 flex items-center justify-center"
                    >
                      <span className="text-primary text-sm font-medium text-center leading-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GivingPhilosophy;
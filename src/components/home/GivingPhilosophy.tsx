import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GivingPhilosophy = () => {
  const navigate = useNavigate();

  const impactLines = [
    ["Clean Water Access", "Educational Support", "Healthcare Aid", "Environmental Care", "Community Building", "Women Empowerment", "Child Welfare", "Elder Care", "Disability Support"],
    ["Rural Development", "Skill Training", "Mental Health Support", "Disaster Relief", "Youth Programs", "Housing Support", "Medical Care", "Nutrition Programs", "Scholarship Aid"],
    ["Food Security", "Animal Welfare", "Tree Planting", "Water Infrastructure", "School Development", "Life Transformation", "Financial Aid", "NGO Partnerships", "Volunteer Engagement"]
  ];

  return (
    <>
      <style>{`
        .glassmorphism {
          background: white;
          border: 2px solid #e5e7eb;
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.05),
            0 1px 3px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <section className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Why Giving Matters
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed break-words">
                Every act of social giving creates ripples of hope that reach farther than we can imagine. When we unite as a support circle, our individual sparks of compassion join to become a powerful force for social impact and change. By giving to community initiatives, we strengthen the fabric of our society.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed break-words">
                The Giving Circle is India's trusted social impact platform where community partnerships create lasting change. We're not just about donations - we connect passionate Cause Champions with verified community causes, turning kindness into measurable impact. Through our transparent giving platform and community support platform, your generosity grows through connection, shared purpose, and community-driven social impact across India. Join our giving community to support social causes and create a circle of support that makes a real difference.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed break-words">
                Join our giving circle and discover how to support social causes in the india community while creating real impact stories that inspire others to give back. Whether you're looking for supported causes, want to give through our verified channels, or seek a community helpline for your initiatives, The Giving Circle connects you with the right opportunities. Our community offering makes it easy to provide support from community members, ensuring communities support one another for a better future.
              </p>

              <div className="pt-2 sm:pt-4 flex justify-center md:justify-start">
                <motion.button
                  onClick={() => navigate("/onboarding")}
                  className="bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 font-medium text-sm sm:text-base transition-all duration-300 w-full sm:w-auto rounded-full hover:bg-green-800"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Start your giving circle and join our social impact platform to support causes across India"
                >
                  <span className="whitespace-nowrap">Start Your Giving Circle</span>
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 h-64 sm:h-80 md:h-96 overflow-hidden mt-6 md:mt-0">
              {impactLines.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className="flex flex-col space-y-1.5 sm:space-y-2"
                  style={{
                    transform: columnIndex === 1 ? 'translateY(-20px)' : 'translateY(0)'
                  }}
                >
                  {column.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="glassmorphism p-1.5 sm:p-2 md:p-3 lg:p-4 rounded-lg text-center min-h-14 sm:min-h-16 md:min-h-20 flex items-center justify-center overflow-hidden"
                    >
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-center leading-tight break-words px-0.5 sm:px-1">
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
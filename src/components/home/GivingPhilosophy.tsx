import { useEffect, useState } from "react";

const GivingPhilosophy = () => {
  const [scrollY, setScrollY] = useState(0);

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

  const scrollUpAnimation = {
    animation: 'scrollUp 25s linear infinite'
  };

  const scrollDownAnimation = {
    animation: 'scrollDown 25s linear infinite'
  };

  return (
    <>
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        
        .text-glow {
          text-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
        }
        
        .glassmorphism {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>
      
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Philosophy Text */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black text-glow">
                Why Giving Matters
              </h2>
              <p className="text-black text-lg leading-relaxed">
                Every act of giving creates ripples that extend far beyond what we can see.
                When we come together as a circle, our individual contributions become a
                powerful force for change.
              </p>
              <p className="text-black leading-relaxed">
                The Giving Circle isn't just about donations—it's about building a community
                where every person's generosity multiplies through connection, collaboration,
                and shared purpose. Together, we transform lives, communities, and the world.
              </p>
              <div className="pt-4">
                <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Join Our Mission
                </button>
              </div>
            </div>

            {/* Right: Animated Impact Columns */}
            <div className="grid grid-cols-3 gap-3 h-96 overflow-hidden">
              {impactLines.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className="flex flex-col space-y-2"
                  style={columnIndex % 2 === 0 ? scrollUpAnimation : scrollDownAnimation}
                >
                  {/* Repeat column items multiple times for seamless infinite scroll */}
                  {Array.from({ length: 8 }).map((_, repeatIndex) =>
                    column.map((item, itemIndex) => (
                      <div
                        key={`${repeatIndex}-${itemIndex}`}
                        className="glassmorphism p-4 rounded-lg text-center min-h-20 flex items-center justify-center"
                      >
                        <span className="text-black text-sm font-medium text-center leading-tight">
                          {item}
                        </span>
                      </div>
                    ))
                  )}
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
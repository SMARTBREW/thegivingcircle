import React, { useRef, useEffect } from 'react';

const AboutChampionsPage: React.FC = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Ensure visibility first - set all elements to be visible immediately
    [...imageRefs.current, ...textRefs.current].forEach((el) => {
      if (el) {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
      }
    });

    // Simple animation function to simulate GSAP-like behavior
    const animateElements = () => {
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        imageRefs.current.forEach((img, index) => {
          const text = textRefs.current[index];
          
          if (img && text) {
            // Set initial state - but keep them visible with opacity
            const imageInitialX = index % 2 === 0 ? '-100%' : '100%';
            const textInitialX = index % 2 === 0 ? '100%' : '-100%';
            
            // Don't set transform to keep elements visible
            //img.style.transform = `translateX(${imageInitialX})`;
            //text.style.transform = `translateX(${textInitialX})`;
            
            // Create intersection observer for scroll animation
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  // Animate image
                  if (entry.target === img) {
                    img.style.transition = 'transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1.5s ease';
                    img.style.transform = 'translateX(0%)';
                    img.style.opacity = '1';
                  }
                  // Animate text
                  if (entry.target === text) {
                    text.style.transition = 'transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1.5s ease';
                    text.style.transform = 'translateX(0%)';
                    text.style.opacity = '1';
                  }
                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.1 });
            
            observer.observe(img);
            observer.observe(text);
          }
        });
      }
    };

    // Run animations after ensuring visibility
    setTimeout(animateElements, 300);

    // Cleanup function
    return () => {
      [...imageRefs.current, ...textRefs.current].forEach((el) => {
        if (el) {
          el.style.transition = '';
          el.style.transform = '';
          el.style.opacity = '';
        }
      });
    };
  }, []);

  const sectionsData = [
    {
      title: "Dedicated Advocacy for Sustainable Change",
      description: "Our Champions serve as pillars of community transformation, implementing initiatives that create lasting positive impact. Through strategic mentorship, educational support, and targeted philanthropy, Champions establish foundations for meaningful social progress.",
      imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Champions collaborating on community initiatives"
    },
    {
      title: "Collaborative Community Development",
      description: "The Giving Circle Champions understand that enduring change emerges through structured collaboration. They cultivate strategic partnerships, establish support networks, and develop sustainable frameworks for continued community advancement and resource optimization.",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Strategic partnership meeting between community leaders"
    },
    {
      title: "Join Our Distinguished Network",
      description: "Become part of The Giving Circle's esteemed network of Champions creating measurable impact. Whether your expertise lies in healthcare accessibility, educational advancement, environmental sustainability, or social equity, we welcome your professional skills and dedication to our collective mission.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Professional Champions in discussion"
    }
  ];

  return (
    <div className="flex flex-col items-center overflow-hidden bg-gray-50">
      {/* Hero Section - with simpler overlay */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] mb-20">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Champions working together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-6 md:px-8 lg:px-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              The Giving Circle Champions
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Empowering distinguished individuals to create measurable social impact through strategic philanthropy, operational excellence, and dedicated community engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections - with inline styles for visibility */}
      <div className="px-8 lg:px-16 mb-20 w-full max-w-7xl mx-auto opacity-100">
        {sectionsData.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center gap-12 mb-24 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100`}
            style={{ opacity: 1 }}
          >
            <div
              ref={(el) => (imageRefs.current[index] = el)}
              className="w-full lg:w-1/2 h-72 lg:h-96"
              style={{ opacity: 1, transform: 'translateX(0)' }}
            >
              <img
                src={section.imageUrl}
                alt={section.imageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                style={{ opacity: 1 }}
              />
            </div>

            <div
              ref={(el) => (textRefs.current[index] = el)}
              className="w-full lg:w-1/2 text-center lg:text-left p-8"
              style={{ opacity: 1, transform: 'translateX(0)' }}
            >
              <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
                {section.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {section.description}
              </p>
            </div>
          </div>
        ))}

        {/* Call to Action Button */}
        <div className="text-center mt-16 bg-white p-12 rounded-lg shadow-sm border border-gray-100" style={{ opacity: 1 }}>
          <h3 className="text-2xl font-medium text-gray-800 mb-6">Ready to Make a Difference?</h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            The Giving Circle welcomes dedicated professionals committed to creating sustainable change through structured philanthropy and strategic community engagement.
          </p>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-md shadow-md transition-colors duration-300">
            Apply to Become a Champion
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutChampionsPage;
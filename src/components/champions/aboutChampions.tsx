import React, { useRef, useEffect } from 'react';

const AboutChampionsPage: React.FC = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Simple animation function to simulate GSAP-like behavior
    const animateElements = () => {
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        imageRefs.current.forEach((img, index) => {
          const text = textRefs.current[index];
          
          if (img && text) {
            // Set initial state
            const imageInitialX = index % 2 === 0 ? '-100%' : '100%';
            const textInitialX = index % 2 === 0 ? '100%' : '-100%';
            
            img.style.transform = `translateX(${imageInitialX})`;
            img.style.opacity = '0';
            text.style.transform = `translateX(${textInitialX})`;
            text.style.opacity = '0';
            
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
      } else {
        // For mobile, just fade in
        [...imageRefs.current, ...textRefs.current].forEach((el) => {
          if (el) {
            el.style.opacity = '1';
            el.style.transform = 'translateX(0%)';
          }
        });
      }
    };

    animateElements();

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
      title: "Champions Drive Community Change",
      description: "Champions are the backbone of positive transformation, leading initiatives that create lasting impact in their communities. They mentor youth, support education, and drive meaningful social causes.",
      imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Champions celebrating together"
    },
    {
      title: "Building Stronger Communities",
      description: "True champions understand that lasting change happens through collaboration. They foster connections, create support networks, and build foundations for sustainable positive change.",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "People working together as champions"
    },
    {
      title: "Become a Champion Today",
      description: "Join our community of champions making a real difference. Whether you're passionate about education, healthcare, environment, or social justice, there's a place for your unique skills and passion.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Champions making a difference"
    }
  ];

  return (
    <div className="flex flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] mb-16">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Champions working together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6 md:px-8 lg:px-16">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Champions Making a Difference
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Empowering individuals to create positive change in their communities through leadership, collaboration, and dedication.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-8 lg:px-16 mb-16 w-full">
        {sectionsData.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } ${index % 2 !== 0 ? 'flex-col-reverse' : ''} items-center gap-8 lg:gap-16 max-w-7xl mx-auto w-full mb-16`}
          >
            <div
              ref={(el) => (imageRefs.current[index] = el)}
              className="rounded-lg overflow-hidden shadow-lg w-full lg:w-1/2 h-64 lg:h-80"
            >
              <img
                src={section.imageUrl}
                alt={section.imageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div
              ref={(el) => (textRefs.current[index] = el)}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                {section.description}
              </p>
            </div>
          </div>
        ))}

        {/* Call to Action Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg">
            Join the Champions Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutChampionsPage;
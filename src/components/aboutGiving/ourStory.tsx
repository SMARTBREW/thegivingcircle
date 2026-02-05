import { motion } from 'framer-motion';

export default function SimplifiedAboutPage() {

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/Smileshero.jpg" 
            alt="Our Mission - Creating Verified Impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 break-words">
            About The Giving Circle
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed opacity-90 max-w-2xl mx-auto break-words">
            India's leading giving platform and community support platform bridging community giving with verified causes - where Cause Champions create a circle of support for social impact across India
          </p>
        </motion.div>
      </section>

      <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">
              Our Story - What is The Giving Circle
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed break-words">
              From a simple question grew a revolutionary giving platform that is reshaping community giving and social giving across India. Discover our giving philosophy, why community giving matters, and how our community support platform connects communities for communities to support social causes together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-3 sm:space-y-4 md:space-y-6 text-gray-700">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                  <strong>Our giving philosophy</strong> began with a simple vision: to build a giving community of generous, warm-hearted Cause Champions who want to support social causes and create meaningful impact. <strong>Why community giving matters</strong> - because when we give through a support circle, we create lasting social change. Our giving support system enables people to give and help communities across India, providing community support and giving to community initiatives that truly matter.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                  Founded in 2022, <strong>The Giving Circle India</strong> is a giving platform and community support platform that brings this vision to life by connecting individuals with verified NGOs and social causes to support. Through our Cause Champions platform, we make it simple for supporters to give through our platform, engage with causes to support, and strengthen communities support initiatives across India. We are supporting india by providing circle aid and community helpline resources for verified causes.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                  <strong>How does giving circle work?</strong> Our role is simple yet vital: we act as a support community and bridge, linking Cause Champions with community causes close to their hearts. We partner only with government-certified NGOs, ensuring every organization meets official standards. For complete transparency, contributions go directly to these NGOs and never pass through us - this is the foundation of our community empowerment platform and giving support system. Through our giving india initiative, we facilitate support from community to community.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                  <strong>What is The Giving Circle?</strong> It's more than a donation platform - it's a social giving movement and circle of support connecting the india community. What sets us apart is the connection that goes beyond donations. Supporters are encouraged to visit project sites, meet beneficiaries, and join community offering activities whenever possible. These experiences foster genuine relationships between donors and communities, creating authentic support of community and india care initiatives. We believe in communities for communities - where giving community members support social causes together.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                  Today, thousands trust our giving platform to connect their generosity with certified organizations and supported causes. They know their contributions will go directly where needed through our transparent social giving approach—and that they'll have the chance to witness the social change in person. Whether you're looking for causes to support or want to join our support circle, The Giving Circle provides giving support and community support to make a real difference in supporting india's communities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative order-first lg:order-last"
            >
              <img 
                src="/Smileshero.jpg" 
                alt="Team collaboration"
                className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg sm:rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
import { motion } from 'framer-motion';

export default function SimplifiedAboutPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            About Us
          </h1>
          <p className="text-lg mb-6 sm:mb-8 leading-relaxed opacity-90 max-w-2xl mx-auto">
            Bridging the gap between good intentions and verified impact
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8 md:mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From a simple question grew a revolutionary platform that is reshaping the way we give and experience philanthropy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4 sm:space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                We began with a simple vision: to build a community of generous, warm-hearted people who want to support genuine causes.

                </p>
                <p className="text-lg leading-relaxed">
                Founded in 2022, The Giving Circle brings this vision to life by connecting individuals with NGOs driving meaningful change on the ground. Through trusted channels, we make it simple for supporters to engage with and strengthen these causes.

                </p>
                <p className="text-lg leading-relaxed">
                Our role is simple yet vital: we act as a bridge, linking supporters with causes close to their hearts. We partner only with government-certified NGOs, ensuring every organization meets official standards. For complete transparency, contributions go directly to these NGOs and never pass through us.

                </p>
                <p className="text-lg leading-relaxed">
                What sets us apart is the connection that goes beyond donations. Supporters are encouraged to visit project sites, meet beneficiaries, and join activities whenever possible. These experiences foster genuine relationships between donors and communities.



                </p>
                <p className="text-lg leading-relaxed">
                Today, thousands trust us to connect their generosity with certified organizations, knowing their contributions will go directly where needed—and that they’ll have the chance to witness the impact of their support in person.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/Smileshero.jpg" 
                alt="Team collaboration"
                className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
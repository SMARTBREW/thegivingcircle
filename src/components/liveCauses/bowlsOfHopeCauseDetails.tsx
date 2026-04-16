import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Share2, Shield, Facebook, Twitter, AlertTriangle, FileText, CheckCircle, Award, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../SEO/SEOHead';
import ArticleSchema from '../SEO/ArticleSchema';
import CloudinaryImage from '../ui/CloudinaryImage';

const BowlsOfHopeCauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How are donations used for animal feeding programs?",
      answer: "95% of every donation goes directly to feeding operations: purchasing nutritious animal food, maintaining feeding stations, coordinating volunteer networks, and providing clean water sources. The remaining 5% covers essential coordination costs including communications, reporting, and logistics management. All expenditures are audited annually and financial reports are published quarterly on the AnimalCare India website."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes. AnimalCare India is registered under Section 80G of the Income Tax Act. All donations are eligible for tax deductions. You will receive an 80G receipt via email within 48 hours of your donation, which you can use when filing your income tax returns. If you do not receive your receipt, please write to info@animalcareindia.org.in and the team will issue it immediately."
    },
    {
      question: "How do you ensure animals receive consistent nutrition?",
      answer: "We maintain 25+ feeding stations across Chennai and Mumbai with daily feeding schedules. Each station is managed by trained volunteers who ensure animals receive balanced, nutritious meals at consistent times. We monitor feeding patterns and adjust schedules based on animal needs. GPS tracking and daily reports ensure every feeding station operates effectively."
    },
    {
      question: "What happens to animals after they are fed?",
      answer: "Animals receive daily nutrition at designated feeding stations. The programme photographs feeding activities and maintains records for impact assessment. Animals that show signs of illness or injury are referred to partner veterinary facilities. Once animals are healthy and well-fed, they continue receiving daily nutrition while building trust with volunteers and communities."
    },
    {
      question: "Can I donate supplies instead of money?",
      answer: "While monetary donations are most efficient because they allow the programme to purchase exactly what is needed at the right time and location, in-kind donations of specific items are also welcome. Priority items include dry pet food, feeding bowls, clean water containers, and basic veterinary supplies. Contact the team at +91-9315982650 or info@animalcareindia.org.in to coordinate supply donations. Please note that in-kind donations are not eligible for 80G tax receipts."
    },
    {
      question: "How will I know my donation made a difference?",
      answer: "We believe in complete transparency. We send regular email updates with photos and videos from feeding stations. You will also receive a detailed impact report showing exactly how many animals were fed, how many feeding stations operated, and how communities were engaged in animal welfare."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const cause = {
    id: 4,
    title: 'Bowls of Hope',
    subtitle: 'Give life with each bowl - feed stray animals and support animal welfare India',
    organizer: 'AnimalCare India',
    ngo: 'AnimalCare India',
    location: 'Chennai, Mumbai, Tamil Nadu, Maharashtra',
    category: 'Animal Welfare India • Animal Nutrition',
    goalAmount: '₹7,80,000',
    raisedAmount: '₹6,20,000',
    progressPercentage: 79,
    supporters: 445,
    daysLeft: 18,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg',
    urgency: 'Critical',
    problemStatement: 'How to feed stray animals India? Thousands of hungry street animals struggle daily without animal feeding programs. Feed hungry animals India - they face starvation, malnutrition, and death without systematic animal nutrition support. Animal feeding programs Mumbai, Chennai, and across India are critically needed. Help feed street animals before it\'s too late.',

    rootCauses: [
      'Lack of organized animal feeding programs for stray animals',
      'Limited animal nutrition support and feeding initiatives',
      'Insufficient awareness about how to feed stray animals properly',
      'Absence of feeding stations and animal welfare infrastructure',
      'No systematic support animal feeding initiatives in communities'
    ],

    consequences: [
      'Feed hungry animals India or they continue starving and dying',
      'Increased mortality - thousands die without animal nutrition support',
      'Weak, disease-prone animals without animal feeding programs',
      'Human-animal conflicts when hungry street animals search for food',
      'Lost opportunity to support animal welfare and feed stray animals'
    ],

    solution: {
      approach: 'Bowls of Hope delivers comprehensive animal feeding programs India providing daily nutrition to feed stray animals through organized feeding stations, volunteer networks, and animal nutrition support initiatives.',
      components: [
        'Animal feeding programs Mumbai & Chennai - 25+ feeding stations daily',
        'Support animal nutrition programs with balanced, healthy meals',
        'How to feed stray animals India - community training and volunteer networks',
        'Help feed street animals through organized animal welfare infrastructure',
        'Support animal feeding initiatives with nutrition monitoring and care'
      ]
    },

    beneficiaries: {
      primary: '2,000+ street animals fed daily through animal nutrition programs',
      secondary: '10,000+ community members supporting animal welfare',
      community: '25+ feeding stations across Chennai and Mumbai',
      longTerm: 'Sustainable animal feeding programs feeding hungry animals across India'
    },

    impactGallery: [
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg',
        caption: 'Animal feeding programs India - volunteers feed stray animals with nutritious meals daily',
        type: 'Daily Feeding'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183037/images/animals-bowl/animal2.jpg',
        caption: 'How to feed stray animals India - community members support animal nutrition programs',
        type: 'Community Feeding'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183039/images/animals-bowl/animal3.jpg',
        caption: 'Help feed street animals - dedicated volunteers support animal feeding initiatives',
        type: 'Volunteer Care'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183040/images/animals-bowl/animal4.jpg',
        caption: 'Animal feeding programs Mumbai & Chennai - feeding stations provide consistent nutrition',
        type: 'Feeding Stations'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183042/images/animals-bowl/animal5.jpg',
        caption: 'Feed hungry animals India through animal nutrition support and welfare programs',
        type: 'Animal Nutrition'
      }
    ],

    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '2,000+ animals',
        description: 'Fed daily through animal feeding programs with nutritious meals',
        timeline: 'Short-term'
      },
      {
        metric: '90% reduction',
        description: 'In starvation deaths through systematic animal nutrition support',
        timeline: 'Medium-term'
      },
      {
        metric: '25 feeding stations',
        description: 'Animal feeding programs Mumbai & Chennai providing consistent care',
        timeline: 'Long-term'
      },
      {
        metric: '500+ volunteers',
        description: 'Trained in how to feed stray animals and support animal welfare',
        timeline: 'Medium-term'
      }
    ],

    timeline: '12 months',

    updates: [
      {
        date: '10 March 2024',
        title: 'First Feeding Station Launch',
        description: 'Successfully launched our first feeding station in Chennai, serving 200+ animals daily with nutritious meals.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg'
      },
      {
        date: '15 March 2024',
        title: 'Community Volunteer Program',
        description: 'Recruited and trained 50+ community volunteers for daily feeding operations across 5 neighborhoods.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183037/images/animals-bowl/animal2.jpg'
      },
      {
        date: '20 March 2024',
        title: 'Water Source Installation',
        description: 'Installed clean water sources at 10 feeding stations, ensuring animals have access to fresh water.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183039/images/animals-bowl/animal3.jpg'
      }
    ],

    testimonials: [
      {
        name: 'Dr. Priya Menon',
        role: 'Veterinarian, Chennai',
        quote: 'The Bowls of Hope program has transformed our community. Street animals are healthier, happier, and the community has learned to care for them. This program shows that compassion can solve even the biggest challenges.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face'
      },
      {
        name: 'Rajesh Kumar',
        role: 'Community Leader, Chennai',
        quote: 'Before this program, we had many conflicts with stray animals. Now, with regular feeding, the animals are calmer and the community has learned to coexist peacefully. Bowls of Hope has brought harmony to our neighborhood.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      }
    ],

    milestones: [
      { target: '₹1,95,000', achievement: 'First 5 Feeding Stations Setup', status: 'completed' },
      { target: '₹3,90,000', achievement: 'Community Volunteer Network', status: 'completed' },
      { target: '₹5,85,000', achievement: 'Water Sources & Nutrition Program', status: 'in-progress' },
      { target: '₹7,02,000', achievement: 'Expansion to 20+ Feeding Stations', status: 'pending' },
      { target: '₹7,80,000', achievement: 'Full Program Implementation & Monitoring', status: 'pending' }
    ]
  };

  // NGO details
  const ngoDetails = {
    name: 'AnimalCare India',
    logo: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg',
    tagline: 'Compassion in action, transparency in practice',
    stats: {
      transparency: 98,
      programSpend: 95,
      yearsActive: '8+',
      states: 8
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Feed Stray Animals Daily | Support Animal Welfare India"
        description="Help feed hungry animals in India. Support stray dog feeding programs and animal nutrition initiatives. Your contribution helps verified animal welfare NGO India reach more street animals."
        keywords="animal welfare ngo, feed stray animals, feed stray dogs, animal feeding programs, animal nutrition support, help feed street animals, feed hungry animals, animal feeding programs Mumbai, animal feeding programs Chennai, donate for rabies vaccination drive near me, animal vaccination NGO donation, support animal feeding, street animal care, straying animals, animal ngo, animal help, animal helpline, animal welfare association, people for animals, CSR for animal welfare, corporate sponsorship for animal feeding, CSR project for animal nutrition"
        canonicalUrl="https://www.thegivingcircle.in/bowls-of-hope-cause-details"
        ogImage="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183042/images/animals-bowl/animal5.jpg"
      />
      <ArticleSchema
        title="Bowls of Hope - Animal Feeding Programs India"
        description="Bowls of Hope provides animal feeding programs and animal nutrition support India. Feeding 2,000+ street animals daily with nutritious meals in Mumbai and Chennai."
        image="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183042/images/animals-bowl/animal5.jpg"
        category="Animal Welfare"
        location="Chennai, Tamil Nadu & Mumbai, Maharashtra"
        datePublished="2024-01-15"
        author="Animal Care India"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10">
            Bowls of Hope When Hunger Strikes, We Feed Them
          </h1>

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Every day, thousands of street animals across India go hungry. They cannot find food. They cannot ask for help. They can only wait hoping someone will notice, someone will care, someone will feed them. This campaign is that someone.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <Shield className="text-green-700" size={16} />
              Tax Benefits · 80G
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <CheckCircle className="text-green-700" size={16} />
              100% Transparency Score
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <TrendingUp className="text-green-700" size={16} />
              8+ Years Active
            </div>
          </div>

          {/* Geographic Line */}
          <p className="text-sm text-gray-600 mb-8">
            <strong>Multi-city operations</strong> · Chennai, Mumbai, Tamil Nadu, Maharashtra
          </p>

          {/* Hero Image - Full width and centered */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg mx-auto">
            <CloudinaryImage
              src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg"
              alt="Street animals receiving daily nutrition through Bowls of Hope feeding programs by AnimalCare India"
              className="w-full aspect-video object-cover"
              width={1200}
              height={675}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Two-Column Page Body */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Main Content Column */}
          <main className="min-w-0">

            {/* Section 1: When Hunger Strikes */}
            <section aria-label="When Hunger Strikes" className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2 break-words">
                <AlertTriangle className="text-black" size={18} />
                When Hunger Strikes
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="prose prose-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  India has one of the largest stray animal populations in the world. Every day, millions of dogs, cats, and other animals struggle to find food and clean water. In cities like Chennai and Mumbai, street animals face constant hunger, malnutrition, and dehydration. They scavenge through garbage, compete for scraps, and often go days without a proper meal.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  The 2023 survey in Chennai revealed that over 60% of street animals showed signs of malnutrition. Many animals are too weak to search for food. Many are too sick to eat even when food is available. The result: animals suffer, communities face conflicts, and the cycle of hunger continues day after day, month after month.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  The 2024 study showed that without systematic feeding programs, street animals face starvation, disease, and death. During extreme weather conditions, the situation becomes even more critical. Animals cannot find food in flooded streets. They cannot access water during droughts. They cannot survive without help.
                </p>
              </div>

              {/* Image directly below the paragraphs */}
              <figure className="mb-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183037/images/animals-bowl/animal2.jpg"
                  alt="When street animals go hungry, they struggle to survive. They wait, and they hope for food."
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  When street animals go hungry, they struggle to survive. They wait, and they hope for food.
                </figcaption>
              </figure>

              {/* The Daily Crisis subsection */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">The Daily Crisis No One Sees</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm md:text-base break-words">
                  Street animal hunger is not a rare disaster. It is a daily reality. In Chennai and Mumbai alone, thousands of animals go hungry every single day. They scavenge through garbage, compete for scraps, and often go days without a proper meal. The animal toll runs into the hundreds of thousands. Dogs, cats, and other animals are all caught in the same relentless cycle of hunger and suffering.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm md:text-base break-words">
                  The tragedy is compounded by what happens when animals are malnourished. Weak animals are more susceptible to disease. Hungry animals are more likely to engage in conflicts. Starving animals cannot survive extreme weather conditions. Without intervention, the cycle of hunger continues, affecting both animal welfare and community harmony.
                </p>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                  And then there is the suffering. During hunger, animals are often desperate. They cannot find food. They cannot ask for help. They can only wait hoping someone will notice, someone will care, someone will feed them. The most heartbreaking aspect of street animal hunger is how preventable many of them are. In most cases, animals did not need sophisticated solutions. They just needed someone to feed them.
                </p>
              </div>
            </section>

            <section aria-label="The Hidden Victims" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                The Hidden Victims
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                In every city, the focus of animal welfare is often on rescue and adoption. Shelters prioritise rescued animals. Organisations focus on medical care. Media coverage centres on adoption stories. This is as it should be. But in the shadow of every animal welfare system, there are street animals who receive almost no attention, no food, and no systematic support.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Animals Cannot Feed Themselves</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                When animals are hungry, they face a choice: search for food and risk danger, or wait and hope for help. Many choose to wait. A dog without access to food will go hungry every day. A cat without proper nutrition will become weak and sick. An animal without feeding support will struggle to survive. The most heartbreaking aspect of street animal hunger is how preventable many of them are. In most cases, animals did not need sophisticated solutions. They just needed someone to feed them.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Street animals are particularly vulnerable. They have no owners to feed them. An animal in a busy city has no reliable food source, no clean water access, and no support system. It simply searches for food until it cannot search anymore, and then it waits until it cannot wait anymore. Many do not survive. Those that do are left malnourished, weak, and susceptible to disease.
              </p>

              <figure className="my-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183039/images/animals-bowl/animal3.jpg"
                  alt="Volunteers providing daily nutrition to street animals through Bowls of Hope feeding programs"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Every feeding is a step toward survival. Street animals need consistent nutrition to thrive.
                </figcaption>
              </figure>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">The Post-Hunger Health Crisis</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Going hungry is only the first challenge. In the weeks that follow, malnutrition takes its toll. Weak animals are more susceptible to disease. Hungry animals cannot fight infections. Malnourished animals cannot recover from injuries. Without proper nutrition, many of these health challenges are fatal.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Without feeding intervention, many of these health challenges are permanent. Animal welfare infrastructure in cities is already stretched thin under normal circumstances. After animals become malnourished, it is essentially impossible for them to recover without help. Shelters lack resources for all animals. Communities lack awareness about animal nutrition. The animals that go hungry often remain weak and sick, simply because no one was there to feed them.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Community Impact and Harmony</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                For millions of communities, street animals are not just individuals. They are part of the urban ecosystem. A well-fed animal is healthier and less likely to cause conflicts. A nourished animal is calmer and more approachable. When animals go hungry, communities face increased conflicts, disease risks, and lost opportunities for human-animal harmony. Bowls of Hope understands that feeding animals is inseparable from building community harmony.
              </p>
            </section>

            <section aria-label="How Bowls of Hope Responds" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                How Bowls of Hope Responds
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Bowls of Hope was built on a simple operational principle: when animals are hungry, they need someone who is ready to feed them immediately, with the right food, the right schedule, and the right consistency. Every day of delay costs animal lives. The programme maintains year-round operations so that when animals need food, teams are ready to feed them.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Organized Feeding Stations</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                The programme maintains 25+ feeding stations across Chennai and Mumbai with daily feeding schedules. Each station provides balanced, nutritious meals at consistent times. Trained volunteers ensure animals receive proper nutrition and clean water. Feeding stations are strategically located in areas with high animal populations, ensuring maximum impact.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Each feeding station operates on a fixed schedule, allowing animals to develop routines and trust. Volunteers maintain detailed records of feeding activities, animal health, and community engagement. GPS tracking and daily reports ensure every feeding station operates effectively. In the 2024 program year, Bowls of Hope fed over 2,000 animals daily across 25+ feeding stations.
              </p>

              <figure className="my-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183040/images/animals-bowl/animal4.jpg"
                  alt="Bowls of Hope feeding stations providing daily nutrition to street animals across Chennai and Mumbai"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Organized feeding stations ensure animals receive consistent nutrition every day.
                </figcaption>
              </figure>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Community Volunteer Networks</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Feeding is only the first step. Once animals receive food, they need ongoing support. The programme trains community volunteers who provide daily feeding, monitor animal health, and engage with communities. Each volunteer receives training on animal nutrition, feeding schedules, and community engagement. Volunteers become advocates for animal welfare in their neighborhoods.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                The volunteer network protocol includes regular training sessions, support groups, and recognition programs. Volunteers learn how to feed animals safely, monitor health, and engage communities. Follow-up sessions ensure volunteers have ongoing support and that feeding operations continue effectively. During the 2024 program year, Bowls of Hope trained over 500 volunteers across Chennai and Mumbai, creating a sustainable network of animal welfare advocates.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Nutrition Monitoring and Health Support</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-8">
                One of the most important and most overlooked aspects of animal feeding is health monitoring. When animals receive consistent nutrition, their health improves. The programme monitors animal health, identifies animals needing medical care, and coordinates with partner veterinary facilities. This work directly supports the **Zero Rabies Deaths by 2030** mission by ensuring animals are healthy enough for vaccination. In the 2024 program year, Bowls of Hope referred over 200 animals to veterinary care, ensuring that fed animals remain healthy and strong.
              </p>

              {/* Corporate CSR Section */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">CSR & Corporate Partnerships</h3>
                <p className="text-gray-700 mb-4">
                  We invite companies to join our **CSR for animal welfare** initiatives. Our **CSR project for animal nutrition** and **corporate sponsorship for animal feeding** provide sustainable impact.
                </p>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li>Support animal welfare NGO India programs through CSR</li>
                  <li>Customized feeding station sponsorships in your city</li>
                  <li>Employee engagement in animal care and feeding</li>
                </ul>
              </div>
            </section>

            {/* Section 4: In Their Own Words (Testimonials) */}
            <section aria-label="In Their Own Words" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                In Their Own Words
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="space-y-6">
                {cause.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-green-50 border-l-4 border-green-700 p-4 sm:p-6 rounded-r-lg">
                    <p className="text-gray-700 italic mb-4 text-sm sm:text-base leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</span>
                      <span className="text-gray-400 hidden sm:inline"> - </span>
                      <span className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Gallery */}
            <section aria-label="Bowls of Hope in Action" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Bowls of Hope in Action
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {cause.impactGallery.map((item, index) => (
                  <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer">
                    <CloudinaryImage
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      width={400}
                      height={300}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium leading-tight">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: About NGO */}
            <section aria-label="About AnimalCare India" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                About AnimalCare India
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="bg-green-700 rounded-lg p-3 text-white shrink-0">
                    <span className="text-2xl font-bold">A</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{ngoDetails.name}</h3>
                    <p className="text-sm text-gray-500">{ngoDetails.tagline}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">{ngoDetails.stats.transparency}%</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">Transparency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">{ngoDetails.stats.programSpend}%</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">Program Spend</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">{ngoDetails.stats.yearsActive}</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">Years Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">{ngoDetails.stats.states}</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">States Covered</div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <Shield className="text-green-700 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">ISO 9001:2015 Certified Organisation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-700 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">Multi-State Animal Welfare Operations since 2015</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="text-green-700 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">Registered under Section 80G all donations are tax-deductible</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-700 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">Contact: +91 9315982650</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-700 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <a href="mailto:info@animalcareindia.org.in" className="text-sm sm:text-base text-gray-700 hover:text-green-700 hover:underline">info@animalcareindia.org.in</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-700 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </div>
                    <a href="http://www.animalcareindia.org.in" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-700 hover:text-green-700 hover:underline">www.animalcareindia.org.in</a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: FAQ */}
            <section aria-label="Frequently Asked Questions" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.question}</span>
                      {openFaqIndex === index ? (
                        <ChevronUp className="text-green-700 shrink-0" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-400 shrink-0" size={20} />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className="p-4 sm:p-5 pt-0 bg-white text-gray-600 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* Enhanced Sidebar */}
          <aside className="lg:col-span-1" id="donate-section">
            <div className="lg:sticky lg:top-28 space-y-6 h-fit">
              {/* Donation Card - Matching HTML Design */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-7">
                {/* Header - Raised Amount */}
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="text-3xl font-extrabold text-green-700 tracking-tight">{cause.raisedAmount}</span>
                  <span className="text-sm text-gray-500 font-medium">raised of {cause.goalAmount}</span>
                </div>

                {/* Progress Bar with Shimmer */}
                <div className="mb-4">
                  <div className="w-full bg-green-50 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-700 to-green-600 rounded-full relative overflow-hidden"
                      style={{ width: `${Math.min(cause.progressPercentage, 100)}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-1.5 text-xs text-gray-500">
                    <span>{cause.progressPercentage}% funded</span>
                    <span>₹1,60,000 to go</span>
                  </div>
                </div>

                {/* Stats Row - Supporters, Days Left, States */}
                <div className="grid grid-cols-3 gap-2 mb-5 text-center">
                  <div className="bg-green-50 rounded-lg p-2.5">
                    <div className="text-lg font-extrabold text-gray-900">{cause.supporters}</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold">Supporters</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2.5">
                    <div className="text-lg font-extrabold text-gray-900">{cause.daysLeft}</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold">Days Left</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2.5">
                    <div className="text-lg font-extrabold text-gray-900">25+</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold">Stations</div>
                  </div>
                </div>

                {/* Donation Tiers */}
                <div className="mb-5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Select an amount</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm group">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Feed 10 animals for 1 day</div>
                    </button>
                    <button className="border-2 border-green-700 bg-green-50 rounded-lg p-3.5 text-center transition-all shadow-sm relative">
                      <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-green-700 rounded-tr-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹1,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Feed 20 animals for 1 day</div>
                    </button>
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹2,500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Feed 50 animals for 1 day</div>
                    </button>
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹5,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Feed 100 animals for 1 day</div>
                    </button>
                  </div>
                </div>

                {/* Main Donate Button */}
                <button className="w-full bg-green-700 hover:bg-green-800 text-white rounded-lg px-6 py-4 font-bold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg mb-2 flex flex-col items-center gap-0.5">
                  <span>Donate Now</span>
                  <span className="text-xs font-normal opacity-90">Secure payment · Tax receipt within 48 hours</span>
                </button>

                {/* Urgency Note */}
                <div className="text-center text-xs text-green-700 font-semibold mb-5 flex items-center justify-center gap-1">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="flex-shrink-0">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>18 days left help feed hungry animals</span>
                </div>

                {/* Share Section */}
                <div className="border-t border-gray-100 pt-4.5 mb-4.5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Spread the word</div>
                  <div className="grid grid-cols-4 gap-2">
                    <button className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-green-500 hover:text-green-600 hover:bg-gray-50 rounded-lg text-xs font-semibold text-gray-600 transition-all hover:-translate-y-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="text-[10px]">WhatsApp</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg text-xs font-semibold text-gray-600 transition-all hover:-translate-y-0.5">
                      <Facebook size={14} />
                      <span className="text-[10px]">Facebook</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-black hover:text-black hover:bg-gray-50 rounded-lg text-xs font-semibold text-gray-600 transition-all hover:-translate-y-0.5">
                      <Twitter size={14} />
                      <span className="text-[10px]">Twitter</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-green-700 hover:text-green-700 hover:bg-gray-50 rounded-lg text-xs font-semibold text-gray-600 transition-all hover:-translate-y-0.5">
                      <Share2 size={14} />
                      <span className="text-[10px]">Copy Link</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </aside>
        </div>
      </div>

      {/* Full Width Ambassador CTA */}
      <section className="bg-green-700 py-16 sm:py-20 mb-20 md:mb-0">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            445 People Stepped Up. Will You?
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            It takes 2 minutes to sign up and one share to start feeding hungry animals. No special training needed. No minimum commitment. Just the will to ensure no animal goes hungry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-base sm:text-lg">
              Become a Bowls of Hope Ambassador
            </button>
            <div className="text-green-200 font-medium text-sm sm:hidden my-2">OR</div>
            <button
              onClick={() => document.getElementById('donate-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 text-base sm:text-lg"
            >
              Make a Direct Donation Instead
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Fixed CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] z-50 md:hidden block">
        <div className="flex items-center gap-4 max-w-2xl mx-auto">
          <div className="flex-1 min-w-0">
            <div className="text-sm font-extrabold text-gray-900 truncate">₹{cause.raisedAmount} raised</div>
            <div className="text-xs text-gray-500 truncate">{cause.progressPercentage}% of {cause.goalAmount} · {cause.daysLeft} days left</div>
          </div>
          <button
            onClick={() => document.getElementById('donate-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-sm shadow-md hover:bg-green-800 transition-colors shrink-0 whitespace-nowrap"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BowlsOfHopeCauseDetailPage;

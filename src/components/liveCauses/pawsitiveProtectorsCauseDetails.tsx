import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Share2, Shield, Facebook, Twitter, AlertTriangle, FileText, CheckCircle, Award, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../SEO/SEOHead';
import ArticleSchema from '../SEO/ArticleSchema';
import CloudinaryImage from '../ui/CloudinaryImage';

const PawsitiveProtectorsCauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I sponsor vaccination for stray dogs in India?",
      answer: "You can sponsor anti rabies vaccine for dogs directly through Pawsitive Protectors. Your donation for stray dog vaccination drive near me helps us reach street animals in Delhi NCR and Mumbai, providing them with life-saving shots and medical care. Sponsor street dog vaccination drives to make your city rabies free."
    },
    {
      question: "Where to find a donate for rabies vaccination drive near me?",
      answer: "The Giving Circle hosts active rabies prevention donation campaigns across major cities in North India. If you want to contribute to rabies control program or fund rabies prevention campaign, you can do so online. We partner with the best animal vaccination NGO donation India partners to ensure your contribution has the most impact."
    },
    {
      question: "Which animal vaccination NGO donation India should I choose?",
      answer: "Choose AnimalCare India for your animal welfare NGO India contribution. We are a verified NGO focusing on Zero Rabies Deaths by 2030. Your support public health vaccination drive contribution is used transparently for stray dog vaccination programs and community animal vaccination support."
    },
    {
      question: "How are donations used for rabies prevention programs?",
      answer: "Your donations are used to save stray dogs from rabies and protect community from rabies. We fund rabies prevention campaign operations, purchase vaccines, and provide medical care to rescue dogs. 95% of every donation goes directly to vaccination operations."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes. AnimalCare India is registered under Section 80G of the Income Tax Act. All donations are eligible for tax deductions. You will receive an 80G receipt via email within 48 hours of your donation, which you can use when filing your income tax returns. If you do not receive your receipt, please write to info@animalcareindia.org.in and the team will issue it immediately."
    },
    {
      question: "How do you ensure animals receive vaccinations?",
      answer: "We conduct systematic vaccination campaigns across Delhi NCR and Mumbai, targeting areas with high stray animal populations. Each animal receives a rabies vaccination, is collared for identification, and is dewormed. We maintain detailed records and conduct follow-up campaigns to ensure booster shots are administered. GPS tracking and daily reports ensure every vaccination campaign operates effectively."
    },
    {
      question: "What happens to animals after they are vaccinated?",
      answer: "Animals receive rabies vaccinations, collaring for identification, and deworming. The programme photographs every vaccination and maintains records for impact assessment. Animals that show signs of illness or injury are referred to partner veterinary facilities. Once animals are vaccinated and healthy, they continue receiving monitoring and care while building trust with communities."
    },
    {
      question: "Can I donate supplies instead of money?",
      answer: "While monetary donations are most efficient because they allow the programme to purchase exactly what is needed at the right time and location, in-kind donations of specific items are also welcome. Priority items include rabies vaccines, collars, deworming medication, and basic veterinary supplies. Contact the team at +91-9315982650 or info@animalcareindia.org.in to coordinate supply donations. Please note that in-kind donations are not eligible for 80G tax receipts."
    },
    {
      question: "How will I know my donation made a difference?",
      answer: "We believe in complete transparency. We send regular email updates with photos and videos from vaccination campaigns. You will also receive a detailed impact report showing exactly how many animals were vaccinated, how many communities were protected, and progress toward Zero Rabies Deaths by 2030."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Pawsitive Protectors cause data focused on animal welfare and rabies prevention
  const cause = {
    id: 3,
    title: 'Pawsitive Protectors',
    subtitle: 'Fighting rabies together through free vaccinations - Zero Rabies Deaths by 2030 Mission',
    organizer: 'AnimalCare India',
    ngo: 'AnimalCare India',
    location: 'Delhi NCR, Mumbai, Gurugram, Haryana',
    category: 'Animal Welfare India • Rabies Prevention',
    goalAmount: '₹8,00,000',
    raisedAmount: '₹4,50,000',
    progressPercentage: 56,
    supporters: 342,
    daysLeft: 18,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183017/images/animal-protect/animal12.jpg',
    urgency: 'High',

    // Problem Statement
    problemStatement: 'Rabies prevention India is critical as thousands die annually from rabies transmitted by unvaccinated street animals. Where to donate for animal welfare India? Stray dog vaccination programs are urgently needed. Street animal rescue Mumbai and across India faces challenges - millions of stray animals lack rabies prevention, medical care, and protection. Animal welfare India organizations struggle to reach all animals needing vaccination.',

    // Root Causes
    rootCauses: [
      'Lack of systematic stray dog vaccination programs',
      'Limited rabies prevention awareness in communities',
      'Insufficient funding for animal rescue and rabies vaccination',
      'Absence of comprehensive animal welfare infrastructure',
      'Fear and misconceptions about street animals preventing intervention'
    ],

    // Consequences if not addressed
    consequences: [
      'Continued rabies deaths - thousands die annually without rabies prevention India',
      'Unvaccinated stray animals spread disease to communities',
      'Street animals suffer without animal rescue and care India',
      'Overpopulation of stray animals without intervention',
      'Communities live in fear without stray dog vaccination programs'
    ],

    // Our Solution
    solution: {
      approach: 'Pawsitive Protectors delivers comprehensive animal welfare India through free rabies prevention, stray dog vaccination, street animal rescue, and community protection programs supporting Zero Rabies Deaths by 2030 Mission.',
      components: [
        'Free rabies vaccination programs for all street animals',
        'Emergency street animal rescue Mumbai and Delhi NCR operations',
        'Stray dog vaccination campaigns with collaring and deworming',
        'Animal welfare programs India including medical care and shelter',
        'Community education on rabies prevention and protecting street animals India'
      ]
    },

    // Beneficiaries
    beneficiaries: {
      primary: '5,000+ street animals receiving free rabies vaccination',
      secondary: '50,000+ community members protected from rabies',
      community: '25+ neighborhoods across Delhi NCR and Mumbai',
      longTerm: 'Zero Rabies Deaths by 2030 - protecting animals and humans'
    },

    // Impact Gallery
    impactGallery: [
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183017/images/animal-protect/animal12.jpg',
        caption: 'Street animal rescue Mumbai - providing emergency medical care to injured stray animals',
        type: 'Animal Rescue'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183018/images/animal-protect/animal13.jpg',
        caption: 'Free rabies vaccination programs protecting communities - Zero Rabies Deaths by 2030 Mission',
        type: 'Rabies Prevention'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183019/images/animal-protect/animal14.jpg',
        caption: 'Community participating in animal welfare India and rabies prevention awareness programs',
        type: 'Community Engagement'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183020/images/animal-protect/animal15.jpg',
        caption: 'Stray dog vaccination programs providing free rabies shots and deworming',
        type: 'Stray Dog Vaccination'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183022/images/animal-protect/animal16.jpg',
        caption: 'Where to donate for animal welfare India - emergency street animal rescue operations',
        type: 'Emergency Rescue'
      }
    ],

    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '5,000+ animals',
        description: 'Receive free rabies vaccination, collaring, and deworming',
        timeline: 'Short-term'
      },
      {
        metric: 'Zero rabies deaths',
        description: 'In target communities through comprehensive rabies prevention India programs',
        timeline: 'Medium-term'
      },
      {
        metric: '1,000+ rescues',
        description: 'Street animal rescue operations providing emergency medical care',
        timeline: 'Long-term'
      },
      {
        metric: '50,000+ people',
        description: 'Educated about animal welfare India and rabies prevention',
        timeline: 'Medium-term'
      }
    ],

    timeline: '12 months',

    updates: [
      {
        date: '15 March 2024',
        title: 'Anti-Rabies Campaign Launch',
        description: 'Successfully launched comprehensive anti-rabies vaccination campaign across Delhi NCR, vaccinating 500+ stray dogs.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183018/images/animal-protect/animal13.jpg'
      },
      {
        date: '22 March 2024',
        title: 'Emergency Rescue Operations',
        description: 'Conducted 25+ emergency rescue operations, providing immediate medical care to injured animals.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183022/images/animal-protect/animal16.jpg'
      },
      {
        date: '28 March 2024',
        title: 'Community Education Program',
        description: 'Launched community education initiatives reaching 2,000+ residents about animal welfare and responsible pet ownership.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183027/images/animal-protect/animal20.jpg'
      }
    ],

    testimonials: [
      {
        name: 'Dr. Priya Sharma',
        role: 'Veterinarian, Gurugram',
        quote: 'AnimalCare India\'s work has transformed our community. The vaccination campaigns have significantly reduced rabies cases, and the rescue operations have saved countless lives. Their dedication to animal welfare is truly inspiring.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face'
      },
      {
        name: 'Rajesh Kumar',
        role: 'Community Leader, Delhi',
        quote: 'Before AnimalCare India came to our area, stray animals were suffering and the community was at risk. Now we have a systematic approach to animal welfare, and the community has learned to coexist peacefully with animals.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      }
    ],

    milestones: [
      { target: '₹2,00,000', achievement: 'Emergency Rescue & Medical Care Setup', status: 'completed' },
      { target: '₹4,00,000', achievement: 'Anti-Rabies Vaccination Campaign', status: 'completed' },
      { target: '₹6,00,000', achievement: 'Sterilization & Population Control Program', status: 'in-progress' },
      { target: '₹7,50,000', achievement: 'Community Education & Awareness', status: 'pending' },
      { target: '₹8,00,000', achievement: 'Adoption Center & Long-term Care', status: 'pending' }
    ]
  };

  // NGO details
  const ngoDetails = {
    name: 'AnimalCare India',
    logo: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183017/images/animal-protect/animal12.jpg',
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
        title="Donate for Stray Dog Vaccination | Sponsor Anti Rabies Vaccine"
        description="Help save stray dogs from rabies and protect your community. Sponsor street dog vaccination drives in India. Contribute to verified animal welfare NGO rabies prevention programs."
        keywords="rabies prevention, rabies prevention shot, how to prevent rabies, rabies vaccine cost, anti rabies vaccine price, rabies vaccination, animal welfare ngo, stray dog vaccination programs, donate for stray dog vaccination, anti rabies vaccine for dogs, support street dog vaccination drive, deaths from dog bites, save street dogs, fund rabies prevention campaign, contribute to rabies control program, protect community from rabies, help vaccinate street dogs, make your city rabies free, support public health vaccination drive, animal vaccination clinic, sponsor rabies awareness camps, vaccinations are important, vaccination importance, benefits of a vaccine, dog ngos, straying animals, CSR for animal welfare, CSR project for rabies control, corporate partnership for stray dog vaccination, donate for rabies vaccination drive near me, animal vaccination NGO donation, poverty percentage"
        canonicalUrl="https://www.thegivingcircle.in/pawsitive-protectors-cause-details"
        ogImage="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183023/images/animal-protect/animal17.jpg"
      />
      <ArticleSchema
        title="Pawsitive Protectors - Animal Vaccination & Rabies Prevention India"
        description="Pawsitive Protectors provides animal welfare India through rabies prevention programs, stray dog vaccination, and street animal rescue. Zero Rabies Deaths by 2030 Mission."
        image="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183023/images/animal-protect/animal17.jpg"
        category="Animal Welfare"
        location="Delhi NCR, Mumbai, India"
        datePublished="2024-01-15"
        author="Animal Care India"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10">
            Sponsor Anti Rabies Vaccine for Dogs Save Stray Dogs from Rabies
          </h1>
          <div className="w-20 h-1.5 bg-green-700 mb-8"></div>

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Every year, thousands of people die from rabies transmitted by unvaccinated street animals. Help vaccinate street dogs and protect community from rabies. Fund rabies prevention campaigns to make your city rabies free and prevent dog bite deaths.
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
            <strong>Multi-city operations</strong> · Delhi NCR, Mumbai, Gurugram, Haryana
          </p>

          {/* Hero Image - Full width and centered */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg mx-auto">
            <CloudinaryImage
              src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183017/images/animal-protect/animal12.jpg"
              alt="Street animals receiving free rabies vaccinations through Pawsitive Protectors program by AnimalCare India"
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

            {/* Section 1: When Rabies Threatens */}
            <section aria-label="When Rabies Threatens" className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2 break-words">
                <AlertTriangle className="text-black" size={18} />
                When Rabies Threatens
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="prose prose-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  India has one of the highest rates of rabies deaths in the world. Every year, thousands of people die from rabies transmitted by unvaccinated street animals. In cities like Delhi NCR and Mumbai, millions of stray dogs and cats lack rabies vaccinations. They roam freely, interact with communities, and pose a constant threat of disease transmission.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  The 2023 study in Delhi NCR revealed that over 70% of stray animals were unvaccinated against rabies. Many animals show no signs of disease until it's too late. Many communities lack awareness about rabies prevention. The result: people are bitten, animals are feared, and the cycle of disease continues year after year.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  The 2024 survey showed that without systematic vaccination programs, rabies deaths continue to rise. During outbreaks, the situation becomes even more critical. Unvaccinated animals spread disease rapidly. Communities panic. Animals suffer. Lives are lost. The World Health Organization's goal of Zero Rabies Deaths by 2030 seems impossible without immediate action.
                </p>
              </div>

              {/* Image directly below the paragraphs */}
              <figure className="mb-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183018/images/animal-protect/animal13.jpg"
                  alt="When rabies threatens communities, animals and people are at risk. They wait, and they hope for protection."
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  When rabies threatens communities, animals and people are at risk. They wait, and they hope for protection.
                </figcaption>
              </figure>

              {/* The Hidden Crisis subsection */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">The Hidden Crisis No One Sees</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm md:text-base break-words">
                  Rabies is not a rare disease. It is a daily threat. In India alone, thousands of people die from rabies every single year. Millions of stray animals lack vaccinations. Communities live in fear. Animals suffer without protection. The human and animal toll runs into the hundreds of thousands. Dogs, cats, and people are all caught in the same relentless cycle of disease and fear.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm md:text-base break-words">
                  The tragedy is compounded by what happens when rabies spreads. Once symptoms appear, rabies is almost always fatal. People bitten by rabid animals face a race against time to receive post-exposure prophylaxis. Animals showing symptoms must be euthanized. Communities panic. The cycle of fear and disease continues, affecting both animal welfare and public health.
                </p>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                  And then there is the suffering. During rabies outbreaks, animals are often feared and harmed. They cannot protect themselves. They cannot ask for help. They can only wait hoping someone will vaccinate them, someone will prevent the disease, someone will save lives. The most heartbreaking aspect of rabies deaths is how preventable many of them are. In most cases, animals did not need sophisticated solutions. They just needed someone to vaccinate them.
                </p>
              </div>
            </section>

            <section aria-label="The Hidden Victims" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                The Hidden Victims
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                In every community, the focus of public health is often on human diseases. Vaccination programs prioritise people. Medical care focuses on human patients. Media coverage centres on human stories. This is as it should be. But in the shadow of every public health system, there are street animals who receive almost no attention, no vaccinations, and no protection from rabies.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Animals Cannot Protect Themselves</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                When rabies threatens, animals face a choice: remain unvaccinated and risk disease, or receive vaccination and gain protection. Many remain unvaccinated. A dog without rabies vaccination will remain vulnerable to disease. A cat without protection will pose a risk to communities. An animal without vaccination will continue the cycle of disease transmission. The most heartbreaking aspect of rabies deaths is how preventable many of them are. In most cases, animals did not need sophisticated solutions. They just needed someone to vaccinate them.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Street animals are particularly vulnerable. They have no owners to vaccinate them. An animal in a busy city has no access to veterinary care, no protection from disease, and no support system. It simply roams freely until it encounters disease, and then it spreads disease until it cannot spread anymore. Many do not survive. Those that do are left feared, isolated, and at risk of harm from panicked communities.
              </p>

              <figure className="my-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183019/images/animal-protect/animal14.jpg"
                  alt="Community members participating in rabies prevention and animal welfare programs"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Every vaccination is a step toward Zero Rabies Deaths by 2030. Animals and communities need protection.
                </figcaption>
              </figure>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">The Post-Outbreak Crisis</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Rabies outbreaks are only the first challenge. In the weeks that follow, fear spreads rapidly through communities. People panic. Animals are feared and harmed. Communities lose trust. Without vaccination programs, many of these post-outbreak challenges are permanent. Public health infrastructure in cities is already stretched thin under normal circumstances. After a rabies outbreak, it is essentially impossible to restore community trust without systematic vaccination programs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Without intervention, many of these post-outbreak challenges are permanent. Animal welfare infrastructure in cities is already stretched thin under normal circumstances. After animals become feared, it is essentially impossible for them to receive care without help. Communities lack resources for vaccination programs. Animals lack access to veterinary care. The animals that remain unvaccinated often continue posing risks, simply because no one was there to vaccinate them.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Community Impact and Public Health</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                For millions of communities, vaccinated animals are not just individuals. They are protectors of public health. A vaccinated animal is protected from rabies and cannot transmit the disease. A protected animal is healthier and less likely to cause conflicts. When animals remain unvaccinated, communities face increased disease risks, fear, and lost opportunities for human-animal harmony. Pawsitive Protectors understands that vaccinating animals is inseparable from protecting communities.
              </p>
            </section>

            <section aria-label="How Pawsitive Protectors Responds" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                How Pawsitive Protectors Responds
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Pawsitive Protectors was built on a simple operational principle: when rabies threatens, animals need someone who is ready to vaccinate them immediately, with the right vaccines, the right approach, and the right consistency. Every day of delay costs lives. The programme maintains year-round operations so that when animals need protection, teams are ready to vaccinate them.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Systematic Vaccination Campaigns</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                The programme conducts systematic vaccination campaigns across Delhi NCR and Mumbai, targeting areas with high stray animal populations. Each campaign provides free rabies vaccinations, collaring for identification, and deworming. Trained teams ensure animals receive proper vaccinations and are monitored for health. Vaccination campaigns are strategically scheduled to ensure maximum coverage and follow-up booster shots.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Each vaccination campaign operates on a fixed schedule, allowing communities to prepare and animals to be located. Teams maintain detailed records of vaccinations, animal health, and community engagement. GPS tracking and daily reports ensure every vaccination campaign operates effectively. In the 2024 program year, Pawsitive Protectors vaccinated over 5,000 animals across 25+ neighborhoods in Delhi NCR and Mumbai.
              </p>

              <figure className="my-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183020/images/animal-protect/animal15.jpg"
                  alt="Pawsitive Protectors vaccination campaigns providing free rabies shots to street animals across Delhi NCR and Mumbai"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Systematic vaccination campaigns ensure animals receive protection from rabies.
                </figcaption>
              </figure>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Emergency Rescue and Medical Care</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Vaccination is only the first step. Once animals receive protection, they need ongoing care. The programme provides emergency rescue services for injured animals, comprehensive medical care, and coordination with partner veterinary facilities. Each rescue operation ensures animals receive immediate care and are vaccinated if needed.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                The rescue protocol includes emergency response, medical triage, vaccination if needed, and coordination with shelters. Animals learn to trust rescuers through consistent care. Follow-up sessions ensure rescued animals remain healthy and that communities understand the importance of animal welfare. During the 2024 program year, Pawsitive Protectors rescued over 1,000 animals across Delhi NCR and Mumbai, ensuring that injured animals receive care and protection.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Community Education and Awareness</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-8">
                One of the most important and most overlooked aspects of rabies prevention is community education. When communities understand rabies prevention, animals receive better support. The programme conducts community sessions, awareness campaigns, and educational programs that break fear and create supportive environments. In the 2024 program year, Pawsitive Protectors educated over 50,000 community members about rabies prevention and animal welfare, creating a supportive ecosystem for Zero Rabies Deaths by 2030.
              </p>

              {/* Corporate CSR Section */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">CSR & Corporate Partnerships</h3>
                <p className="text-gray-700 mb-4">
                  We invite companies to support our **CSR for animal welfare** initiatives. Our **CSR project for rabies control** and **corporate partnership for stray dog vaccination** help build safer, rabies-free cities.
                </p>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li>Support public health vaccination drives through CSR</li>
                  <li>Sponsor rabies awareness camps in your operation areas</li>
                  <li>Empower community animal vaccination support</li>
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
            <section aria-label="Pawsitive Protectors in Action" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Pawsitive Protectors in Action
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
                    <span>₹3,50,000 to go</span>
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
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold">Neighborhoods</div>
                  </div>
                </div>

                {/* Donation Tiers */}
                <div className="mb-5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Select an amount</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm group">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Vaccinate 2 animals</div>
                    </button>
                    <button className="border-2 border-green-700 bg-green-50 rounded-lg p-3.5 text-center transition-all shadow-sm relative">
                      <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-green-700 rounded-tr-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹1,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Vaccinate 5 animals</div>
                    </button>
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹2,500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Vaccinate 12 animals</div>
                    </button>
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹5,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Vaccinate 25 animals</div>
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
                  <span>18 days left help achieve Zero Rabies Deaths by 2030</span>
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
            342 People Stepped Up. Will You?
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            It takes 2 minutes to sign up and one share to start protecting animals and communities from rabies. No special training needed. No minimum commitment. Just the will to achieve Zero Rabies Deaths by 2030.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-base sm:text-lg">
              Become a Pawsitive Protectors Ambassador
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

export default PawsitiveProtectorsCauseDetailPage;

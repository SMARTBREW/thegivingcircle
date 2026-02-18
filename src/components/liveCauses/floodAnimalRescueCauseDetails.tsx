import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Share2, Shield, Facebook, Twitter, AlertTriangle, Lock, FileText, CheckCircle, Award, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../SEO/SEOHead';
import ArticleSchema from '../SEO/ArticleSchema';

const FloodAnimalRescueCauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How are donations used during flood emergencies?",
      answer: "95% of every donation goes directly to rescue operations and animal care: deploying rapid response teams, purchasing rescue equipment and inflatable boats, setting up temporary shelters, providing emergency food and clean water, and covering veterinary treatment for flood-affected animals. The remaining 5% covers essential coordination costs including communications, reporting, and logistics management. All expenditures are audited annually and financial reports are published quarterly on the AnimalCare India website."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes. AnimalCare India is registered under Section 80G of the Income Tax Act. All donations are eligible for tax deductions. You will receive an 80G receipt via email within 48 hours of your donation, which you can use when filing your income tax returns. If you do not receive your receipt, please write to info@animalcareindia.org.in and the team will issue it immediately."
    },
    {
      question: "How quickly can teams deploy during a flood?",
      answer: "Rapid response teams can deploy within 24 to 48 hours of a flood alert. Pre-positioned rescue equipment is stored at strategic locations across all eight operational states, allowing teams to begin operations without waiting for supplies to be shipped. In areas with year-round staff presence like Assam and Bihar, deployment can happen within hours of an alert being issued."
    },
    {
      question: "What happens to animals after they are rescued?",
      answer: "Rescued animals are taken to temporary shelters where they receive veterinary triage, food, clean water, and rest. Animals with injuries or infections are treated on site or transported to partner veterinary facilities. The programme photographs every animal and records the rescue location for reunification efforts. Livestock are tagged with temporary identification. Once floodwaters recede and conditions stabilise, animals are reunited with their owners where possible or released back into their communities with ongoing health monitoring."
    },
    {
      question: "Can I donate supplies instead of money?",
      answer: "While monetary donations are most efficient because they allow the programme to purchase exactly what is needed at the right time and location, in-kind donations of specific items are also welcome during active flood emergencies. Priority items include dry pet food, tarpaulins, blankets, transport crates, and basic veterinary supplies. Contact the team at +91-9315982650 or info@animalcareindia.org.in to coordinate supply donations. Please note that in-kind donations are not eligible for 80G tax receipts."
    },
    {
      question: "How will I know my donation made a difference?",
      answer: "We believe in complete transparency. We send regular email updates with photos and videos from the ground during the deployment. You will also receive a detailed impact report after the flood relief operation concludes, showing exactly how many animals were rescued and treated."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Flood Animal Rescue cause data focused on emergency animal rescue during floods
  const cause = {
    id: 5,
    title: 'Flood Animal Rescue',
    subtitle: 'How to help flood victims Uttarakhand - Emergency animal rescue and disaster relief India',
    organizer: 'AnimalCare India',
    ngo: 'AnimalCare India',
    location: 'Uttarakhand, Punjab, India',
    category: 'Disaster Relief India • Emergency Response',
    goalAmount: '₹4,50,000',
    raisedAmount: '₹2,80,000',
    progressPercentage: 62,
    supporters: 189,
    daysLeft: 15,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png',
    urgency: 'Critical',

    // Problem Statement
    problemStatement: 'How to help flood victims in Uttarakhand? Thousands of animals struggle to survive floods. Emergency animal rescue India is critical - animals trapped in floodwaters face drowning, starvation, injury. Flood animal rescue operations are urgently needed. Disaster relief India must include animals. Street dogs, livestock, and wildlife need flood rescue operations. These voiceless victims depend on emergency response India for survival.',

    // Root Causes
    rootCauses: [
      'Lack of emergency animal rescue infrastructure during disasters',
      'Limited flood relief Uttarakhand resources for animal rescue',
      'No coordinated disaster animal relief response plans',
      'Insufficient training in flood animal rescue operations',
      'Limited awareness about emergency response India for animals'
    ],

    // Consequences if not addressed
    consequences: [
      'Massive animal deaths without flood animal rescue operations',
      'Suffering animals need emergency response India urgently',
      'Waterborne diseases spread without disaster animal relief',
      'Rural communities lose livestock without flood relief Uttarakhand',
      'Trauma continues without disaster rehabilitation programs'
    ],

    // Our Solution
    solution: {
      approach: 'Flood Animal Rescue provides rapid emergency animal rescue India and disaster relief through specialized flood rescue operations, emergency response teams, and disaster rehabilitation for animals trapped in Uttarakhand and Punjab floods.',
      components: [
        'Emergency animal rescue India - specialized teams with boats and equipment',
        'Flood relief Uttarakhand - emergency shelters and medical care facilities',
        'Disaster animal relief - coordination with disaster management authorities',
        'Flood animal rescue operations - immediate medical care and rehabilitation',
        'Disaster rehabilitation - long-term recovery programs for rescued animals'
      ]
    },

    // Beneficiaries
    beneficiaries: {
      primary: '1,500+ animals rescued through emergency animal rescue operations',
      secondary: '10,000+ community members - how to help flood victims Uttarakhand',
      community: '20+ flood-affected villages receiving disaster relief India',
      longTerm: 'Comprehensive disaster animal relief and emergency response ecosystem'
    },

    // Impact Gallery
    impactGallery: [
      { type: 'Rescue', image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png', caption: 'Flood zone rescue deployment' },
      { type: 'Waiting', image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183011/images/animal-flood/animal7.png', caption: 'Animals awaiting rescue' },
      { type: 'Rescue', image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183004/images/animal-flood/animal11.jpg', caption: 'Every rescue counts' },
      { type: 'Shelter', image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183003/images/animal-flood/animal10.jpg', caption: 'Temporary shelter operations' },
      { type: 'Medical', image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183014/images/animal-flood/animal8.png', caption: 'Veterinary first aid' }
    ],

    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '1,500+ animals',
        description: 'Rescued through emergency animal rescue India flood operations',
        timeline: 'Short-term'
      },
      {
        metric: '95% survival rate',
        description: 'Through immediate disaster animal relief and medical care',
        timeline: 'Medium-term'
      },
      {
        metric: '20 rescue operations',
        description: 'Flood relief Uttarakhand and Punjab emergency response operations',
        timeline: 'Long-term'
      },
      {
        metric: '500+ volunteers',
        description: 'Trained in flood animal rescue operations and disaster response',
        timeline: 'Medium-term'
      }
    ],

    timeline: '6 months',

    updates: [
      {
        date: '5 March 2024',
        title: 'Emergency Rescue Operations Begin',
        description: 'Launched immediate rescue operations in Uttarakhand, saving 200+ animals from rising floodwaters.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png'
      },
      {
        date: '8 March 2024',
        title: 'Medical Care Facility Setup',
        description: 'Established emergency medical care facilities for rescued animals with 24/7 veterinary support.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183014/images/animal-flood/animal8.png'
      },
      {
        date: '12 March 2024',
        title: 'Community Rescue Network',
        description: 'Trained 100+ community volunteers in emergency animal rescue techniques and safety protocols.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183004/images/animal-flood/animal11.jpg'
      }
    ],

    testimonials: [
      {
        name: 'Anwar Hussain',
        role: 'Cattle owner, Barpeta district, Assam',
        quote: 'When the water came into our village in Barpeta, we had to leave within minutes. I could not get to our two cows and three goats. I thought they were dead. Three days later, the rescue team called me and said they had found all five animals alive on a raised embankment. They were being treated at a temporary shelter. I cannot describe what that phone call meant to my family. Those animals are our livelihood.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      {
        name: 'Sunita Devi',
        role: 'Local flood relief volunteer, Darbhanga, Bihar',
        quote: 'I have been volunteering with flood relief for six years, but I never saw anyone come specifically for the animals until this programme started operating in our area. During the 2024 floods, I watched a team pull seventeen dogs out of the water in a single afternoon. They were organised, calm, and efficient. Every animal was accounted for, treated, and sheltered. That level of care during a disaster is something I had never seen before.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
      },
      {
        name: 'Dr. Priya Menon',
        role: 'Veterinarian, Kerala State Animal Welfare Board',
        quote: 'Post-flood veterinary care is critically underfunded across India. I have treated animals in flood zones for years, and the pattern is always the same: the water goes down, the media leaves, and then the real health crisis begins. Leptospirosis, respiratory infections, parasites, malnutrition. This programme is one of the very few that stays through the aftermath and provides the sustained veterinary support that actually saves lives.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face'
      }
    ],

    milestones: [
      { target: '₹1,12,500', achievement: 'Emergency Rescue Equipment & Teams', status: 'completed' },
      { target: '₹2,25,000', achievement: 'Medical Care Facilities & Veterinary Support', status: 'completed' },
      { target: '₹3,37,500', achievement: 'Community Training & Volunteer Network', status: 'in-progress' },
      { target: '₹4,05,000', achievement: 'Long-term Recovery & Relocation Programs', status: 'pending' },
      { target: '₹4,50,000', achievement: 'Disaster Preparedness & Future Response', status: 'pending' }
    ]
  };

  // Restored NGO details
  const ngoDetails = {
    name: 'AnimalCare India',
    logo: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png',
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
        title="Flood Animal Rescue: Save Animals Trapped in India's Floods | Donate to AnimalCare India — The Giving Circle"
        description="When floodwaters rise across India, millions of animals are left stranded with no way to escape. Flood Animal Rescue deploys rapid response teams across 8 states. 62% funded. 15 days left. Donate now. Tax-deductible under 80G."
        keywords="causes to support, circle aid, circle of support, communities for communities, communities support, community causes, community giving, community helpline, community offering, community support platform, corporate giving platforms, give and help, give through, giving circle, giving community, giving india, giving platform, giving support, giving to community, india care, india community, social causes to support, social giving, support circle, support community, support from community, support of community, support social causes, supported causes, supporting india, Flood Animal Rescue, emergency animal rescue, disaster relief India"
        canonicalUrl="https://www.thegivingcircle.in/flood-animal-rescue-cause-details"
        ogImage="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183011/images/animal-flood/animal7.png"
      />
      <ArticleSchema
        title="Flood Animal Rescue - Emergency Animal Rescue & Disaster Relief Uttarakhand"
        description="Emergency animal rescue and disaster relief India. Supporting flood animal rescue operations in Uttarakhand, providing disaster rehabilitation and emergency medical care for rescued animals."
        image="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183011/images/animal-flood/animal7.png"
        category="Disaster Relief"
        location="Uttarakhand, India"
        datePublished="2024-06-15"
        author="Animal Care India"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-teal-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10">
            Flood Animal Rescue — When Waters Rise, They Have No One But Us
          </h1>

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Every monsoon season, India's floods devastate millions of animals. They cannot evacuate. They cannot call for help. They can only wait — stranded on rooftops, clinging to trees, submerged in rising water — hoping someone will come. This campaign is that someone.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <Shield className="text-teal-600" size={16} />
              Tax Deductible · 80G
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <CheckCircle className="text-teal-600" size={16} />
              98% Transparency Score
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <TrendingUp className="text-teal-600" size={16} />
              8+ Years Active
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <Award className="text-teal-600" size={16} />
              ISO 9001:2015
            </div>
          </div>

          {/* Geographic Line */}
          <p className="text-sm text-gray-600 mb-8">
            <strong>Multi-state operations</strong> · Uttarakhand, Kerala, Assam, Bihar, West Bengal, Odisha, Andhra Pradesh, Tamil Nadu
          </p>

          {/* Hero Image */}
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png"
              alt="Animals stranded during flooding in India, awaiting rescue by Flood Animal Rescue teams deployed by AnimalCare India"
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* Two-Column Page Body */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Main Content Column */}
          <main className="min-w-0">

            {/* Section 1: When the Floods Come */}
            <section aria-label="When the Floods Come" className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2 break-words">
                <AlertTriangle className="text-black" size={18} />
                When the Floods Come
              </h2>
              <div className="w-16 h-1 bg-teal-500 mb-6 sm:mb-8"></div>

              <div className="prose prose-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  India is one of the most flood-prone countries on earth. Every year, the monsoon season transforms rivers into raging torrents, submerges entire villages, and displaces millions. Between June and October, vast stretches of Assam, Bihar, West Bengal, Uttarakhand, Kerala, Odisha, Andhra Pradesh, and Tamil Nadu go underwater. For people, there are evacuation warnings, relief camps, and government aid. For animals, there is almost nothing.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  The 2023 floods in Uttarakhand came with a ferocity that overwhelmed even experienced disaster responders. Glacial lake outbursts and cloudbursts sent walls of water through mountain valleys. Livestock that had been grazing on hillsides were swept away in minutes. Dogs and cats in low-lying towns scrambled to rooftops as water rose to the first floor of buildings. In Chamoli and Pithoragarh districts, rescue teams found animals that had been stranded for days, standing on narrow ledges or clinging to partially submerged structures, too exhausted and terrified to move.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  The 2024 Wayanad landslides in Kerala were even more devastating. Without any warning, hillsides collapsed onto settlements, burying homes, farms, and animals together. Survivors described hearing the cries of trapped cattle and dogs underneath rubble for days after the initial disaster. The scale of animal suffering in that single event was staggering, and Wayanad was just one district in one state during one monsoon season.
                </p>
              </div>

              {/* Image directly below the paragraphs */}
              <figure className="mb-6">
                <img
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183011/images/animal-flood/animal7.png"
                  alt="When floodwaters rise, animals have nowhere to go. They wait, and they hope."
                  className="w-full rounded-lg shadow-lg"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  When floodwaters rise, animals have nowhere to go. They wait, and they hope.
                </figcaption>
              </figure>

              {/* The Annual Crisis subsection */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">The Annual Crisis No One Prepares For</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm md:text-base break-words">
                  In Assam and Bihar, flooding is not a rare disaster. It is an annual certainty. The Brahmaputra and its tributaries overflow every single monsoon, submerging thousands of square kilometres. In Assam alone, floods affect an average of 30 to 40 lakh people each year. The animal toll is harder to count, but it runs into the hundreds of thousands. Cattle, goats, poultry, dogs, cats, and wildlife are all caught in the same relentless cycle.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm md:text-base break-words">
                  The tragedy is compounded by what happens after the water recedes. Contaminated water breeds leptospirosis, a bacterial infection that is lethal to both animals and humans. Stagnant pools become breeding grounds for mosquitoes carrying diseases. Animals that survived the initial flooding develop severe skin infections from prolonged exposure to dirty water.
                </p>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                  And then there is the separation. During chaotic evacuations, animals are left behind. Pets are torn from families who are hustled onto boats with barely enough room for people. Livestock owners watch helplessly as rising water carries away animals they cannot reach.
                </p>
              </div>
            </section>

            {/* Section 2: The Hidden Victims */}
            {/* Section 2: The Hidden Victims */}
            <section aria-label="The Hidden Victims" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                The Hidden Victims
              </h2>
              <div className="w-16 h-1 bg-teal-500 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                In every flood, the focus of relief operations is rightly on human lives. Evacuations prioritise people. Relief camps are designed for people. Media coverage centres on human stories. This is as it should be. But in the shadow of every human disaster, there is a parallel animal disaster that receives almost no attention, no funding, and no coordinated response.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Animals Cannot Evacuate Themselves</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                When flood warnings are issued, people can make decisions. They can gather belongings, move to higher ground, or board evacuation vehicles. Animals cannot process warnings. A dog chained to a post in a courtyard will drown there unless someone comes to unchain it. Cattle locked in sheds will stand in rising water until it reaches their nostrils. Cats will climb to the highest point they can find and then have nowhere else to go. The most heartbreaking aspect of flood-related animal deaths is how preventable many of them are. In most cases, the animals did not need sophisticated rescue equipment. They just needed someone to show up.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Strays are particularly vulnerable. They have no owners coming to get them. A street dog in a flood-affected town has no higher ground it has been trained to seek, no shelter it associates with safety. It simply runs until it cannot run anymore, and then it swims until it cannot swim anymore. Many do not survive. Those that do are left traumatised, malnourished, and sick from ingesting contaminated water.
              </p>

              <figure className="my-6">
                <img
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183014/images/animal-flood/animal8.png"
                  alt="Rescue volunteers carrying a flood-affected animal to safety during monsoon operations in India"
                  className="w-full rounded-lg shadow-lg"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Every rescue is a race against time. Flood-affected animals need immediate intervention.
                </figcaption>
              </figure>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">The Post-Flood Health Crisis</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Surviving the floodwater is only the first challenge. In the weeks that follow, disease spreads rapidly through animal populations. Leptospirosis, transmitted through contaminated water, causes kidney and liver failure in dogs and cattle. Skin infections and fungal diseases ravage animals whose coats were soaked for days. Gastrointestinal parasites thrive in flood conditions. Foot-and-mouth disease outbreaks spike among livestock that have been standing in waterlogged conditions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Without veterinary intervention, many of these post-flood conditions are fatal. Rural veterinary infrastructure in flood-prone areas is already stretched thin under normal circumstances. After a major flood, it is essentially non-existent. Clinics are underwater. Supplies are destroyed. Veterinarians themselves are displaced. The animals that survived the flood often die in the weeks that follow from entirely treatable conditions, simply because no one was there to treat them.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Livestock Losses and Livelihoods</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                For millions of rural Indian families, livestock is not a pet. It is an economic lifeline. A single cow or buffalo may represent years of savings. A small flock of goats can be the difference between a family eating and going hungry. When floods kill livestock, they do not just take animal lives. They destroy human livelihoods. Families that lose cattle in floods often face financial ruin from which they never fully recover. Flood Animal Rescue understands that saving animals is inseparable from protecting the communities that depend on them.
              </p>
            </section>

            {/* Section 3: How Flood Animal Rescue Responds */}
            {/* Section 3: How Flood Animal Rescue Responds */}
            <section aria-label="How Flood Animal Rescue Responds" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                How Flood Animal Rescue Responds
              </h2>
              <div className="w-16 h-1 bg-teal-500 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Flood Animal Rescue was built on a simple operational principle: when disaster strikes, animals need someone who is ready to act immediately, with the right equipment, the right training, and the right coordination. Every hour of delay during a flood costs animal lives. The programme maintains year-round readiness so that when the first warnings come, teams can deploy within 24 to 48 hours.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Rapid Response Deployment</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                The programme maintains pre-positioned rescue kits in strategic locations across all eight operational states. Each kit includes inflatable rescue boats, life jackets, catch poles, transport crates, emergency animal feed, and basic veterinary supplies. When flood alerts are issued by the India Meteorological Department or the Central Water Commission, the nearest response team is activated immediately. Team leaders begin coordinating with local administration, identifying likely animal concentration points, and securing temporary shelter locations before the water even peaks.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Each rapid response team consists of trained animal handlers, boat operators, and a veterinary first-aid specialist. They operate in pairs during rescues, with one person managing the boat and another handling the animals. Communication is maintained through satellite phones in areas where cellular networks have been knocked out by the flooding. GPS coordinates of every rescue are logged, creating a database that helps predict where animals are most likely to need help during future floods.
              </p>

              <figure className="my-6">
                <img
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183003/images/animal-flood/animal10.jpg"
                  alt="Flood Animal Rescue team deploying inflatable boats in a flood zone to rescue stranded animals in India"
                  className="w-full rounded-lg shadow-lg"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Rapid response teams deploy within 24-48 hours of flood alerts with pre-positioned rescue equipment.
                </figcaption>
              </figure>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Temporary Shelters and Veterinary First Aid</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Rescue is only the first step. Once animals are pulled from floodwaters, they need immediate care. The programme sets up temporary shelters on elevated ground near flood zones, typically in community halls, school buildings, or purpose-erected tarpaulin structures. Each shelter provides clean water, food, warmth, and basic veterinary triage. Animals are assessed for injuries, infections, dehydration, and shock. Those requiring advanced treatment are transported to partner veterinary facilities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                The veterinary first-aid protocol covers wound cleaning and dressing, dehydration management through oral and subcutaneous fluids, anti-parasitic treatment, and prophylactic antibiotics for animals showing early signs of leptospirosis or respiratory infections. During the 2024 response season, the programme's field veterinary teams treated over 2,400 animals across six states. Approximately 85 percent of treated animals survived and were either reunited with owners or released back into their communities once conditions stabilised.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Reunification With Owners</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                One of the most important and most overlooked aspects of flood animal rescue is reunification. When families are evacuated, they are rarely told where to find their animals afterward. The programme photographs every rescued animal, records the location of rescue, and posts details on local community boards and social media groups. Where possible, rescued livestock are tagged with temporary identification. In the 2024 season, the programme successfully reunited over 600 animals with their owners, a number that represents not just animal welfare but family stability and economic recovery for hundreds of rural households.
              </p>
            </section>

            {/* Section 4: Multi-State Operations */}
            {/* Section 4: Multi-State Operations */}
            <section aria-label="Multi-State Operations" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Multi-State Operations
              </h2>
              <div className="w-16 h-1 bg-teal-500 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                India's flood landscape is as diverse as the country itself. Mountain flash floods in Uttarakhand behave very differently from the slow, persistent inundation of the Brahmaputra floodplains in Assam. Coastal cyclone flooding in Odisha and Tamil Nadu presents challenges that are distinct from the monsoon-driven river overflow in Bihar and West Bengal. Flood Animal Rescue has developed operational protocols adapted to each of these environments, working through a network of local partners while maintaining central coordination for resource allocation, training standards, and quality oversight.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Uttarakhand: Mountain Floods</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Flash floods and landslides in Uttarakhand strike with devastating speed. Water channels through narrow valleys at terrifying velocity, leaving almost no time for evacuation. The programme's Uttarakhand teams are trained in mountainous terrain rescue, including rope-based animal extraction from ledges and steep embankments. Pre-positioned equipment is stored at Dehradun and Haridwar, allowing rapid deployment to Chamoli, Pithoragarh, Rudraprayag, and Uttarkashi.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Kerala: Monsoon and Landslides</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Kerala's terrain of hills, rivers, and backwaters makes it uniquely flood-prone. The 2018 floods were described as the worst in a century, and events like the 2024 Wayanad landslides have shown that the state remains deeply vulnerable. The programme works with Kerala's robust civil society network, partnering with local animal welfare groups who provide ground intelligence during emergencies. Boat-based rescue operations in Kerala's backwater regions require specialised navigation skills that the programme develops through regular training exercises.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Assam and Bihar: The Annual Brahmaputra Crisis</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                For Assam and Bihar, flooding is not a question of if but when. The Brahmaputra and its tributaries overflow every monsoon, and in some years, multiple rounds of flooding hit the same communities. The programme maintains its largest permanent presence in these two states, with year-round staff, pre-staged boats, and standing agreements with local veterinary colleges for emergency support. During the 2024 Assam floods, teams rescued over 800 animals across Barpeta, Nalbari, Morigaon, and Nagaon districts.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">West Bengal, Odisha, Andhra Pradesh, and Tamil Nadu</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Cyclone-driven flooding along India's eastern coast presents distinct challenges. Storm surges push saltwater inland, contaminating freshwater sources that animals depend on. Wind damage destroys shelters, leaving animals exposed. The programme's coastal teams are trained to operate in post-cyclone environments, including navigating debris fields and managing animals that have been exposed to saltwater. In Tamil Nadu and Andhra Pradesh, the northeast monsoon brings additional flooding risk between October and December, extending the operational season well beyond the typical June-to-September window.
              </p>
            </section>


            {/* Section 5: In Their Own Words (Testimonials) */}
            <section aria-label="In Their Own Words" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                In Their Own Words
              </h2>
              <div className="w-16 h-1 bg-teal-500 mb-6 sm:mb-8"></div>

              <div className="space-y-6">
                {cause.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-teal-50 border-l-4 border-teal-400 p-4 sm:p-6 rounded-r-lg">
                    <p className="text-gray-700 italic mb-4 text-sm sm:text-base leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</span>
                      <span className="text-gray-400 hidden sm:inline">—</span>
                      <span className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Gallery */}
            {/* Section 6: Gallery - Masonry Grid Style */}
            <section aria-label="Flood Animal Rescue in Action" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Flood Animal Rescue in Action
              </h2>
              <div className="w-16 h-1 bg-teal-500 mb-6 sm:mb-8"></div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {cause.impactGallery.map((item, index) => (
                  <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
              <div className="w-16 h-1 bg-teal-500 mb-6 sm:mb-8"></div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="bg-teal-600 rounded-lg p-3 text-white shrink-0">
                    <span className="text-2xl font-bold">A</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{ngoDetails.name}</h3>
                    <p className="text-sm text-gray-500">{ngoDetails.tagline}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-teal-700 mb-1">{ngoDetails.stats.transparency}%</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">Transparency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-teal-700 mb-1">{ngoDetails.stats.programSpend}%</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">Program Spend</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-teal-700 mb-1">{ngoDetails.stats.yearsActive}</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">Years Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-teal-700 mb-1">{ngoDetails.stats.states}</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">States Covered</div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <Shield className="text-teal-600 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">ISO 9001:2015 Certified Organisation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-teal-600 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">Multi-State Disaster Response Operations since 2018</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="text-teal-600 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">Registered under Section 80G — all donations are tax-deductible</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-teal-600 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">Contact: +91 98103 53603</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-teal-600 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <a href="mailto:info@animalcareindia.org.in" className="text-sm sm:text-base text-gray-700 hover:text-teal-600 hover:underline">hello@thegivingcircle.in</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-teal-600 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </div>
                    <a href="http://www.animalcareindia.org.in" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-700 hover:text-teal-600 hover:underline">www.animalcareindia.org.in</a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: FAQ */}
            <section aria-label="Frequently Asked Questions" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-teal-500 mb-6 sm:mb-8"></div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.question}</span>
                      {openFaqIndex === index ? (
                        <ChevronUp className="text-teal-600 shrink-0" size={20} />
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
                  <span className="text-3xl font-extrabold text-teal-600 tracking-tight">{cause.raisedAmount}</span>
                  <span className="text-sm text-gray-500 font-medium">raised of {cause.goalAmount}</span>
                </div>

                {/* Progress Bar with Shimmer */}
                <div className="mb-4">
                  <div className="w-full bg-teal-50 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-600 to-teal-500 rounded-full relative overflow-hidden"
                      style={{ width: `${Math.min(cause.progressPercentage, 100)}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-1.5 text-xs text-gray-500">
                    <span>{cause.progressPercentage}% funded</span>
                    <span>₹1,70,000 to go</span>
                  </div>
                </div>

                {/* Stats Row - Supporters, Days Left, States */}
                <div className="grid grid-cols-3 gap-2 mb-5 text-center">
                  <div className="bg-teal-50 rounded-lg p-2.5">
                    <div className="text-lg font-extrabold text-gray-900">{cause.supporters}</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold">Supporters</div>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-2.5">
                    <div className="text-lg font-extrabold text-gray-900">{cause.daysLeft}</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold">Days Left</div>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-2.5">
                    <div className="text-lg font-extrabold text-gray-900">8</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold">States</div>
                  </div>
                </div>

                {/* Donation Tiers */}
                <div className="mb-5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Select an amount</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="border-2 border-gray-200 hover:border-teal-600 hover:bg-teal-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm group">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Emergency food kit for 5 animals</div>
                    </button>
                    <button className="border-2 border-teal-600 bg-teal-50 rounded-lg p-3.5 text-center transition-all shadow-sm relative">
                      <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-teal-600 rounded-tr-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹1,500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Rescue & shelter for 3 animals</div>
                    </button>
                    <button className="border-2 border-gray-200 hover:border-teal-600 hover:bg-teal-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹5,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Vet treatment for 10 flood-affected animals</div>
                    </button>
                    <button className="border-2 border-gray-200 hover:border-teal-600 hover:bg-teal-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹10,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Full rescue operation for one flood zone</div>
                    </button>
                  </div>
                </div>

                {/* Main Donate Button */}
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-6 py-4 font-bold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg mb-2 flex flex-col items-center gap-0.5">
                  <span>Donate Now</span>
                  <span className="text-xs font-normal opacity-90">Secure payment · Tax receipt within 48 hours</span>
                </button>

                {/* Urgency Note */}
                <div className="text-center text-xs text-teal-600 font-semibold mb-5 flex items-center justify-center gap-1">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="flex-shrink-0">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>15 days left — monsoon season is approaching</span>
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
                    <button className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-teal-600 hover:text-teal-600 hover:bg-gray-50 rounded-lg text-xs font-semibold text-gray-600 transition-all hover:-translate-y-0.5">
                      <Share2 size={14} />
                      <span className="text-[10px]">Copy Link</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Trust Signals - Outside the card, matching HTML structure */}

            </div>

          </aside>
        </div>
      </div>

      {/* Full Width Ambassador CTA */}
      <section className="bg-teal-700 py-16 sm:py-20 mb-20 md:mb-0">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            189 People Stepped Up. Will You?
          </h2>
          <p className="text-teal-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            It takes 2 minutes to sign up and one share to start saving animals from India's deadliest floods. No rescue training needed. No minimum commitment. Just the will to be the voice animals can't have when the waters rise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-teal-700 hover:bg-teal-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-base sm:text-lg">
              Become a Flood Rescue Ambassador
            </button>
            <div className="text-teal-200 font-medium text-sm sm:hidden my-2">OR</div>
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
            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-bold text-sm shadow-md hover:bg-teal-700 transition-colors shrink-0 whitespace-nowrap"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div >
  );
};

export default FloodAnimalRescueCauseDetailPage;

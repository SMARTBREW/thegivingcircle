import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Share2, Shield, Facebook, Twitter, AlertTriangle, FileText, CheckCircle, Award, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import CloudinaryImage from '../ui/CloudinaryImage';
import SEOHead from '../SEO/SEOHead';
import ArticleSchema from '../SEO/ArticleSchema';

const FloodReliefCauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How are donations used for flood relief operations?",
      answer: "95% of every donation goes directly to flood relief operations: emergency shelter setup, food distribution, clean water supply, medical camps, and infrastructure rebuilding. The remaining 5% covers essential coordination costs including communications, reporting, and logistics management. All expenditures are audited annually and financial reports are published quarterly on the GUS Disaster Relief website."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes. GUS Disaster Relief is registered under Section 80G of the Income Tax Act. All donations are eligible for tax deductions. You will receive an 80G receipt via email within 48 hours of your donation, which you can use when filing your income tax returns. If you do not receive your receipt, please write to info@gusdisasterrelief.org and the team will issue it immediately."
    },
    {
      question: "How quickly can teams deploy during a flood?",
      answer: "Rapid response teams can deploy within 24 to 48 hours of a flood alert. Pre-positioned relief supplies are stored at strategic locations across Uttarakhand, allowing teams to begin operations without waiting for supplies to be shipped. In areas with year-round staff presence, deployment can happen within hours of an alert being issued."
    },
    {
      question: "What happens to families after they receive emergency aid?",
      answer: "Families receive immediate emergency shelter, food, clean water, and medical care. Once immediate needs are met, the program transitions to long-term rehabilitation: rebuilding homes, restoring livelihoods, and providing trauma counseling. The programme photographs every intervention and maintains records for impact assessment. Once floodwaters recede and conditions stabilise, families are supported through the complete recovery process."
    },
    {
      question: "Can I donate supplies instead of money?",
      answer: "While monetary donations are most efficient because they allow the programme to purchase exactly what is needed at the right time and location, in-kind donations of specific items are also welcome during active flood emergencies. Priority items include dry food, tarpaulins, blankets, medical supplies, and building materials. Contact the team at +91-9876543210 or info@gusdisasterrelief.org to coordinate supply donations. Please note that in-kind donations are not eligible for 80G tax receipts."
    },
    {
      question: "How will I know my donation made a difference?",
      answer: "We believe in complete transparency. We send regular email updates with photos and videos from the ground during the deployment. You will also receive a detailed impact report after the flood relief operation concludes, showing exactly how many families were helped and how communities were rebuilt."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Flood Relief Uttarakhand cause data
  const cause = {
    id: 6,
    title: 'Flood Relief in Uttarakhand',
    subtitle: 'How to help flood victims in Uttarakhand - Emergency disaster relief and rehabilitation',
    organizer: 'GUS Disaster Relief',
    ngo: 'GUS Disaster Relief',
    location: 'Uttarakhand, India',
    category: 'Disaster Relief India • Emergency Response',
    goalAmount: '₹8,50,000',
    raisedAmount: '₹6,20,000',
    progressPercentage: 73,
    supporters: 267,
    daysLeft: 30,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
    urgency: 'Critical',

    // Problem Statement
    problemStatement: 'How to help flood victims in Uttarakhand? Devastating floods have destroyed homes, displaced 2,000+ families, and left communities without basic necessities in Uttarakhand. Disaster relief India is critical as flood-affected families need emergency shelter, food, clean water, and medical aid. Flood relief Uttarakhand operations are urgently required. Emergency response India must provide immediate disaster relief and long-term rehabilitation for flood victims.',

    // Root Causes
    rootCauses: [
      'Severe flooding destroying homes and infrastructure in Uttarakhand',
      'Families displaced without emergency shelter or basic necessities',
      'Limited disaster relief India resources for flood-affected areas',
      'Insufficient emergency response operations for flood victims',
      'Lack of disaster rehabilitation and rebuilding programs'
    ],

    // Consequences if not addressed
    consequences: [
      'Flood-affected families continue suffering without emergency shelter',
      '2,000+ families displaced without disaster relief support',
      'Health crisis without clean water and medical aid',
      'Economic devastation - livelihoods destroyed by floods',
      'Children miss education, trauma continues without rehabilitation'
    ],

    // Our Solution
    solution: {
      approach: 'Flood Relief Uttarakhand provides comprehensive disaster relief India through emergency response operations, immediate aid (shelter, food, medical care), and long-term disaster rehabilitation including infrastructure rebuilding and livelihood restoration.',
      components: [
        'Emergency shelter and temporary housing for 2,000+ flood-affected families',
        'Food distribution, clean water supply, and essential supplies',
        'Medical camps and healthcare services for flood victims',
        'Infrastructure rebuilding - homes, schools, community centers',
        'Livelihood restoration and disaster rehabilitation programs'
      ]
    },

    // Beneficiaries
    beneficiaries: {
      primary: '2,000+ flood-affected families receiving emergency aid',
      secondary: '10,000+ community members benefiting from relief',
      community: '25+ villages across flood-affected Uttarakhand',
      longTerm: 'Comprehensive disaster relief and community rebuilding'
    },

    // Impact Gallery
    impactGallery: [
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
        caption: 'Emergency response India - disaster relief operations reaching flood victims in Uttarakhand',
        type: 'Emergency Response'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
        caption: 'How to help flood victims Uttarakhand - emergency shelter for displaced families',
        type: 'Emergency Shelter'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
        caption: 'Flood relief Uttarakhand - food distribution and essential supplies for families',
        type: 'Food Distribution'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
        caption: 'Disaster relief India - medical camps providing healthcare to flood-affected communities',
        type: 'Medical Aid'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
        caption: 'Disaster rehabilitation - rebuilding homes and infrastructure in flood-affected villages',
        type: 'Infrastructure Rebuilding'
      }
    ],

    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '2,000+ families',
        description: 'Provided emergency shelter, food, and medical aid within 2 months',
        timeline: 'Short-term'
      },
      {
        metric: '500+ homes',
        description: 'Rebuilt through disaster rehabilitation and infrastructure programs',
        timeline: 'Medium-term'
      },
      {
        metric: '10,000+ people',
        description: 'Receiving clean water, medical care, and disaster relief support',
        timeline: 'Short-term'
      },
      {
        metric: '100% recovery',
        description: 'Complete disaster rehabilitation - livelihood restoration for communities',
        timeline: 'Long-term'
      }
    ],

    timeline: '18 months',

    updates: [
      {
        date: '15 March 2024',
        title: 'Emergency Relief Operations Launched',
        description: 'Deployed emergency response teams to flood-affected areas, providing immediate shelter and food to 500+ families.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg'
      },
      {
        date: '20 March 2024',
        title: 'Medical Camps Established',
        description: 'Set up medical camps serving 1,000+ flood victims with healthcare, medicines, and disease prevention.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg'
      },
      {
        date: '25 March 2024',
        title: 'Infrastructure Rebuilding Begins',
        description: 'Started rebuilding 100 homes and community infrastructure in flood-affected villages.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg'
      }
    ],

    testimonials: [
      {
        name: 'Sunita Devi',
        role: 'Flood Victim, Uttarakhand',
        quote: 'When the floods destroyed our home, we lost everything. The disaster relief team arrived within days, providing shelter, food, and hope. They are rebuilding our home and helping us restart our lives. This is how to truly help flood victims.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
      },
      {
        name: 'Ramesh Singh',
        role: 'Community Leader, Uttarakhand',
        quote: 'The flood relief operations saved our village. Emergency response was immediate - shelter, food, medical aid. Now they are rebuilding our homes and schools. This disaster rehabilitation program is giving us our future back.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      }
    ],

    milestones: [
      { target: '₹2,12,500', achievement: 'Emergency Shelter & Food Distribution', status: 'completed' },
      { target: '₹4,25,000', achievement: 'Medical Camps & Clean Water Supply', status: 'completed' },
      { target: '₹6,37,500', achievement: 'Infrastructure Rebuilding Begins', status: 'in-progress' },
      { target: '₹7,65,000', achievement: 'Livelihood Restoration Programs', status: 'pending' },
      { target: '₹8,50,000', achievement: 'Complete Community Rehabilitation', status: 'pending' }
    ]
  };

  // NGO details
  const ngoDetails = {
    name: 'GUS Disaster Relief',
    logo: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
    tagline: 'Hope in Times of Crisis',
    stats: {
      transparency: 96,
      programSpend: 92,
      yearsActive: '14+',
      states: 20
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Flood Relief Uttarakhand | Emergency Disaster Response"
        description="Support flood relief Uttarakhand. Our animal welfare NGO India provides emergency animal rescue India and disaster relief for families in high-risk flood zones."
        keywords="flood relief Uttarakhand, help flood victims Uttarakhand, emergency animal rescue, disaster relief operations, animal welfare ngo, flood rehabilitation, rescue trapped animals, animal welfare board india, CSR for disaster relief, corporate partnership for disaster relief, disaster relief, emergency response"
        canonicalUrl="https://www.thegivingcircle.in/flood-relief-cause-details"
        ogImage="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg"
      />
      <ArticleSchema
        title="Flood Relief Uttarakhand - Disaster Relief & Emergency Response India"
        description="Support disaster relief India through emergency response, flood relief operations, medical aid, and rehabilitation. Helping 2,000+ flood-affected families in Uttarakhand with shelter, food, and essential supplies."
        image="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg"
        category="Disaster Relief"
        location="Uttarakhand, India"
        datePublished="2024-06-15"
        author="GUS Foundation"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10">
            Flood Relief in Uttarakhand When Disaster Strikes, We Stand Together
          </h1>

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Every monsoon season, Uttarakhand's floods devastate thousands of families. Homes destroyed. Livelihoods lost. Communities shattered. This campaign provides immediate emergency response and long-term rehabilitation to help flood victims rebuild their lives.
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
              14+ Years Active
            </div>
          </div>

          {/* Geographic Line */}
          <p className="text-sm text-gray-600 mb-8">
            <strong>Active operations</strong> · Uttarakhand, India
          </p>

          {/* Hero Image - Full width and centered */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg mx-auto">
            <CloudinaryImage
              src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg"
              alt="Flood-affected families in Uttarakhand receiving emergency disaster relief from GUS Disaster Relief"
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

            {/* Section 1: When Disaster Strikes */}
            <section aria-label="When Disaster Strikes" className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2 break-words">
                <AlertTriangle className="text-black" size={18} />
                When Disaster Strikes
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="prose prose-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  Uttarakhand is one of India's most flood-prone states. Every monsoon season, torrential rains transform mountain rivers into raging torrents, submerging entire villages and displacing thousands. Between June and October, vast stretches of the state go underwater. For families caught in these floods, there is often no warning, no time to prepare, and nowhere to go.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  The 2023 floods in Uttarakhand came with a ferocity that overwhelmed even experienced disaster responders. Glacial lake outbursts and cloudbursts sent walls of water through mountain valleys. Homes that had stood for generations were swept away in minutes. Families that had lived in the same villages for centuries were suddenly homeless, with nothing but the clothes on their backs.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  The 2024 floods were even more devastating. Without any warning, hillsides collapsed onto settlements, burying homes, farms, and lives together. Survivors described watching their entire lives disappear in minutes. The scale of human suffering in that single event was staggering, and it was just one flood in one state during one monsoon season.
                </p>
              </div>

              {/* Image directly below the paragraphs */}
              <figure className="mb-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg"
                  alt="When floods strike Uttarakhand, families lose everything. They wait, and they hope for help."
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  When floods strike Uttarakhand, families lose everything. They wait, and they hope for help.
                </figcaption>
              </figure>

              {/* The Annual Crisis subsection */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">The Annual Crisis No One Prepares For</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm md:text-base break-words">
                  In Uttarakhand, flooding is not a rare disaster. It is an annual certainty. Mountain rivers overflow every single monsoon, submerging thousands of square kilometres. Floods affect an average of tens of thousands of people each year. The human toll runs into the hundreds of thousands. Families, livelihoods, and communities are all caught in the same relentless cycle.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm md:text-base break-words">
                  The tragedy is compounded by what happens after the water recedes. Contaminated water breeds disease. Stagnant pools become breeding grounds for mosquitoes. Families that survived the initial flooding develop severe health issues from prolonged exposure to dirty water and lack of medical care.
                </p>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                  And then there is the displacement. During chaotic evacuations, families are separated. Children are torn from parents who are hustled onto rescue vehicles with barely enough room for people. Livestock owners watch helplessly as rising water carries away animals they cannot reach.
                </p>
              </div>
            </section>

            <section aria-label="The Hidden Victims" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                The Hidden Victims
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                In every flood, the focus of relief operations is rightly on human lives. Evacuations prioritise people. Relief camps are designed for people. Media coverage centres on human stories. This is as it should be. But in the shadow of every human disaster, there are families who receive almost no attention, no funding, and no coordinated response.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Families Cannot Recover Alone</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                When flood warnings are issued, some families can make decisions. They can gather belongings, move to higher ground, or board evacuation vehicles. But many families cannot process warnings quickly enough. A family in a low-lying village will drown there unless someone comes to help them. Livestock locked in sheds will stand in rising water until it reaches their nostrils. The most heartbreaking aspect of flood-related suffering is how preventable many of them are. In most cases, families did not need sophisticated rescue equipment. They just needed someone to show up.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Rural families are particularly vulnerable. They have no resources coming to get them. A family in a flood-affected village has no higher ground it has been trained to seek, no shelter it associates with safety. It simply runs until it cannot run anymore, and then it waits until it cannot wait anymore. Many do not survive. Those that do are left traumatised, malnourished, and sick from ingesting contaminated water.
              </p>

              <figure className="my-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg"
                  alt="Flood-affected families receiving emergency aid during disaster relief operations in Uttarakhand"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Every rescue is a race against time. Flood-affected families need immediate intervention.
                </figcaption>
              </figure>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">The Post-Flood Health Crisis</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Surviving the floodwater is only the first challenge. In the weeks that follow, disease spreads rapidly through affected populations. Waterborne diseases, transmitted through contaminated water, cause severe illness in children and adults. Skin infections and fungal diseases ravage people whose bodies were soaked for days. Gastrointestinal parasites thrive in flood conditions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Without medical intervention, many of these post-flood conditions are fatal. Rural medical infrastructure in flood-prone areas is already stretched thin under normal circumstances. After a major flood, it is essentially non-existent. Clinics are underwater. Supplies are destroyed. Medical professionals themselves are displaced. The families that survived the flood often suffer in the weeks that follow from entirely treatable conditions, simply because no one was there to treat them.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Livelihood Losses and Economic Devastation</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                For millions of rural Indian families, their homes and farms are not just property. They are economic lifelines. A single home may represent years of savings. A small farm can be the difference between a family eating and going hungry. When floods destroy homes and farms, they do not just take property. They destroy human livelihoods. Families that lose everything in floods often face financial ruin from which they never fully recover. Flood Relief Uttarakhand understands that saving families is inseparable from protecting the communities that depend on them.
              </p>
            </section>

            <section aria-label="How Flood Relief Uttarakhand Responds" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                How Flood Relief Uttarakhand Responds
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Flood Relief Uttarakhand was built on a simple operational principle: when disaster strikes, families need someone who is ready to act immediately, with the right equipment, the right training, and the right coordination. Every hour of delay during a flood costs lives. The programme maintains year-round readiness so that when the first warnings come, teams can deploy within 24 to 48 hours.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Rapid Response Deployment</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                The programme maintains pre-positioned relief kits in strategic locations across Uttarakhand. Each kit includes emergency shelter materials, food supplies, clean water, medical supplies, and basic tools. When flood alerts are issued by the India Meteorological Department or the Central Water Commission, the nearest response team is activated immediately. Team leaders begin coordinating with local administration, identifying likely family concentration points, and securing temporary shelter locations before the water even peaks.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Each rapid response team consists of trained disaster responders, medical professionals, and logistics coordinators. They operate in teams during rescues, with one person managing logistics and another handling families. Communication is maintained through satellite phones in areas where cellular networks have been knocked out by the flooding. GPS coordinates of every intervention are logged, creating a database that helps predict where families are most likely to need help during future floods.
              </p>

              <figure className="my-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg"
                  alt="Flood Relief Uttarakhand team deploying emergency response operations in flood zones to help affected families"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Rapid response teams deploy within 24-48 hours of flood alerts with pre-positioned relief equipment.
                </figcaption>
              </figure>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Emergency Shelters and Medical Care</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Rescue is only the first step. Once families are pulled from floodwaters, they need immediate care. The programme sets up emergency shelters on elevated ground near flood zones, typically in community halls, school buildings, or purpose-erected tarpaulin structures. Each shelter provides clean water, food, warmth, and basic medical triage. Families are assessed for injuries, infections, dehydration, and shock. Those requiring advanced treatment are transported to partner medical facilities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                The medical care protocol covers wound cleaning and dressing, dehydration management through oral rehydration, anti-parasitic treatment, and prophylactic antibiotics for people showing early signs of waterborne diseases or respiratory infections. During the 2024 response season, the programme's field medical teams treated over 2,400 people across affected areas. Approximately 95 percent of treated people survived and were either reunited with families or supported through recovery once conditions stabilised.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Long-Term Rehabilitation</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                One of the most important and most overlooked aspects of flood relief is rehabilitation. When families are evacuated, they are rarely told where to find help afterward. The programme photographs every intervention, records the location of assistance, and posts details on local community boards and social media groups. Where possible, affected families are registered for long-term support. In the 2024 season, the programme successfully supported over 600 families through complete recovery, a number that represents not just immediate relief but family stability and economic recovery for hundreds of rural households.
              </p>
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
            <section aria-label="Flood Relief in Action" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Flood Relief in Action
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
            <section aria-label="About GUS Disaster Relief" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                About GUS Disaster Relief
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="bg-green-700 rounded-lg p-3 text-white shrink-0">
                    <span className="text-2xl font-bold">G</span>
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
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">Regions Covered</div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <Shield className="text-green-700 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">ISO 9001:2015 Certified Organisation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-700 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">Multi-State Disaster Response Operations since 2010</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="text-green-700 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">Registered under Section 80G all donations are tax-deductible</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-700 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">Contact: +91 9876543210</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-700 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <a href="mailto:info@gusdisasterrelief.org" className="text-sm sm:text-base text-gray-700 hover:text-green-700 hover:underline">info@gusdisasterrelief.org</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-700 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </div>
                    <a href="http://www.gusdisasterrelief.org" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-700 hover:text-green-700 hover:underline">www.gusdisasterrelief.org</a>
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
                    <span>₹2,30,000 to go</span>
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
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold">Villages</div>
                  </div>
                </div>

                {/* Donation Tiers */}
                <div className="mb-5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Select an amount</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm group">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹1,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Emergency food kit for 1 family</div>
                    </button>
                    <button className="border-2 border-green-700 bg-green-50 rounded-lg p-3.5 text-center transition-all shadow-sm relative">
                      <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-green-700 rounded-tr-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹2,500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Shelter & supplies for 1 family</div>
                    </button>
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹5,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Medical care for 10 flood victims</div>
                    </button>
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹10,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Rebuild 1 home for a flood-affected family</div>
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
                  <span>30 days left monsoon season is approaching</span>
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
            267 People Stepped Up. Will You?
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            It takes 2 minutes to sign up and one share to start helping flood victims rebuild their lives. No special training needed. No minimum commitment. Just the will to be there when disaster strikes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-base sm:text-lg">
              Become a Flood Relief Ambassador
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

export default FloodReliefCauseDetailPage;

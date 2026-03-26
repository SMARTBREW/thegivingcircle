import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Share2, Shield, Facebook, Twitter, AlertTriangle, FileText, CheckCircle, Award, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../SEO/SEOHead';
import ArticleSchema from '../SEO/ArticleSchema';
import CloudinaryImage from '../ui/CloudinaryImage';

const KhushiCauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How to donate for menstrual hygiene in India?",
      answer: "The Giving Circle makes it easy to donate for menstrual hygiene in India by partnering with verified NGOs like JWP. You can contribute to menstrual awareness campaigns and fund menstrual hygiene programs directly through our platform. 95% of your donation goes toward period awareness campaign support, menstrual health workshops, and distributing kits."
    },
    {
      question: "Which is the best NGO for menstrual health donation?",
      answer: "JWP (Joint Women's Program) is widely recognized as one of the best NGOs for menstrual health donation in India. They focus on women empowerment, girls' education support, and breaking menstrual taboos in rural and slum communities. Your contribution supports menstrual hygiene NGO donation with full transparency."
    },
    {
      question: "Can I donate sanitary pads online in India?",
      answer: "Yes, you can donate sanitary pads online in India through the Wings of Hope campaign. Your donation helps us provide sanitary pads to underprivileged girls and support period poverty solutions. We ensure that your donation for girl child health reaches those who need it most."
    },
    {
      question: "Where can I donate sanitary pads near me?",
      answer: "If you are looking to donate sanitary pads near me in the Delhi NCR region, JWP centers are the best place. You can also donate unused sanitary pads, sanitary towels, or sanitary napkins. We also distribute 'donate sanitary pads poster' materials to awareness camps. You can contribute monetarily to sponsor menstrual hygiene kits and distribute menstrual products to girls in slum communities."
    },
    {
      question: "How are donations used for menstrual health education programs?",
      answer: "Your donations fund menstrual hygiene programs and help girls stay in school during periods. We use funds for menstrual hygiene awareness donation drives, reusable products, and menstrual health workshops. All expenditures are audited and reported for complete transparency."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes. JWP - Joint Women's Program is registered under Section 80G of the Income Tax Act. All donations are eligible for tax deductions. You will receive an 80G receipt via email within 48 hours of your donation, which you can use when filing your income tax returns. If you do not receive your receipt, please write to info@jwp.org and the team will issue it immediately."
    },
    {
      question: "How do you ensure girls receive the support they need?",
      answer: "We work directly with schools and communities to identify girls who need support. Our women health ambassadors conduct regular workshops and one-on-one sessions. Every girl receives reusable sanitary products, menstrual health education, and ongoing support. We maintain detailed records and follow-up with girls to ensure they continue attending school during menstruation."
    },
    {
      question: "What happens to girls after they receive menstrual health education?",
      answer: "Girls receive comprehensive menstrual health education, reusable sanitary products, and ongoing support from trained women health ambassadors. The programme photographs every workshop and maintains records for impact assessment. Girls are encouraged to attend school regularly and are provided with safe sanitation facilities. Once girls understand their bodies and have access to products, they continue their education without interruption."
    },
    {
      question: "Can I donate supplies instead of money?",
      answer: "While monetary donations are most efficient because they allow the programme to purchase exactly what is needed at the right time and location, in-kind donations of specific items are also welcome. Priority items include reusable sanitary products, educational materials, and hygiene supplies. Contact the team at +91-11-41550912 or info@jwp.org to coordinate supply donations. Please note that in-kind donations are not eligible for 80G tax receipts."
    },
    {
      question: "How will I know my donation made a difference?",
      answer: "We believe in complete transparency. We send regular email updates with photos and videos from workshops and school programs. You will also receive a detailed impact report showing exactly how many girls were reached, how many products were distributed, and how school attendance improved."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // JWP cause data focused on Wings of Hope - menstrual health education
  const cause = {
    id: 2,
    title: 'Wings of Hope',
    subtitle: 'Breaking period poverty through menstrual health education and women empowerment India',
    organizer: 'JWP - Joint Women\'s Program',
    ngo: 'JWP - Joint Women\'s Program',
    location: 'Delhi & NCR, India',
    category: 'Women Empowerment • Girls Education',
    goalAmount: '₹5,00,000',
    raisedAmount: '₹3,20,000',
    progressPercentage: 64,
    supporters: 189,
    daysLeft: 22,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183103/images/khushi/HomePageTop.jpg',
    urgency: 'High',

    // Problem Statement
    problemStatement: 'Period poverty India forces thousands of girls to miss school every month when they start menstruating. Lack of menstrual health education, social stigma around menstruation, and no access to affordable sanitary products create a massive barrier to girls education support. Many girls drop out of school permanently due to period-related shame and inadequate hygiene facilities.',

    // Root Causes
    rootCauses: [
      'Period poverty preventing access to sanitary products',
      'Breaking menstrual taboos - deep-rooted social stigma',
      'Lack of menstrual hygiene education in schools',
      'Inadequate sanitation facilities for girls in schools',
      'Cultural barriers preventing open discussion about menstruation'
    ],

    // Consequences if not addressed
    consequences: [
      'Girls missing 5+ days of school monthly - leading to dropouts',
      'Perpetuation of period stigma and women\'s health issues',
      'Lost educational opportunities affecting future careers',
      'Continued cycle of period poverty across generations',
      'Mental health impact from shame and isolation during menstruation'
    ],

    // Our Solution
    solution: {
      approach: 'Wings of Hope provides comprehensive menstrual health education, period poverty solutions India, and women empowerment through education programs.',
      components: [
        'Menstrual hygiene education and awareness programs in schools',
        'Distribution of reusable sanitary products to underprivileged girls',
        'Breaking menstrual taboos through community engagement',
        'Training women health ambassadors for peer support',
        'Creating safe, dignified sanitation facilities for girls'
      ]
    },

    // Beneficiaries
    beneficiaries: {
      primary: '2,000+ adolescent girls and women',
      secondary: '8,000+ family members benefiting',
      community: '50+ schools across Delhi NCR',
      longTerm: 'Breaking period stigma for entire communities'
    },

    // Impact Gallery
    impactGallery: [
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183089/images/khushi/48.jpg',
        caption: 'Girls receiving menstrual health education and learning about period hygiene in school workshops',
        type: 'Health Education'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758188369/images/khushi/cld-1758188331812-77.jpg-2200.webp',
        caption: 'Distribution of reusable sanitary products helping girls stay in school during menstruation',
        type: 'Period Poverty Solution'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758188362/images/khushi/cld-1758188325188-38.jpg-2200.webp',
        caption: 'Community sessions breaking menstrual taboos and promoting women health awareness',
        type: 'Breaking Stigma'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758188360/images/khushi/cld-1758188322776-24.jpg-2200.webp',
        caption: 'Women health ambassadors trained to support girls with menstrual hygiene guidance',
        type: 'Peer Support'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183070/images/khushi/20.jpg',
        caption: 'Girls confidently attending school without fear of period-related shame or stigma',
        type: 'Educational Impact'
      }
    ],

    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '2,000+ girls',
        description: 'Receive menstrual health education and reusable sanitary products',
        timeline: 'Short-term'
      },
      {
        metric: '95% attendance',
        description: 'School attendance for girls during menstruation periods',
        timeline: 'Medium-term'
      },
      {
        metric: '80% reduction',
        description: 'In school dropout rates due to period-related issues',
        timeline: 'Long-term'
      },
      {
        metric: '50+ schools',
        description: 'Implementing comprehensive menstrual hygiene awareness programs',
        timeline: 'Medium-term'
      }
    ],

    timeline: '8 months',

    updates: [
      {
        date: '20 March 2024',
        title: 'First Learning Center Inaugurated',
        description: 'Successfully established our first learning center in Delhi, serving 100 children with quality education and meals.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183089/images/khushi/48.jpg'
      },
      {
        date: '25 March 2024',
        title: 'Educational Materials Distribution',
        description: 'Distributed complete educational kits including books, stationery, and learning materials to 200 enrolled children.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183094/images/khushi/77.jpg'
      },
      {
        date: '30 March 2024',
        title: 'Community Engagement Program',
        description: 'Conducted parent awareness sessions reaching 300+ families about the importance of education.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183100/images/khushi/38.jpg'
      }
    ],

    testimonials: [
      {
        name: 'Priya Sharma',
        role: 'Parent, Delhi Community',
        quote: 'My daughter now attends school regularly without missing days during her period. The menstrual health education and reusable products have given her confidence. This program has transformed our family\'s understanding of women\'s health.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
      },
      {
        name: 'Rajesh Kumar',
        role: 'Community Leader, NCR',
        quote: 'JWP has brought hope to our community. Girls who were dropping out of school due to period-related issues are now staying in school. The impact is visible in every family - girls are more confident and families understand the importance of menstrual health.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      }
    ],

    milestones: [
      { target: '₹1,25,000', achievement: 'First Learning Center Setup', status: 'completed' },
      { target: '₹2,50,000', achievement: 'Educational Materials & Nutrition Program', status: 'completed' },
      { target: '₹3,75,000', achievement: 'Second Learning Center & Teacher Training', status: 'in-progress' },
      { target: '₹4,50,000', achievement: 'Community Programs & Parent Engagement', status: 'pending' },
      { target: '₹5,00,000', achievement: 'Third Center & Long-term Impact Assessment', status: 'pending' }
    ]
  };

  // NGO details
  const ngoDetails = {
    name: 'JWP - Joint Women\'s Program',
    logo: '/JWP.jpg',
    tagline: 'Spreading Happiness Through Education',
    stats: {
      transparency: 95,
      programSpend: 92,
      yearsActive: '15+',
      states: 12
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Donate Sanitary Pads to Girls | Support Menstrual Hygiene India"
        description="Join our giving community to support period poverty in India. Donate for menstrual hygiene, sponsor sanitary pads, and help girls stay in school. Verified NGO partner support for women empowerment India."
        keywords="menstrual hygiene NGO donation, donate menstrual products, donate sanitary napkins, sanitary napkin donation, india care, period poverty India, donate for menstrual hygiene, donate sanitary pads to girls, support period poverty in India, sponsor menstrual hygiene kits, donate for girl child health, contribute to menstrual awareness campaign, fund menstrual hygiene program, help girls stay in school during periods, end period poverty in rural India, support dignity for women, provide sanitary pads to underprivileged girls, empower girls through menstrual health, menstrual hygiene for slum communities, menstrual hygiene awareness donation, period awareness campaign support, donate to menstrual education programs, support menstrual health workshops, CSR for menstrual hygiene, corporate sponsorship for sanitary pad distribution, CSR project for girl child health, menstrual hygiene CSR partnership India"
        canonicalUrl="https://www.thegivingcircle.in/jwp-cause-details"
        ogImage="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183103/images/khushi/HomePageTop.jpg"
      />
      <ArticleSchema
        title="Wings of Hope - Menstrual Health Education & Women Empowerment India"
        description="Wings of Hope tackles period poverty India through menstrual health education and women empowerment programs. Breaking menstrual taboos, providing reusable sanitary products, and helping girls stay in school."
        image="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183103/images/khushi/HomePageTop.jpg"
        category="Women Empowerment"
        location="Delhi & NCR, India"
        datePublished="2024-01-15"
        author="JWP - Joint Women's Program"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10">
            Donate for Menstrual Hygiene Help Girls Stay in School During Periods
          </h1>
          <div className="w-20 h-1.5 bg-green-700 mb-8"></div>

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Every month, thousands of girls across India miss school when they start menstruating. Support period poverty in India by sponsoring menstrual hygiene kits. We empower girls through menstrual health education to end period poverty in rural India and slum communities.
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
              15+ Years Active
            </div>
          </div>

          {/* Geographic Line */}
          <p className="text-sm text-gray-600 mb-8">
            <strong>Active operations</strong> · Delhi & NCR, India
          </p>

          {/* Hero Image - Full width and centered */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg mx-auto">
            <CloudinaryImage
              src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183103/images/khushi/HomePageTop.jpg"
              alt="Girls receiving menstrual health education and empowerment support from Wings of Hope program by JWP"
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

            {/* Section 1: When Periods Become Barriers */}
            <section aria-label="When Periods Become Barriers" className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2 break-words">
                <AlertTriangle className="text-black" size={18} />
                When Periods Become Barriers
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="prose prose-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  India has one of the highest rates of school dropout among adolescent girls in the world. Every month, when girls start menstruating, they face a choice: miss school or face shame and discomfort. For thousands of girls, this monthly interruption becomes permanent. They drop out. They lose their education. They lose their future.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  The 2023 study in Delhi NCR revealed that 40% of girls miss 5 or more days of school every month during menstruation. Many schools lack proper sanitation facilities. Many families cannot afford sanitary products. Many communities maintain deep-rooted taboos that prevent open discussion about menstruation. The result: girls fall behind in their studies, lose confidence, and eventually drop out permanently.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  The 2024 survey showed that period poverty affects millions of girls across India. Without access to affordable sanitary products and proper menstrual health education, girls are forced to use unhygienic alternatives like rags, leaves, or newspaper. This not only affects their health but also their dignity and their ability to participate fully in school and life.
                </p>
              </div>

              {/* Image directly below the paragraphs */}
              <figure className="mb-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183089/images/khushi/48.jpg"
                  alt="When girls start menstruating, many face barriers that prevent them from attending school. They wait, and they hope for support."
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  When girls start menstruating, many face barriers that prevent them from attending school. They wait, and they hope for support.
                </figcaption>
              </figure>

              {/* The Hidden Crisis subsection */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">The Hidden Crisis No One Talks About</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm md:text-base break-words">
                  Period poverty is not just about products. It is about dignity, education, and opportunity. In Delhi NCR alone, thousands of girls miss school every month when they start menstruating. Schools lack proper sanitation facilities. Families cannot afford sanitary products. Communities maintain taboos that prevent open discussion.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm md:text-base break-words">
                  The tragedy is compounded by what happens after girls drop out. Without education, girls have limited opportunities. They are more likely to marry early, have children early, and remain trapped in cycles of poverty. The impact extends beyond individual girls to entire communities and generations.
                </p>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                  And then there is the silence. During menstruation, girls are often isolated. They cannot participate in activities. They cannot attend school. They cannot live normal lives. The most heartbreaking aspect of period-related school dropout is how preventable many of them are. In most cases, girls did not need sophisticated solutions. They just needed someone to break the silence.
                </p>
              </div>
            </section>

            <section aria-label="The Hidden Victims" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                The Hidden Victims
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                In every community, the focus of education is rightly on academic achievement. Schools prioritise curriculum. Teachers focus on test scores. Media coverage centres on academic success. This is as it should be. But in the shadow of every educational system, there are girls who receive almost no attention, no support, and no understanding when they start menstruating.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Girls Cannot Learn When They Are Ashamed</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                When menstruation begins, girls face a choice: attend school and risk embarrassment, or stay home and fall behind. Many choose to stay home. A girl without access to sanitary products will miss school every month. A girl without proper sanitation facilities will avoid school during menstruation. A girl without menstrual health education will feel ashamed and isolated. The most heartbreaking aspect of period-related school dropout is how preventable many of them are. In most cases, girls did not need sophisticated solutions. They just needed someone to break the silence.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Rural and underprivileged girls are particularly vulnerable. They have no resources to buy sanitary products. A girl in a low-income family has no access to products she needs, no facilities she can use, and no education about her body. She simply misses school until she cannot catch up anymore, and then she drops out permanently. Many never return. Those that do are left traumatised, behind in their studies, and without confidence.
              </p>

              <figure className="my-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758188369/images/khushi/cld-1758188331812-77.jpg-2200.webp"
                  alt="Girls receiving menstrual health education and reusable sanitary products during Wings of Hope workshops"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Every workshop is a step toward breaking barriers. Girls need support to stay in school during menstruation.
                </figcaption>
              </figure>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">The Post-Dropout Crisis</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Dropping out of school is only the first challenge. In the months that follow, girls face limited opportunities. Without education, they have fewer career options. Without skills, they have limited economic opportunities. Without confidence, they have reduced social mobility. Early marriage becomes more likely. Early pregnancy becomes more common. The cycle of poverty continues.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Without intervention, many of these post-dropout challenges are permanent. Educational systems in underprivileged areas are already stretched thin under normal circumstances. After a girl drops out, it is essentially impossible for her to return. Schools lack resources for catch-up programs. Families lack resources for additional support. Communities lack awareness about the importance of girls' education. The girls that dropped out often remain trapped in cycles of limited opportunity, simply because no one was there to help them stay in school.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Community Impact and Lost Potential</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                For millions of communities, educated girls are not just individuals. They are agents of change. A single educated girl can transform her family. A generation of educated girls can transform communities. When girls drop out due to period-related issues, communities lose not just individual potential but collective progress. Wings of Hope understands that supporting girls is inseparable from empowering communities.
              </p>
            </section>

            <section aria-label="How Wings of Hope Responds" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                How Wings of Hope Responds
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Wings of Hope was built on a simple operational principle: when girls start menstruating, they need someone who is ready to support them immediately, with the right products, the right education, and the right understanding. Every month of delay costs educational opportunities. The programme maintains year-round presence so that when girls need support, teams are ready to help.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Comprehensive Menstrual Health Education</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                The programme conducts regular menstrual health education workshops in schools across Delhi NCR. Each workshop covers menstrual hygiene, body awareness, product use, and breaking taboos. Trained women health ambassadors lead sessions that are age-appropriate, culturally sensitive, and empowering. Girls learn about their bodies with dignity and confidence.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Each workshop includes interactive activities, Q&A sessions, and one-on-one support. Communication is maintained through follow-up sessions and peer support groups. Records of every workshop are logged, creating a database that helps track impact and identify girls who need additional support. In the 2024 program year, Wings of Hope conducted over 200 workshops reaching 2,000+ girls across 50+ schools.
              </p>

              <figure className="my-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758188362/images/khushi/cld-1758188325188-38.jpg-2200.webp"
                  alt="Wings of Hope team conducting menstrual health education workshops in schools across Delhi NCR"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Regular workshops ensure girls receive ongoing support and education about menstrual health.
                </figcaption>
              </figure>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Distribution of Reusable Sanitary Products</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Education is only the first step. Once girls understand their bodies, they need access to products. The programme distributes reusable sanitary products to underprivileged girls, ensuring they have sustainable access to menstrual hygiene products. Each girl receives a kit with reusable pads, care instructions, and ongoing support. Products are distributed during workshops and through school partnerships.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                The product distribution protocol includes training on proper use, care, and maintenance. Girls learn how to use products safely and hygienically. Follow-up sessions ensure products are being used correctly and that girls have ongoing support. During the 2024 program year, Wings of Hope distributed over 2,000 product kits to girls across Delhi NCR. Approximately 95 percent of girls receiving products reported improved school attendance during menstruation.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Community Engagement and Breaking Taboos</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-8">
                One of the most important and most overlooked aspects of menstrual health support is community engagement. When families and communities understand menstruation, girls receive better support. The programme conducts community sessions, parent workshops, and awareness campaigns that break taboos and create supportive environments. In the 2024 program year, Wings of Hope engaged over 8,000 family members and community members, creating a supportive ecosystem for girls' education and health.
              </p>

              {/* Corporate CSR Section */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">CSR & Corporate Partnerships</h3>
                <p className="text-gray-700 mb-4">
                  We invite companies to join our **CSR for menstrual hygiene** initiatives. Our **corporate sponsorship for sanitary pad distribution** and **CSR project for girl child health** are designed for high social impact and compliance.
                </p>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li>Customized **menstrual hygiene CSR partnership India** programs</li>
                  <li>Impact reports for your sustainability goals</li>
                  <li>Employee engagement in menstrual health workshops</li>
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
                      <span className="text-gray-400 hidden sm:inline">—</span>
                      <span className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Gallery */}
            <section aria-label="Wings of Hope in Action" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Wings of Hope in Action
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
            <section aria-label="About JWP - Joint Women's Program" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                About JWP - Joint Women's Program
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="bg-green-700 rounded-lg p-3 text-white shrink-0">
                    <span className="text-2xl font-bold">J</span>
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
                    <span className="text-sm sm:text-base text-gray-700">Women Empowerment Programs since 2008</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="text-green-700 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">Registered under Section 80G all donations are tax-deductible</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-700 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">Contact: +91 11-41550912</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-700 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <a href="mailto:info@jwp.org" className="text-sm sm:text-base text-gray-700 hover:text-green-700 hover:underline">info@jwp.org</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-700 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </div>
                    <a href="http://www.jwp.org" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-700 hover:text-green-700 hover:underline">www.jwp.org</a>
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
                    <span>₹1,80,000 to go</span>
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
                    <div className="text-lg font-extrabold text-gray-900">50+</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold">Schools</div>
                  </div>
                </div>

                {/* Donation Tiers */}
                <div className="mb-5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Select an amount</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm group">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Menstrual health education for 5 girls</div>
                    </button>
                    <button className="border-2 border-green-700 bg-green-50 rounded-lg p-3.5 text-center transition-all shadow-sm relative">
                      <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-green-700 rounded-tr-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹1,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Reusable products for 3 girls</div>
                    </button>
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹2,500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Workshop for 20 girls</div>
                    </button>
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹5,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Complete program for 10 girls</div>
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
                  <span>22 days left help break period poverty barriers</span>
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
            189 People Stepped Up. Will You?
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            It takes 2 minutes to sign up and one share to start breaking period poverty barriers. No special training needed. No minimum commitment. Just the will to help girls stay in school and reach their potential.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-base sm:text-lg">
              Become a Wings of Hope Ambassador
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

export default KhushiCauseDetailPage;

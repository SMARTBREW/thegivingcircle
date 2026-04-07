import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Share2, Shield, Facebook, Twitter, AlertTriangle, FileText, CheckCircle, Award, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../SEO/SEOHead';
import ArticleSchema from '../SEO/ArticleSchema';
import CloudinaryImage from '../ui/CloudinaryImage';

const CauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How are donations used for education programs?",
      answer: "95% of every donation goes directly to educational programs: providing school uniforms and educational materials, establishing learning centers, training teachers, creating safe learning environments, and supporting students with scholarships. The remaining 5% covers essential coordination costs including communications, reporting, and logistics management. All expenditures are audited annually and financial reports are published quarterly."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes. All donations are eligible for tax deductions under Section 80G of the Income Tax Act. You will receive an 80G receipt via email within 48 hours of your donation, which you can use when filing your income tax returns. If you do not receive your receipt, please contact us and the team will issue it immediately."
    },
    {
      question: "How quickly can programs be implemented?",
      answer: "Programs can begin implementation within 2-4 weeks of funding. We maintain pre-positioned resources and trained staff to ensure rapid deployment. Learning centers can be operational within 30 days, and educational materials distribution can begin immediately upon funding confirmation."
    },
    {
      question: "What happens to students after program completion?",
      answer: "Students receive ongoing support through our comprehensive follow-up programs. We track academic progress, provide continued educational resources, and offer mentorship opportunities. Our goal is to ensure students not only complete their education but also transition successfully to higher education or vocational training programs."
    },
    {
      question: "Can I donate supplies instead of money?",
      answer: "While monetary donations are most efficient because they allow us to purchase exactly what is needed at the right time and location, in-kind donations of specific items are also welcome. Priority items include educational books, school supplies, uniforms, and learning materials. Contact us to coordinate supply donations. Please note that in-kind donations are not eligible for 80G tax receipts."
    },
    {
      question: "How will I know my donation made a difference?",
      answer: "We believe in complete transparency. We send regular email updates with photos and videos from the ground showing students benefiting from your support. You will also receive a detailed impact report after program milestones, showing exactly how many students were supported and what educational outcomes were achieved."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Sample cause data focused on the cause itself
  const cause = {
    id: 1,
    title: 'Wings Of Hope',
    subtitle: 'Breaking the cycle of poverty through quality education',
    organizer: 'JWP',
    ngo: 'JWP',
    location: 'Mumbai, Maharashtra',
    category: 'Education',
    goalAmount: '₹4,50,000',
    raisedAmount: '₹2,80,000',
    progressPercentage: 62,
    supporters: 143,
    daysLeft: 18,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183054/images/jwp/_DSC8339.jpg',
    urgency: 'High',

    // Problem Statement
    problemStatement: 'In underserved communities across India, thousands of children lack access to quality education and proper school infrastructure. Many students attend schools without adequate resources, proper uniforms, or learning materials, creating barriers to their educational success and future opportunities.',

    // Root Causes
    rootCauses: [
      'Insufficient school infrastructure and learning resources',
      'Lack of proper uniforms and educational materials',
      'Limited access to quality teaching and learning tools',
      'Inadequate support for students with special needs',
      'Community barriers to educational advancement'
    ],

    // Consequences if not addressed
    consequences: [
      'Students continue to struggle with inadequate learning resources',
      'Limited educational opportunities for future generations',
      'Reduced community development and economic growth',
      'Loss of potential leaders and skilled professionals',
      'Persistent educational inequality across communities'
    ],

    // Our Solution
    solution: {
      approach: 'Comprehensive educational support through school infrastructure development, resource provision, and community engagement programs.',
      components: [
        'Provide proper school uniforms and educational materials',
        'Establish well-equipped learning centers and classrooms',
        'Train teachers and support staff for better education delivery',
        'Create safe and conducive learning environments',
        'Support students with scholarships and educational resources'
      ]
    },

    // Beneficiaries
    beneficiaries: {
      primary: '250 children aged 6-14',
      secondary: '1,000+ family members',
      community: '5 slum communities',
      longTerm: 'Entire neighborhood ecosystem'
    },

    // Impact Gallery
    impactGallery: [
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183056/images/jwp/_DSC9767.jpg',
        caption: 'A young student proudly displays her educational materials and achievements in the classroom',
        type: 'Student Success'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183060/images/jwp/_MG_6955.jpg',
        caption: 'Students actively participating in learning activities with microphones and presentation equipment',
        type: 'Active Learning'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183063/images/jwp/_MG_7015.jpg',
        caption: 'Community members celebrating educational achievements and program milestones together',
        type: 'Community Celebration'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183065/images/jwp/_MG_8025.jpg',
        caption: 'Students engaged in collaborative learning and peer interaction activities',
        type: 'Collaborative Learning'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183050/images/jwp/20250910_110430.jpg',
        caption: 'Special educational events and cultural programs promoting holistic student development',
        type: 'Special Events'
      }
    ],

    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '250 children',
        description: 'Enrolled in formal education within 6 months',
        timeline: 'Short-term'
      },
      {
        metric: '80% improvement',
        description: 'In literacy and numeracy skills',
        timeline: 'Medium-term'
      },
      {
        metric: '95% retention',
        description: 'Rate in formal schooling after program completion',
        timeline: 'Long-term'
      },
      {
        metric: '40% increase',
        description: 'In family income through parent skill programs',
        timeline: 'Medium-term'
      }
    ],

    timeline: '6 months',

    updates: [
      {
        date: '15 March 2024',
        title: 'First Learning Center Operational',
        description: 'Successfully established our first learning center in Dharavi, serving 75 children with basic education and meals.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183060/images/jwp/_MG_6955.jpg'
      },
      {
        date: '20 March 2024',
        title: 'Educational Kits Distribution Complete',
        description: '150 complete educational kits distributed including books, uniforms, and learning materials to enrolled children.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183056/images/jwp/_DSC9767.jpg'
      },
      {
        date: '25 March 2024',
        title: 'Community Engagement Program Launched',
        description: 'Parent awareness sessions conducted reaching 200+ families about importance of education.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183063/images/jwp/_MG_7015.jpg'
      }
    ],

    testimonials: [
      {
        name: 'Sunita Devi',
        role: 'Parent, Dharavi Community',
        quote: 'My two children now attend the learning center daily. They have books, uniforms, and most importantly, hope for a better future. This program has changed our entire family.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
      },
      {
        name: 'Ravi Kumar',
        role: 'Community Leader, Kurla',
        quote: 'Before this program, children in our area had no educational opportunities. Now we see them learning, growing, and dreaming of becoming doctors and teachers.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      }
    ],

    milestones: [
      { target: '₹1,00,000', achievement: 'First Learning Center Setup', status: 'completed' },
      { target: '₹2,00,000', achievement: 'Educational Materials & Meal Program', status: 'completed' },
      { target: '₹3,00,000', achievement: 'Second Learning Center & Community Programs', status: 'in-progress' },
      { target: '₹4,00,000', achievement: 'Sustainability Fund & Teacher Training', status: 'pending' },
      { target: '₹4,50,000', achievement: 'Third Center & Long-term Impact Tracking', status: 'pending' }
    ]
  };

  // NGO details
  const ngoDetails = {
    name: 'JWP',
    logo: 'https://khushii.org/wp-content/uploads/2021/01/khushii-black-logo.png',
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
        title="Wings Of Hope: Quality Education for Underprivileged Children | Donate to The Giving Circle"
        description="Breaking the cycle of poverty through quality education. Wings Of Hope provides educational support, learning centers, and resources to underprivileged children. 62% funded. 18 days left. Donate now. Tax-deductible under 80G."
        keywords="causes to support, circle aid, circle of support, communities for communities, communities support, community causes, community giving, community helpline, community offering, community support platform, corporate giving platforms, give and help, give through, giving circle, giving community, giving india, giving platform, giving support, giving to community, india care, india community, social causes to support, social giving, support circle, support community, support from community, support of community, support social causes, supported causes, supporting india, Wings Of Hope, education, children, verified charity, donate to NGO India, transparent charity, impact stories"
        canonicalUrl="https://www.thegivingcircle.in/causes-details"
        ogImage="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183056/images/jwp/_DSC9767.jpg"
      />
      <ArticleSchema
        title="Wings Of Hope - Education & Empowerment Programs India"
        description="Support Wings Of Hope and verified social causes through The Giving Circle. Donate to trusted charity programs providing education, healthcare, and empowerment to underprivileged communities across India."
        image="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183056/images/jwp/_DSC9767.jpg"
        category="Education"
        location="Mumbai, Maharashtra"
        datePublished="2024-01-15"
        author="JWP"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10">
            Wings Of Hope Breaking the Cycle of Poverty Through Quality Education
          </h1>

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            In underserved communities across India, thousands of children lack access to quality education and proper school infrastructure. Many students attend schools without adequate resources, proper uniforms, or learning materials, creating barriers to their educational success and future opportunities.
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
            <strong>Active operations</strong> · Mumbai, Maharashtra and 20+ cities across 8 states
          </p>

          {/* Hero Image - Full width and centered */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg mx-auto">
            <CloudinaryImage
              src={cause.image}
              alt="Students engaged in educational activities at Wings Of Hope learning centers"
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

            {/* Section 1: The Challenge */}
            <section aria-label="The Challenge" className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2 break-words">
                <AlertTriangle className="text-black" size={18} />
                The Challenge
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="prose prose-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  In underserved communities across India, thousands of children lack access to quality education and proper school infrastructure. Many students attend schools without adequate resources, proper uniforms, or learning materials, creating barriers to their educational success and future opportunities.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  The classroom environment plays a crucial role in student success. When schools lack proper infrastructure, learning materials, and trained teachers, students struggle to engage effectively with their studies. Without adequate resources and support, even motivated students find it difficult to excel academically.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  These educational gaps create long-term challenges for students, limiting their opportunities for higher education and future career prospects, ultimately affecting their ability to contribute meaningfully to their communities.
                </p>
              </div>

              {/* Image directly below the paragraphs */}
              <figure className="mb-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183051/images/jwp/WhatsApp_Image_2025-06-29_at_22.44.35_68c59220.jpg"
                  alt="Students engaged in classroom learning activities with proper educational resources"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Students engaged in classroom learning activities with proper educational resources
                </figcaption>
              </figure>

              {/* Understanding the Root Causes subsection */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">Understanding the Root Causes</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm md:text-base break-words">
                  Many schools in underserved communities face significant challenges in providing quality education. Students often lack access to proper learning materials, adequate classroom resources, and consistent educational support, which hinders their ability to reach their full academic potential.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm md:text-base break-words">
                  The classroom environment plays a crucial role in student success. When schools lack proper infrastructure, learning materials, and trained teachers, students struggle to engage effectively with their studies. Without adequate resources and support, even motivated students find it difficult to excel academically.
                </p>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                  These educational gaps create long-term challenges for students, limiting their opportunities for higher education and future career prospects, ultimately affecting their ability to contribute meaningfully to their communities.
                </p>
              </div>
            </section>


            <section aria-label="The Cost of Inaction" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                The Cost of Inaction
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Without comprehensive educational and health support, communities face significant challenges. Students continue to struggle with inadequate learning resources, while health education gaps, particularly around menstrual health, create additional barriers to education and empowerment.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Limited Educational Opportunities</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Limited access to proper health education and resources affects students' ability to attend school regularly. Many girls miss school due to lack of menstrual health support, while boys and girls alike lack essential health knowledge that impacts their overall development.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                The combination of educational and health challenges creates a cycle where students cannot reach their full potential. Without proper support, we miss the opportunity to develop future leaders, healthcare workers, and community advocates who could transform their communities through knowledge and empowerment.
              </p>

              <figure className="my-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183052/images/jwp/WhatsApp_Image_2025-07-04_at_15.38.58_a93f5478.jpg"
                  alt="Women learning about menstrual health and hygiene education"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Health education programs are essential for student success and empowerment.
                </figcaption>
              </figure>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Long-term Impact on Communities</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                When children lack access to quality education, entire communities suffer. Without educated citizens, communities struggle with economic development, health awareness, and social progress. The cycle of poverty continues from generation to generation, limiting opportunities for growth and prosperity.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Educational inequality creates lasting social divisions and prevents communities from reaching their full potential. By investing in education today, we break cycles of poverty and create pathways for sustainable community development.
              </p>
            </section>


            <section aria-label="How Wings Of Hope Responds" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                How Wings Of Hope Responds
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Wings Of Hope was built on a simple operational principle: every child deserves access to quality education, regardless of their background or circumstances. We provide comprehensive educational support through learning centers, educational materials, teacher training, and community engagement programs.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Learning Centers and Infrastructure</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                We establish well-equipped learning centers in underserved communities, providing safe and conducive learning environments where students can thrive. Each center is equipped with educational materials, proper furniture, and learning resources that create professional, welcoming spaces where students feel proud to learn and grow.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Our learning centers serve as hubs for educational activities, community engagement, and holistic development programs. They provide not just academic support but also health education, life skills training, and extracurricular activities that help students develop into well-rounded individuals.
              </p>

              <figure className="my-6 w-full">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183058/images/jwp/_DSC9857.jpg"
                  alt="Students actively engaged in learning activities at Wings Of Hope learning centers"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Learning centers provide safe, well-equipped spaces for quality education.
                </figcaption>
              </figure>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Educational Materials and Resources</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                We provide proper school uniforms, educational materials, books, and learning resources to ensure students have everything they need to succeed academically. These resources create a sense of pride and belonging among students, as evidenced by their enthusiastic participation and visible improvements in academic performance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Through our comprehensive resource provision, we ensure that financial constraints do not prevent students from accessing quality education. Every student receives the materials they need to participate fully in their educational journey.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Teacher Training and Support</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We train teachers and support staff to deliver quality education effectively. Our training programs focus on modern teaching methodologies, student engagement techniques, and holistic development approaches that help teachers create impactful learning experiences for their students.
              </p>
            </section>

            {/* Section 4: Community Engagement */}
            <section aria-label="Community Engagement" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Community Engagement
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Education cannot succeed in isolation. We work closely with communities, parents, and local leaders to create a supportive ecosystem for student success. Our community engagement programs include parent awareness sessions, community celebrations, and collaborative initiatives that build lasting relationships.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Parent Involvement</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                We conduct regular parent awareness sessions to educate families about the importance of education and how they can support their children's learning journey. These sessions help build strong partnerships between families and educational programs, ensuring students receive support both at school and at home.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Community Celebrations</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                We organize community celebrations and events that recognize student achievements and program milestones. These events create a sense of pride and belonging, bringing communities together to celebrate educational progress and inspire continued commitment to learning.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Holistic Development</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Our programs extend beyond academics to include health education, life skills training, and extracurricular activities. We believe in holistic development that prepares students not just for academic success but for life success, creating well-rounded individuals who can contribute meaningfully to their communities.
              </p>
            </section>


            {/* Section 5: In Their Own Words (Testimonials) */}
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

            {/* Section 6: Gallery */}
            {/* Section 6: Gallery - Masonry Grid Style */}
            <section aria-label="Wings Of Hope in Action" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Wings Of Hope in Action
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
            <section aria-label="About JWP" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                About JWP
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="bg-green-700 rounded-lg p-3 text-white shrink-0">
                    <span className="text-2xl font-bold">K</span>
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
                    <span className="text-sm sm:text-base text-gray-700">Multi-State Education Programs since 2008</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="text-green-700 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">Registered under Section 80G all donations are tax-deductible</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-700 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">Contact: +91 98103 53603</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-700 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <a href="mailto:info@khushii.org" className="text-sm sm:text-base text-gray-700 hover:text-green-700 hover:underline">info@khushii.org</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-700 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </div>
                    <a href="http://www.khushii.org" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-700 hover:text-green-700 hover:underline">www.khushii.org</a>
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
                    <span>₹1,70,000 to go</span>
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
                    <div className="text-lg font-extrabold text-gray-900">12</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold">States</div>
                  </div>
                </div>

                {/* Donation Tiers */}
                <div className="mb-5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Select an amount</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm group">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Educational kit for 1 student</div>
                    </button>
                    <button className="border-2 border-green-700 bg-green-50 rounded-lg p-3.5 text-center transition-all shadow-sm relative">
                      <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-green-700 rounded-tr-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹1,500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Uniform & books for 3 students</div>
                    </button>
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹5,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Teacher training for 1 month</div>
                    </button>
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹10,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Learning center setup for 1 month</div>
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
                  <span>18 days left help us reach our goal</span>
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

              {/* Trust Signals - Outside the card, matching HTML structure */}

            </div>

          </aside>
        </div>
      </div>

      {/* Full Width Ambassador CTA */}
      <section className="bg-green-700 py-16 sm:py-20 mb-20 md:mb-0">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            143 People Stepped Up. Will You?
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            It takes 2 minutes to sign up and one share to start transforming children's lives through education. No teaching experience needed. No minimum commitment. Just the will to be the voice children need to break the cycle of poverty.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-base sm:text-lg">
              Become an Education Ambassador
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
    </div >
  );
};

export default CauseDetailPage;

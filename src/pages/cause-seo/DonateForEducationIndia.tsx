import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Share2, Shield, Facebook, Twitter, AlertTriangle, FileText, CheckCircle, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEO/SEOHead';
import ArticleSchema from '../../components/SEO/ArticleSchema';
import CloudinaryImage from '../../components/ui/CloudinaryImage';

const EDUCATION_IMAGE_URLS = {
  hero: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1773904138/images/animal-protect/20250910_112120.webp',
  classroom: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1773904132/images/animal-protect/20250908_114315.webp',
  digital: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1773904147/images/animal-protect/DSC_0711.webp',
  community: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1773904158/images/animal-protect/DSC_0713.webp',
  milestone: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1773904165/images/animal-protect/IMG_9075.webp',
  scholarship: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1773904171/images/animal-protect/IMG_9115.webp',
};

const DonateForEducationIndia = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes. JWP (Joint Women's Program) is registered under Section 80G of the Income Tax Act. All donations are eligible for tax deductions. You will receive an 80G receipt via email within 48 hours of your donation."
    },
    {
      question: "How do I know my money is actually used for education?",
      answer: "JWP publishes quarterly fund utilisation reports on our platform. You can see exactly how many children were supported, what materials were purchased, and outcome metrics like attendance and learning level improvements. 95% of every donation goes directly to programme costs."
    },
    {
      question: "What is the minimum donation amount?",
      answer: "There is no minimum. However, ₹500 is recommended as it covers one month of stationery and books for a child. ₹5,000 sponsors a child's full academic year including fees, materials and tuition."
    },
    {
      question: "Can my company fund this as a CSR project?",
      answer: "Absolutely. Child education under the name of promoting education including special education falls squarely under Schedule VII of the Companies Act. We provide full MoU, utilisation certificates and impact reports for corporate CSR compliance."
    },
    {
      question: "How will I receive updates after donating?",
      answer: "You will receive a welcome email within 24 hours, followed by quarterly impact updates with photos and outcome data from the ground. Major milestones  -  like when a new learning centre opens  -  are communicated directly to donors."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const cause = {
    id: 5,
    title: 'Donate for Child Education',
    subtitle: 'Fund school fees, books, meals and tutoring for underprivileged children in Delhi NCR',
    organizer: "JWP - Joint Women's Program",
    ngo: 'JWP',
    location: 'Delhi NCR, India',
    category: 'Child Education · Skill Development',
    goalAmount: '₹5,00,000',
    raisedAmount: '₹2,10,000',
    progressPercentage: 42,
    supporters: 176,
    daysLeft: 45,
    image: EDUCATION_IMAGE_URLS.hero,
    urgency: 'High',

    problemStatement: 'Over 250 million children in India are out of school or learning below grade level. In Delhi NCR\'s low-income communities, children drop out because families cannot afford school fees, books or uniforms. Without intervention, these children face a lifetime of limited opportunity.',

    rootCauses: [
      'Unaffordable school fees and materials force early dropouts',
      'No after-school support leads to falling behind and disengagement',
      'Digital divide leaves children without 21st-century skills',
      'Girl children disproportionately pulled out of school',
      'Lack of safe, stimulating learning environments in low-income areas'
    ],

    consequences: [
      'Children miss foundational literacy and numeracy skills permanently',
      'School dropout rates spike in Classes 5–8 without intervention',
      'Girls face early marriage without educational options',
      'Communities remain trapped in intergenerational poverty',
      'Lost human potential that India\'s economy cannot afford'
    ],

    solution: {
      approach: 'JWP provides holistic, sustained education support to underprivileged children in Delhi NCR  -  covering fees, materials, after-school tutoring, digital literacy and life skills training. Every child enrolled gets a complete support package, not just a one-time donation.',
      components: [
        'School fee sponsorship and uniform + stationery kits',
        'Daily after-school tutoring centres across Delhi NCR',
        'Digital literacy programme with donated devices',
        'Life skills and career counselling for Classes 6–10',
        'Special focus on keeping girls in school through Classes 8–12'
      ]
    },

    beneficiaries: {
      primary: '300+ children currently enrolled in JWP programmes',
      secondary: '600+ family members positively impacted',
      community: '12 low-income communities across Delhi NCR',
      longTerm: 'Breaking the cycle of intergenerational poverty through education'
    },

    impactGallery: [
      { type: 'Classroom', image: EDUCATION_IMAGE_URLS.hero, caption: 'Children in JWP\'s after-school learning centre' },
      { type: 'Learning', image: EDUCATION_IMAGE_URLS.classroom, caption: 'Girls staying in school through JWP\'s scholarship programme' },
      { type: 'Digital', image: EDUCATION_IMAGE_URLS.digital, caption: 'Digital literacy sessions opening new opportunities' },
      { type: 'Community', image: EDUCATION_IMAGE_URLS.community, caption: 'Community engagement building parent awareness' },
      { type: 'Milestone', image: EDUCATION_IMAGE_URLS.milestone, caption: 'Every milestone celebrated  -  small wins matter' }
    ],

    expectedOutcomes: [
      { metric: '300+ children', description: 'Enrolled and actively supported through the academic year', timeline: 'Short-term' },
      { metric: '90% retention', description: 'Keeping children in school from enrollment to Class 10', timeline: 'Medium-term' },
      { metric: '3 new centres', description: 'Expanding learning centre network across Delhi NCR', timeline: 'Long-term' },
      { metric: '100% girls', description: 'All enrolled girl students completing Class 8 without dropout', timeline: 'Medium-term' }
    ],

    timeline: '12 months',

    updates: [
      {
        date: '15 January 2025',
        title: '3 New Learning Centres Launched',
        description: 'Opened three new after-school centres in Okhla, Sangam Vihar and Dwarka reaching 80 new children.',
        image: EDUCATION_IMAGE_URLS.hero
      },
      {
        date: '1 March 2025',
        title: 'Digital Literacy Kits Distributed',
        description: 'Donated tablets and training provided to 120 children in Classes 5–8, opening access to online learning resources.',
        image: EDUCATION_IMAGE_URLS.classroom
      },
      {
        date: '5 April 2025',
        title: 'Girls\' Scholarship Programme Expanded',
        description: 'School fee sponsorships extended to 45 girls in Classes 6–10 at risk of dropout due to family financial pressure.',
        image: EDUCATION_IMAGE_URLS.scholarship
      }
    ],

    testimonials: [
      {
        name: 'Reena Yadav',
        role: 'Mother of two JWP students, Okhla, Delhi',
        quote: 'My husband is a daily wage labourer. When my daughter was in Class 6, we couldn\'t afford her school fees and were going to pull her out. JWP paid the fees and gave her books and uniform. She is now in Class 9 and wants to become a teacher. If JWP had not been there that year, she would have stopped school and been married off. I think about that every day.'
      },
      {
        name: 'Rahul Sharma',
        role: 'JWP student, Class 10, Sangam Vihar',
        quote: 'Before JWP, I used to fail in English every time. I was going to stop studying and work at my uncle\'s shop. The tutoring sessions changed everything. My teacher stayed after hours just for me. Last year I passed Class 9 with 72%. My parents had never seen a mark sheet that good. I want to get into a government college and study computer science.'
      },
      {
        name: 'Priya Kapoor',
        role: 'Corporate volunteer, annual education camp participant',
        quote: 'I have volunteered at JWP\'s learning centres three times now. The thing that strikes me most is how organised and serious the programme is. These are not feel-good activities. There are learning assessments, individual progress tracking and real accountability. The teachers know every child by name and know exactly where each one is struggling. That level of care is rare even in expensive private schools.'
      }
    ],

    milestones: [
      { target: '₹1,25,000', achievement: 'School fee sponsorships for 50 children (one semester)', status: 'completed' },
      { target: '₹2,50,000', achievement: 'After-school tutoring centres for 150 children', status: 'completed' },
      { target: '₹3,75,000', achievement: 'Digital literacy kits and training for 200 children', status: 'in-progress' },
      { target: '₹4,50,000', achievement: 'Girls\' scholarship programme for 45 at-risk students', status: 'pending' },
      { target: '₹5,00,000', achievement: 'Full academic year coverage + 3rd new learning centre', status: 'pending' }
    ]
  };

  const ngoDetails = {
    name: "JWP - Joint Women's Program",
    tagline: 'Every child deserves a future  -  we make that possible',
    stats: {
      transparency: 96,
      programSpend: 95,
      yearsActive: '12+',
      communities: 12
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Donate for Child Education in India | Verified NGOs | The Giving Circle"
        description="Support child education in India by donating to verified NGOs. Fund school fees, books, uniforms and tuition for underprivileged children in Delhi NCR. 80G tax benefits available."
        keywords="donate for child education, ngo for education, ngo on education, donors for education, fund for education, fund child education, child education donation, support underprivileged children, 80G donation education, 80g donation limit, education is important for women, food donation, help in suffering, JWP education NGO Delhi"
        canonicalUrl="https://www.thegivingcircle.in/donate-for-education-india"
        ogImage={EDUCATION_IMAGE_URLS.hero}
      />
      <ArticleSchema
        title="Donate for Child Education in India  -  Verified NGOs with Real Impact"
        description="Support child education in India by donating to verified NGOs through The Giving Circle. 80G tax benefits available."
        image={EDUCATION_IMAGE_URLS.hero}
        category="Child Education"
        location="Delhi NCR, India"
        datePublished="2025-01-01"
        author="JWP - Joint Women's Program"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10">
            Donate for Child Education in India  -  Every ₹500 Opens a Door
          </h1>

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Over 250 million children in India are out of school or learning below grade level. In Delhi NCR's low-income communities, children drop out not because they lack ability  -  but because their families cannot afford school fees, books or uniforms. This campaign changes that.
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
              12+ Years Active
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-8">
            <strong>Delhi NCR operations</strong> · Okhla · Sangam Vihar · Dwarka · Shahdara · Rohini · 12 communities
          </p>

          {/* Hero Image */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg mx-auto">
            <CloudinaryImage
              src={EDUCATION_IMAGE_URLS.hero}
              alt="Underprivileged children studying in JWP's after-school learning centre in Delhi NCR"
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

            {/* Section 1: The Problem */}
            <section aria-label="The Education Crisis" className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2 break-words">
                <AlertTriangle className="text-black" size={18} />
                When a Family Cannot Afford School
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="prose prose-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  India's Right to Education Act guarantees free schooling up to Class 8. But the reality for millions of low-income families in Delhi NCR is far more complicated. Tuition fees, uniforms, school bags, stationery, exam fees, and private coaching costs all fall on parents who earn ₹8,000–₹15,000 a month. When money runs out, children  -  especially girls  -  are the first casualty.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  In the communities JWP works across Delhi NCR, over 60% of enrolled children are at risk of dropping out between Classes 5 and 9. These are the critical years when foundational skills solidify and pathways to higher education open or close permanently. A child who drops out at Class 7 will, statistically, never return to formal education. The window is narrow and irreversible.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  Girl children face a second layer of risk. When families face financial pressure, daughters are the first to be withdrawn from school. Early marriage, domestic work, and economic dependence follow. JWP's programme specifically tracks and intervenes for girls at risk of dropout, because keeping a girl in school is among the most high-leverage investments a community can make.
                </p>
              </div>

              <figure className="mb-6 w-full">
                <CloudinaryImage
                  src={EDUCATION_IMAGE_URLS.classroom}
                  alt="Girls attending JWP's after-school tutoring sessions in Delhi to stay in school"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Girls in JWP's programme: the education gap for girls in low-income communities is the most urgent crisis.
                </figcaption>
              </figure>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">The Hidden Costs That Keep Children Out of School</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm md:text-base break-words">
                  The government school may be free, but education is not. In a typical year, a family in Delhi NCR pays ₹2,000–₹5,000 for books, notebooks and stationery. School uniforms cost ₹800–₹1,500. Examination fees, project materials, and field trips add more. Private coaching  -  considered essential to pass Class 10 and 12 board exams  -  can cost ₹1,500–₹3,000 per month. For a family earning ₹12,000 a month, these costs represent an impossible burden.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm md:text-base break-words">
                  JWP covers all of these costs for enrolled children  -  fees, materials, uniforms and coaching  -  removing the financial barriers that cause dropout entirely. The effect is immediate and measurable. Attendance in JWP-enrolled children averages over 85%, compared to 62% for non-enrolled peers in the same communities.
                </p>
              </div>
            </section>

            <section aria-label="The Digital Divide" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                The Digital Divide in Education
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                The COVID-19 pandemic exposed a brutal digital divide in Indian education. Children from middle-class families switched to online learning within weeks. Children from low-income communities in Delhi NCR simply stopped learning. No devices. No internet. No support. Many never fully recovered the lost two years.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Digital Literacy as a Core Programme</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                JWP responded to the digital gap by making digital literacy a core component of every learning centre. Donated tablets and locally hosted educational content give children access to quality learning materials even without internet. Teachers are trained to integrate digital tools into daily lessons. Children learn to use productivity software, research skills and basic coding  -  skills that directly impact their employment prospects after Class 12.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                In the 2024–25 academic year, JWP distributed 120 digital kits across its learning centres. Children who used digital tools showed a 34% improvement in English and Math assessment scores compared to baseline within six months.
              </p>

              <figure className="my-6 w-full">
                <CloudinaryImage
                  src={EDUCATION_IMAGE_URLS.digital}
                  alt="Children using tablets in JWP's digital literacy programme in Delhi NCR"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Digital literacy is no longer optional  -  JWP's programme bridges the gap for children left behind.
                </figcaption>
              </figure>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">Life Skills and Career Pathways</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                For children in Classes 8–10, JWP runs a life skills and career counselling module that many of these students have never had access to. Sessions cover communication skills, goal setting, stress management and awareness of higher education and vocational training pathways. For many children in JWP's programme, these sessions are the first time anyone has ever told them they can go to college or enter a skilled profession.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Of children who completed the life skills module in 2023–24, 78% enrolled in Class 11 compared to a community average of 41%. The intervention works because it addresses both the material barriers (fees, materials) and the motivational barriers (aspiration, awareness of what is possible) simultaneously.
              </p>

              <figure className="my-6 w-full">
                <CloudinaryImage
                  src={EDUCATION_IMAGE_URLS.community}
                  alt="JWP students in life skills and career counselling sessions in Delhi NCR"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Life skills sessions: for many children, the first time someone tells them they can achieve more.
                </figcaption>
              </figure>

              {/* CSR Block */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">CSR & Corporate Partnerships</h3>
                <p className="text-gray-700 mb-4">
                  Child education qualifies under Schedule VII of the Companies Act. JWP provides full MoU, utilisation certificates and impact reports for CSR compliance. Minimum CSR contribution: ₹5 lakh.
                </p>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li>Sponsor a classroom (₹50,000  -  covers 20 children for one year)</li>
                  <li>Fund a digital literacy kit deployment (₹30,000  -  20 tablets + teacher training)</li>
                  <li>Support a girls' scholarship cohort (₹75,000  -  15 girls through Class 10)</li>
                </ul>
              </div>
            </section>

            {/* Section 3: In Their Own Words */}
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

            {/* Section 4: Gallery */}
            <section aria-label="Education in Action" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Education in Action
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

            {/* Section 5: About NGO */}
            <section aria-label="About JWP" className="mb-8 sm:mb-12">
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
                    <div className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">{ngoDetails.stats.communities}</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">Communities</div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <Shield className="text-green-700 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">Registered NGO with valid FCRA and 80G certification</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-700 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">12+ years operating education programmes in Delhi NCR</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="text-green-700 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">Section 80G certified  -  all donations are tax-deductible</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-700 mt-0.5 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <a href="mailto:hello@thegivingcircle.in" className="text-sm sm:text-base text-gray-700 hover:text-green-700 hover:underline">hello@thegivingcircle.in</a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: FAQ */}
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

          {/* Sticky Donate Sidebar */}
          <aside className="lg:col-span-1" id="donate-section">
            <div className="lg:sticky lg:top-28 space-y-6 h-fit">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-7">

                {/* Raised Amount */}
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="text-3xl font-extrabold text-green-700 tracking-tight">{cause.raisedAmount}</span>
                  <span className="text-sm text-gray-500 font-medium">raised of {cause.goalAmount}</span>
                </div>

                {/* Progress Bar */}
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
                    <span>₹2,90,000 to go</span>
                  </div>
                </div>

                {/* Stats */}
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
                    <div className="text-lg font-extrabold text-gray-900">300+</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold">Children</div>
                  </div>
                </div>

                {/* Donation Tiers */}
                <div className="mb-5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Select an amount</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">1 month of books & stationery</div>
                    </button>
                    <button className="border-2 border-green-700 bg-green-50 rounded-lg p-3.5 text-center transition-all shadow-sm relative">
                      <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-green-700 rounded-tr-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹1,500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Uniform + bag for 1 child</div>
                    </button>
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹2,500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">School fees for 1 semester</div>
                    </button>
                    <button className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹5,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Full year sponsorship for 1 child</div>
                    </button>
                  </div>
                </div>

                {/* Donate Button */}
                <button className="w-full bg-green-700 hover:bg-green-800 text-white rounded-lg px-6 py-4 font-bold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg mb-2 flex flex-col items-center gap-0.5">
                  <span>Donate Now</span>
                  <span className="text-xs font-normal opacity-90">Secure payment · 80G receipt within 48 hours</span>
                </button>

                {/* Urgency */}
                <div className="text-center text-xs text-green-700 font-semibold mb-5 flex items-center justify-center gap-1">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="flex-shrink-0">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{cause.daysLeft} days left  -  new academic year begins soon</span>
                </div>

                {/* Share */}
                <div className="border-t border-gray-100 pt-4 mb-4">
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

      {/* Full Width CTA */}
      <section className="bg-green-700 py-16 sm:py-20 mb-20 md:mb-0">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            {cause.supporters} People Are Already Changing Lives. Will You?
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            It takes 2 minutes to donate and one share to reach a hundred more donors. No minimum commitment. No complicated process. Just the will to make sure a child doesn't have to choose between school and survival.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById('donate-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-base sm:text-lg"
            >
              Donate to Child Education
            </button>
            <button
              onClick={() => navigate('/onboarding')}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 text-base sm:text-lg"
            >
              Become a Cause Champion
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Fixed CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] z-50 md:hidden block">
        <div className="flex items-center gap-4 max-w-2xl mx-auto">
          <div className="flex-1 min-w-0">
            <div className="text-sm font-extrabold text-gray-900 truncate">{cause.raisedAmount} raised</div>
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

export default DonateForEducationIndia;

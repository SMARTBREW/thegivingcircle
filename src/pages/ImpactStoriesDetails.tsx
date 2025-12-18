import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle, MapPin, Users, Calendar, Star, 
  Share2, Download, ExternalLink, Badge, TrendingUp, 
  Award, Globe, Clock, FileText,
  Twitter, Facebook, Link, Copy, Eye, BookOpen,
  Play, Pause, Building2
} from 'lucide-react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'ghost' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  [x: string]: any;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    accent: 'bg-gradient-to-r green-700 hover:from-purple-700 hover:to-pink-700 text-white focus:ring-green-700',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900',
    outline: 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 hover:border-gray-400',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-lg',
    lg: 'px-6 py-3 text-base rounded-lg',
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

const ImpactStoriesDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Story data aligned with "Wings of Hope" (JWP)
  const storyData = {
    id: '1',
    title: 'Wings of Hope',
    description: 'Empowering women through skill development, entrepreneurship training, and financial literacy programs across Uttarakhand. This initiative builds sustainable livelihoods and strengthens community resilience.',
    ngoName: 'JWP',
    ngoDescription: 'JWP works with indigenous communities enabling access to education, livelihoods and empowerment with a focus on dignity and inclusion.',
    championName: 'Meera Singh',
    championBio: 'Program lead with 10+ years across women empowerment & livelihood initiatives, enabling micro-enterprises and self-help groups.',
    impactNumber: 1000,
    impactUnit: 'Women Empowered',
    location: 'Uttarakhand, India',
    coordinates: '30.0668, 79.0193',
    startDate: '2023-04-01',
    endDate: '2024-06-30',
    status: 'Completed',
    verified: true,
    nftTokenId: 'TGC001',
    blockchainNetwork: 'Polygon',
    contractAddress: '0x742d35Cc6634C0532925a3b8D1eC8d24eF8b6b12',
    totalFunding: 6500000,
    currentFunding: 6500000,
    backers: 234,
    likes: 1240,
    views: 10845,
    shares: 312,
    images: [
      '/JWP.jpg',
      '/khushii.jpg',
      '/Animal care.jpg',
      'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
    ],
    videoUrl: 'https://example.com/impact-video.mp4',
    documents: [
      { name: 'Impact Report 2024', type: 'PDF', size: '2.4 MB', url: '#' },
      { name: 'Financial Breakdown', type: 'Excel', size: '1.2 MB', url: '#' },
      { name: 'Beneficiary List', type: 'PDF', size: '850 KB', url: '#' },
    ],
    milestones: [
      { date: '2023-04-15', title: 'Program Kickoff', description: 'Community outreach and baseline study completed', status: 'completed' },
      { date: '2023-07-01', title: 'Training Cohorts Formed', description: '20 cohorts formed across 10 blocks', status: 'completed' },
      { date: '2023-10-30', title: 'Enterprise Support', description: 'Micro-enterprise kits distributed and mentorship active', status: 'completed' },
      { date: '2024-03-31', title: 'Financial Literacy', description: 'Savings groups and SHGs established with bank linkages', status: 'completed' },
      { date: '2024-06-30', title: 'Program Completion', description: '1000 women completed the program; 200 micro-enterprises started', status: 'completed' },
    ],
    impactMetrics: {
      direct: 1000,
      indirect: 4000,
      communities: 45,
      villages: 30,
      literacyRate: 0,
      completionRate: 96,
      employmentRate: 68,
      averageIncomeIncrease: 38,
    },
    tags: ['Women Empowerment', 'Livelihoods', 'Entrepreneurship', 'Financial Literacy'],
    sdgGoals: [5, 8, 10],
    testimonials: [
      {
        name: 'Kamla Devi',
        role: 'Beneficiary Entrepreneur',
        content: 'I started a tailoring unit with two women in my village. We now supply to nearby towns and support our families with dignity.',
        rating: 5,
        image: '/JWP.jpg',
      },
      {
        name: 'Vijay Rawat',
        role: 'Block Coordinator',
        content: 'Self-help groups are now active and saving regularly. The confidence among participants is the biggest impact.',
        rating: 5,
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
      },
    ],
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Eye className="w-4 h-4" /> },
    { id: 'impact', label: 'Impact Metrics', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'timeline', label: 'Timeline', icon: <Calendar className="w-4 h-4" /> },
    { id: 'team', label: 'Team & NGO', icon: <Users className="w-4 h-4" /> },
    { id: 'documents', label: 'Documents', icon: <FileText className="w-4 h-4" /> },
  ];

  const ShareModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={() => setShowShareModal(false)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-6 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-4">Share Impact Story</h3>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Button variant="outline" icon={<Twitter className="w-4 h-4" />}>Twitter</Button>
          <Button variant="outline" icon={<Facebook className="w-4 h-4" />}>Facebook</Button>
          <Button variant="outline" icon={<Link className="w-4 h-4" />}>LinkedIn</Button>
          <Button variant="outline" icon={<Copy className="w-4 h-4" />}>Copy Link</Button>
        </div>
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
          <input
            type="text"
            value={`https://thegivingchain.com/story/${storyData.id}`}
            readOnly
            className="flex-1 bg-transparent text-sm text-gray-600"
          />
          <Button size="sm" variant="accent">Copy</Button>
        </div>
      </motion.div>
    </motion.div>
  );

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src={storyData.images[selectedImageIndex]}
                alt={storyData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Button
                  variant="accent"
                  icon={isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? 'Pause Video' : 'Play Video'}
                </Button>
              </div>
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {storyData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index ? 'border-green-700' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Story Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">{storyData.title}</h1>
              <p className="text-lg text-gray-600 leading-relaxed">{storyData.description}</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border">
                <div className="text-2xl font-bold text-black">{storyData.impactNumber}</div>
                <div className="text-sm text-black">{storyData.impactUnit}</div>
              </div>
              <div className="bg-white p-4 rounded-xl border">
                <div className="text-2xl font-bold text-black">{storyData.impactMetrics.completionRate}%</div>
                <div className="text-sm text-black">Completion Rate</div>
              </div>
              <div className="bg-white p-4 rounded-xl border">
                <div className="text-2xl font-bold text-black">₹{(storyData.totalFunding / 100000).toFixed(1)}L</div>
                <div className="text-sm text-black">Total Investment</div>
              </div>
              <div className="bg-white p-4 rounded-xl border">
                <div className="text-2xl font-bold text-black">{storyData.impactMetrics.villages}</div>
                <div className="text-sm text-black">Villages Covered</div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {storyData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {storyData.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderImpactMetrics = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border text-black">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8" />
            <span className="text-black text-sm">Direct Impact</span>
          </div>
          <div className="text-3xl font-bold">{storyData.impactMetrics.direct}</div>
          <div className="text-black text-sm">People Directly Impacted</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border text-black">
          <div className="flex items-center justify-between mb-4">
            <Globe className="w-8 h-8" />
            <span className="text-black text-sm">Indirect Impact</span>
          </div>
          <div className="text-3xl font-bold">{storyData.impactMetrics.indirect}</div>
          <div className="text-black text-sm">People Indirectly Impacted</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border text-black">
          <div className="flex items-center justify-between mb-4">
            <MapPin className="w-8 h-8" />
            <span className="text-black text-sm">Geographic Reach</span>
          </div>
          <div className="text-3xl font-bold">{storyData.impactMetrics.communities}</div>
          <div className="text-black text-sm">Communities Served</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border text-black">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8" />
            <span className="text-black text-sm">Income Growth</span>
          </div>
          <div className="text-3xl font-bold">{storyData.impactMetrics.averageIncomeIncrease}%</div>
          <div className="text-black text-sm">Average Income Increase</div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-6">Detailed Impact Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Education Outcomes</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Literacy Rate Achieved</span>
                <span className="font-semibold">{storyData.impactMetrics.literacyRate}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Program Completion Rate</span>
                <span className="font-semibold">{storyData.impactMetrics.completionRate}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Employment Rate Post-Training</span>
                <span className="font-semibold">{storyData.impactMetrics.employmentRate}%</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Economic Impact</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Average Income Increase</span>
                <span className="font-semibold">{storyData.impactMetrics.averageIncomeIncrease}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Total Investment</span>
                <span className="font-semibold">₹{(storyData.totalFunding / 100000).toFixed(1)}L</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Cost per Beneficiary</span>
                <span className="font-semibold">₹{(storyData.totalFunding / storyData.impactNumber / 1000).toFixed(1)}K</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SDG Goals */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-6">UN Sustainable Development Goals</h3>
        <div className="flex flex-wrap gap-4">
          {storyData.sdgGoals.map((goal) => (
            <div key={goal} className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {goal}
              </div>
              <span className="text-sm font-medium text-blue-800">
                {goal === 4 && 'Quality Education'}
                {goal === 5 && 'Gender Equality'}
                {goal === 8 && 'Decent Work'}
                {goal === 10 && 'Reduced Inequalities'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTimeline = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Project Timeline</h3>
      <div className="relative">
        {/* Animated connecting line */}
        <motion.div 
          className="absolute left-4 top-0 w-0.5 bg-gray-200"
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        ></motion.div>
        
        {storyData.milestones.map((milestone, index) => (
          <motion.div 
            key={index} 
            className="relative flex items-start space-x-4 pb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.3,
              ease: "easeOut"
            }}
          >
            {/* Animated node */}
            <motion.div 
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                milestone.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
              }`}
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.3 + 0.1,
                type: "spring",
                stiffness: 300
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3 + 0.2 }}
              >
                {milestone.status === 'completed' ? (
                  <CheckCircle className="w-4 h-4 text-white" />
                ) : (
                  <Clock className="w-4 h-4 text-gray-600" />
                )}
              </motion.div>
            </motion.div>
            
            {/* Animated content */}
            <motion.div 
              className="flex-1 min-w-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.3 + 0.15,
                ease: "easeOut"
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                <span className="text-sm text-gray-500">{new Date(milestone.date).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-600 text-sm">{milestone.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderTeam = () => (
    <div className="space-y-8">
      {/* Champion */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-6">Project Champion</h3>
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r green-700 rounded-lg flex items-center justify-center text-white text-xl font-bold">
            {storyData.championName.charAt(0)}
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900">{storyData.championName}</h4>
            <p className="text-gray-600 mb-4">{storyData.championBio}</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* NGO */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-6">Partner NGO</h3>
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
            {storyData.ngoName.charAt(0)}
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900">{storyData.ngoName}</h4>
            <p className="text-gray-600 mb-4">{storyData.ngoDescription}</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-gray-900">15</div>
                <div className="text-sm text-gray-600">Active Projects</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-gray-900">2018</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                Visit Website
              </Button>
              <Button variant="ghost" size="sm" icon={<FileText className="w-4 h-4" />}>
                View All Projects
              </Button>
              <Button variant="outline" size="sm" icon={<Eye className="w-4 h-4" />}>
                View NGO Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Project Documents</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {storyData.documents.map((doc, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">{doc.type}</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">{doc.name}</h4>
            <p className="text-sm text-gray-600 mb-4">{doc.size}</p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" icon={<Eye className="w-4 h-4" />}>
                View
              </Button>
              <Button variant="ghost" size="sm" icon={<Download className="w-4 h-4" />}>
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 mt-[150px]">
      {/* Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button 
              variant="ghost" 
              icon={<ArrowLeft className="w-4 h-4" />}
              onClick={() => window.history.back()}
            >
              Back to Stories
            </Button>
            
            <div className="flex items-center space-x-4">
             
              
              <div className="flex items-center space-x-2">
                
                
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<BookOpen className={`w-4 h-4 ${isBookmarked ? 'text-blue-500 fill-current' : ''}`} />}
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  {isBookmarked ? 'Saved' : 'Save'}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  icon={<Share2 className="w-4 h-4" />}
                  onClick={() => setShowShareModal(true)}
                >
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header with basic info */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Badge className="w-5 h-5 text-black" />
                <span className="font-bold text-black">{storyData.ngoName}</span>
              </div>
              <div className="flex items-center space-x-2">
                {storyData.verified && (
                  <div className="flex items-center space-x-1 bg-blue-100 px-2 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-blue-700">Verified</span>
                  </div>
                )}
                <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                  <Building2 className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-medium text-green-700">Registered NGO</span>
                </div>
                <div className="flex items-center space-x-1 bg-amber-100 px-2 py-1 rounded-full">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-medium text-amber-700">Certified</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{storyData.location}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{new Date(storyData.endDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          
          {/* Status Banner */}
          {storyData.status === 'Completed' && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-medium text-blue-900">Project Successfully Completed</span>
                <span className="ml-2 text-sm text-blue-700">
                  All milestones achieved and impact verified
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-14">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'impact' && renderImpactMetrics()}
          {activeTab === 'timeline' && renderTimeline()}
          {activeTab === 'team' && renderTeam()}
          {activeTab === 'documents' && renderDocuments()}
        </motion.div>
      </div>

      {/* Share Modal */}
      {showShareModal && <ShareModal />}
    </div>
  );
};

export default ImpactStoriesDetails;
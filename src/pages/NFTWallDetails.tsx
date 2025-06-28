import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle, MapPin, Users, Calendar, Star, 
  Share2, Heart, Download, ExternalLink, Badge, TrendingUp, 
  Target, Award, Globe, Clock, Camera, FileText, MessageSquare,
  Twitter, Facebook, Link, Copy, Eye, ThumbsUp, BookOpen,
  Wallet, Shield, AlertCircle, Play, Pause, Volume2, VolumeX,
  Building2
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
    accent: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white focus:ring-purple-500',
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

const ImpactStoryDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Sample story data - in real app this would come from props/API
  const storyData = {
    id: '1',
    title: 'Empowering Rural Girls Through Education',
    description: 'Providing quality education and life skills training to underprivileged girls in remote villages of Rajasthan. This comprehensive program focuses on breaking the cycle of poverty through education, ensuring girls have access to modern learning tools, qualified teachers, and a safe learning environment.',
    ngoName: 'Saheli Foundation',
    ngoDescription: 'Founded in 2018, Saheli Foundation is dedicated to empowering women and girls through education and skill development programs across rural India.',
    championName: 'Priya Sharma',
    championBio: 'A passionate educator and social worker with 8 years of experience in rural development. Priya has been instrumental in establishing 15 learning centers across Rajasthan.',
    impactNumber: 150,
    impactUnit: 'Girls Educated',
    location: 'Rajasthan, India',
    coordinates: '26.9124, 75.7873',
    startDate: '2023-01-15',
    endDate: '2024-01-15',
    status: 'Completed',
    verified: true,
    nftTokenId: 'TGC001',
    blockchainNetwork: 'Polygon',
    contractAddress: '0x742d35Cc6634C0532925a3b8D1eC8d24eF8b6b12',
    totalFunding: 2500000,
    currentFunding: 2500000,
    backers: 45,
    likes: 234,
    views: 1847,
    shares: 67,
    images: [
      'https://images.pexels.com/photos/8923827/pexels-photo-8923827.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8923834/pexels-photo-8923834.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8923849/pexels-photo-8923849.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8923858/pexels-photo-8923858.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    videoUrl: 'https://example.com/impact-video.mp4',
    documents: [
      { name: 'Impact Report 2024', type: 'PDF', size: '2.4 MB', url: '#' },
      { name: 'Financial Breakdown', type: 'Excel', size: '1.2 MB', url: '#' },
      { name: 'Beneficiary List', type: 'PDF', size: '850 KB', url: '#' },
    ],
    milestones: [
      { date: '2023-01-15', title: 'Project Initiated', description: 'Initial assessment and planning completed', status: 'completed' },
      { date: '2023-03-01', title: 'Infrastructure Setup', description: 'Learning centers established in 5 villages', status: 'completed' },
      { date: '2023-06-15', title: 'First Batch Enrollment', description: '50 girls enrolled in the first batch', status: 'completed' },
      { date: '2023-09-30', title: 'Mid-term Assessment', description: 'Progress evaluation and curriculum adjustments', status: 'completed' },
      { date: '2024-01-15', title: 'Project Completion', description: 'All 150 girls successfully completed the program', status: 'completed' },
    ],
    impactMetrics: {
      direct: 150,
      indirect: 600,
      communities: 12,
      villages: 5,
      literacyRate: 95,
      completionRate: 98,
      employmentRate: 72,
      averageIncomeIncrease: 45,
    },
    tags: ['Education', 'Women Empowerment', 'Rural Development', 'Skill Training', 'Digital Literacy'],
    sdgGoals: [4, 5, 8, 10], // SDG numbers
    testimonials: [
      {
        name: 'Meera Kumari',
        role: 'Program Beneficiary',
        content: 'This program changed my life completely. I learned not just reading and writing, but also computer skills that helped me get a job in the city.',
        rating: 5,
        image: 'https://images.pexels.com/photos/8923827/pexels-photo-8923827.jpeg?auto=compress&cs=tinysrgb&w=100',
      },
      {
        name: 'Rajesh Sharma',
        role: 'Village Head',
        content: 'The transformation in our village is remarkable. Girls who were once confined to homes are now confident and skilled individuals.',
        rating: 5,
        image: 'https://images.pexels.com/photos/8923834/pexels-photo-8923834.jpeg?auto=compress&cs=tinysrgb&w=100',
      },
    ],
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Eye className="w-4 h-4" /> },
    { id: 'impact', label: 'Impact Metrics', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'timeline', label: 'Timeline', icon: <Calendar className="w-4 h-4" /> },
    { id: 'team', label: 'Team & NGO', icon: <Users className="w-4 h-4" /> },
    { id: 'documents', label: 'Documents', icon: <FileText className="w-4 h-4" /> },
    { id: 'blockchain', label: 'Blockchain', icon: <Shield className="w-4 h-4" /> },
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
                    selectedImageIndex === index ? 'border-purple-500' : 'border-transparent'
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
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{storyData.title}</h1>
              <p className="text-gray-600 leading-relaxed">{storyData.description}</p>
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
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
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

  const renderBlockchain = () => (
    <div className="space-y-8">
      {/* NFT Details */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-6">NFT & Blockchain Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Token ID</span>
              <span className="font-mono font-medium">{storyData.nftTokenId}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Network</span>
              <span className="font-medium">{storyData.blockchainNetwork}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Contract Address</span>
              <span className="font-mono text-sm">{storyData.contractAddress.slice(0, 10)}...</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Verification Status</span>
              <span className="flex items-center text-green-600">
                <CheckCircle className="w-4 h-4 mr-1" />
                Verified
              </span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold mb-3">Blockchain Verification</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                Impact data verified on-chain
              </div>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                Financial transparency confirmed
              </div>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                Milestone achievements recorded
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex space-x-4">
          <Button variant="outline" icon={<ExternalLink className="w-4 h-4" />}>
            View on Blockchain Explorer
          </Button>
          <Button variant="ghost" icon={<Wallet className="w-4 h-4" />}>
            View NFT on OpenSea
          </Button>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-6">Transaction History</h3>
        <div className="space-y-4">
          {[
            { date: '2024-01-15', type: 'Project Completion', hash: '0xabc123...', status: 'Confirmed' },
            { date: '2023-12-30', type: 'Milestone Update', hash: '0xdef456...', status: 'Confirmed' },
            { date: '2023-09-30', type: 'Mid-term Verification', hash: '0xghi789...', status: 'Confirmed' },
            { date: '2023-06-15', type: 'Fund Allocation', hash: '0xjkl012...', status: 'Confirmed' },
            { date: '2023-01-15', type: 'NFT Minted', hash: '0xmno345...', status: 'Confirmed' },
          ].map((tx, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <div className="font-medium text-gray-900">{tx.type}</div>
                  <div className="text-sm text-gray-600">{tx.date}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm text-gray-600">{tx.hash}</div>
                <div className="text-sm text-green-600">{tx.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Contract Details */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-6">Smart Contract Details</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Contract Type:</span>
              <span className="ml-2 font-medium">ERC-721 (NFT)</span>
            </div>
            <div>
              <span className="text-gray-600">Gas Used:</span>
              <span className="ml-2 font-medium">2,847,592</span>
            </div>
            <div>
              <span className="text-gray-600">Block Number:</span>
              <span className="ml-2 font-medium">52,847,293</span>
            </div>
            <div>
              <span className="text-gray-600">Confirmations:</span>
              <span className="ml-2 font-medium">1,247,592</span>
            </div>
          </div>
        </div>
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
                  All milestones achieved and impact verified on blockchain
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          {activeTab === 'blockchain' && renderBlockchain()}
        </motion.div>
      </div>

      {/* Share Modal */}
      {showShareModal && <ShareModal />}
    </div>
  );
};

export default ImpactStoryDetails;
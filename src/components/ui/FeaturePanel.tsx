// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// interface FeaturePanelProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const FeaturePanel: React.FC<FeaturePanelProps> = ({ isOpen, onClose }) => {
//   const [message, setMessage] = useState('');
  
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div 
//           className="fixed bottom-24 right-8 w-80 h-96 bg-white rounded-2xl shadow-2xl z-40 overflow-hidden flex flex-col"
//           initial={{ opacity: 0, scale: 0.8, y: 20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.8, y: 20 }}
//           transition={{ type: 'spring', damping: 25, stiffness: 300 }}
//         >
//           {/* Header */}
//           <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-pink-500 p-4 flex justify-between items-center">
//             <h3 className="text-white font-medium">The Giving Circle Assistant</h3>
//             <button 
//               onClick={onClose}
//               className="w-6 h-6 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="18" y1="6" x2="6" y2="18"></line>
//                 <line x1="6" y1="6" x2="18" y2="18"></line>
//               </svg>
//             </button>
//           </div>
          
//           {/* Chat area */}
//           <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
//             {/* Bot message */}
//             <div className="flex mb-4">
//               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold mr-2">
//                 TGC
//               </div>
//               <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
//                 <p className="text-sm text-gray-700">
//                   Hello! I'm your Giving Circle assistant. How can I help you today?
//                 </p>
//               </div>
//             </div>
            
//             {/* Bot message with options */}
//             <div className="flex mb-4">
//               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold mr-2">
//                 TGC
//               </div>
//               <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
//                 <p className="text-sm text-gray-700 mb-2">
//                   You can ask me about:
//                 </p>
//                 <div className="space-y-2">
//                   <button className="w-full text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded text-gray-700">
//                     How do I become a champion?
//                   </button>
//                   <button className="w-full text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded text-gray-700">
//                     Tell me about current causes
//                   </button>
//                   <button className="w-full text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded text-gray-700">
//                     How does donation work?
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Input area */}
//           <div className="p-3 border-t border-gray-200 bg-white">
//             <div className="flex items-center bg-gray-50 rounded-full px-3 py-2">
//               <input 
//                 type="text" 
//                 className="flex-grow bg-transparent outline-none text-sm"
//                 placeholder="Type your message..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//               <button className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-pink-500 text-white">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <line x1="22" y1="2" x2="11" y2="13"></line>
//                   <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default FeaturePanel; 
import React from 'react';
import LiveCausesPage from '../components/liveCauses/browseCauses';
import SEOHead from '../components/SEO/SEOHead';

export const Causes: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Browse Live Causes - Active Campaigns & Fundraising | Donate to Social Causes India"
        description="Browse live causes and active campaigns across India. Support urgent social causes including animal welfare, disaster relief, women empowerment, and education. Transparent fundraising for verified causes. Donate now to create real impact."
        keywords="live causes India, active campaigns, browse causes, urgent causes, donate to social causes, fundraising campaigns India, support verified causes, transparent charity India, donate now India, emergency causes, social impact campaigns"
        canonicalUrl="https://www.thegivingcircle.in/causes"
      />
      <LiveCausesPage />
    </div>
  );
};
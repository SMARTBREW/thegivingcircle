import React from 'react';
import LiveCausesPage from '../components/liveCauses/browseCauses';
import SEOHead from '../components/SEO/SEOHead';

export const Causes: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Browse Live Causes - Active Campaigns & Fundraising | Community Support Platform"
        description="Browse live causes and active campaigns through our giving platform and community support platform. Join our giving community to support social causes through social giving and community support. Find causes to support including animal welfare, disaster relief, women empowerment. Give and help create real impact through our circle of support."
        keywords="live causes India, active campaigns, browse causes, causes to support, support social causes, giving platform, community support platform, giving community, social giving, community support, give and help, circle of support, support circle, communities support, giving india, supporting india"
        canonicalUrl="https://www.thegivingcircle.in/causes"
      />
      <LiveCausesPage />
    </div>
  );
};
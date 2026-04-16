import React from 'react';
import LiveCausesPage from '../components/liveCauses/browseCauses';
import SEOHead from '../components/SEO/SEOHead';

export const Causes: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Browse Live Causes - Active Campaigns & Fundraising | Community Support Platform"
        description="Browse live causes and active campaigns through our giving platform and community support platform. Join our giving community to support social causes through social giving and community support. Find causes to support including animal welfare, disaster relief, women empowerment. Give and help create real impact through our circle of support."
        keywords="live causes, active campaigns, browse causes, causes to support, support social causes, giving platform, community support, giving community, social giving, give and help, act of kindness, helping the poor, fundraising meaning, donation 80g, donate to NGO"
        canonicalUrl="https://www.thegivingcircle.in/causes"
      />
      <LiveCausesPage />
    </div>
  );
};
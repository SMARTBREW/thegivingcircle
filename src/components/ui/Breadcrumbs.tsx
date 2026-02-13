import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  customCrumbs?: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, customCrumbs }) => {
  const location = useLocation();

  // Auto-generate breadcrumbs from URL if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customCrumbs) return customCrumbs;
    if (items) return items;

    const pathnames = location.pathname.split('/').filter(x => x);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];

    // Map common paths to readable names
    const pathMap: { [key: string]: string } = {
      'onboarding': 'Become a Champion',
      'impact-stories': 'Impact Stories',
      'impact-stories-details': 'Story Details',
      'ngo-partner': 'NGO Partnership',
      'ngo-list': 'Our NGO Partners',
      'ngo-detail': 'NGO Details',
      'khushi-ngo-detail': 'KHUSHII Details',
      'animalcare-ngo-detail': 'Animal Care Details',
      'causes': 'Browse Causes',
      'live-causes': 'Live Causes',
      'champion-story': 'Champion Story',
      'khushi-cause-details': 'Wings of Hope',
      'pawsitive-protectors-cause-details': 'Pawsitive Protectors',
      'bowls-of-hope-cause-details': 'Bowls of Hope',
      'flood-animal-rescue-cause-details': 'Flood Animal Rescue',
      'flood-relief-cause-details': 'Flood Relief Uttarakhand',
      'causes-details': 'Cause Details',
      'about-champion': 'About Champions',
      'the-giving-circle': 'About Us',
      'young-champions': 'Young Champions',
      'local-seo': 'NGO Directory',
      'ngos': 'NGO Directory',
    };

    pathnames.forEach((pathname, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      const label = pathMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, ' ');
      breadcrumbs.push({ label, path });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Add BreadcrumbList structured data
  useEffect(() => {
    let schemaScript = document.querySelector('script[data-schema="breadcrumb"]');

    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-schema', 'breadcrumb');
      document.head.appendChild(schemaScript);
    }

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.label,
        "item": `https://www.thegivingcircle.in${crumb.path}`
      }))
    };

    schemaScript.textContent = JSON.stringify(breadcrumbSchema);

    return () => {
      const script = document.querySelector('script[data-schema="breadcrumb"]');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [breadcrumbs]);

  // Don't show breadcrumbs visually, but keep the schema
  return null;
};

export default Breadcrumbs;


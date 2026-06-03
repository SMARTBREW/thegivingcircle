import React from 'react';
import { useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';

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
      'wings-of-hope': 'Wings of Hope',
      'impact-stories-details': 'Story Details',
      'ngo-partner': 'NGO Partnership',
      'ngo-list': 'Our NGO Partners',
      'ngo-detail': 'NGO Details',
      'animalcare-ngo-detail': 'Animal Care Details',
      'causes': 'Browse Causes',
      'live-causes': 'Live Causes',
      'champion-story': 'Champion Story',
      'jwp-cause-details': 'Wings of Hope',
      'pehli-class-cause-details': '#PehliClass',
      'bricks-by-bricks-cause-details': 'Brick by Brick · Gurgaon',
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

  // Only emit BreadcrumbList structured data when there is a real trail
  // (more than just "Home"); a single-item breadcrumb adds no value.
  if (breadcrumbs.length < 2) {
    return null;
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `https://www.thegivingcircle.in${crumb.path}`,
    })),
  };

  // Rendered into the static <head> at build time (no visual breadcrumb UI).
  return (
    <Head>
      <script type="application/ld+json" data-schema="breadcrumb">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Head>
  );
};

export default Breadcrumbs;


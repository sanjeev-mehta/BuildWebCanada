import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import restaurantImage from '../Assets/restaurant-template-home.jpg';
import cleaningImage from '../Assets/cleaning-template-home.png';
import italianImage from '../Assets/italian-banner.webp';
import constructionImage from '../Assets/construction-hero-original.png';
import renovationImage from '../Assets/renovation-hero-original.png';
import tattooImage from '../Assets/tattoo-hero-original.png';
import salonImage from '../Assets/salon-hero-original.png';
import liquorImage from '../Assets/liquor-store-hero-original.png';
import photographyImage from '../Assets/photography-hero-original.png';

const siteUrl = 'https://buildwebcanada.ca';
const defaultImage = `${siteUrl}/open-graph.png`;

const pages = {
  '/': { title: 'Web Design, Development & Mobile Apps in Canada | BuildWebCanada', description: 'BuildWebCanada designs and develops high-performing websites, mobile apps, and digital products for ambitious businesses across Canada.', image: defaultImage },
  '/projects': { title: 'Digital Product & Website Projects | BuildWebCanada', description: 'Explore selected websites, mobile apps, digital products, and growth-focused work created by BuildWebCanada.', image: defaultImage },
  '/web-templates': { title: 'Website Design Templates for Canadian Businesses | BuildWebCanada', description: 'Explore original website template directions for restaurants, home services, construction, salons, photographers, retail, and more.', image: defaultImage },
  '/web-templates/restaurant': { title: 'Restaurant Website Template Demo | BuildWebCanada', description: 'Explore a polished restaurant website template with menu, reservation, and hospitality-focused content.', image: restaurantImage },
  '/web-templates/italian-restaurant': { title: 'Italian Restaurant Website Template Demo | BuildWebCanada', description: 'Explore an elegant Italian restaurant website template made for seasonal menus and memorable dining experiences.', image: italianImage },
  '/web-templates/cleaning': { title: 'Cleaning Service Website Template Demo | BuildWebCanada', description: 'Explore a conversion-focused cleaning service website template built for estimates, services, and local trust.', image: cleaningImage },
  '/web-templates/construction': { title: 'Construction Company Website Template Demo | BuildWebCanada', description: 'Explore a modern construction website template for showcasing projects and generating estimate requests.', image: constructionImage },
  '/web-templates/renovation': { title: 'Renovation Company Website Template Demo | BuildWebCanada', description: 'Explore a refined renovation website template for residential transformations and design-led builders.', image: renovationImage },
  '/web-templates/tattoo-artist': { title: 'Tattoo Artist Website Template Demo | BuildWebCanada', description: 'Explore an expressive tattoo artist website template for portfolios, available sessions, and booking inquiries.', image: tattooImage },
  '/web-templates/salon': { title: 'Salon Website Template Demo | BuildWebCanada', description: 'Explore a premium salon website template for services, client experience, and appointment discovery.', image: salonImage },
  '/web-templates/liquor-store': { title: 'Liquor Store Website Template Demo | BuildWebCanada', description: 'Explore a premium liquor store website template for curated collections, local pickup, and product discovery.', image: liquorImage },
  '/web-templates/photography': { title: 'Wedding Photography Website Template Demo | BuildWebCanada', description: 'Explore a cinematic wedding photography website template with portfolio storytelling and elegant inquiry design.', image: photographyImage },
};

function setMeta(attribute, key, value) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.appendChild(element); }
  element.setAttribute('content', value);
}

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pages[pathname] || pages['/'];
    const canonical = `${siteUrl}${pathname === '/' ? '/' : pathname}`;
    const image = page.image.startsWith('http') ? page.image : `${siteUrl}${page.image}`;
    document.title = page.title;
    setMeta('name', 'description', page.description);
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:alt', page.title);
    setMeta('name', 'twitter:title', page.title);
    setMeta('name', 'twitter:description', page.description);
    setMeta('name', 'twitter:image', image);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.setAttribute('rel', 'canonical'); document.head.appendChild(link); }
    link.setAttribute('href', canonical);
    let structuredData = document.head.querySelector('#buildwebcanada-organization-schema');
    if (pathname === '/') {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#organization`,
        name: 'BuildWebCanada',
        url: siteUrl,
        logo: `${siteUrl}/buildwebcanada-icon-512.png`,
        image: defaultImage,
        description: 'BuildWebCanada designs and develops high-performing websites, mobile apps, and digital products for ambitious businesses across Canada.',
        email: 'buildwebcanada@gmail.com',
        telephone: ['+1-778-996-9060', '+1-778-930-3838'],
        address: {
          '@type': 'PostalAddress',
          streetAddress: '3800 Fonda Way',
          addressLocality: 'Calgary',
          addressRegion: 'AB',
          postalCode: 'T2A 6G8',
          addressCountry: 'CA',
        },
        areaServed: [{ '@type': 'Country', name: 'Canada' }, { '@type': 'City', name: 'Vancouver' }, { '@type': 'City', name: 'Calgary' }],
        sameAs: ['https://www.instagram.com/buildwebcanada/'],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'buildwebcanada@gmail.com',
          telephone: '+1-778-996-9060',
          availableLanguage: ['English'],
        },
        makesOffer: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design and Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX and Product Design' } },
        ],
      };
      if (!structuredData) { structuredData = document.createElement('script'); structuredData.id = 'buildwebcanada-organization-schema'; structuredData.type = 'application/ld+json'; document.head.appendChild(structuredData); }
      structuredData.textContent = JSON.stringify(schema);
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What does a website project with BuildWebCanada include?', acceptedAnswer: { '@type': 'Answer', text: 'Each project is scoped around your business goals. Typical work can include strategy, UX/UI design, responsive development, content structure, search-ready foundations, and launch support.' } },
          { '@type': 'Question', name: 'How long does it take to build a website?', acceptedAnswer: { '@type': 'Answer', text: 'The timeline depends on the project scope, content readiness, and feedback cycle. A focused marketing website can move quickly, while larger sites and custom features need more planning and production time.' } },
          { '@type': 'Question', name: 'Do you build mobile apps as well as websites?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BuildWebCanada works on websites, digital products, and mobile app experiences for iOS and Android.' } },
          { '@type': 'Question', name: 'Can you redesign an existing website?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We can review your current site, identify what is holding it back, and redesign the experience around clearer positioning, stronger performance, and better conversion paths.' } },
          { '@type': 'Question', name: 'Do you work with businesses outside Vancouver and Calgary?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work remotely with businesses across Canada and beyond, with a process designed to keep communication and approvals straightforward.' } },
          { '@type': 'Question', name: 'Will you support the website after launch?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Ongoing support can be planned around updates, optimisation, new features, and future growth after the initial launch.' } },
        ],
      };
      let faqStructuredData = document.head.querySelector('#buildwebcanada-faq-schema');
      if (!faqStructuredData) { faqStructuredData = document.createElement('script'); faqStructuredData.id = 'buildwebcanada-faq-schema'; faqStructuredData.type = 'application/ld+json'; document.head.appendChild(faqStructuredData); }
      faqStructuredData.textContent = JSON.stringify(faqSchema);
    } else if (structuredData) {
      structuredData.remove();
      document.head.querySelector('#buildwebcanada-faq-schema')?.remove();
    }
  }, [pathname]);
  return null;
}

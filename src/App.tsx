// App.tsx
import './App.css';
// Header - Footer
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages for the route
import BuilderPage from './builder-page';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import About from './components/About us/About';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact us/contact';
import { Services } from './components/ Services/ Services';


// Not Found Pages
import NotFound from './components/404/NotFound';

// Props and Types
import { FooterProps, HeaderProps } from './lib/types/type';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  const logo = {
    src: "/logo/mantra-logo.svg",
    alt: 'Mantra Logo',
    width: 50,
    height: 50,
    logoText: 'Mantra',
    showLogoText: true,
  };

  const NavLinks: HeaderProps['links'] = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about' },
    {
      label: 'Services',
      subLinks: [
        { label: 'Web Development', url: '/services/web-development' },
        { label: 'Mobile Development', url: '/services/mobile-development' },
        { label: 'SEO Optimization', url: '/services/seo' },
      ],
    },
    { label: 'Plans', url: '/plans' },
    {
      label: 'Courses',
      subLinks: [
        { label: 'React Course', url: '/courses/react' },
        { label: 'Node.js Course', url: '/courses/nodejs' },
        { label: 'Python Course', url: '/courses/python' },
      ],
    },
    { label: 'Team', url: '/team' },
    { label: 'Contact Us', url: '/contact' },
  ];

  const buttons: HeaderProps['buttons'] = [
    { url: "/join", label: "Join Now" },
    { url: "/pay", label: "Pay" },
  ];
  const footerlogo = {
    src: "/logo/mantra-logo.svg",
    alt: 'Mantra Logo',
    width: 50,
    height: 50,
    logoText: 'Mantra',
    showLogoText: true,
  };

  const contactInfo = {
    address: '42 F, Manisha UK Street',
    phone1: '008 4587 9875',
    phone2: '008 5874 6985',
    email: 'info@examples.com'
  };

  const FooterSections: FooterProps['sections'] = [
    {
      title: 'Resources',
      links: [
        { label: 'Home', url: '#' },
        { label: 'About Us', url: '#' },
        { label: 'Blog news', url: '#' },
        { label: 'Gallery', url: '#' }
      ],
    },
    {
      title: 'Follow Us',
      links: [
        { label: 'GitHub', url: 'https://github.com', external: true },
        { label: 'Discord', url: 'https://discord.com', external: true },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', url: '/privacy' },
        { label: 'Terms & Conditions', url: '/terms' },
      ],
    },
  ];

  const socialLinks = [
    { platform: 'Facebook', url: 'https://facebook.com', icon: <FaFacebook /> },
    { platform: 'Instagram', url: 'https://instagram.com', icon: <FaInstagram /> },
    { platform: 'Twitter', url: 'https://twitter.com', icon: <FaTwitter /> }
  ];

  const legalLinks = [
    { label: 'Terms And Condition', url: '#', external: true },
    { label: 'Privacy Policy', url: '#', external: true }
  ];

  return (
    <>
      <Router>
        {/* Uncomment to test Header and Footer */}
        <Header links={NavLinks} logo={logo} buttons={buttons} />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
          <Route path="/builder-page" element={<BuilderPage />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>
      </Router>

      {/* Uncomment to test Header and Footer */}
        <Footer
          newsletterPlaceholder="email here"
          logo={footerlogo}
          contactInfo={contactInfo}
          sections={FooterSections}
          socialLinks={socialLinks}
          
          copyrightText="© 2024 Design by DesignThemes."
          legalLinks={legalLinks}
          backgroundColor="#D2C0A8"
          textColor="#6B5B45"
          accentColor="#8C7A63" 
        />
    </>
  );
}

export default App;

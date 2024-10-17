// App.tsx
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { FAQ } from './Pages/FAQ/FAQ';
import Home from './Pages/Home/Home';
import Team from './Pages/Team/Team';
import BuilderPage from './builder-page';
import About from './Pages/About us/About';
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/Contact us/contact';
import { Services } from './Pages/ Services/ Services';
import NotFound from './components/404/NotFound';

import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import { HeaderProps, FooterProps } from './lib/types/type';

// Header and Footer data props
const logo: HeaderProps['logo'] = {
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
    ] 
  },
  { label: 'Pricing', url: '/pricing' },
  { 
    label: 'Courses', 
    subLinks: [
      { label: 'React Course', url: '/courses/react' },
      { label: 'Node.js Course', url: '/courses/nodejs' },
      { label: 'Python Course', url: '/courses/python' },
    ]
  },
  { label: 'Team', url: '/team' },
  { label: 'Contact Us', url: '/contact' },
];

const buttons: HeaderProps['buttons'] = [
  { url: "/join", label: "Join Now" },
  { url: "/pay", label: "Pay" },
];

const footerProps: FooterProps = {
  logo: {
    src: "/logo/mantra-logo.svg",
    alt: 'Mantra Logo',
    width: 50,
    height: 50,
    logoText: 'Mantra',
    showLogoText: true,
  },
  contactInfo: {
    address: '42 F, Manisha UK Street',
    phone1: '008 4587 9875',
    phone2: '008 5874 6985',
    email: 'info@examples.com',
  },
  sections: [
    { title: 'Resources', links: [{ label: 'Home', url: '#' }, { label: 'About Us', url: '#' }, { label: 'Blog news', url: '#' }, { label: 'Gallery', url: '#' }] },
    { title: 'Follow Us', links: [{ label: 'GitHub', url: 'https://github.com', external: true }, { label: 'Discord', url: 'https://discord.com', external: true }] },
    { title: 'Legal', links: [{ label: 'Privacy Policy', url: '/privacy' }, { label: 'Terms & Conditions', url: '/terms' }] },
  ],
  socialLinks: [
    { platform: 'Facebook', url: 'https://facebook.com', icon: '' },
    { platform: 'Instagram', url: 'https://instagram.com', icon: '' },
    { platform: 'Twitter', url: 'https://twitter.com', icon: '' },
  ],
  legalLinks: [{ label: 'Terms And Condition', url: '#', external: true }, { label: 'Privacy Policy', url: '#', external: true }],
  newsletterPlaceholder: "email here",
  copyrightText: "© 2024 Design by DesignThemes.",
  backgroundColor: "#D2C0A8",
  textColor: "#6B5B45",
  accentColor: "#8C7A63",
};

// Layout component
const Layout = () => (
  <>
    <Header links={NavLinks} logo={logo} buttons={buttons} />
    <Outlet /> {/* Renders the matched child route */}
    <Footer {...footerProps} />
  </>
);

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'team', element: <Team /> },
      { path: 'about', element: <About /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'contact', element: <Contact /> },
      { path: 'services', element: <Services /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'builder-page', element: <BuilderPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

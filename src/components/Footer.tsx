
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const helpLinks = [
    { name: 'Search', path: '/search' },
    { name: 'Help', path: '/help' },
    { name: 'Information', path: '/information' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Shipping Details', path: '/shipping-details' },
  ];
  
  const supportLinks = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Refund & Return', path: '/refund' },
    { name: 'Deliveries', path: '/deliveries' },
  ];
  
  const infoLinks = [
    { name: 'Search Terms', path: '/search-terms' },
    { name: 'Advanced Search', path: '/advanced-search' },
    { name: 'Help & FAQ\'s', path: '/help-faqs' },
    { name: 'Store Location', path: '/store-location' },
    { name: 'Order & Return', path: '/order-return' },
  ];
  
  const paymentMethods = [
    { name: 'Visa', image: 'https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png' },
    { name: 'Mastercard', image: 'https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png' },
    { name: 'American Express', image: 'https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png' },
    { name: 'PayPal', image: 'https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png' },
    { name: 'Diners Club', image: 'https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png' },
    { name: 'Discover', image: 'https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png' },
  ];

  return (
    <footer className="bg-black text-white pt-10">
      <div className="torn-edge-bottom"></div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-yummi-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-yummi-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-yummi-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>0000 - 123456789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>mail@example.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>9.30AM - 7.30PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Connect with us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yummi-gold transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-yummi-gold transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-yummi-gold transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Download our app</h3>
              <div className="flex flex-wrap gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play Store" className="h-10" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-10" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/2560px-Get_it_from_Microsoft_Badge.svg.png" alt="Microsoft Store" className="h-10" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>All Right Reserved © {currentYear},</p>
          </div>
          
          <div className="flex space-x-2">
            {paymentMethods.map((method) => (
              <img 
                key={method.name} 
                src={method.image} 
                alt={method.name} 
                className="h-8 w-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

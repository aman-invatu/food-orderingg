
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { User, ShoppingBag, Heart, Search, Menu, X, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from './ui/button';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, totalItems, subtotal, removeFromCart, updateQuantity } = useCart();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Indian', 
      path: '/category/indian',
      subCategories: [
        { name: 'North Indian', path: '/category/north-indian', items: ['Chicken Popcorn', 'Cobb Salad', 'English Breakfast', 'Galouti Kebab', 'Garlic Prime Rib', 'Beef Steaks'] },
        { name: 'South Indian', path: '/category/south-indian', items: ['Tom Soup', 'Beef Steaks', 'Buldak', 'Creamed Beef', 'Vegetable Salad', 'Buldak'] },
        { name: 'Eastern Indian', path: '/category/eastern-indian', items: ['Chicken Wings', 'Fried Egg', 'Grilled Fish', 'Bean salad', 'Risotto', 'Cobb Salad'] },
        { name: 'Western Indian', path: '/category/western-indian', items: ['Salisbury Steak', 'Scrambled Eggs', 'Spaghetti Aglio', 'Grilled Fish & Chips', 'Galouti Kebab', 'English Breakfast'] }
      ]
    },
    { 
      name: 'Italian', 
      path: '/category/italian',
      subCategories: [
        { name: 'Pasta', path: '/category/pasta', items: ['Spaghetti', 'Penne', 'Fettuccine', 'Lasagna'] },
        { name: 'Pizza', path: '/category/pizza', items: ['Margherita', 'Pepperoni', 'Hawaiian', 'Vegetarian'] }
      ]
    },
    { 
      name: 'Thai', 
      path: '/category/thai',
      subCategories: [
        { name: 'Starters', path: '/category/thai-starters', items: ['Spring Rolls', 'Tom Yum Soup', 'Satay Skewers'] },
        { name: 'Main Course', path: '/category/thai-mains', items: ['Pad Thai', 'Green Curry', 'Basil Fried Rice'] }
      ]
    },
    { 
      name: 'Chinese', 
      path: '/category/chinese',
      subCategories: [
        { name: 'Appetizers', path: '/category/chinese-appetizers', items: ['Dumplings', 'Spring Rolls', 'Wonton Soup'] },
        { name: 'Main Course', path: '/category/chinese-mains', items: ['Kung Pao Chicken', 'Sweet and Sour Pork', 'Fried Rice'] }
      ]
    },
    { name: 'Shop', path: '/shop' },
    { 
      name: 'Pages', 
      path: '/pages',
      subCategories: [
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'FAQ', path: '/faq' }
      ]
    },
  ];

  return (
    <>
      <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="group relative">
                <Link 
                  to={link.path} 
                  className={`text-gray-800 hover:text-yummi-red transition-colors duration-300 ${link.name === 'Home' ? 'text-yummi-red' : ''}`}
                >
                  {link.name} {link.subCategories && <span>▼</span>}
                </Link>
                
                {link.subCategories && (
                  <div className="dropdown-menu absolute left-0 mt-2 w-64 bg-white shadow-lg z-10 hidden group-hover:block">
                    <div className="p-4 grid grid-cols-1">
                      {link.subCategories.map((category) => (
                        <div key={category.name} className="mb-4">
                          <Link 
                            to={category.path}
                            className="font-semibold text-gray-800 hover:text-yummi-red"
                          >
                            {category.name}
                          </Link>
                          <ul className="mt-2 space-y-1">
                            {category.items?.map((item) => (
                              <li key={item}>
                                <Link 
                                  to={`${category.path}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="text-sm text-gray-600 hover:text-yummi-red"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="text-gray-800 hover:text-yummi-red transition-colors duration-300">
              <User className="h-6 w-6" />
            </Link>
            <div className="relative">
              <button 
                aria-label="Shopping Bag" 
                className="text-gray-800 hover:text-yummi-red transition-colors duration-300 relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingBag className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yummi-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              
              {/* Cart Dropdown */}
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg z-50 rounded-lg py-4 animate-fade-in">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-medium">Shopping Cart ({totalItems} items)</h3>
                  </div>
                  
                  {cartItems.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">
                      Your cart is empty
                    </div>
                  ) : (
                    <>
                      <div className="max-h-80 overflow-y-auto">
                        {cartItems.map(item => (
                          <div key={item.id} className="px-4 py-2 flex items-center border-b border-gray-100">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-16 h-16 object-cover rounded mr-4"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium">{item.name}</h4>
                              <div className="flex items-center justify-between mt-1">
                                <div className="flex items-center">
                                  <button 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="bg-gray-100 px-2 rounded"
                                  >
                                    -
                                  </button>
                                  <span className="mx-2">{item.quantity}</span>
                                  <button 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="bg-gray-100 px-2 rounded"
                                  >
                                    +
                                  </button>
                                </div>
                                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            </div>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-yummi-red ml-2"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="px-4 py-3 border-t border-gray-100">
                        <div className="flex justify-between font-medium">
                          <span>Subtotal:</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="mt-3 space-y-2">
                          <Link to="/cart">
                            <Button className="w-full bg-gray-800 hover:bg-gray-700">View Cart</Button>
                          </Link>
                          <Link to="/checkout">
                            <Button className="w-full bg-yummi-red hover:bg-red-700">Checkout</Button>
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
            <button aria-label="Wishlist" className="text-gray-800 hover:text-yummi-red transition-colors duration-300">
              <Heart className="h-6 w-6" />
            </button>
            <button aria-label="Search" className="text-gray-800 hover:text-yummi-red transition-colors duration-300">
              <Search className="h-6 w-6" />
            </button>
            <button 
              className="lg:hidden text-gray-800 hover:text-yummi-red transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md py-4 px-4 absolute top-[88px] left-0 w-full z-40 animate-fade-in">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="py-2">
                <Link 
                  to={link.path} 
                  className={`text-gray-800 font-medium hover:text-yummi-red transition-colors duration-300 block ${link.name === 'Home' ? 'text-yummi-red' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
                
                {link.subCategories && (
                  <div className="mt-2 pl-4 space-y-2">
                    {link.subCategories.map((category) => (
                      <div key={category.name} className="py-1">
                        <Link 
                          to={category.path}
                          className="text-sm font-medium text-gray-700 hover:text-yummi-red block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

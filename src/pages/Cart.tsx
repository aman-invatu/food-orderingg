
import { TopBar } from "@/components/TopBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useCart } from "@/contexts/CartContext";
import { Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, subtotal } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <NavBar />
        <div className="flex-grow flex flex-col items-center justify-center py-20 bg-gray-50">
          <div className="text-center">
            <div className="text-7xl mb-4">🛒</div>
            <h1 className="text-3xl font-bold mb-2">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link to="/">
              <Button className="bg-yummi-red hover:bg-red-700">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <NavBar />
      <div className="py-12 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left py-4 px-6">Product</th>
                      <th className="py-4 px-6">Price</th>
                      <th className="py-4 px-6">Quantity</th>
                      <th className="py-4 px-6">Total</th>
                      <th className="py-4 px-6"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id} className="border-b border-gray-200">
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-20 h-20 object-cover rounded mr-4"
                            />
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </td>
                        <td className="text-center py-4 px-6">${item.price.toFixed(2)}</td>
                        <td className="text-center py-4 px-6">
                          <div className="flex items-center justify-center">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-gray-100 px-3 py-1 rounded-l border border-gray-300"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                              className="w-12 text-center border-y border-gray-300"
                            />
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-gray-100 px-3 py-1 rounded-r border border-gray-300"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="text-center py-4 px-6 font-medium">${(item.price * item.quantity).toFixed(2)}</td>
                        <td className="text-center py-4 px-6">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-yummi-red"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">$5.00</span>
                  </div>
                </div>
                
                <div className="flex justify-between mb-6">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold">${(subtotal + 5).toFixed(2)}</span>
                </div>
                
                <Link to="/checkout">
                  <Button className="w-full bg-yummi-red hover:bg-red-700 flex items-center justify-center">
                    Proceed to Checkout 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 mt-6">
                <h2 className="text-lg font-bold mb-4">Discount Code</h2>
                <div className="flex">
                  <Input placeholder="Enter code" className="mr-2" />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Cart;

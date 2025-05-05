
import { TopBar } from "@/components/TopBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    paymentMethod: "credit-card",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the payment
    toast.success("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <NavBar />
        <div className="flex-grow flex flex-col items-center justify-center py-20 bg-gray-50">
          <div className="text-center">
            <div className="text-7xl mb-4">🛒</div>
            <h1 className="text-3xl font-bold mb-2">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">You need to add items to your cart before checkout.</p>
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
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4">Billing Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium">First Name</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">Last Name</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm font-medium">Email Address</label>
                      <Input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm font-medium">Address</label>
                      <Input 
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">City</label>
                      <Input 
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">State/Province</label>
                      <Input 
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">ZIP/Postal Code</label>
                      <Input 
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">Country</label>
                      <Input 
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center mb-4">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="credit-card" 
                          checked={formData.paymentMethod === "credit-card"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span>Credit Card</span>
                      </label>
                      
                      {formData.paymentMethod === "credit-card" && (
                        <div className="space-y-4 pl-6">
                          <div>
                            <label className="block mb-2 text-sm font-medium">Card Number</label>
                            <Input 
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleChange}
                              placeholder="1234 5678 9012 3456"
                              required
                            />
                          </div>
                          <div>
                            <label className="block mb-2 text-sm font-medium">Name on Card</label>
                            <Input 
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block mb-2 text-sm font-medium">Expiration Date</label>
                              <Input 
                                name="cardExpiry"
                                value={formData.cardExpiry}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                required
                              />
                            </div>
                            <div>
                              <label className="block mb-2 text-sm font-medium">Security Code</label>
                              <Input 
                                name="cardCvv"
                                value={formData.cardCvv}
                                onChange={handleChange}
                                placeholder="CVV"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="paypal" 
                          checked={formData.paymentMethod === "paypal"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span>PayPal</span>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="border-b border-gray-200 pb-4 mb-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between mb-2">
                      <span className="text-gray-600">{item.name} x {item.quantity}</span>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
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
                
                <Button 
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-yummi-red hover:bg-red-700"
                >
                  Place Order
                </Button>
                
                <p className="text-sm text-gray-500 mt-4">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
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

export default Checkout;

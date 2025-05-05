
import { TopBar } from "@/components/TopBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { User, ShoppingBag, Heart, LogOut } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileForm, setProfileForm] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "user@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001"
  });
  
  // Sample order history data
  const orders = [
    {
      id: "ORD-1001",
      date: "2025-05-01",
      status: "Delivered",
      total: 45.98,
      items: [
        { name: "Salisbury Steak", quantity: 2, price: 12.99 },
        { name: "Mexican Bean Salad", quantity: 2, price: 9.70 }
      ]
    },
    {
      id: "ORD-1002",
      date: "2025-04-25",
      status: "Processing",
      total: 31.49,
      items: [
        { name: "English Breakfast", quantity: 1, price: 10.99 },
        { name: "Buldak", quantity: 1, price: 14.99 },
        { name: "Scrambled Eggs", quantity: 1, price: 8.99 }
      ]
    }
  ];
  
  // Sample wishlist items
  const wishlistItems = [
    {
      id: "1",
      name: "Salisbury Steak",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070",
      price: 12.99
    },
    {
      id: "5",
      name: "Mexican Bean Salad",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2068",
      price: 9.70
    }
  ];
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Password changed successfully!");
    
    // Reset form fields
    const form = e.target as HTMLFormElement;
    form.reset();
  };
  
  const handleLogout = () => {
    toast.info("Logged out successfully");
    // In a real app, this would clear authentication state
    window.location.href = "/";
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <NavBar />
      
      <div className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6 bg-yummi-red text-white text-center">
                  <div className="inline-flex items-center justify-center bg-white text-yummi-red rounded-full h-16 w-16 mb-4">
                    <User className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl font-bold">John Doe</h2>
                  <p className="text-sm opacity-80">user@example.com</p>
                </div>
                
                <nav className="p-4">
                  <ul className="space-y-1">
                    <li>
                      <button
                        onClick={() => setActiveTab("profile")}
                        className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                          activeTab === "profile" ? "bg-red-50 text-yummi-red" : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <User className="h-5 w-5 mr-2" />
                        Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab("orders")}
                        className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                          activeTab === "orders" ? "bg-red-50 text-yummi-red" : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <ShoppingBag className="h-5 w-5 mr-2" />
                        Order History
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab("wishlist")}
                        className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                          activeTab === "wishlist" ? "bg-red-50 text-yummi-red" : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Heart className="h-5 w-5 mr-2" />
                        Wishlist
                      </button>
                    </li>
                    <li className="pt-2 border-t border-gray-200 mt-2">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 rounded-md flex items-center text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="h-5 w-5 mr-2" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-3">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-bold mb-6">Personal Information</h2>
                  
                  <form onSubmit={handleProfileSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={profileForm.firstName}
                          onChange={handleProfileChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={profileForm.lastName}
                          onChange={handleProfileChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={profileForm.email}
                          onChange={handleProfileChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={profileForm.phone}
                          onChange={handleProfileChange}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium mb-2">
                          Address
                        </label>
                        <Input
                          id="address"
                          name="address"
                          value={profileForm.address}
                          onChange={handleProfileChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium mb-2">
                          City
                        </label>
                        <Input
                          id="city"
                          name="city"
                          value={profileForm.city}
                          onChange={handleProfileChange}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium mb-2">
                            State/Province
                          </label>
                          <Input
                            id="state"
                            name="state"
                            value={profileForm.state}
                            onChange={handleProfileChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
                            ZIP Code
                          </label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={profileForm.zipCode}
                            onChange={handleProfileChange}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button type="submit" className="bg-yummi-red hover:bg-red-700">
                        Save Changes
                      </Button>
                    </div>
                  </form>
                  
                  <hr className="my-8" />
                  
                  <h2 className="text-xl font-bold mb-6">Change Password</h2>
                  
                  <form onSubmit={handlePasswordSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium mb-2">
                          Current Password
                        </label>
                        <Input
                          id="currentPassword"
                          name="currentPassword"
                          type="password"
                          required
                          placeholder="••••••••"
                        />
                      </div>
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium mb-2">
                          New Password
                        </label>
                        <Input
                          id="newPassword"
                          name="newPassword"
                          type="password"
                          required
                          placeholder="••••••••"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmNewPassword" className="block text-sm font-medium mb-2">
                          Confirm New Password
                        </label>
                        <Input
                          id="confirmNewPassword"
                          name="confirmNewPassword"
                          type="password"
                          required
                          placeholder="••••••••"
                        />
                      </div>
                      
                      <div>
                        <Button type="submit" className="bg-yummi-red hover:bg-red-700">
                          Change Password
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Orders Tab */}
              {activeTab === "orders" && (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <h2 className="text-xl font-bold p-6 border-b">Order History</h2>
                  
                  {orders.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">
                      You haven't placed any orders yet.
                    </div>
                  ) : (
                    <div className="divide-y">
                      {orders.map(order => (
                        <div key={order.id} className="p-6">
                          <div className="flex flex-wrap justify-between items-start mb-4">
                            <div>
                              <h3 className="font-bold">{order.id}</h3>
                              <p className="text-sm text-gray-500">Placed on {order.date}</p>
                            </div>
                            <div className="mt-2 sm:mt-0">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                order.status === "Delivered" 
                                  ? "bg-green-100 text-green-800" 
                                  : "bg-blue-100 text-blue-800"
                              }`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <h4 className="text-sm font-medium mb-2">Items:</h4>
                            <ul className="space-y-2">
                              {order.items.map((item, index) => (
                                <li key={index} className="flex justify-between text-sm">
                                  <span>
                                    {item.quantity}x {item.name}
                                  </span>
                                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                            <span className="font-medium">Total:</span>
                            <span className="font-bold">${order.total.toFixed(2)}</span>
                          </div>
                          
                          <div className="mt-4">
                            <Button variant="outline" size="sm">
                              View Order Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {/* Wishlist Tab */}
              {activeTab === "wishlist" && (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <h2 className="text-xl font-bold p-6 border-b">Wishlist</h2>
                  
                  {wishlistItems.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">
                      Your wishlist is empty.
                    </div>
                  ) : (
                    <div className="divide-y">
                      {wishlistItems.map(item => (
                        <div key={item.id} className="p-6 flex items-center">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-24 h-24 object-cover rounded-md mr-6"
                          />
                          <div className="flex-grow">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-lg font-bold text-yummi-red mt-1">${item.price.toFixed(2)}</p>
                          </div>
                          <div className="space-y-2">
                            <Button className="w-full bg-yummi-red hover:bg-red-700">
                              Add to Cart
                            </Button>
                            <Button variant="outline" className="w-full">
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Profile;

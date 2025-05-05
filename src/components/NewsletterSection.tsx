
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the data to your backend
    toast({
      title: "Success!",
      description: "Thanks for subscribing to our newsletter",
    });
    
    setEmail('');
  };
  
  return (
    <div className="relative bg-cover bg-center py-16" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=2070')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Newsletter</h2>
          <p className="mb-6">Will be used in accordance with our Privacy policy</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow py-3 px-4 text-gray-800 rounded-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yummi-red hover:bg-red-700 text-white py-3 px-6 rounded-sm transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

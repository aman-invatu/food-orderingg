
import { Phone, Mail } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-yummi-gold py-2 px-4 text-black">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone className="h-4 w-4" />
            <span className="text-sm">0000 - 123456789</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="h-4 w-4" />
            <span className="text-sm">sample@example.com</span>
          </div>
        </div>
        
        <div className="flex items-center">
          <select
            className="bg-black text-white px-3 py-1 rounded text-sm focus:outline-none"
            defaultValue="IN"
          >
            <option value="IN">IN</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
          </select>
        </div>
      </div>
    </div>
  );
};

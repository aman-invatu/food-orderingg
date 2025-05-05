
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TopBar } from "@/components/TopBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div>
      <TopBar />
      <NavBar />
      
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-6xl font-bold text-yummi-red mb-6">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-yummi-red hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Homepage
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;

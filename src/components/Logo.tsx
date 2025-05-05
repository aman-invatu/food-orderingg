
import { Link } from 'react-router-dom';

export const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  return (
    <Link to="/" className="flex items-center justify-center">
      <div className={`rounded-full bg-yummi-gold border-4 border-yummi-red ${sizeClasses[size]} flex items-center justify-center overflow-hidden`}>
        <div className="font-bold text-yummi-red flex flex-col items-center justify-center leading-tight">
          <span className={`${size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"}`}>Yummi</span>
          <span className={`${size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"}`}>Tummy</span>
        </div>
      </div>
    </Link>
  );
};

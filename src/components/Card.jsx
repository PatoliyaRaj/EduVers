
// Simple and Clean Card Components with Variants

export function Card({ children, className = "", variant = "default" }) {
  const variants = {
    default: "bg-white border-gray-200",
    light: "bg-gray-50 border-gray-100", 
    primary: "bg-blue-50 border-blue-200",
    secondary: "bg-purple-50 border-purple-200",
    success: "bg-green-50 border-green-200",
    warning: "bg-yellow-50 border-yellow-200",
    danger: "bg-red-50 border-red-200",
    dark: "bg-gray-800 border-gray-700 text-white"
  };

  return (
    <div className={`
      ${className}
      rounded-xl  border shadow-sm
      transition-all duration-200 ease-in-out
      hover:shadow-md hover:scale-[1.02]
      w-full max-w-sm
      ${variants[variant]}
      
    `}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={` ${className} p-4 border-b border-gray-100`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`${className} text-lg font-semibold text-gray-900 mb-1 `}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = "" }) {
  return (
    <p className={`${className} text-sm text-gray-600 `}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={`p-4 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
}


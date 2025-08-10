const badgeVariants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    ghost: "hover:bg-gray-100 text-gray-600",
    link: "underline text-blue-600 hover:text-blue-800",
  };
  
  export function Badge({ variant = "default", children ,className = ""}) {
    return (
      <>
      <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full transition duration-300 ${badgeVariants[variant]} ${className}`}>
        {children}
      </span>
      </>
    );
  }
  
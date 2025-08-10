const gradientMapping = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
  pink: "linear-gradient(hsl(333, 90%, 50%), hsl(318, 90%, 50%))",
  teal: "linear-gradient(hsl(183, 90%, 40%), hsl(168, 90%, 40%))",
  yellow: "linear-gradient(hsl(53, 90%, 50%), hsl(38, 90%, 50%))",
  gray: "linear-gradient(hsl(220, 10%, 50%), hsl(220, 10%, 40%))",
};

const GlassIcons = ({ 
  icon,           // Single icon component
  label,          // Single label
  color = "blue", // Single color
  className = "", 
  customClass = "",
  width = "4.5em",
  height = "4.5em", 
  borderRadius = "1.25em",
  perspective = "24em",
  hoverEffect = true,
  showLabel = true,
  labelPosition = "bottom", // "bottom", "top", "right", "left"
  size = "md" // "xs", "sm", "md", "lg", "xl"
}) => {
  
  // Size presets
  const sizePresets = {
    xs: { width: "2.5em", height: "2.5em", iconSize: "1em" },
    sm: { width: "3.5em", height: "3.5em", iconSize: "1.2em" },
    md: { width: "4.5em", height: "4.5em", iconSize: "1.5em" },
    lg: { width: "5.5em", height: "5.5em", iconSize: "1.8em" },
    xl: { width: "6.5em", height: "6.5em", iconSize: "2em" }
  };

  // Use size preset or custom dimensions
  const dimensions = sizePresets[size] || { 
    width, 
    height, 
    iconSize: "1.5em" 
  };

  const getBackgroundStyle = (color) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  // Label positioning styles
  const getLabelClasses = () => {
    const baseClasses = "absolute text-center whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)]";
    
    switch (labelPosition) {
      case "top":
        return `${baseClasses} bottom-full left-0 right-0 -translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(-20%)]`;
      case "right":
        return `${baseClasses} top-0 left-full bottom-0 ml-4 flex items-center translate-x-0 group-hover:opacity-100 group-hover:[transform:translateX(20%)]`;
      case "left":
        return `${baseClasses} top-0 right-full bottom-0 mr-4 flex items-center -translate-x-0 group-hover:opacity-100 group-hover:[transform:translateX(-20%)]`;
      default: // bottom
        return `${baseClasses} top-full left-0 right-0 translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)]`;
    }
  };

  return (
    <div className={`inline-flex justify-center items-center ${className}`}>
      <button
        type="button"
        aria-label={label}
        className={`relative bg-transparent outline-none [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-3xl ${
          hoverEffect ? 'hover:scale-105' : ''
        } ${customClass}`}
        style={{ 
          width: dimensions.width, 
          height: dimensions.height,
          perspective: perspective
        }}
      >
        {/* Shadow/Background Layer */}
        <span
          className={`absolute top-0 left-0 w-full h-full block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] ${
            hoverEffect 
              ? 'rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]'
              : 'rotate-[15deg]'
          }`}
          style={{
            ...getBackgroundStyle(color),
            borderRadius: borderRadius,
            boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
          }}
        ></span>

        {/* Glass Layer */}
        <span
          className={`absolute top-0 left-0 w-full h-full bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] ${
            hoverEffect ? 'group-hover:[transform:translateZ(2em)]' : ''
          }`}
          style={{
            borderRadius: borderRadius,
            boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
          }}
        >
          <span
            className="m-auto flex items-center justify-center"
            style={{ 
              width: dimensions.iconSize, 
              height: dimensions.iconSize 
            }}
            aria-hidden="true"
          >
            {icon}
          </span>
        </span>

        {/* Label */}
        {showLabel && label && (
          <span className={getLabelClasses()}>
            {label}
          </span>
        )}
      </button>
    </div>
  );
};

export default GlassIcons;

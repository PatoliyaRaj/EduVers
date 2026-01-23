import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

// Utility function to merge class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Main Breadcrumb wrapper
export function Breadcrumb({ className, ...props }) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn("flex", className)}
      {...props}
    />
  );
}

// Breadcrumb list container
export function BreadcrumbList({ className, ...props }) {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm text-gray-500 sm:gap-2",
        className
      )}
      {...props}
    />
  );
}

// Individual breadcrumb item
export function BreadcrumbItem({ className, ...props }) {
  return (
    <li
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

// Breadcrumb link (clickable items)
export function BreadcrumbLink({ className, href, to, children, ...props }) {
  const Component = to ? Link : "a";
  const linkProps = to ? { to } : { href };

  return (
    <Component
      className={cn(
        "transition-colors hover:text-[#D8A25E] dark:text-[#b48c4c] dark:hover:text-white font-medium",
        className
      )}
      {...linkProps}
      {...props}
    >
      {children}
    </Component>
  );
}

// Current page (non-clickable)
export function BreadcrumbPage({ className, ...props }) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-[#343131] font-semibold transition-colors hover:text-[#D8A25E] dark:text-[#b48c4c] dark:hover:text-white ", className)}
      {...props}
    />
  );
}

// Separator between items
export function BreadcrumbSeparator({ children, className, ...props }) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn("text-gray-400", className)}
      {...props}
    >
      {children ?? <ChevronRight className="h-4 w-4" />}
    </li>
  );
}

// Smart breadcrumb component that takes items array
export function SmartBreadcrumb({ items, className, showHome = true }) {
  if (!items || items.length === 0) return null;

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {showHome && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink to="/">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink to={item.href || item.to}>
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default SmartBreadcrumb;

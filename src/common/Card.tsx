import React from "react";
import { cn } from "./cn";

export interface CardProps {
  title?: string;
  children?: React.ReactNode;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  shadow?: boolean;
  rounded?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void; // Add onClick prop
  hoverable?: boolean; // Add hoverable prop
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  headerContent,
  footerContent,
  className,
  headerClassName,
  bodyClassName,
  footerClassName,
  shadow = true,
  rounded = true,
  style,
  onClick,
  hoverable = true, // Set default value for hoverable
}) => {
  return (
    <div
      className={cn(
        // Basic styles
        "bg-white p-4",
        shadow ? "shadow-md" : "",
        rounded ? "rounded-lg" : "",
        hoverable && shadow && "hover:shadow-lg", // Apply hover shadow if hoverable
        className
      )}
      style={style}
      onClick={onClick} // Add onClick handler
      aria-labelledby={title ? `card-title-${title}` : undefined} // Add aria-labelledby
    >
      {/* Header Section */}
      {(headerContent || title) && (
        <div className={cn("mb-2", headerClassName)}>
          {headerContent || (
            <h2 id={`card-title-${title}`} className="font-semibold text-xl">
              {title}
            </h2>
          )}
        </div>
      )}

      {/* Body Section */}
      <div className={cn("mb-4", bodyClassName)}>{children}</div>

      {/* Footer Section */}
      {footerContent && (
        <div className={cn("mt-2", footerClassName)}>{footerContent}</div>
      )}
    </div>
  );
};

export default Card;

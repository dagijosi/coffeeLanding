import React from "react";
import { cn } from "./cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
  LoadingIcon?: React.ReactNode;
  prefixIcon?: React.ReactElement;
  suffixIcon?: React.ReactElement;
  prefixClassName?: string;
  suffixClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  isLoading = false,
  isDisabled = false,
  children,
  LoadingIcon,
  prefixIcon,
  suffixIcon,
  prefixClassName = "",
  suffixClassName = "",
  ...props
}) => {
  const loadingStyles = "opacity-0";

  return (
    <button
      className={cn(
        `bg-[#3498db] p-3 rounded-md relative inline-flex items-center justify-center transition-all`,
        className,
        isDisabled && "opacity-50 cursor-not-allowed",
        isLoading && "cursor-wait"
      )}
      disabled={isDisabled || isLoading}
      aria-busy={isLoading}
      aria-disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {LoadingIcon || (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          )}
        </div>
      )}
      <span className={cn(isLoading && loadingStyles, "flex items-center")}>
        {prefixIcon && (
          <span className={cn("absolute left-2", prefixClassName)}>{prefixIcon}</span>
        )}
        {children}
        {suffixIcon && (
          <span className={cn("absolute right-2", suffixClassName)}>{suffixIcon}</span>
        )}
      </span>
    </button>
  );
};

export default Button;

import React from 'react';
import { cn } from './cn';

interface FooterProps {
  links?: { label: string; href: string }[];
  leftContent?: React.ReactNode;
  middleContent?: React.ReactNode; // New middle content prop
  rightContent?: React.ReactNode;
  bottomContent?: React.ReactNode; // Optional bottom content
  text?: string;
  className?: string;
  background?: string;
  textColor?: string;
  leftClassName?: string;
  middleClassName?: string; // Custom class for middle section
  linksClassName?: string;
  rightClassName?: string;
  bottomClassName?: string; // Custom class for bottom section
  bottomTextClassName?: string;
  copyrightYear?: number; // Add copyrightYear prop
}

const Footer: React.FC<FooterProps> = ({
  links = [],
  leftContent,
  middleContent,
  rightContent,
  bottomContent,
  text = '© Your Company. All rights reserved.', // Remove default year
  className,
  background = 'bg-gray-900',
  textColor = 'text-gray-200',
  leftClassName,
  middleClassName,
  linksClassName,
  rightClassName,
  bottomClassName,
  bottomTextClassName,
  copyrightYear = new Date().getFullYear(), // Set default copyright year
}) => {
  return (
    <footer className={cn('p-6 md:p-8', background, textColor, className)}>
      <div className="max-w-7xl mx-auto flex flex-col space-y-4 md:space-y-0">
        
        {/* Top Section: Left, Middle, and Right Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Left Content */}
          {leftContent && (
            <div className={cn('flex items-center', leftClassName)}>
              {leftContent}
            </div>
          )}
          
          {/* Middle Content */}
          {middleContent && (
            <div className={cn('flex items-center justify-center', middleClassName)}>
              {middleContent}
            </div>
          )}

          {/* Links Section */}
          <nav className={cn('space-x-6 text-sm', linksClassName)} aria-label="Footer navigation">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Content */}
          {rightContent && (
            <div className={cn('flex items-center', rightClassName)}>
              {rightContent}
            </div>
          )}
        </div>
        
        {/* Bottom Section */}
        <div className={cn('mt-4 text-center', bottomClassName)}>
          {bottomContent ? (
            bottomContent
          ) : (
            <p className={cn('text-xs text-gray-500', bottomTextClassName)}>
              {text} {copyrightYear}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

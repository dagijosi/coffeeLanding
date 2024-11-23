// components/Drawer.tsx
import React, { ReactNode, useEffect, useRef } from "react";
import { cn } from "./cn";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right" | "top" | "bottom"; // Specify the side
  children: ReactNode;
  width?: string; // e.g., "w-64" for left/right drawers
  height?: string; // e.g., "h-64" for top/bottom drawers
  className?: string; // Additional Tailwind classes
  closeIcon?: React.ReactElement;
  onOpen?: () => void; // Add onOpen prop
  closeOnEsc?: boolean; // Add closeOnEsc prop
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  position = "left",
  children,
  width = "w-64",
  height = "h-64",
  className = "",
  closeIcon = "✕",
  onOpen,
  closeOnEsc = true, // Set default value for closeOnEsc
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Determine dimensions based on position
  const isHorizontal = position === "left" || position === "right";
  const sizeClass = isHorizontal ? width : height;

  // Determine position and transform class based on the drawer's position
  const positionClasses = cn(
    "fixed bg-white shadow-lg transition-transform",
    className,
    {
      // For left and right positions
      "top-0 bottom-0": isHorizontal,
      "left-0": position === "left",
      "right-0": position === "right",
      "transform -translate-x-full": position === "left" && !isOpen,
      "transform translate-x-full": position === "right" && !isOpen,
      "transform translate-x-0": isHorizontal && isOpen,

      // For top and bottom positions
      "left-0 right-0": !isHorizontal,
      "top-0": position === "top",
      "bottom-0": position === "bottom",
      "transform -translate-y-full": position === "top" && !isOpen,
      "transform translate-y-full": position === "bottom" && !isOpen,
      "transform translate-y-0": !isHorizontal && isOpen,
    },
    sizeClass // Apply width or height based on the position
  );

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && closeOnEsc) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeOnEsc, onClose]);

  // Focus trap
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [isOpen]);

  // Trigger onOpen callback
  useEffect(() => {
    if (isOpen) {
      onOpen && onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity bg-gray-900 bg-opacity-50",
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      )}
      onClick={onClose}
    >
      <div
        ref={drawerRef} // Add ref to drawer element
        className={positionClasses}
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click
        aria-hidden={!isOpen} // Add aria-hidden
        aria-modal={isOpen ? "true" : undefined} // Add aria-modal
        role="dialog" // Add role="dialog"
        tabIndex={-1} // Add tabIndex for focus trap
      >
        <button
          className="absolute top-4 right-3 text-gray-600 hover:text-gray-800"
          onClick={onClose}
          aria-label="Close drawer" // Add aria-label
        >
          {closeIcon}
        </button>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;

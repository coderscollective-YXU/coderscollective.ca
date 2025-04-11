"use client";

import { useState, useRef, useEffect } from "react";

const ViewMoreCard = ({ children, initialHeight = 200 }: {
  children: React.ReactNode;
  initialHeight?: number; // Optional initial height, defaults to 200
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set the initial height
    if (contentRef.current && !isOpen) {
      contentRef.current.style.height = `${initialHeight}px`;
    } else if (contentRef.current && isOpen && contentHeight !== null) {
      contentRef.current.style.height = `${contentHeight}px`;
    }
  }, [isOpen, initialHeight, contentHeight]);

  const toggle = () => {
    if (!isOpen && contentRef.current) {
      // Measure the full height when opening
      setContentHeight(contentRef.current.scrollHeight);
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-200 ease-in-out relative z-10`}
        style={{
          height: isOpen && contentHeight !== null ? `${contentHeight}px` : `${initialHeight}px`,
        }}
      >
        {children}
      </div>
      <button onClick={toggle} className='mx-auto'>
        {isOpen ? "view less" : "view more"}
      </button>
    </>
  );
};

export default ViewMoreCard;
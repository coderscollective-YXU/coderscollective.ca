'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import MagicIcon from '../signup/magic-icon';
import { Download } from 'lucide-react';

export default function LogoDownloader() {
  const logoVariants = [
    { name: 'Light', variant: 'light', bgColor: 'bg-white' },
    { name: 'Dark', variant: 'dark', bgColor: 'bg-gray-800' },
    { name: 'Gradient', variant: 'gradient', bgColor: 'bg-gray-900' }
  ];

  // Function to create SVG string for the specified variant (icon only)
  const createSvgString = (variant: "dark" | "light" | "gradient") => {
    const strokeColor = variant === "dark" ? "white" : "#1f2937";
    
    // Base SVG with only icon
    let svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">`;
    
    // Add the magic icon path based on variant
    if (variant === "gradient") {
      svgString += `
        <path stroke="url(#gradient)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z"/>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3B82F6" />
            <stop offset="50%" stop-color="#818CF8" />
            <stop offset="100%" stop-color="#8B5CF6" />
          </linearGradient>
        </defs>`;
    } else {
      svgString += `
        <path stroke="${strokeColor}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z"/>`;
    }
    
    svgString += `</svg>`;
    
    return svgString;
  };

  // Function to download SVG icon
  const downloadLogo = (variant: "dark" | "light" | "gradient") => {
    const svgString = createSvgString(variant);
    
    // SVG download functionality
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `coders-collective-icon-${variant}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {logoVariants.map((logo) => (
          <div key={logo.variant} className={`rounded-lg p-8 ${logo.bgColor} flex flex-col items-center justify-between min-h-[240px]`}>
            <div className="flex items-center justify-center mb-6">
              <MagicIcon variant={logo.variant as "dark" | "light" | "gradient"} />
            </div>
            <div className="text-center">
              <h3 className={`text-xl font-semibold mb-4 ${logo.variant === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                {logo.name} Version
              </h3>
              <Button 
                onClick={() => downloadLogo(logo.variant as "dark" | "light" | "gradient")}
                className="flex items-center gap-2"
              >
                <Download size={16} />
                Download SVG Icon
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
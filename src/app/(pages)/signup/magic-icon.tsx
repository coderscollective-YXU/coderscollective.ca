interface MagicIconProps {
  variant?: "dark" | "light" | "gradient";
}

const MagicIcon = ({ variant }: MagicIconProps) => {
  const className = variant === "dark" ? "text-white" : "text-gray-800";
  
  if (variant === "gradient") {
    return (
      <svg
        className="w-12 h-12"
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        width='48'
        height='48'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          className="from-blue-500 via-indigo-400 to-violet-500 stroke-[url(#gradient)] animate-gradient-flow"
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z'
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" /> {/* blue-500 */}
            <stop offset="50%" stopColor="#818CF8" /> {/* indigo-400 */}
            <stop offset="100%" stopColor="#8B5CF6" /> {/* violet-500 */}
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      className={`w-12 h-12 ${className}`}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z'
      />
    </svg>
  );
};

export default MagicIcon;

'use client';
import React, { useEffect, useState } from "react";

const VerticalLines = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onAnimationEnd(); // notify parent to begin card animation
    }, 3000); // wait 3s, same as animation duration

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  if (!visible) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[20, 40, 60, 80].map((left, idx) => (
        <div
          key={idx}
          className="absolute top-0 h-full w-px bg-white bg-opacity-20 origin-top"
          style={{
            left: `${left}%`,
            transform: 'scaleY(0)',
            animation: `lineGrow 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards ${idx * 0.5}s`
          }}
        />
      ))}

      <style jsx global>{`
        @keyframes lineGrow {
          0% {
            transform: scaleY(0);
          }
          50% {
            transform: scaleY(1);
          }
          100% {
            transform: scaleY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default VerticalLines;

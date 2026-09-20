import React from 'react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenEmergency?: () => void;
  onOpenConcierge?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenEmergency,
  onOpenConcierge
}) => {
  return (
    <footer className="w-full bg-white border-t border-[#e2e8f0] py-8 mt-16 text-xs text-[#64748b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap text-center md:text-left justify-center">
          <span>© 2025 Sunshine Pocket Therapy™ System. All rights reserved.</span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#cbd5e1]"></span>
          <span>Clinical & Family Sanctuary</span>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={onOpenEmergency}
            className="hover:text-[#191c1d] transition-colors focus:outline-none"
          >
            Emergency Protocols
          </button>
          <button 
            onClick={onOpenPrivacy}
            className="hover:text-[#191c1d] transition-colors focus:outline-none"
          >
            Privacy & HIPAA Compliance
          </button>
          <button 
            onClick={onOpenConcierge}
            className="hover:text-[#191c1d] transition-colors focus:outline-none"
          >
            Support Concierge
          </button>
        </div>
      </div>
    </footer>
  );
};

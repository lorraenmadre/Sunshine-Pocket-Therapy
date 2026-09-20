import React from 'react';
import { NavTab } from '../types';
import { USER_PROFILE } from '../data/portalData';
import { Bell, AlertTriangle, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenSos: () => void;
  onOpenNotifications: () => void;
  notificationCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenSos,
  onOpenNotifications,
  notificationCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'member-directory', label: 'Member Directory' },
    { id: 'care-and-services', label: 'Care & Services' },
    { id: 'travel-and-retreats', label: 'Travel & Retreats' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'community-circle', label: 'Community Circle' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-[#e5e7eb] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          
          {/* Logo & Portal Badge */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <button
              onClick={() => onSelectTab('dashboard')}
              className="flex items-center gap-2 text-left focus:outline-none group"
            >
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#191c1d] group-hover:text-black transition-colors">
                Sunshine Pocket Therapy
                <span className="text-xs font-normal align-super text-[#64748b] ml-0.5">™</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#f1f3f5] text-[#475569] text-[10px] font-bold tracking-wider uppercase border border-[#e2e8f0]">
                PORTAL
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6 h-16">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectTab(item.id)}
                    className={`h-full flex items-center px-1 text-sm font-medium transition-colors relative ${
                      isActive
                        ? 'text-[#191c1d] font-semibold border-b-2 border-black'
                        : 'text-[#64748b] hover:text-[#191c1d]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            {/* SOS Care Emergency Button */}
            <button
              onClick={onOpenSos}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fee2e2] text-[#b91c1c] hover:bg-[#fecaca] text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-95"
              title="Urgent 24/7 Clinical Care Dispatch"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-[#b91c1c] animate-pulse" />
              <span>SOS Care</span>
            </button>

            {/* Notifications Button */}
            <button
              onClick={onOpenNotifications}
              className="relative p-2 rounded-lg text-[#64748b] hover:bg-[#f1f3f5] hover:text-[#191c1d] transition-colors focus:outline-none"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              {notificationCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ef4444] ring-2 ring-white"></span>
              )}
            </button>

            <div className="h-5 w-px bg-[#e2e8f0]"></div>

            {/* User Profile Quick Access */}
            <button
              onClick={() => onSelectTab('member-directory')}
              className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-[#f8f9fa] transition-colors text-left focus:outline-none group"
              title="View Lorraen Madre Profile"
            >
              <div className="relative">
                <img
                  src={USER_PROFILE.avatar}
                  alt={USER_PROFILE.name}
                  className="w-8 h-8 rounded-full object-cover ring-1 ring-[#cbd5e1] group-hover:ring-black transition-all"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xs font-semibold text-[#191c1d] leading-tight group-hover:text-black">
                  {USER_PROFILE.name}
                </span>
                <span className="text-[10px] text-[#64748b] leading-tight">
                  {USER_PROFILE.role}
                </span>
              </div>
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#64748b] hover:bg-[#f1f3f5] focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-[#e2e8f0] py-2 bg-white flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentTab === item.id
                    ? 'bg-[#f1f3f5] text-black font-semibold'
                    : 'text-[#64748b] hover:bg-[#f8f9fa] hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

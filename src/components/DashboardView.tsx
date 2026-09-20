import React, { useState } from 'react';
import { 
  USER_PROFILE, 
  SPECIAL_OFFERS, 
  SIX_LINES_OF_CARE, 
  DEPENDENTS_DASHBOARD 
} from '../data/portalData';
import { DependentMilestone, LineOfCareItem, PrivilegeOffer } from '../types';
import { 
  BadgeCheck, 
  Plus, 
  Phone, 
  Video, 
  ArrowRight, 
  FolderOpen, 
  Briefcase, 
  Zap, 
  TrendingUp, 
  Calendar as CalendarIcon, 
  CheckCircle, 
  Bell, 
  UserPlus, 
  ShieldCheck, 
  Lock, 
  AlertCircle, 
  Headphones, 
  Stethoscope, 
  Receipt, 
  Gavel, 
  Plane, 
  Sparkles, 
  Building
} from 'lucide-react';

interface DashboardViewProps {
  onNavigateToProfile: () => void;
  onOpenCareSprint: () => void;
  onOpenTelemedicine: () => void;
  onOpenClaims: () => void;
  onOpenLegalVault: () => void;
  onOpenItinerary: () => void;
  onOpenSensoryCopilot: () => void;
  onOpenWealthPlan: () => void;
  onOpenSos: () => void;
  onOpenCareJournal: (dependent: DependentMilestone) => void;
  onClaimOffer: (offer: PrivilegeOffer) => void;
  onAddMember: () => void;
  onOpenBookings: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onNavigateToProfile,
  onOpenCareSprint,
  onOpenTelemedicine,
  onOpenClaims,
  onOpenLegalVault,
  onOpenItinerary,
  onOpenSensoryCopilot,
  onOpenWealthPlan,
  onOpenSos,
  onOpenCareJournal,
  onClaimOffer,
  onAddMember,
  onOpenBookings,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'documents' | 'bookings' | 'sprints' | 'roster'>('all');

  // Helper for icon rendering in the 6 lines of care
  const renderLineIcon = (iconName: string) => {
    switch (iconName) {
      case 'stethoscope': return <Stethoscope className="w-5 h-5" />;
      case 'receipt': return <Receipt className="w-5 h-5" />;
      case 'gavel': return <Gavel className="w-5 h-5" />;
      case 'plane': return <Plane className="w-5 h-5" />;
      case 'bot': return <Sparkles className="w-5 h-5" />;
      case 'landmark': return <Building className="w-5 h-5" />;
      default: return <Stethoscope className="w-5 h-5" />;
    }
  };

  const handleLineAction = (lineId: string) => {
    switch (lineId) {
      case 'line-01': onOpenTelemedicine(); break;
      case 'line-02': onOpenClaims(); break;
      case 'line-03': onOpenLegalVault(); break;
      case 'line-04': onOpenItinerary(); break;
      case 'line-05': onOpenSensoryCopilot(); break;
      case 'line-06': onOpenWealthPlan(); break;
      default: break;
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 pb-12">
      {/* 1. Top Welcome & Member Snapshot Banner */}
      <section className="bg-white rounded-2xl border border-[#e2e8f0] shadow-xs p-6 md:p-8 relative overflow-hidden">
        {/* Subtle background ambiance gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#f1f5f9]/70 via-transparent to-transparent rounded-full -mr-20 -mt-20 pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5 sm:gap-6">
            {/* User Profile Avatar with Online Ring */}
            <div className="relative flex-shrink-0">
              <img
                src={USER_PROFILE.avatar}
                alt={USER_PROFILE.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-sm ring-4 ring-[#f1f3f5]"
              />
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-black ring-2 ring-white"></span>
            </div>

            {/* Profile Titles & Insurance Pill */}
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#191c1d]">
                  Good morning, {USER_PROFILE.name.split(' ')[0]}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-[#f1f3f5] text-[#475569] text-xs font-medium border border-[#e2e8f0]">
                  {USER_PROFILE.tier}
                </span>
              </div>
              <p className="text-sm text-[#64748b] flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
                <span>Cigna Copay $0 In-Network</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#cbd5e1]"></span>
                <span>Active 2025 Coverage</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#cbd5e1]"></span>
                <span className="text-[#191c1d] font-medium">8 of 8 Group Therapy Sessions Completed</span>
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 w-full sm:w-auto self-stretch lg:self-center justify-end">
            <button
              onClick={onNavigateToProfile}
              type="button"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#f8f9fa] hover:bg-[#edf0f2] text-[#191c1d] text-sm font-medium border border-[#e2e8f0] transition-colors shadow-xs"
            >
              <BadgeCheck className="w-4 h-4 text-[#64748b]" />
              <span>View Full Profile</span>
            </button>
            <button
              onClick={onOpenCareSprint}
              type="button"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-black hover:bg-[#262626] text-white text-sm font-medium transition-all shadow-xs active:scale-98"
            >
              <Plus className="w-4 h-4" />
              <span>Initiate Care Sprint</span>
            </button>
          </div>
        </div>

        {/* Quick Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-[#f1f3f5] bg-[#fafafa]/90 rounded-xl p-4">
          <div className="flex flex-col">
            <span className="text-[11px] text-[#64748b] uppercase tracking-wider font-medium">Family Lead</span>
            <span className="font-display text-lg font-semibold text-[#191c1d] mt-0.5">{USER_PROFILE.metrics.householdName}</span>
            <span className="text-xs text-[#64748b] mt-0.5">{USER_PROFILE.metrics.enrolledDependentsCount} Enrolled Dependents</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-[#64748b] uppercase tracking-wider font-medium">HSA Fund Balance</span>
            <span className="font-display text-lg font-semibold text-[#191c1d] mt-0.5">{USER_PROFILE.metrics.hsaBalance}</span>
            <span className="text-xs text-[#64748b] mt-0.5">{USER_PROFILE.metrics.hsaNote}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-[#64748b] uppercase tracking-wider font-medium">Upcoming Session</span>
            <span className="font-display text-lg font-semibold text-[#191c1d] mt-0.5">{USER_PROFILE.metrics.upcomingSession}</span>
            <span className="text-xs text-[#64748b] mt-0.5">{USER_PROFILE.metrics.upcomingSessionDetail}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-[#64748b] uppercase tracking-wider font-medium">Concierge Protocol</span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
              <span className="text-sm font-semibold text-[#191c1d]">{USER_PROFILE.metrics.conciergeProtocol}</span>
            </div>
            <span className="text-xs text-[#64748b] mt-0.5">Dedicated Clinical Lead</span>
          </div>
        </div>
      </section>

      {/* 2. Quick Navigation & Segmented Filters */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="inline-flex p-1 bg-[#edeef0] rounded-xl gap-1 overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveFilter('all')}
            type="button"
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === 'all'
                ? 'bg-white text-[#191c1d] shadow-xs'
                : 'text-[#64748b] hover:text-[#191c1d]'
            }`}
          >
            All Lines of Care
          </button>
          <button
            onClick={() => {
              setActiveFilter('documents');
              onOpenLegalVault();
            }}
            type="button"
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === 'documents'
                ? 'bg-white text-[#191c1d] shadow-xs'
                : 'text-[#64748b] hover:text-[#191c1d]'
            }`}
          >
            Documents & Vault
          </button>
          <button
            onClick={() => {
              setActiveFilter('bookings');
              onOpenBookings();
            }}
            type="button"
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === 'bookings'
                ? 'bg-white text-[#191c1d] shadow-xs'
                : 'text-[#64748b] hover:text-[#191c1d]'
            }`}
          >
            Bookings
          </button>
          <button
            onClick={() => {
              setActiveFilter('sprints');
              onOpenCareSprint();
            }}
            type="button"
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === 'sprints'
                ? 'bg-white text-[#191c1d] shadow-xs'
                : 'text-[#64748b] hover:text-[#191c1d]'
            }`}
          >
            Care Sprints
          </button>
          <button
            onClick={() => {
              setActiveFilter('roster');
              onNavigateToProfile();
            }}
            type="button"
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === 'roster'
                ? 'bg-white text-[#191c1d] shadow-xs'
                : 'text-[#64748b] hover:text-[#191c1d]'
            }`}
          >
            Family Roster
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-[#64748b]">System Status:</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f1f3f5] text-[#334155] text-xs font-medium border border-[#e2e8f0]">
            <Lock className="w-3 h-3 text-[#64748b]" />
            HIPAA Vault Encrypted
          </span>
        </div>
      </div>

      {/* 3. Special Offers & Member Privileges Grid */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <h2 className="font-display text-xl font-semibold text-[#191c1d]">
              Special Offers & Member Privileges
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-[#f1f3f5] text-[#475569] text-xs font-medium border border-[#e2e8f0]">
              2025 Exclusive
            </span>
          </div>
          <button
            onClick={onOpenCareSprint}
            className="text-xs font-semibold text-[#191c1d] hover:underline flex items-center gap-1 group"
          >
            <span>View all tier benefits</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-xl p-6 border border-[#e2e8f0] shadow-xs flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              {/* Top Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-300"></div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <span className="px-2 py-0.5 rounded bg-[#f1f3f5] text-[#475569] text-[11px] font-semibold tracking-wider uppercase">
                    {offer.badge}
                  </span>
                  {offer.badgeAccent && (
                    <span className="text-xs font-semibold text-black">
                      {offer.badgeAccent}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg font-semibold text-[#191c1d] leading-snug">
                  {offer.title}
                </h3>

                <p className="text-xs text-[#64748b] leading-relaxed">
                  {offer.description}
                </p>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-[#191c1d]">
                    {offer.priceMain}
                  </span>
                  <span className="text-xs text-[#94a3b8] line-through">
                    {offer.priceSub}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f1f3f5] flex items-center justify-between">
                <span className="text-xs text-[#64748b]">{offer.meta}</span>
                <button
                  onClick={() => onClaimOffer(offer)}
                  type="button"
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-xs ${
                    offer.buttonPrimary
                      ? 'bg-black text-white hover:bg-neutral-800'
                      : 'bg-[#f1f3f5] text-[#191c1d] hover:bg-[#e2e8f0] border border-[#e2e8f0]'
                  }`}
                >
                  {offer.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Six Dedicated Lines of Care Grid */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <h2 className="font-display text-xl font-semibold text-[#191c1d]">
            The Six Dedicated Lines of Care
          </h2>
          <span className="text-xs text-[#64748b]">
            Integrated multidisciplinary support across your clinical ecosystem
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SIX_LINES_OF_CARE.map((line) => (
            <div
              key={line.id}
              className="bg-white rounded-xl p-6 border border-[#e2e8f0] shadow-xs relative flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              {/* Colored top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl ${line.badgeColor.bar}`}></div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${line.badgeColor.bg} ${line.badgeColor.text}`}>
                    {line.number}
                  </span>
                  {line.id === 'line-01' ? (
                    <span className="flex items-center gap-1.5 text-xs text-orange-700 font-medium">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                      Available Now
                    </span>
                  ) : (
                    <span className="text-xs text-[#64748b] font-medium">
                      {line.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg font-semibold text-[#191c1d]">
                  {line.title}
                </h3>

                <p className="text-xs text-[#64748b] mt-1.5 leading-relaxed">
                  {line.description}
                </p>

                {/* Sub-card snippet */}
                <div className="mt-4 p-3 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#edeef0] flex items-center justify-center flex-shrink-0 text-[#191c1d]">
                    {renderLineIcon(line.highlightIcon)}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-semibold text-[#191c1d] truncate">
                      {line.highlightTitle}
                    </span>
                    <span className="text-[11px] text-[#64748b] truncate">
                      {line.highlightSubtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action footer */}
              <div className="mt-5 pt-3 border-t border-[#f1f3f5] flex items-center justify-between">
                <span className="text-xs text-[#64748b]">{line.metaLeft}</span>
                <button
                  onClick={() => handleLineAction(line.id)}
                  type="button"
                  className="text-xs font-semibold text-[#191c1d] hover:underline flex items-center gap-1 group-hover:text-black"
                >
                  <span>{line.actionText}</span>
                  {line.id === 'line-01' && <Video className="w-3.5 h-3.5" />}
                  {line.id === 'line-02' && <ArrowRight className="w-3.5 h-3.5" />}
                  {line.id === 'line-03' && <FolderOpen className="w-3.5 h-3.5" />}
                  {line.id === 'line-04' && <Briefcase className="w-3.5 h-3.5" />}
                  {line.id === 'line-05' && <Zap className="w-3.5 h-3.5 text-amber-600" />}
                  {line.id === 'line-06' && <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Two-Column Lower Section: Family Snapshot & 24/7 Lifeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Family Snapshot & Pediatric Milestones (7 Cols) */}
        <section className="lg:col-span-7 bg-white rounded-xl p-6 border border-[#e2e8f0] shadow-xs flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-xl font-semibold text-[#191c1d]">
                Family Snapshot & Pediatric Milestones
              </h2>
              <p className="text-xs text-[#64748b] mt-0.5">
                Tracking real-time cognitive goals & clinical appointments
              </p>
            </div>
            <button
              onClick={onAddMember}
              type="button"
              className="text-xs font-semibold text-[#191c1d] hover:underline flex items-center gap-1.5 px-2.5 py-1 rounded-md hover:bg-[#f1f3f5] transition-colors"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Add Member</span>
            </button>
          </div>

          <div className="flex flex-col gap-3.5">
            {DEPENDENTS_DASHBOARD.map((dep) => (
              <div
                key={dep.id}
                className="p-4 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#cbd5e1] transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#edeeef] flex items-center justify-center text-[#191c1d] font-bold font-display text-base flex-shrink-0">
                    {dep.initials}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-[#191c1d]">
                        {dep.name}
                      </span>
                      <span className="text-xs text-[#64748b]">({dep.age} yrs)</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#edeeef] text-[#475569] text-[10px] font-semibold">
                        {dep.badge}
                      </span>
                    </div>
                    <span className="text-xs text-[#475569] mt-0.5">
                      {dep.milestoneTitle}
                    </span>
                    <span className="text-xs text-black font-medium mt-1 flex items-center gap-1">
                      {dep.id === 'marcus' && <CalendarIcon className="w-3.5 h-3.5 text-[#64748b]" />}
                      {dep.id === 'chloe' && <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />}
                      {dep.id === 'jordan' && <Bell className="w-3.5 h-3.5 text-amber-600" />}
                      <span>{dep.upcomingEvent}</span>
                    </span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#e2e8f0]">
                  <span className="px-2.5 py-1 rounded-md bg-[#e2e8f0]/80 text-[#334155] text-xs font-semibold">
                    {dep.statusLabel}
                  </span>
                  <button
                    onClick={() => onOpenCareJournal(dep)}
                    type="button"
                    className="text-xs font-semibold text-[#191c1d] hover:underline"
                  >
                    Care Journal →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Column: 24/7 Family Lifeline (5 Cols) */}
        <section className="lg:col-span-5 bg-white rounded-xl p-6 border border-[#e2e8f0] shadow-xs flex flex-col gap-5 relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                <h2 className="font-display text-xl font-semibold text-[#191c1d]">
                  Family Lifeline
                </h2>
              </div>
              <p className="text-xs text-[#64748b] mt-0.5">
                24/7 Crisis triage & immediate care dispatch
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#f1f3f5] text-[#475569] text-xs font-semibold border border-[#e2e8f0]">
              Case #892-PT
            </span>
          </div>

          {/* Primary Live Action Box */}
          <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] flex flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#191c1d] block">
                    Senior Clinical Triage Nurse
                  </span>
                  <p className="text-[11px] text-[#64748b]">
                    Direct encrypted voice & messaging
                  </p>
                </div>
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-emerald-200"></span>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenSos}
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-black hover:bg-neutral-800 text-white text-xs font-semibold transition-all shadow-xs active:scale-98"
              >
                <span>Launch Live Care Chat</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={onOpenSos}
                  type="button"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#f1f3f5] hover:bg-[#e2e8f0] text-[#191c1d] text-xs font-medium border border-[#e2e8f0] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#64748b]" />
                  <span>Call Concierge</span>
                </button>
                <button
                  onClick={onOpenSos}
                  type="button"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#fee2e2] hover:bg-[#fecaca] text-[#b91c1c] text-xs font-semibold transition-colors"
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Direct 988 Dispatch</span>
                </button>
              </div>
            </div>
          </div>

          {/* Urgent Protocols & Case Verification */}
          <div className="flex flex-col gap-2.5 pt-1 text-xs text-[#64748b]">
            <div className="flex items-center justify-between">
              <span>Current Case Lead:</span>
              <span className="text-[#191c1d] font-medium">Sarah Jennings, LCSW</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Crisis De-escalation Protocol:</span>
              <span className="text-[#191c1d] font-medium">Tier 1 Gentle Non-Verbal</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Hospital of Choice:</span>
              <span className="text-[#191c1d] font-medium">Phoenix Children's Main Campus</span>
            </div>

            <div className="p-3 rounded-lg bg-[#f1f3f5]/80 border border-[#e2e8f0] mt-1 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-[#475569] leading-snug">
                All interactions logged into Lorraen Madre's secure audit record under HIPAA HITECH compliance.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

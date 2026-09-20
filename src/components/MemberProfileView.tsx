import React, { useState } from 'react';
import { 
  USER_PROFILE, 
  CARE_CIRCLE_MEMBERS, 
  DEPENDENTS_DIRECTORY 
} from '../data/portalData';
import { 
  Award, 
  Shield, 
  MapPin, 
  Calendar, 
  Linkedin, 
  Instagram, 
  Hash, 
  MessageSquare, 
  UserPlus, 
  Share2, 
  Bookmark, 
  Camera, 
  Video, 
  CheckCircle2, 
  Radio, 
  ShieldCheck, 
  Users, 
  Network, 
  HelpCircle, 
  Lock, 
  ArrowLeft 
} from 'lucide-react';

interface MemberProfileViewProps {
  onBackToDashboard: () => void;
  onOpenMessageModal: (recipientName?: string) => void;
  onOpenHuddleModal: () => void;
  onOpenRetreatDetails: () => void;
  onContactLiaison: () => void;
}

export const MemberProfileView: React.FC<MemberProfileViewProps> = ({
  onBackToDashboard,
  onOpenMessageModal,
  onOpenHuddleModal,
  onOpenRetreatDetails,
  onContactLiaison,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [sharedToast, setSharedToast] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setSharedToast(true);
    setTimeout(() => setSharedToast(false), 2500);
  };

  return (
    <div className="w-full flex flex-col gap-6 pb-12">
      {/* Toast Notification for Share */}
      {sharedToast && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2 bg-black text-white text-xs font-semibold rounded-lg shadow-lg flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Profile link copied to clipboard</span>
        </div>
      )}

      {/* Top Breadcrumb & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#64748b]">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={onBackToDashboard}
            className="hover:text-black flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </button>
          <span>/</span>
          <span className="hover:text-black cursor-pointer">Member Directory</span>
          <span>/</span>
          <span className="hover:text-black cursor-pointer">NFL Women Leaders</span>
          <span>/</span>
          <span className="text-[#191c1d] font-semibold">{USER_PROFILE.name}</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f1f3f5] text-[#334155] font-medium border border-[#e2e8f0]">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            Verified Leader Profile
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#f1f3f5] text-[#64748b] font-medium border border-[#e2e8f0]">
            ID: {USER_PROFILE.profileId}
          </span>
        </div>
      </div>

      {/* Hero Header Card */}
      <section className="bg-white rounded-2xl border border-[#e2e8f0] p-6 md:p-8 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Avatar with edit photo button */}
          <div className="relative group flex-shrink-0">
            <img
              src={USER_PROFILE.avatar}
              alt={USER_PROFILE.name}
              className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover ring-2 ring-[#e2e8f0] shadow-xs"
            />
            <button
              type="button"
              className="absolute bottom-1 right-1 p-1.5 rounded-lg bg-black text-white hover:bg-neutral-800 transition-colors shadow-xs"
              title="Update Profile Photo"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2.5">
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#191c1d] tracking-tight">
              {USER_PROFILE.name}
            </h1>

            {/* Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f1f3f5] text-[#191c1d] text-xs font-medium border border-[#e2e8f0]">
                <Award className="w-3.5 h-3.5 text-[#64748b]" />
                Leadership Council
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f1f3f5] text-[#191c1d] text-xs font-medium border border-[#e2e8f0]">
                <Shield className="w-3.5 h-3.5 text-[#64748b]" />
                {USER_PROFILE.tier}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f8f9fa] text-[#64748b] text-xs font-medium border border-[#e2e8f0]">
                <MapPin className="w-3.5 h-3.5" />
                {USER_PROFILE.location}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f8f9fa] text-[#64748b] text-xs font-medium border border-[#e2e8f0]">
                <Calendar className="w-3.5 h-3.5" />
                {USER_PROFILE.joined}
              </span>
            </div>

            {/* Social handles */}
            <div className="flex items-center gap-3 text-xs text-[#64748b] flex-wrap mt-0.5">
              <span className="inline-flex items-center gap-1 hover:text-black cursor-pointer">
                <Linkedin className="w-3.5 h-3.5" />
                {USER_PROFILE.social.linkedin}
              </span>
              <span className="inline-flex items-center gap-1 hover:text-black cursor-pointer">
                <Instagram className="w-3.5 h-3.5" />
                {USER_PROFILE.social.instagram}
              </span>
              <span className="inline-flex items-center gap-1 hover:text-black cursor-pointer">
                <Hash className="w-3.5 h-3.5" />
                {USER_PROFILE.social.slack}
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls & Subtext */}
        <div className="flex flex-col items-start lg:items-end gap-3 w-full lg:w-auto">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => onOpenMessageModal(USER_PROFILE.name)}
              type="button"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-black hover:bg-neutral-800 text-white text-xs font-semibold transition-all shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
            <button
              onClick={() => onOpenMessageModal('Executive Liaison')}
              type="button"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#f1f3f5] hover:bg-[#e2e8f0] text-[#191c1d] text-xs font-semibold border border-[#e2e8f0] transition-colors"
            >
              <UserPlus className="w-3.5 h-3.5 text-[#64748b]" />
              <span>Request Intro</span>
            </button>
            <button
              onClick={handleShare}
              type="button"
              className="p-2.5 rounded-lg bg-[#f8f9fa] hover:bg-[#edf0f2] text-[#64748b] hover:text-[#191c1d] border border-[#e2e8f0] transition-colors"
              title="Share Profile"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              type="button"
              className={`p-2.5 rounded-lg border border-[#e2e8f0] transition-colors ${
                isBookmarked 
                  ? 'bg-black text-white' 
                  : 'bg-[#f8f9fa] hover:bg-[#edf0f2] text-[#64748b] hover:text-[#191c1d]'
              }`}
              title="Save Contact"
            >
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
          <span className="text-[11px] text-[#64748b]">Primary Coordination Hub</span>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (8 cols): About & Family Snapshot */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Section: About Lorraen */}
          <section className="bg-white rounded-2xl border border-[#e2e8f0] p-6 md:p-8 shadow-xs flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[#f1f3f5] pb-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-black"></span>
                <h2 className="font-display text-xl font-bold text-[#191c1d]">
                  About Lorraen
                </h2>
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#64748b]">
                EXECUTIVE OVERVIEW
              </span>
            </div>

            <p className="text-sm text-[#475569] leading-relaxed">
              {USER_PROFILE.bio}
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">
                STRATEGIC FOCUS PILLARS
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {USER_PROFILE.strategicPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] flex flex-col gap-1.5"
                  >
                    <h3 className="font-display text-xs font-bold text-[#191c1d]">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-[#64748b] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Family Snapshot */}
          <section className="bg-white rounded-2xl border border-[#e2e8f0] p-6 md:p-8 shadow-xs flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-[#f1f3f5] pb-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-black"></span>
                <h2 className="font-display text-xl font-bold text-[#191c1d]">
                  Family Snapshot
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f1f3f5] text-[#475569] text-xs font-medium border border-[#e2e8f0]">
                <Lock className="w-3 h-3 text-[#64748b]" />
                Private & HIPAA Protected Access
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {DEPENDENTS_DIRECTORY.map((dep) => (
                <div
                  key={dep.id}
                  className="p-4 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#edeeef] flex items-center justify-center text-[#191c1d] font-bold font-display text-sm flex-shrink-0">
                      {dep.initials}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#191c1d]">{dep.name}</span>
                        <span className="px-2 py-0.5 rounded-full bg-[#edeeef] text-[#475569] text-[10px] font-medium">
                          {dep.role}
                        </span>
                      </div>
                      <p className="text-xs text-[#64748b] mt-0.5">
                        {dep.focus}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 flex-shrink-0 text-right">
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#191c1d]">
                      {dep.id === 'ari' && <Video className="w-3.5 h-3.5 text-black" />}
                      {dep.id === 'ruel' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                      {dep.id === 'avi' && <Radio className="w-3.5 h-3.5 text-blue-600" />}
                      <span>{dep.status}</span>
                    </div>
                    <span className="text-[11px] text-[#64748b]">
                      {dep.schedule}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sunshine Pocket Therapy Comprehensive Coverage Box */}
            <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] mt-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-white border border-[#e2e8f0] text-black">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#191c1d]">
                    Sunshine Pocket Therapy™ Comprehensive Coverage
                  </span>
                  <span className="text-[11px] text-[#64748b] mt-0.5">
                    Primary Clinical Anchor: Dr. Kimberly Vance
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                <div className="flex flex-col text-left sm:text-right">
                  <span className="text-[10px] uppercase font-semibold text-[#64748b]">Next Clinical Session</span>
                  <span className="text-xs font-bold text-[#191c1d]">May 28, 2025</span>
                </div>
                <div className="flex flex-col text-left sm:text-right">
                  <span className="text-[10px] uppercase font-semibold text-[#64748b]">Insurance Co-Pay</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f1f3f5] text-[#191c1d] text-xs font-semibold border border-[#e2e8f0]">
                    Cigna In-Network $0
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (4 cols): Care Circle & Active Care Sprints */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Section: Care Circle */}
          <section className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-xs flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-black"></span>
                <h2 className="font-display text-lg font-bold text-[#191c1d]">
                  Care Circle
                </h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#f1f3f5] text-[#475569] text-xs font-medium border border-[#e2e8f0]">
                8 Members
              </span>
            </div>

            <p className="text-xs text-[#64748b] leading-relaxed">
              Lorraen's trusted peer advisors & clinical coordinates within the League syndicate.
            </p>

            <div className="flex flex-col gap-2.5 pt-1">
              {CARE_CIRCLE_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  className="p-3 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] flex items-center justify-between gap-3 hover:border-[#cbd5e1] transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#e2e8f0] flex items-center justify-center text-[10px] font-bold text-[#64748b] flex-shrink-0">
                      img
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-[#191c1d] truncate">
                        {member.name}
                      </span>
                      <span className="text-[11px] text-[#64748b] truncate">
                        {member.organization} • {member.role}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenMessageModal(member.name)}
                    type="button"
                    className="p-1.5 rounded-lg text-[#64748b] hover:text-black hover:bg-[#edeef0] transition-colors"
                    title={`Message ${member.name}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-[#f1f3f5]">
              <button
                onClick={onOpenHuddleModal}
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#f1f3f5] hover:bg-[#e2e8f0] text-[#191c1d] text-xs font-semibold border border-[#e2e8f0] transition-colors"
              >
                <Users className="w-3.5 h-3.5 text-[#64748b]" />
                <span>Invite to Private Huddle</span>
              </button>
              <button
                onClick={onOpenHuddleModal}
                type="button"
                className="w-full flex items-center justify-center gap-1.5 py-1 text-xs text-[#64748b] hover:text-black font-medium transition-colors"
              >
                <Network className="w-3.5 h-3.5" />
                <span>Browse 14 Mutual Ties</span>
              </button>
            </div>
          </section>

          {/* Section: Active Care Sprints */}
          <section className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-xs flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-black"></span>
                <h2 className="font-display text-lg font-bold text-[#191c1d]">
                  Active Care Sprints
                </h2>
              </div>
              <span className="text-xs text-[#64748b] font-medium">
                2025 Cycle
              </span>
            </div>

            {/* Confirmed Package Card */}
            <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-[#e2e8f0] text-[#334155] text-[10px] font-bold uppercase tracking-wider">
                  Confirmed Package
                </span>
                <span className="text-xs text-[#64748b] font-medium">
                  Scottsdale, AZ
                </span>
              </div>

              <h3 
                onClick={onOpenRetreatDetails}
                className="font-display text-base font-bold text-[#191c1d] cursor-pointer hover:underline"
              >
                2025 Sunshine Annual Conference
              </h3>

              <p className="text-xs text-[#64748b] leading-relaxed">
                Oct 16–19, 2025 • Scottsdale Resort Sanctuary. Focus: Post-NFL Family Resiliency & Youth Somatic Play.
              </p>
            </div>

            {/* Group Therapy Cohort Progress */}
            <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#191c1d]">
                  Group Therapy Cohort
                </span>
                <span className="text-xs font-bold text-black">
                  100% Completed
                </span>
              </div>

              {/* Full width 100% progress bar */}
              <div className="w-full h-2 rounded-full bg-[#e2e8f0] overflow-hidden">
                <div className="h-full bg-black rounded-full w-full"></div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#475569] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                <span>8 of 8 Cohort Sessions Completed</span>
              </div>
            </div>

            {/* Questions prompt */}
            <div className="pt-2 flex items-start gap-2 text-xs text-[#64748b]">
              <HelpCircle className="w-4 h-4 text-[#64748b] flex-shrink-0 mt-0.5" />
              <p>
                Have questions about Lorraen's syndicate schedule?{' '}
                <button
                  onClick={onContactLiaison}
                  className="font-semibold text-black underline hover:text-neutral-700"
                >
                  Contact Executive Liaison
                </button>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

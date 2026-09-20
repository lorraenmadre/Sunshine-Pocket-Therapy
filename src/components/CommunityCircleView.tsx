import React, { useState } from 'react';
import { CARE_CIRCLE_MEMBERS, USER_PROFILE } from '../data/portalData';
import { Users, MessageSquare, Shield, Network, UserCheck, Plus, Sparkles } from 'lucide-react';

interface CommunityCircleViewProps {
  onOpenMessageModal: (name: string) => void;
  onOpenHuddleModal: () => void;
}

export const CommunityCircleView: React.FC<CommunityCircleViewProps> = ({
  onOpenMessageModal,
  onOpenHuddleModal,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const extendedMembers = [
    ...CARE_CIRCLE_MEMBERS,
    {
      id: 'marcus-t',
      name: 'Dr. Marcus Thorne',
      organization: 'Johns Hopkins Pediatric Neurology',
      role: 'Clinical Fellow',
      mutualTies: 7,
      isOnline: true
    },
    {
      id: 'serena-k',
      name: 'Serena Keller',
      organization: 'Seattle Seahawks',
      role: 'Player Family Coordinator',
      mutualTies: 4,
      isOnline: false
    },
    {
      id: 'talia-b',
      name: 'Talia Brooks',
      organization: 'Denver Broncos Alumni',
      role: 'Family Foundation Trustee',
      mutualTies: 8,
      isOnline: true
    },
    {
      id: 'monique-d',
      name: 'Monique Davis',
      organization: 'NFLPA Advisory Panel',
      role: 'Director of Mental Health',
      mutualTies: 5,
      isOnline: true
    }
  ];

  const filtered = extendedMembers.filter((m) =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col gap-6 pb-12">
      {/* Banner */}
      <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 md:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-5 rounded-full bg-black"></span>
            <h1 className="font-display text-2xl font-bold text-[#191c1d]">
              Community Circle & Syndicate Network
            </h1>
          </div>
          <p className="text-sm text-[#64748b] mt-1 max-w-2xl">
            Lorraen's trusted peer advisors & clinical coordinates within the {USER_PROFILE.syndicate} syndicate and clinical network.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenHuddleModal}
            className="px-4 py-2 rounded-xl bg-black text-white hover:bg-neutral-800 text-xs font-semibold flex items-center gap-2 transition-all shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Host Private Huddle</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#e2e8f0] shadow-xs">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, organization, or clinical specialty..."
          className="w-full text-sm text-[#191c1d] placeholder:text-[#94a3b8] bg-transparent focus:outline-none"
        />
        <span className="text-xs text-[#64748b] whitespace-nowrap">
          {filtered.length} Network Members
        </span>
      </div>

      {/* Grid of Network Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl border border-[#e2e8f0] p-5 shadow-xs flex flex-col justify-between gap-4 hover:border-black transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#edeef0] flex items-center justify-center text-xs font-bold text-[#64748b]">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                {member.isOnline && (
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                )}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-[#191c1d] truncate">
                  {member.name}
                </span>
                <span className="text-xs text-black font-medium truncate">
                  {member.organization}
                </span>
                <span className="text-[11px] text-[#64748b] truncate">
                  {member.role}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#f1f3f5] flex items-center justify-between">
              <span className="text-[11px] text-[#64748b]">
                {member.mutualTies} Mutual Ties
              </span>
              <button
                onClick={() => onOpenMessageModal(member.name)}
                className="px-3 py-1.5 rounded-lg bg-[#f1f3f5] hover:bg-[#e2e8f0] text-black text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Message</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

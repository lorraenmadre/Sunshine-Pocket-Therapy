import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Plane, 
  Hotel, 
  CheckCircle2, 
  Clock, 
  FileText 
} from 'lucide-react';

interface TravelRetreatsViewProps {
  onReserveSuite: () => void;
  onViewItineraryModal: () => void;
}

export const TravelRetreatsView: React.FC<TravelRetreatsViewProps> = ({
  onReserveSuite,
  onViewItineraryModal,
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'schedule' | 'sensory'>('details');

  return (
    <div className="w-full flex flex-col gap-6 pb-12">
      {/* Hero Conference Card */}
      <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 md:p-8 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#f1f3f5] text-[#334155] text-xs font-semibold uppercase tracking-wider border border-[#e2e8f0]">
              Scottsdale, AZ
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              $250 Voucher Applied
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#edeef0] text-black text-xs font-semibold">
              VIP Family Suite Held
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#191c1d] tracking-tight">
            2025 Annual Retreat & Conference
          </h1>

          <p className="text-sm text-[#475569] leading-relaxed">
            The Phoenician Luxury Sanctuary. 4 days of pediatric neuro-workshops, sensory-safe family excursions, and private care retreats tailored for post-athletic executive families.
          </p>

          <div className="flex items-center gap-4 text-xs text-[#64748b] flex-wrap pt-1">
            <span className="flex items-center gap-1.5 font-semibold text-black">
              <Calendar className="w-4 h-4 text-black" />
              Oct 14–18, 2025
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              The Phoenician Resort Sanctuary, Scottsdale AZ
            </span>
            <span className="flex items-center gap-1.5">
              <Hotel className="w-4 h-4" />
              2 Suites Available
            </span>
          </div>
        </div>

        <div className="flex flex-col items-stretch sm:items-end gap-3 w-full sm:w-auto">
          <button
            onClick={onReserveSuite}
            type="button"
            className="px-6 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white text-sm font-semibold transition-all shadow-xs"
          >
            Reserve Room
          </button>
          <button
            onClick={onViewItineraryModal}
            type="button"
            className="px-6 py-2.5 rounded-xl bg-[#f1f3f5] hover:bg-[#e2e8f0] text-black text-xs font-semibold border border-[#e2e8f0] transition-colors"
          >
            View Full Itinerary
          </button>
          <span className="text-[11px] text-[#64748b] text-center sm:text-right">
            Concierge: Ava Lind (Direct Assist)
          </span>
        </div>
      </div>

      {/* Segmented Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Sensory Routing */}
        <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-xs flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f1f3f5] flex items-center justify-center text-black">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-[#191c1d]">
              Sensory-Friendly Flight Routing
            </h3>
            <p className="text-xs text-[#64748b] leading-relaxed">
              Quiet direct gate transfers at Phoenix Sky Harbor, pre-arranged TSA Cares escort, and noise-cancelling equipment kits provided.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-[#f1f3f5] flex items-center justify-between text-xs text-[#64748b]">
            <span>Status: Cleared</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
        </div>

        {/* Card 2: Low-Stimulation Check-in */}
        <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-xs flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f1f3f5] flex items-center justify-center text-black">
              <Hotel className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-[#191c1d]">
              Phoenician Quiet Wing Suite
            </h3>
            <p className="text-xs text-[#64748b] leading-relaxed">
              Direct private elevator access bypassing the main lobby. Soundproofing, blackout circadian blinds, and organic sensory tactile bedding.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-[#f1f3f5] flex items-center justify-between text-xs text-[#64748b]">
            <span>Suite #408 Held</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
        </div>

        {/* Card 3: Pediatric Somatic Play */}
        <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-xs flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f1f3f5] flex items-center justify-center text-black">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-[#191c1d]">
              Youth Neuro-Workshops
            </h3>
            <p className="text-xs text-[#64748b] leading-relaxed">
              Led by Dr. Kimberly Vance and board-certified pediatric occupational therapists. Gentle somatic play sessions tailored for Marcus, Chloe, and Jordan.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-[#f1f3f5] flex items-center justify-between text-xs text-[#64748b]">
            <span>3 Sessions Reserved</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

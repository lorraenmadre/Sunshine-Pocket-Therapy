import React, { useState } from 'react';
import { SIX_LINES_OF_CARE } from '../data/portalData';
import { 
  Video, 
  Receipt, 
  Gavel, 
  Plane, 
  Sparkles, 
  Building, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  PhoneCall 
} from 'lucide-react';

interface CareServicesViewProps {
  onOpenTelemedicine: () => void;
  onOpenClaims: () => void;
  onOpenLegalVault: () => void;
  onOpenItinerary: () => void;
  onOpenSensoryCopilot: () => void;
  onOpenWealthPlan: () => void;
}

export const CareServicesView: React.FC<CareServicesViewProps> = ({
  onOpenTelemedicine,
  onOpenClaims,
  onOpenLegalVault,
  onOpenItinerary,
  onOpenSensoryCopilot,
  onOpenWealthPlan,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleLaunch = (id: string) => {
    switch (id) {
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
    <div className="w-full flex flex-col gap-6 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 md:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-5 rounded-full bg-black"></span>
            <h1 className="font-display text-2xl font-bold text-[#191c1d]">
              Care & Clinical Services
            </h1>
          </div>
          <p className="text-sm text-[#64748b] mt-1 max-w-2xl">
            Integrated multidisciplinary support across your clinical ecosystem. All 6 lines of care operate under dedicated board-certified supervision.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-lg bg-[#f1f3f5] border border-[#e2e8f0] text-xs font-semibold text-[#191c1d] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>In-Network Cigna Tier 1</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {['all', 'clinical', 'advocacy', 'lifestyle', 'financial'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors ${
              selectedCategory === category
                ? 'bg-black text-white'
                : 'bg-white text-[#64748b] hover:bg-[#f1f3f5] border border-[#e2e8f0]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Comprehensive 6 Lines Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SIX_LINES_OF_CARE.map((line) => (
          <div
            key={line.id}
            className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${line.badgeColor.bar}`}></div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${line.badgeColor.bg} ${line.badgeColor.text}`}>
                  {line.number}
                </span>
                <span className="text-xs text-[#64748b] font-medium">{line.tag}</span>
              </div>

              <h2 className="font-display text-lg font-bold text-[#191c1d]">
                {line.title}
              </h2>

              <p className="text-xs text-[#64748b] leading-relaxed">
                {line.description}
              </p>

              <div className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] mt-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e2e8f0] flex items-center justify-center text-black font-bold">
                  {line.id === 'line-01' && <Video className="w-5 h-5" />}
                  {line.id === 'line-02' && <Receipt className="w-5 h-5" />}
                  {line.id === 'line-03' && <Gavel className="w-5 h-5" />}
                  {line.id === 'line-04' && <Plane className="w-5 h-5" />}
                  {line.id === 'line-05' && <Sparkles className="w-5 h-5" />}
                  {line.id === 'line-06' && <Building className="w-5 h-5" />}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-[#191c1d] truncate">
                    {line.highlightTitle}
                  </span>
                  <span className="text-[11px] text-[#64748b] truncate">
                    {line.highlightSubtitle}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#f1f3f5] flex items-center justify-between">
              <span className="text-xs text-[#64748b]">{line.metaLeft}</span>
              <button
                onClick={() => handleLaunch(line.id)}
                type="button"
                className="px-3.5 py-1.5 rounded-lg bg-black text-white hover:bg-neutral-800 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
              >
                <span>{line.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

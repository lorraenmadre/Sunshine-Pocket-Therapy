import React, { useState } from 'react';
import { X, Check, Building, Bell, UserPlus, CheckCircle2 } from 'lucide-react';
import { PrivilegeOffer } from '../types';

// ---------------- RESERVE ROOM / SUITE MODAL ----------------
interface ReserveRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer?: PrivilegeOffer | null;
}

export const ReserveRoomModal: React.FC<ReserveRoomModalProps> = ({ isOpen, onClose, offer }) => {
  const [reserved, setReserved] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-[#e2e8f0] shadow-2xl overflow-hidden flex flex-col">
        <div className="p-5 border-b border-[#e2e8f0] flex items-center justify-between">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">
              The Phoenician Luxury Sanctuary
            </span>
            <h2 className="font-display text-lg font-bold text-[#191c1d] mt-1">
              VIP Family Suite Reservation
            </h2>
          </div>
          <button onClick={onClose} className="p-2 text-[#64748b] hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4 text-xs">
          {reserved ? (
            <div className="p-6 text-center text-emerald-800 flex flex-col items-center gap-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              <span className="font-bold text-sm">Suite #408 Confirmed!</span>
              <p className="text-xs text-[#64748b]">
                Check-in: Oct 14, 2025. Concierge Ava Lind has been notified to arrange your low-stimulation airport transfer.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-5 py-2 rounded-xl bg-black text-white font-semibold"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-black">Dates: Oct 14–18, 2025</span>
                  <span className="text-emerald-700 font-semibold">$250 Voucher Applied</span>
                </div>
                <p className="text-[#64748b]">
                  Includes quiet wing accommodation, circadian lighting, and daily sensory-safe excursion passes for Marcus, Chloe, and Jordan.
                </p>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl border border-[#e2e8f0]">
                <span className="text-[#64748b]">Remaining Available Suites:</span>
                <span className="font-bold text-black">2 Suites Available</span>
              </div>

              <button
                onClick={() => setReserved(true)}
                className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800 transition-colors shadow-xs"
              >
                Confirm Room Reservation
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// ---------------- FINANCIAL WEALTH PLAN MODAL ----------------
interface WealthPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WealthPlanModal: React.FC<WealthPlanModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-[#e2e8f0] shadow-2xl overflow-hidden flex flex-col">
        <div className="p-5 border-b border-[#e2e8f0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Building className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[#191c1d]">
                Tax-Exempt Neuro Trust & Health Wealth Plan
              </h2>
              <span className="text-xs text-[#64748b]">Line 06 • FSA / HSA Rollover Optimized</span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-[#64748b] hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4 text-xs text-[#475569]">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#eef0f2]">
              <span className="text-[#64748b] block">Current HSA Fund Balance:</span>
              <span className="font-display text-xl font-bold text-black mt-1 block">$7,420.00</span>
              <span className="text-[10px] text-emerald-700 font-semibold">Rollover Safe for 2025</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#eef0f2]">
              <span className="text-[#64748b] block">Q1 Target Allocation:</span>
              <span className="font-display text-xl font-bold text-black mt-1 block">92%</span>
              <span className="text-[10px] text-[#64748b]">On track for full utilization</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-900 leading-relaxed">
            <span className="font-bold block mb-1">2025 IRS Standard Compliance Verified</span>
            All speech pathology, occupational therapy, and specialized developmental travel are 100% pre-authorized for tax-exempt disbursement.
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------- ADD MEMBER MODAL ----------------
interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMemberSuccess: (name: string, age: number, focus: string) => void;
}

export const AddMemberModal: React.FC<AddMemberModalProps> = ({ isOpen, onClose, onAddMemberSuccess }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('6');
  const [focus, setFocus] = useState('Sensory & Speech');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddMemberSuccess(name, parseInt(age) || 6, focus);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-md w-full border border-[#e2e8f0] shadow-2xl overflow-hidden flex flex-col">
        <div className="p-5 border-b border-[#e2e8f0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-black" />
            <h2 className="font-display text-base font-bold text-[#191c1d]">
              Add Household Dependent
            </h2>
          </div>
          <button onClick={onClose} className="p-2 text-[#64748b] hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 text-xs">
          <div>
            <label className="font-bold text-[#191c1d] block mb-1">Full Legal Name:</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Leo Madre"
              className="w-full px-3 py-2 rounded-xl border border-[#e2e8f0] text-xs focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="font-bold text-[#191c1d] block mb-1">Age:</label>
            <input
              type="number"
              min="1"
              max="21"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#e2e8f0] text-xs focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="font-bold text-[#191c1d] block mb-1">Primary Clinical Focus:</label>
            <select
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#e2e8f0] text-xs focus:outline-none focus:border-black bg-white"
            >
              <option value="Sensory & Speech">Sensory & Speech Integration</option>
              <option value="Motor Skills">Fine & Gross Motor Skills</option>
              <option value="Early Language">Early Childhood Language Expansion</option>
              <option value="Cognitive Self-Advocacy">Cognitive Self-Advocacy & IEP</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800 transition-colors shadow-xs"
          >
            Enroll in Madre Household
          </button>
        </form>
      </div>
    </div>
  );
};

// ---------------- NOTIFICATIONS MODAL ----------------
interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: '1',
      title: 'Dr. Elena Rostova standby room confirmed',
      time: '15 mins ago',
      desc: 'Tomorrow 10:00 AM session setup completed. Pre-consultation notes synced with Apple Health.'
    },
    {
      id: '2',
      title: 'Marcus IEP Accommodation Draft attorney review ready',
      time: '2 hours ago',
      desc: 'Morrison & Sterling completed the Arizona State Bar validation. Ready for your electronic signature.'
    },
    {
      id: '3',
      title: 'Reimbursement of $340 processed',
      time: '1 day ago',
      desc: 'Cigna Auto-Filing direct deposit cleared into your designated HSA account.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-md w-full border border-[#e2e8f0] shadow-2xl overflow-hidden flex flex-col">
        <div className="p-5 border-b border-[#e2e8f0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-black" />
            <h2 className="font-display text-base font-bold text-[#191c1d]">
              Care Notifications
            </h2>
          </div>
          <button onClick={onClose} className="p-2 text-[#64748b] hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-3 text-xs overflow-y-auto max-h-96">
          {notifications.map((n) => (
            <div key={n.id} className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-black">{n.title}</span>
                <span className="text-[10px] text-[#64748b]">{n.time}</span>
              </div>
              <p className="text-[#64748b] leading-relaxed">{n.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#f8f9fa] border-t border-[#e2e8f0] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-black text-white font-semibold text-xs"
          >
            Mark All as Read
          </button>
        </div>
      </div>
    </div>
  );
};

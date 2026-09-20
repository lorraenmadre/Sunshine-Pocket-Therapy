import React, { useState } from 'react';
import { 
  X, 
  AlertTriangle, 
  Phone, 
  Send, 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  FileText, 
  Check, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Download, 
  Sparkles, 
  Calendar, 
  MapPin, 
  DollarSign, 
  User, 
  Plus 
} from 'lucide-react';
import { DependentMilestone, PrivilegeOffer } from '../types';
import { SAMPLE_CLAIMS, USER_PROFILE } from '../data/portalData';

// ---------------- SOS / FAMILY LIFELINE MODAL ----------------
interface SosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SosModal: React.FC<SosModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'call' | 'protocol'>('chat');
  const [messages, setMessages] = useState<Array<{ sender: 'nurse' | 'user'; text: string; time: string }>>([
    {
      sender: 'nurse',
      text: 'Good day Lorraen. This is Senior Triage Nurse Sarah Jennings, LCSW. I see you are accessing the Madre Family Lifeline. How can our clinical team support you right now?',
      time: 'Just now'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [callActive, setCallActive] = useState(false);

  if (!isOpen) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg = { sender: 'user' as const, text: inputVal, time: 'Just now' };
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');

    // Simulate nurse reassurance reply
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          sender: 'nurse',
          text: 'Thank you for updating us, Lorraen. I have flagged your prompt with Dr. Elena Rostova and applied our Tier 1 Gentle Non-Verbal protocol. A clinical coordinator is also monitoring this thread in real time.',
          time: 'Just now'
        }
      ]);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-[#e2e8f0] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-[#fee2e2] border-b border-[#fecaca] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center animate-pulse">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display text-lg font-bold text-[#991b1b]">
                  Family Lifeline — Priority Triage
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-white/90 text-red-800 text-[10px] font-bold">
                  Case #892-PT
                </span>
              </div>
              <p className="text-xs text-red-700">
                24/7 Immediate clinical escalation & emergency dispatch
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-red-700 hover:bg-red-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="flex border-b border-[#e2e8f0] bg-[#f8f9fa] text-xs font-semibold">
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex-1 py-3 text-center transition-colors ${
              activeTab === 'chat'
                ? 'bg-white border-b-2 border-black text-black'
                : 'text-[#64748b] hover:text-black'
            }`}
          >
            Encrypted Care Chat
          </button>
          <button
            onClick={() => setActiveTab('call')}
            className={`flex-1 py-3 text-center transition-colors ${
              activeTab === 'call'
                ? 'bg-white border-b-2 border-black text-black'
                : 'text-[#64748b] hover:text-black'
            }`}
          >
            Concierge Direct Line
          </button>
          <button
            onClick={() => setActiveTab('protocol')}
            className={`flex-1 py-3 text-center transition-colors ${
              activeTab === 'protocol'
                ? 'bg-white border-b-2 border-black text-black'
                : 'text-[#64748b] hover:text-black'
            }`}
          >
            Crisis Protocols
          </button>
        </div>

        {/* Tab content */}
        <div className="p-5 overflow-y-auto flex-1 flex flex-col">
          {activeTab === 'chat' && (
            <div className="flex flex-col h-full gap-4">
              <div className="flex-1 space-y-3 min-h-[220px] max-h-[300px] overflow-y-auto p-2 bg-[#f8f9fa] rounded-xl border border-[#eef0f2]">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <span className="text-[10px] text-[#64748b] mb-1">
                      {m.sender === 'user' ? 'Lorraen Madre' : 'Sarah Jennings, LCSW (Triage Lead)'}
                    </span>
                    <div
                      className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-black text-white rounded-tr-xs'
                          : 'bg-white text-[#191c1d] border border-[#e2e8f0] shadow-xs rounded-tl-xs'
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Describe current symptoms, sensory distress, or urgent need..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-[#e2e8f0] text-xs focus:outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-black text-white hover:bg-neutral-800 text-xs font-semibold flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </form>
            </div>
          )}

          {activeTab === 'call' && (
            <div className="flex flex-col items-center justify-center text-center p-6 gap-4">
              <div className="w-16 h-16 rounded-full bg-[#f1f3f5] border border-[#e2e8f0] flex items-center justify-center text-black">
                <Phone className="w-8 h-8 animate-bounce" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-[#191c1d]">
                  Dedicated Clinical Lead Direct Audio Line
                </h3>
                <p className="text-xs text-[#64748b] mt-1 max-w-sm">
                  Connects immediately to Sarah Jennings, LCSW. Encrypted under HIPAA HITECH standards.
                </p>
              </div>

              {callActive ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Call in progress (00:42)</span>
                  </div>
                  <button
                    onClick={() => setCallActive(false)}
                    className="px-6 py-2.5 rounded-xl bg-red-600 text-white text-xs font-semibold hover:bg-red-700"
                  >
                    End Call
                  </button>
                </div>
              ) : (
                <div className="flex gap-3">
                  <button
                    onClick={() => setCallActive(true)}
                    className="px-6 py-2.5 rounded-xl bg-black text-white text-xs font-semibold hover:bg-neutral-800"
                  >
                    Start Encrypted Call
                  </button>
                  <a
                    href="tel:988"
                    className="px-6 py-2.5 rounded-xl bg-red-600 text-white text-xs font-semibold hover:bg-red-700 flex items-center gap-1.5"
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Direct 988 Suicide & Crisis Lifeline</span>
                  </a>
                </div>
              )}
            </div>
          )}

          {activeTab === 'protocol' && (
            <div className="flex flex-col gap-3 text-xs text-[#475569]">
              <div className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#eef0f2]">
                <h4 className="font-bold text-[#191c1d] mb-1">
                  Tier 1 Gentle Non-Verbal De-escalation Protocol
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-[#64748b]">
                  <li>Lower environmental illumination by 50% immediately.</li>
                  <li>Provide weighted compression vest (located in Master Suite sensory bin).</li>
                  <li>Offer quiet somatic tactile tokens rather than verbal prompting.</li>
                  <li>Direct eye contact should be minimized during initial 10-minute stabilization.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#eef0f2]">
                <h4 className="font-bold text-[#191c1d] mb-1">
                  Emergency Medical Navigation
                </h4>
                <p className="text-[#64748b]">
                  Designated Pediatric Center: <strong className="text-black">Phoenix Children's Main Campus</strong> (Pediatric Sensory Trauma Certified).
                </p>
                <p className="text-[#64748b] mt-1">
                  Medical Record ID: <span className="font-mono text-black font-semibold">SPT-PHX-8820</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f8f9fa] border-t border-[#e2e8f0] flex items-center justify-between text-xs text-[#64748b]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Audit record logged under HIPAA HITECH compliance</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-black text-white text-xs font-medium hover:bg-neutral-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------- TELEMEDICINE VIRTUAL ROOM MODAL ----------------
interface TelemedicineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TelemedicineModal: React.FC<TelemedicineModalProps> = ({ isOpen, onClose }) => {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [connected, setConnected] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4">
      <div className="bg-[#191c1d] text-white rounded-2xl max-w-3xl w-full border border-neutral-700 shadow-2xl overflow-hidden flex flex-col">
        {/* Top Header */}
        <div className="p-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
            <div>
              <h2 className="font-display text-sm font-bold text-white">
                Telemedicine Consultation — Dr. Elena Rostova
              </h2>
              <span className="text-[11px] text-neutral-400">
                Lead Pediatrician • Active Encrypted Standby (Room #PT-2025)
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Stage */}
        <div className="relative bg-neutral-950 aspect-video flex items-center justify-center overflow-hidden">
          {/* Simulated Doctor Video Screen */}
          <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-neutral-900 to-black text-center">
            <div className="w-24 h-24 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center text-white mb-3">
              <span className="text-xl font-bold font-display">Dr. ER</span>
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              Dr. Elena Rostova
            </h3>
            <p className="text-xs text-neutral-400 max-w-md mt-1">
              "Good morning Lorraen, I have Marcus's latest speech pathology notes open. Ready whenever you are."
            </p>
          </div>

          {/* User PiP Preview */}
          <div className="absolute bottom-4 right-4 w-36 h-24 rounded-xl bg-neutral-800 border border-neutral-700 overflow-hidden shadow-lg flex items-center justify-center">
            {videoOn ? (
              <img
                src={USER_PROFILE.avatar}
                alt="Lorraen Madre"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-xs text-neutral-400">Camera Off</span>
            )}
            <span className="absolute bottom-1 left-2 text-[10px] font-semibold text-white/90 drop-shadow">
              You
            </span>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMicOn(!micOn)}
              className={`p-3 rounded-xl transition-colors ${
                micOn ? 'bg-neutral-800 text-white hover:bg-neutral-700' : 'bg-red-600 text-white'
              }`}
              title={micOn ? 'Mute Mic' : 'Unmute Mic'}
            >
              {micOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setVideoOn(!videoOn)}
              className={`p-3 rounded-xl transition-colors ${
                videoOn ? 'bg-neutral-800 text-white hover:bg-neutral-700' : 'bg-red-600 text-white'
              }`}
              title={videoOn ? 'Turn Video Off' : 'Turn Video On'}
            >
              {videoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-400">
              Avg Wait: &lt; 4 mins • In-Network Cigna $0
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-red-600 text-white text-xs font-semibold hover:bg-red-700 transition-colors shadow-sm"
            >
              End Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------- CLAIMS TRACKER MODAL ----------------
interface ClaimsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClaimsModal: React.FC<ClaimsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-[#e2e8f0] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-5 border-b border-[#e2e8f0] flex items-center justify-between">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
              Line 02 • Insurance Auto-Filing
            </span>
            <h2 className="font-display text-xl font-bold text-[#191c1d] mt-1">
              Insurance Claims & Direct Reimbursements
            </h2>
          </div>
          <button onClick={onClose} className="p-2 text-[#64748b] hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex flex-col gap-4">
          {/* Active Highlight Claim */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-blue-900">Claim #CG-91024</span>
              <span className="px-2 py-0.5 rounded bg-blue-200 text-blue-800 text-xs font-semibold">
                Pending Reimbursement
              </span>
            </div>
            <p className="text-xs text-blue-800">
              Pediatric Neuro-Speech Evaluation with Dr. Elena Rostova & Dr. Miller. Auto-filed under Cigna In-Network policy.
            </p>
            <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-blue-200">
              <span className="text-xs text-blue-700">Eligible Direct Deposit Amount:</span>
              <span className="text-lg font-bold text-blue-950">$340.00</span>
            </div>
          </div>

          <h3 className="font-display text-sm font-bold text-[#191c1d] mt-2">
            Recent Processed Claims & EOBs
          </h3>
          <div className="flex flex-col gap-2.5">
            {SAMPLE_CLAIMS.map((claim) => (
              <div
                key={claim.id}
                className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] flex items-center justify-between gap-3 text-xs"
              >
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-[#191c1d]">{claim.service}</span>
                  <span className="text-[#64748b]">{claim.code} • {claim.provider} • {claim.date}</span>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="font-bold text-black">${claim.amount.toFixed(2)}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                    {claim.status === 'approved' ? 'Reimbursed' : 'Pending'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-[#f8f9fa] border-t border-[#e2e8f0] flex items-center justify-between text-xs">
          <span className="text-[#64748b]">Cigna In-Network Dedicated Liaison: Online</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------- LEGAL IEP DOCUMENT VAULT MODAL ----------------
interface LegalVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalVaultModal: React.FC<LegalVaultModalProps> = ({ isOpen, onClose }) => {
  const [signed, setSigned] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-[#e2e8f0] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-5 border-b border-[#e2e8f0] flex items-center justify-between">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 text-xs font-bold">
              Line 03 • Legal Drafting & IEP Accommodations
            </span>
            <h2 className="font-display text-xl font-bold text-[#191c1d] mt-1">
              Marcus IEP Accommodation Draft
            </h2>
          </div>
          <button onClick={onClose} className="p-2 text-[#64748b] hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex flex-col gap-4 text-xs text-[#475569]">
          <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] flex items-center justify-between">
            <div>
              <span className="font-bold text-black block">State Bar Jurisdiction: Arizona Valid</span>
              <span className="text-[#64748b]">Attorney Reviewed by Morrison & Sterling Health Advocates</span>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-semibold">
              Ready for Sign
            </span>
          </div>

          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 font-mono text-[11px] leading-relaxed max-h-48 overflow-y-auto">
            <p className="font-bold text-black mb-2">SUMMARY OF AMENDMENT CLAUSES (SEC. 504 / IEP):</p>
            <p>1. Student Marcus Madre is entitled to quiet breakout access during group acoustics &gt; 65dB.</p>
            <p>2. Speech pathology check-in frequency mandated at two (2) 45-min sessions weekly.</p>
            <p>3. Permitted utilization of personal noise-calibrating earbuds during exam sessions.</p>
            <p>4. Emergency sensory pass authorized without teacher pre-interrogation.</p>
          </div>

          {signed ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-900">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <div>
                <span className="font-bold block">Document Signed Digitally</span>
                <span className="text-[11px] text-emerald-700">
                  Signed by Lorraen Madre (Family Lead) on {new Date().toLocaleDateString()}. Sealed in HIPAA vault.
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#f8f9fa] border border-[#eef0f2]">
              <div>
                <span className="font-bold text-black block">Digital Signature Required</span>
                <span className="text-[#64748b]">Lorraen Madre • Verified Family Lead</span>
              </div>
              <button
                onClick={() => setSigned(true)}
                className="px-4 py-2 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800 transition-colors"
              >
                Sign Document Now
              </button>
            </div>
          )}
        </div>

        <div className="p-4 bg-[#f8f9fa] border-t border-[#e2e8f0] flex items-center justify-between text-xs">
          <span className="text-[#64748b]">4 Legal Drafts Remaining for 2025</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800"
          >
            Close Vault
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------- AI SENSORY CO-PILOT DRAWER MODAL ----------------
interface SensoryCopilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SensoryCopilotModal: React.FC<SensoryCopilotModalProps> = ({ isOpen, onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setResponse(
      `AI Sensory Co-Pilot recommendation for Marcus: Based on biometric markers from Apple Health, tonight's ideal bedtime shift is +25 minutes (8:45 PM). We suggest dimming ambient lights at 7:30 PM, playing low-frequency 432Hz auditory loops, and avoiding screen transitions after 8:00 PM.`
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-[#e2e8f0] shadow-2xl overflow-hidden flex flex-col">
        <div className="p-5 border-b border-[#e2e8f0] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[#191c1d]">
                AI Family Operations Co-Pilot
              </h2>
              <span className="text-xs text-[#64748b]">
                Sensory overload forecasting & schedule optimization
              </span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-[#64748b] hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4 text-xs">
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex flex-col gap-1.5 text-amber-900">
            <span className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Optimal Bedtime Shift (+25m) Suggested
            </span>
            <p className="text-amber-800 leading-relaxed">
              Marcus experienced higher sensory load during afternoon social activities. Extending evening decompression by 25 minutes will optimize REM recovery tonight.
            </p>
          </div>

          <form onSubmit={handlePredict} className="flex flex-col gap-2">
            <label className="font-semibold text-[#191c1d]">
              Ask Co-Pilot for Schedule or Sensory Guidance:
            </label>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Marcus seems overstimulated after school, what cadence works best?"
              className="px-4 py-2.5 rounded-xl border border-[#e2e8f0] text-xs focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="py-2.5 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800 transition-colors"
            >
              Analyze Sensory Cadence
            </button>
          </form>

          {response && (
            <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] text-xs text-[#191c1d] leading-relaxed">
              {response}
            </div>
          )}
        </div>

        <div className="p-4 bg-[#f8f9fa] border-t border-[#e2e8f0] flex items-center justify-between text-xs">
          <span className="text-[#64748b]">Syncs securely with Apple Health</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------- CARE SPRINT CONFIGURATOR MODAL ----------------
interface CareSprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer?: PrivilegeOffer | null;
}

export const CareSprintModal: React.FC<CareSprintModalProps> = ({ isOpen, onClose, offer }) => {
  const [sprintType, setSprintType] = useState('behavioral');
  const [targetDependent, setTargetDependent] = useState('marcus');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-[#e2e8f0] shadow-2xl overflow-hidden flex flex-col">
        <div className="p-5 border-b border-[#e2e8f0] flex items-center justify-between">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#f1f3f5] text-[#334155] text-xs font-semibold">
              {offer ? offer.title : 'Initiate Care Sprint'}
            </span>
            <h2 className="font-display text-lg font-bold text-[#191c1d] mt-1">
              Private Coordination Block Configuration
            </h2>
          </div>
          <button onClick={onClose} className="p-2 text-[#64748b] hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4 text-xs">
          {confirmed ? (
            <div className="p-6 text-center flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base font-bold text-[#191c1d]">
                Care Sprint Initiated!
              </h3>
              <p className="text-[#64748b] max-w-md">
                Guaranteed 48-hour clinical turnaround. Assigned clinical lead: Sarah Jennings, LCSW with Dr. Elena Rostova standby.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 rounded-xl bg-black text-white font-semibold"
              >
                Return to Dashboard
              </button>
            </div>
          ) : (
            <>
              <div>
                <label className="font-bold text-[#191c1d] block mb-1">Select Focus Area:</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'behavioral', label: 'Behavioral Pacing' },
                    { id: 'educational', label: 'IEP School Transition' },
                    { id: 'neuro', label: 'Neurodevelopmental' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSprintType(item.id)}
                      className={`p-2.5 rounded-xl border text-center font-semibold transition-colors ${
                        sprintType === item.id
                          ? 'border-black bg-black text-white'
                          : 'border-[#e2e8f0] bg-[#f8f9fa] text-[#475569]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-bold text-[#191c1d] block mb-1">Target Dependent:</label>
                <select
                  value={targetDependent}
                  onChange={(e) => setTargetDependent(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[#e2e8f0] text-xs font-medium bg-white focus:outline-none focus:border-black"
                >
                  <option value="marcus">Marcus Madre (11 yrs - Sensory Focus)</option>
                  <option value="chloe">Chloe Madre (8 yrs - Motor Skills)</option>
                  <option value="jordan">Jordan Madre (4 yrs - Early Lang)</option>
                  <option value="household">Full Madre Household Syndicate</option>
                </select>
              </div>

              <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#eef0f2] flex items-center justify-between">
                <div>
                  <span className="font-bold text-black block">Investment / Rollover Balance</span>
                  <span className="text-[#64748b]">Covered via HSA Fund ($7,420 available)</span>
                </div>
                <span className="font-display text-base font-bold text-black">$555.00</span>
              </div>

              <button
                type="button"
                onClick={() => setConfirmed(true)}
                className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800 transition-colors shadow-xs"
              >
                Confirm & Launch 48h Sprint
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// ---------------- CARE JOURNAL MODAL ----------------
interface CareJournalModalProps {
  isOpen: boolean;
  onClose: () => void;
  dependent: DependentMilestone | null;
}

export const CareJournalModal: React.FC<CareJournalModalProps> = ({ isOpen, onClose, dependent }) => {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState<string[]>(dependent?.notes || []);

  if (!isOpen || !dependent) return null;

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setNotes([newNote, ...notes]);
    setNewNote('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-[#e2e8f0] shadow-2xl overflow-hidden flex flex-col">
        <div className="p-5 border-b border-[#e2e8f0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#edeeef] flex items-center justify-center font-bold text-black font-display">
              {dependent.initials}
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[#191c1d]">
                Care Journal: {dependent.name}
              </h2>
              <span className="text-xs text-[#64748b]">
                {dependent.badge} • {dependent.statusLabel}
              </span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-[#64748b] hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#eef0f2]">
            <span className="font-bold text-black block mb-0.5">Primary Target:</span>
            <p className="text-[#64748b]">{dependent.milestoneTitle}</p>
            <p className="text-black font-medium mt-1">{dependent.upcomingEvent}</p>
          </div>

          <form onSubmit={handleAddNote} className="flex gap-2">
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Add observation or sensory log entry..."
              className="flex-1 px-3 py-2 rounded-xl border border-[#e2e8f0] text-xs focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800"
            >
              Add Note
            </button>
          </form>

          <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
            <span className="font-bold text-black">Historical Observations:</span>
            {notes.map((n, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-[#f8f9fa] border border-[#eef0f2] text-xs text-[#475569]">
                {n}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-[#f8f9fa] border-t border-[#e2e8f0] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-black text-white font-semibold"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------- MESSAGE / REQUEST INTRO MODAL ----------------
interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipientName: string;
}

export const MessageModal: React.FC<MessageModalProps> = ({ isOpen, onClose, recipientName }) => {
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-[#e2e8f0] shadow-2xl overflow-hidden flex flex-col">
        <div className="p-5 border-b border-[#e2e8f0] flex items-center justify-between">
          <h2 className="font-display text-base font-bold text-[#191c1d]">
            Direct Message to {recipientName}
          </h2>
          <button onClick={onClose} className="p-2 text-[#64748b] hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4 text-xs">
          {sent ? (
            <div className="p-6 text-center text-emerald-700 flex flex-col items-center gap-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              <span className="font-bold text-sm">Message Dispatched</span>
              <p className="text-xs text-[#64748b]">Encrypted routing sent via Sunshine Care Network.</p>
            </div>
          ) : (
            <form onSubmit={handleSend} className="flex flex-col gap-3">
              <label className="font-bold text-[#191c1d]">Compose Message:</label>
              <textarea
                rows={4}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Write your note or syndicate coordination inquiry..."
                className="w-full p-3 rounded-xl border border-[#e2e8f0] text-xs focus:outline-none focus:border-black resize-none"
              />
              <button
                type="submit"
                className="py-2.5 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800 transition-colors"
              >
                Send Encrypted Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

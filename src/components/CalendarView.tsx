import React from 'react';
import { Calendar as CalendarIcon, Clock, Video, MapPin, User, CheckCircle2 } from 'lucide-react';

interface CalendarViewProps {
  onOpenTelemedicine: () => void;
  onOpenRetreatDetails: () => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({
  onOpenTelemedicine,
  onOpenRetreatDetails,
}) => {
  const events = [
    {
      id: 'evt-1',
      title: 'Dr. Elena Rostova — Pediatric Virtual Consultation',
      date: 'Tomorrow, Sep 21',
      time: '10:00 AM – 10:45 AM (EST)',
      dependent: 'Marcus & Lorraen Madre',
      type: 'Tele-Med Telehealth',
      status: 'Confirmed',
      isTelehealth: true,
    },
    {
      id: 'evt-2',
      title: 'Speech Pathology Sensory Pacing Check-in (Dr. Miller)',
      date: 'Thursday, Sep 24',
      time: '3:30 PM – 4:15 PM (EST)',
      dependent: 'Marcus Madre (11 yrs)',
      type: 'Clinical Check-in',
      status: 'Confirmed',
      isTelehealth: true,
    },
    {
      id: 'evt-3',
      title: 'Occupational Therapy Bilateral Review Clearance',
      date: 'Completed this week',
      time: '11:00 AM',
      dependent: 'Chloe Madre (8 yrs)',
      type: 'Assessment Cleared',
      status: '100% Target Met',
      isTelehealth: false,
    },
    {
      id: 'evt-4',
      title: '2025 Annual Retreat & Conference (Scottsdale, AZ)',
      date: 'Oct 14 – 18, 2025',
      time: 'All Day',
      dependent: 'Madre Household (All Dependents)',
      type: 'Executive Retreat',
      status: 'Suite Held',
      isTelehealth: false,
      isRetreat: true,
    },
    {
      id: 'evt-5',
      title: 'Pediatric Bilingual Developmental Screening',
      date: 'Oct 22, 2025',
      time: '2:00 PM – 3:00 PM',
      dependent: 'Jordan Madre (4 yrs)',
      type: 'Screening Evaluation',
      status: 'Scheduled',
      isTelehealth: false,
    }
  ];

  return (
    <div className="w-full flex flex-col gap-6 pb-12">
      <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 md:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-5 rounded-full bg-black"></span>
            <h1 className="font-display text-2xl font-bold text-[#191c1d]">
              Care & Clinical Calendar
            </h1>
          </div>
          <p className="text-sm text-[#64748b] mt-1">
            Synchronized clinical appointments, school IEP hearings, and family retreat itineraries.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-[#191c1d] bg-[#f1f3f5] px-3.5 py-2 rounded-xl border border-[#e2e8f0]">
          <Clock className="w-4 h-4 text-[#64748b]" />
          <span>Next Session in 26 hours</span>
        </div>
      </div>

      <div className="flex flex-col gap-3.5">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl border border-[#e2e8f0] p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-black transition-colors"
          >
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#f8f9fa] border border-[#e2e8f0] flex flex-col items-center justify-center flex-shrink-0 text-black">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-display text-sm font-bold text-[#191c1d]">
                    {event.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#f1f3f5] text-[#475569] text-[10px] font-semibold">
                    {event.type}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#64748b] mt-1 flex-wrap">
                  <span className="font-semibold text-black">{event.date}</span>
                  <span>•</span>
                  <span>{event.time}</span>
                  <span>•</span>
                  <span className="text-[#191c1d] font-medium">{event.dependent}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center">
              <span className="px-2.5 py-1 rounded-md bg-[#f1f3f5] text-[#334155] text-xs font-medium border border-[#e2e8f0]">
                {event.status}
              </span>
              {event.isTelehealth && (
                <button
                  onClick={onOpenTelemedicine}
                  type="button"
                  className="px-3.5 py-1.5 rounded-lg bg-black text-white hover:bg-neutral-800 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Join Room</span>
                </button>
              )}
              {event.isRetreat && (
                <button
                  onClick={onOpenRetreatDetails}
                  type="button"
                  className="px-3.5 py-1.5 rounded-lg bg-black text-white hover:bg-neutral-800 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <span>View Itinerary</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

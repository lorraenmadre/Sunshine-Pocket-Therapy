import React, { useState } from 'react';
import { NavTab, DependentMilestone, PrivilegeOffer } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DashboardView } from './components/DashboardView';
import { MemberProfileView } from './components/MemberProfileView';
import { CareServicesView } from './components/CareServicesView';
import { TravelRetreatsView } from './components/TravelRetreatsView';
import { CalendarView } from './components/CalendarView';
import { CommunityCircleView } from './components/CommunityCircleView';
import { 
  SosModal, 
  TelemedicineModal, 
  ClaimsModal, 
  LegalVaultModal, 
  SensoryCopilotModal, 
  CareSprintModal, 
  CareJournalModal, 
  MessageModal 
} from './components/Modals';
import { 
  ReserveRoomModal, 
  WealthPlanModal, 
  AddMemberModal, 
  NotificationsModal 
} from './components/AuxiliaryModals';
import { DEPENDENTS_DASHBOARD } from './data/portalData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('dashboard');

  // Modals state
  const [sosOpen, setSosOpen] = useState(false);
  const [telemedOpen, setTelemedOpen] = useState(false);
  const [claimsOpen, setClaimsOpen] = useState(false);
  const [legalVaultOpen, setLegalVaultOpen] = useState(false);
  const [sensoryCopilotOpen, setSensoryCopilotOpen] = useState(false);
  const [wealthPlanOpen, setWealthPlanOpen] = useState(false);
  const [careSprintOpen, setCareSprintOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<PrivilegeOffer | null>(null);
  const [reserveRoomOpen, setReserveRoomOpen] = useState(false);
  const [careJournalDependent, setCareJournalDependent] = useState<DependentMilestone | null>(null);
  const [messageRecipient, setMessageRecipient] = useState<string | null>(null);
  const [addMemberOpen, setAddMemberOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  // Quick action handlers
  const handleClaimOffer = (offer: PrivilegeOffer) => {
    setSelectedOffer(offer);
    if (offer.id === 'offer-3') {
      setReserveRoomOpen(true);
    } else {
      setCareSprintOpen(true);
    }
  };

  const handleAddMemberSuccess = (name: string, age: number, focus: string) => {
    // Add to local state
    DEPENDENTS_DASHBOARD.push({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name: name,
      initials: name.split(' ').map(n => n[0]).join(''),
      age: age,
      badge: focus,
      milestoneTitle: `Milestone: Initial onboarding & baseline review`,
      milestoneDetail: `Enrolled in Madre Household pediatric clinical protocol.`,
      upcomingEvent: `Clinical intake screening pending assignment`,
      progressPercent: 20,
      statusLabel: '20% Onboarding',
      notes: [`Enrolled by Lorraen Madre on ${new Date().toLocaleDateString()}`]
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-[#191c1d] font-body selection:bg-neutral-200">
      {/* Fixed Sticky Header Navigation */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSos={() => setSosOpen(true)}
        onOpenNotifications={() => {
          setNotificationsOpen(true);
          setNotificationCount(0);
        }}
        notificationCount={notificationCount}
      />

      {/* Main Container Content */}
      <main className="flex-1 w-full pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {currentTab === 'dashboard' && (
          <DashboardView
            onNavigateToProfile={() => setCurrentTab('member-directory')}
            onOpenCareSprint={() => setCareSprintOpen(true)}
            onOpenTelemedicine={() => setTelemedOpen(true)}
            onOpenClaims={() => setClaimsOpen(true)}
            onOpenLegalVault={() => setLegalVaultOpen(true)}
            onOpenItinerary={() => setCurrentTab('travel-and-retreats')}
            onOpenSensoryCopilot={() => setSensoryCopilotOpen(true)}
            onOpenWealthPlan={() => setWealthPlanOpen(true)}
            onOpenSos={() => setSosOpen(true)}
            onOpenCareJournal={(dep) => setCareJournalDependent(dep)}
            onClaimOffer={handleClaimOffer}
            onAddMember={() => setAddMemberOpen(true)}
            onOpenBookings={() => setCurrentTab('travel-and-retreats')}
          />
        )}

        {currentTab === 'member-directory' && (
          <MemberProfileView
            onBackToDashboard={() => setCurrentTab('dashboard')}
            onOpenMessageModal={(name) => setMessageRecipient(name || 'Lorraen Madre')}
            onOpenHuddleModal={() => setCurrentTab('community-circle')}
            onOpenRetreatDetails={() => setCurrentTab('travel-and-retreats')}
            onContactLiaison={() => setMessageRecipient('Executive Liaison Sarah Jennings')}
          />
        )}

        {currentTab === 'care-and-services' && (
          <CareServicesView
            onOpenTelemedicine={() => setTelemedOpen(true)}
            onOpenClaims={() => setClaimsOpen(true)}
            onOpenLegalVault={() => setLegalVaultOpen(true)}
            onOpenItinerary={() => setCurrentTab('travel-and-retreats')}
            onOpenSensoryCopilot={() => setSensoryCopilotOpen(true)}
            onOpenWealthPlan={() => setWealthPlanOpen(true)}
          />
        )}

        {currentTab === 'travel-and-retreats' && (
          <TravelRetreatsView
            onReserveSuite={() => setReserveRoomOpen(true)}
            onViewItineraryModal={() => setReserveRoomOpen(true)}
          />
        )}

        {currentTab === 'calendar' && (
          <CalendarView
            onOpenTelemedicine={() => setTelemedOpen(true)}
            onOpenRetreatDetails={() => setCurrentTab('travel-and-retreats')}
          />
        )}

        {currentTab === 'community-circle' && (
          <CommunityCircleView
            onOpenMessageModal={(name) => setMessageRecipient(name)}
            onOpenHuddleModal={() => setMessageRecipient('Community Circle Syndicate')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenEmergency={() => setSosOpen(true)}
        onOpenPrivacy={() => setLegalVaultOpen(true)}
        onOpenConcierge={() => setMessageRecipient('Support Concierge Ava Lind')}
      />

      {/* Modals & Drawers */}
      <SosModal
        isOpen={sosOpen}
        onClose={() => setSosOpen(false)}
      />

      <TelemedicineModal
        isOpen={telemedOpen}
        onClose={() => setTelemedOpen(false)}
      />

      <ClaimsModal
        isOpen={claimsOpen}
        onClose={() => setClaimsOpen(false)}
      />

      <LegalVaultModal
        isOpen={legalVaultOpen}
        onClose={() => setLegalVaultOpen(false)}
      />

      <SensoryCopilotModal
        isOpen={sensoryCopilotOpen}
        onClose={() => setSensoryCopilotOpen(false)}
      />

      <WealthPlanModal
        isOpen={wealthPlanOpen}
        onClose={() => setWealthPlanOpen(false)}
      />

      <CareSprintModal
        isOpen={careSprintOpen}
        onClose={() => {
          setCareSprintOpen(false);
          setSelectedOffer(null);
        }}
        offer={selectedOffer}
      />

      <ReserveRoomModal
        isOpen={reserveRoomOpen}
        onClose={() => {
          setReserveRoomOpen(false);
          setSelectedOffer(null);
        }}
        offer={selectedOffer}
      />

      <CareJournalModal
        isOpen={!!careJournalDependent}
        onClose={() => setCareJournalDependent(null)}
        dependent={careJournalDependent}
      />

      <MessageModal
        isOpen={!!messageRecipient}
        onClose={() => setMessageRecipient(null)}
        recipientName={messageRecipient || ''}
      />

      <AddMemberModal
        isOpen={addMemberOpen}
        onClose={() => setAddMemberOpen(false)}
        onAddMemberSuccess={handleAddMemberSuccess}
      />

      <NotificationsModal
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />
    </div>
  );
}

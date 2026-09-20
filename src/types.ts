export type NavTab = 
  | 'dashboard' 
  | 'member-directory' 
  | 'care-and-services' 
  | 'travel-and-retreats' 
  | 'calendar' 
  | 'community-circle';

export interface DependentMilestone {
  id: string;
  name: string;
  initials: string;
  age: number;
  badge: string;
  milestoneTitle: string;
  milestoneDetail: string;
  upcomingEvent: string;
  progressPercent: number;
  statusLabel: string;
  notes?: string[];
}

export interface CareCircleMember {
  id: string;
  name: string;
  organization: string;
  role: string;
  avatarUrl?: string;
  mutualTies?: number;
  isOnline?: boolean;
}

export interface LineOfCareItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  badgeColor: {
    bar: string;
    bg: string;
    text: string;
  };
  description: string;
  highlightIcon: string;
  highlightTitle: string;
  highlightSubtitle: string;
  metaLeft: string;
  actionText: string;
  actionIcon: string;
}

export interface PrivilegeOffer {
  id: string;
  badge: string;
  badgeAccent?: string;
  title: string;
  description: string;
  priceMain: string;
  priceSub: string;
  meta: string;
  buttonText: string;
  buttonPrimary?: boolean;
}

export interface ClaimItem {
  id: string;
  code: string;
  service: string;
  provider: string;
  date: string;
  amount: number;
  reimbursement: number;
  status: 'pending' | 'approved' | 'in_review';
}

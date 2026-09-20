import { DependentMilestone, CareCircleMember, LineOfCareItem, PrivilegeOffer, ClaimItem } from '../types';

export const USER_PROFILE = {
  name: 'Lorraen Madre',
  role: 'Family Lead',
  tier: 'Gold Tier Member',
  location: 'Miami, FL',
  joined: 'Joined 2022',
  syndicate: 'NFL Women Leaders',
  profileId: '#SPT-8820-M',
  verified: true,
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu5ZjGizcBuHe6XH7YW32QvZBD_puBCIdsHbBdIZyjyySQ5o8C7hyeI00jtHDcbZXtB6jH22_HtCFsomYoCGxbrOpjGMxNVHhTbxqCZ4JM25trzTNk9mhBJZse7iHMe4n0rPBE2nlONYpYaC_n2n52HoALchoMQy5WkY5MFgtnEkBlzi_TG_WFhZ39z9Ni0gyp8lYsQGJZXtUrYWu9f82zPtOko9xlpPmKqSDVcD9W8yWJ37MDj6DE',
  social: {
    linkedin: 'linkedin.com/in/lorraen-madre',
    instagram: '@lorraenmadre',
    slack: '#lorraen_m'
  },
  insurance: {
    provider: 'Cigna',
    copay: '$0 In-Network',
    coverageYear: 'Active 2025 Coverage',
    groupTherapyStatus: '8 of 8 Group Therapy Sessions Completed'
  },
  metrics: {
    householdName: 'Madre Household',
    enrolledDependentsCount: 3,
    hsaBalance: '$7,420.00',
    hsaNote: 'Rollover Safe for 2025',
    upcomingSession: 'Tomorrow, 10:00 AM',
    upcomingSessionDetail: 'Dr. Elena Rostova (Tele-Med)',
    conciergeProtocol: 'High Priority Care Active',
    clinicalLead: 'Sarah Jennings, LCSW'
  },
  bio: `Lorraen Madre is an executive family health advocate and active member of the NFL Women Leaders syndicate. With over a decade of leadership experience across athletic family transitions, neurodevelopmental support systems, and concierge healthcare navigation, Lorraen oversees comprehensive multidisciplinary care protocols for multi-child households. She champions early sensory integration, cognitive self-advocacy, and accessible executive care solutions nationwide.`,
  strategicPillars: [
    {
      title: 'Pediatric Neurodiversity & Self-Advocacy',
      description: 'Systemic school IEP accommodation support, multi-phase social space integration, and clinical speech pathology alignment.'
    },
    {
      title: 'Executive Athletic Family Resiliency',
      description: 'Post-transition somatic play, concierge psychological health, and low-stimulation travel protocols for high-demand lifestyles.'
    },
    {
      title: 'Tax-Advantaged Health Governance',
      description: 'HSA/FSA optimization, special needs trust structuring, and zero-copay direct insurer reimbursement management.'
    }
  ]
};

export const DEPENDENTS_DASHBOARD: DependentMilestone[] = [
  {
    id: 'marcus',
    name: 'Marcus Madre',
    initials: 'M',
    age: 11,
    badge: 'Sensory Focus',
    milestoneTitle: 'Milestone: Verbal self-advocacy in social spaces (Phase 3 of 4)',
    milestoneDetail: 'Demonstrated self-regulation during group academic activities. Continues twice-weekly somatic pacing.',
    upcomingEvent: 'Speech pathology check-in with Dr. Miller • Thursday 3:30 PM',
    progressPercent: 92,
    statusLabel: '92% On Track',
    notes: [
      'Completed vocal modulation assessment with Dr. Miller.',
      'IEP classroom sensory breakout accommodations updated for Arizona school district.'
    ]
  },
  {
    id: 'chloe',
    name: 'Chloe Madre',
    initials: 'C',
    age: 8,
    badge: 'Motor Skills',
    milestoneTitle: 'Milestone: Fine motor dexterity & sensory art engagement',
    milestoneDetail: 'Pencil grip agility improved by 28%. Participated in tactile ceramics workshop without aversion.',
    upcomingEvent: 'Occupational Assessment cleared this week',
    progressPercent: 100,
    statusLabel: '100% Target Met',
    notes: [
      'Evaluator note: Full bilateral hand coordination benchmark achieved.',
      'Home sensory kit stage 2 dispatched.'
    ]
  },
  {
    id: 'jordan',
    name: 'Jordan Madre',
    initials: 'J',
    age: 4,
    badge: 'Early Lang',
    milestoneTitle: 'Milestone: Expressive bilingual vocabulary expansion',
    milestoneDetail: 'Acquired 42 new active conversational vocabulary tokens this month.',
    upcomingEvent: 'Pediatric developmental screening scheduled Oct 22',
    progressPercent: 78,
    statusLabel: '78% In Progress',
    notes: [
      'Bilingual syntax evaluation scheduled with speech pathologist.',
      'Sleep cadence adjustments synchronized with Apple Health data.'
    ]
  }
];

export const DEPENDENTS_DIRECTORY = [
  {
    id: 'ari',
    name: 'Ari Easley',
    initials: 'A',
    role: 'Child / Dependent',
    focus: 'Personalized Neurodivergent Learning Journey, Speech & Somatic Play Therapy.',
    status: 'Telehealth Active',
    schedule: 'Tuesdays @ 3:30 PM'
  },
  {
    id: 'ruel',
    name: 'Ruel Easley',
    initials: 'R',
    role: 'Child / Dependent',
    focus: 'Early Childhood Sensory Integration, Motor Skills Development & Wellness Routine.',
    status: 'On Track',
    schedule: 'Next Review: August 2025'
  },
  {
    id: 'avi',
    name: 'Avi Singer',
    initials: 'A',
    role: 'Child / Dependent',
    focus: 'Pediatric Preventive Care, Holistic Wellness & Specialized Family Trust Protocol.',
    status: 'Active Care Plan',
    schedule: 'Check-in: Monthly'
  }
];

export const SPECIAL_OFFERS: PrivilegeOffer[] = [
  {
    id: 'offer-1',
    badge: 'Annual Signature',
    badgeAccent: 'Save $1,500',
    title: 'Annual Family Care Journey',
    description: 'Full 22-sprint comprehensive clinical navigation tailored for multi-child households, paired with a dedicated concierge psychologist.',
    priceMain: '$9,611',
    priceSub: '$11,111 / year',
    meta: 'Includes 24/7 Crisis Access',
    buttonText: 'Claim Package',
    buttonPrimary: true
  },
  {
    id: 'offer-2',
    badge: 'Targeted Relief',
    badgeAccent: 'Modular Support',
    title: 'Care Sprint Bundle',
    description: 'Hands-on private coordination block for sudden behavioral, educational, or neurodevelopmental transitions.',
    priceMain: '$555',
    priceSub: 'per single sprint sprint',
    meta: 'Guaranteed 48h turnaround',
    buttonText: 'Configure Sprint',
    buttonPrimary: false
  },
  {
    id: 'offer-3',
    badge: 'Scottsdale, AZ',
    badgeAccent: '$250 Voucher Applied',
    title: '2025 Annual Retreat & Conference',
    description: 'The Phoenician Luxury Sanctuary. 4 days of pediatric neuro-workshops, sensory-safe family excursions, and private care retreats.',
    priceMain: 'Oct 14–18',
    priceSub: 'VIP Family Suite Held',
    meta: '2 Suites Available',
    buttonText: 'Reserve Room',
    buttonPrimary: true
  }
];

export const SIX_LINES_OF_CARE: LineOfCareItem[] = [
  {
    id: 'line-01',
    number: 'Line 01',
    title: 'Telemedicine',
    tag: 'Available Now',
    badgeColor: {
      bar: 'bg-orange-500',
      bg: 'bg-orange-100',
      text: 'text-orange-700'
    },
    description: '24/7 Virtual Consultations with board-certified pediatric and adolescent specialists. Direct digital prescriptions and priority lab orders.',
    highlightIcon: 'stethoscope',
    highlightTitle: 'Dr. Elena Rostova',
    highlightSubtitle: 'Lead Pediatrician • Active Standby',
    metaLeft: 'Avg Wait: < 4 mins',
    actionText: 'Start Call',
    actionIcon: 'videocam'
  },
  {
    id: 'line-02',
    number: 'Line 02',
    title: 'Insurance Claims',
    tag: 'Cigna Auto-Filing',
    badgeColor: {
      bar: 'bg-blue-500',
      bg: 'bg-blue-100',
      text: 'text-blue-700'
    },
    description: 'Direct claims auto-tracking, real-time appeals handling, and zero-hassle reimbursement management directly with your insurer.',
    highlightIcon: 'receipt',
    highlightTitle: 'Claim #CG-91024',
    highlightSubtitle: '1 Claim Pending Reimbursement ($340)',
    metaLeft: 'Last filed: 2 days ago',
    actionText: 'Track Claims',
    actionIcon: 'arrow_forward'
  },
  {
    id: 'line-03',
    number: 'Line 03',
    title: 'Legal Drafting',
    tag: '4 Drafts Remaining',
    badgeColor: {
      bar: 'bg-red-500',
      bg: 'bg-red-100',
      text: 'text-red-700'
    },
    description: 'Eligible family medical proxies, specialized school accommodation IEP affidavits, and statutory medical workplace leave paperwork.',
    highlightIcon: 'gavel',
    highlightTitle: 'Marcus IEP Accommodation Draft',
    highlightSubtitle: 'Attorney Reviewed • Ready for Sign',
    metaLeft: 'State: Arizona Bar Valid',
    actionText: 'Open Document Vault',
    actionIcon: 'folder'
  },
  {
    id: 'line-04',
    number: 'Line 04',
    title: 'Travel & Relocation Assistance',
    tag: 'Scottsdale Itinerary Ready',
    badgeColor: {
      bar: 'bg-purple-500',
      bg: 'bg-purple-100',
      text: 'text-purple-700'
    },
    description: 'Sensory-friendly flight routing, luxury respite accommodation, dedicated clinical transport, and relocation school transition guides.',
    highlightIcon: 'plane',
    highlightTitle: 'Phoenician Conference Suite',
    highlightSubtitle: 'Quiet wing • Low-stimulation check-in',
    metaLeft: 'Concierge: Ava Lind',
    actionText: 'View Itinerary',
    actionIcon: 'luggage'
  },
  {
    id: 'line-05',
    number: 'Line 05',
    title: 'AI Family Operations',
    tag: 'AI Sensory Engine',
    badgeColor: {
      bar: 'bg-amber-500',
      bg: 'bg-amber-100',
      text: 'text-amber-700'
    },
    description: 'Smart routine synchronizer, clinical binder semantic search, and predictive sensory overload forecaster based on Marcus\'s schedule.',
    highlightIcon: 'bot',
    highlightTitle: 'Optimal Bedtime Shift (+25m)',
    highlightSubtitle: 'Calm cadence suggested for tonight',
    metaLeft: 'Syncs with Apple Health',
    actionText: 'Open Co-Pilot',
    actionIcon: 'zap'
  },
  {
    id: 'line-06',
    number: 'Line 06',
    title: 'Financial Literacy to Grow',
    tag: 'FSA Rollover Optimized',
    badgeColor: {
      bar: 'bg-emerald-500',
      bg: 'bg-emerald-100',
      text: 'text-emerald-700'
    },
    description: 'HSA/FSA tax-advantaged developmental fund allocation, special needs trusts advisory, and therapeutic grant discovery.',
    highlightIcon: 'landmark',
    highlightTitle: 'Tax-Exempt Neuro Trust',
    highlightSubtitle: '100% compliant with 2025 IRS standard',
    metaLeft: 'Q1 Allocation: 92% Complete',
    actionText: 'View Wealth Plan',
    actionIcon: 'trending_up'
  }
];

export const CARE_CIRCLE_MEMBERS: CareCircleMember[] = [
  {
    id: 'brianna',
    name: 'Brianna Campbell',
    organization: 'KC Chiefs',
    role: 'Dir. Player Engagement',
    mutualTies: 4,
    isOnline: true
  },
  {
    id: 'elena',
    name: 'Elena Rodriguez-Torres',
    organization: 'Miami Dolphins',
    role: 'VP Wellness Ops',
    mutualTies: 6,
    isOnline: true
  },
  {
    id: 'kimberly',
    name: 'Dr. Kimberly Vance',
    organization: 'Phila. Eagles Alumni',
    role: 'Advisory',
    mutualTies: 5,
    isOnline: false
  },
  {
    id: 'aaliyah',
    name: 'Aaliyah Chen',
    organization: 'SF 49ers',
    role: 'Senior Operations',
    mutualTies: 3,
    isOnline: true
  }
];

export const SAMPLE_CLAIMS: ClaimItem[] = [
  {
    id: 'claim-1',
    code: '#CG-91024',
    service: 'Pediatric Neuro-Speech Evaluation',
    provider: 'Dr. Elena Rostova & Dr. Miller',
    date: 'Sep 18, 2026',
    amount: 340.00,
    reimbursement: 340.00,
    status: 'pending'
  },
  {
    id: 'claim-2',
    code: '#CG-89410',
    service: 'Bilateral Occupational Therapy Block',
    provider: 'Valley Childrens Clinic',
    date: 'Sep 04, 2026',
    amount: 480.00,
    reimbursement: 480.00,
    status: 'approved'
  },
  {
    id: 'claim-3',
    code: '#CG-87992',
    service: 'Sensory Integration Pacing Consultation',
    provider: 'Sunshine Clinical Sanctuary',
    date: 'Aug 22, 2026',
    amount: 250.00,
    reimbursement: 250.00,
    status: 'approved'
  }
];

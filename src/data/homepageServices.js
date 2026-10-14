import {
  IconShield,
  IconTarget,
  IconRadar,
  IconUserShield,
  IconSwords,
} from '@tabler/icons-vue'

export const services = [
  {
    slug: 'ciso-as-a-service',
    number: '01',
    title: 'CISO as a service',
    headline: 'Cybersecurity leadership built into your business rhythm.',
    summary:
      'Executive strategy, governance, and security oversight for teams that need senior guidance without a full-time CISO.',
    intro:
      'We help leadership teams turn cyber risk into practical business decisions, clear accountability, and stronger resilience.',
    description:
      'Your business needs strategic clarity. We provide leadership support that aligns cyber priorities with operational reality, so decisions are informed, measurable, and action-oriented.',
    icon: IconShield,
    protectionAreas: [
      'Risk appetite and priorities aligned to business objectives',
      'Security governance and program maturity reviews',
      'Board-ready reporting and action planning',
      'Hands-on leadership support for critical decisions',
    ],
    outcome:
      'Your organization gains executive-level cyber visibility and a practical path to reduce risk without slowing business momentum.',
  },
  {
    slug: 'red-team-operations',
    number: '02',
    title: 'Red team operations',
    headline: 'Adversary-led testing that exposes real-world weakness.',
    summary:
      'Simulate realistic attacks to identify gaps in technology, process, and decision-making before someone else does.',
    intro:
      'We test how your people, systems, and processes behave under pressure so the real risks become visible before they become incidents.',
    description:
      'Security programs need more than compliance checklists. We challenge assumptions from the attacker’s perspective to reveal the paths that matter most and help teams improve with confidence.',
    icon: IconTarget,
    stages: [
      'Identify the objective and relevant surfaces',
      'Map exposure paths and likely opportunities',
      'Test the plan with realistic tradecraft',
      'Validate impact and prioritize action',
    ],
    outcome:
      'You get an honest view of your current defenses and a more realistic understanding of where adversaries are likely to exploit gaps.',
  },
  {
    slug: 'digital-risk-protection',
    number: '03',
    title: 'Digital risk protection',
    headline: 'Visibility into the threats hiding outside your perimeter.',
    summary:
      'Identify impersonation, leaked data, lookalikes, and exposure across the digital ecosystem before they escalate.',
    intro:
      'Your exposure does not live only inside your network. We help surface the digital activity that can compromise trust, brand, and access.',
    description:
      'Digital risk protection brings clarity to what is happening beyond your own systems. We monitor, validate, and prioritize exposures that impact people, brand, operations, and security posture.',
    icon: IconRadar,
    monitoring: [
      'Monitoring of exposed credentials and lookalike domains',
      'Brand and executive impersonation detection',
      'Threat intelligence correlation and context',
      'Prioritized remediation guidance',
    ],
    outcome:
      'Teams can act on external exposure quickly, reducing risk before attackers weaponize it against your people or brand.',
  },
  {
    slug: 'vip-protection',
    number: '04',
    title: 'VIP protection',
    headline: 'Protection built around the person, not just the office.',
    summary:
      'Protect high-value individuals and their families with security strategies tailored to real-world threats and operational risk.',
    intro:
      'High-risk individuals require a different level of awareness, planning, and protective intelligence. We help reduce exposure where it matters most.',
    description:
      'We combine threat intelligence, digital monitoring, and practical protective planning to help secure the people who are most exposed to targeted risk.',
    icon: IconUserShield,
    protectionAreas: [
      'Executive and VIP exposure reviews',
      'Threat awareness and protective intelligence',
      'Travel and event risk planning',
      'Digital and social risk mitigation',
    ],
    outcome:
      'Executives and high-value individuals gain clearer situational awareness and a more resilient protection plan built around their actual risk profile.',
  },
  {
    slug: 'operational-readiness-and-small-unit-tactics',
    number: '05',
    title: 'Operational readiness & small unit tactics',
    headline: 'Prepare teams to act with clarity when conditions become uncertain.',
    summary:
      'Train teams to maintain awareness, communicate effectively, and make disciplined decisions under pressure.',
    intro:
      'Readiness is not just about tools. It is about how a team thinks, responds, and coordinates when the pressure escalates.',
    description:
      'We design training and readiness programs that help teams respond thoughtfully, communicate clearly, and make effective decisions under operational stress.',
    icon: IconSwords,
    trainingAreas: [
      'Threat awareness and decision-making under pressure',
      'Communication and coordination during incidents',
      'Leadership and role clarity in fast-moving conditions',
      'Scenario-based exercises and team rehearsal',
    ],
    readinessStages: [
      'Assess current readiness',
      'Clarify roles and decision paths',
      'Train under realistic scenarios',
      'Rehearse and refine response',
    ],
    outcome:
      'Teams are better prepared to act decisively, communicate clearly, and handle uncertainty without losing focus or control.',
  },
]

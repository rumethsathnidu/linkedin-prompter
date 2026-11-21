export const CLASSIC_EXAMPLES = [
  {
    label: 'Washed the dishes',
    input: 'I washed the dishes.',
  },
  {
    label: 'Changed a lightbulb',
    input: 'I changed a lightbulb.',
  },
  {
    label: 'Hit snooze 5 times',
    input: 'I hit snooze 5 times.',
  },
  {
    label: 'Dog barked at mailman',
    input: 'My dog barked at the mailman.',
  },
  {
    label: 'Got laid off',
    input: 'I got laid off.',
  },
  {
    label: 'Made instant noodles',
    input: 'I made instant noodles at 2am.',
  },
  {
    label: 'Ignored my emails',
    input: 'I ignored all my emails today.',
  },
  {
    label: 'Stuck in traffic',
    input: 'I got stuck in traffic for an hour.',
  },
];

export const RANDOM_INPUTS = [
  'I took a 3 hour nap.',
  'I spilled coffee on my shirt.',
  'I watched Netflix all weekend.',
  'I forgot my password again.',
  'I ordered pizza instead of cooking.',
  'I tripped in front of everyone.',
  'I muted myself and ate snacks during the meeting.',
  'I procrastinated until the last minute.',
  'I ate cereal for dinner.',
  'My code broke in production.',
  'I fell asleep during a Zoom call.',
  'I spent $40 on iced coffee this week.',
  'I lost my keys.',
  'I burned my toast.',
];

const CURATED_PATTERNS = [
  {
    test: /wash(ed|ing)?\s+(the\s+)?dish(es)?|do(ing)?\s+(the\s+)?dish(es)?/i,
    levels: {
      1: [
        'Spearheaded post-consumption asset restoration and sanitation protocols.',
        'Executed end-to-end ceramic inventory decontamination and drying workflows.',
      ],
      2: [
        'Today I spearheaded post-consumption asset restoration and sanitation protocols.\n\nIt wasn’t glamorous, but operational excellence starts in the sink.\n\nKey takeaway: Clean pipelines create clear minds.\n\n#OperationalExcellence #SanitationStrategy #GrowthMindset',
        'Just wrapped up a high-throughput ceramic restoration sprint in the kitchen.\n\nYou learn a lot about stakeholder patience when you’re scrubbing baked-on cheese at 10 PM.\n\n#ContinuousImprovement #Discipline #Leadership',
      ],
      3: [
        'I wasn’t going to share this, but someone needs to hear it.\n\nAt 9:14 PM, I walked into a high-friction kitchen environment.\n\n12 plates. 4 mugs. Zero excuses.\n\nI didn’t just "wash the dishes."\n\nI spearheaded post-consumption asset restoration and sanitation protocols.\n\nMost people wait for a dishwasher. Leaders become the dishwasher.\n\nAgree? 👇\n\n#Leadership #Grindset #OperationalExcellence #10x #HumbleHustle #Synergy',
        'Unpopular opinion: How you handle dirty dishes is how you handle Q4.\n\nTonight I cleared a 100% backlog of post-consumption ceramic assets in 14 minutes.\n\nNo shortcuts. Just Dawn Platinum and relentless ownership.\n\nStop delegating what you can dominate. 🔥\n\n#Ownership #FounderMindset #Execution #10x #Culture',
      ],
    },
  },
  {
    test: /chang(ed|ing)?\s+(a|the)?\s*light\s*bulb|replac(ed|ing)?\s+(a|the)?\s*light\s*bulb/i,
    levels: {
      1: [
        'Successfully executed a high-impact facilities illumination optimization task.',
        'Delivered a critical hardware upgrade to restore ambient workspace visibility.',
      ],
      2: [
        'Proud to share that I just executed a high-impact facilities illumination optimization task.\n\nWhen darkness hits your roadmap, you don’t complain—you pivot to 800 lumens.\n\n#FacilitiesInnovation #ProblemSolving #BrightIdeas',
        'Completed a zero-downtime LED infrastructure migration in the living room today.\n\nSmall hardware upgrades often unlock the biggest productivity gains.\n\n#Innovation #Execution #SmartHomes',
      ],
      3: [
        'Darkness is just an unoptimized user experience. 💡\n\nEarlier today, our team faced a 100% visibility outage in the hallway.\n\nInstead of blaming legacy infrastructure, I stepped up, rotated the legacy tungsten asset counter-clockwise, and executed a high-impact facilities illumination optimization task.\n\nThe ROI? Instant clarity.\n\nWhat’s one small win you’re celebrating today? 🚀\n\n#Innovation #Visionary #Illumination #Leadership #Disruption #CEO',
        'Stop scrolling. Read this. 💡\n\nWhen a lightbulb burns out, 99% of people sit in the dark and complain.\n\nThe top 1%? They grab a step-stool and deploy 800 lumens of pure strategic vision.\n\nBe the person who brings the light.\n\nAgree? 👇\n\n#ThoughtLeadership #Mindset #10x #ProblemSolver #Grind',
      ],
    },
  },
  {
    test: /snooze|hit\s+snooze|overslept|woke\s+up\s+late/i,
    levels: {
      1: [
        'Implemented a multi-stage strategic rest cycle to maximize morning alignment.',
        'Executed an iterative wake-up cadence to optimize cognitive readiness.',
      ],
      2: [
        'Implemented a multi-stage strategic rest cycle to maximize morning alignment.\n\nHustle culture tells you to wake up at 4 AM. True leaders know when to defer non-essential standups.\n\n#WorkLifeIntegration #StrategicRest #Mindfulness',
        'Ran five 9-minute agile sprints in bed this morning before kicking off my day.\n\nRecovery is a core pillar of sustainable high performance.\n\n#BurnoutPrevention #MorningRoutine #Wellness',
      ],
      3: [
        'Unpopular opinion: I hit snooze 5 times this morning. ⏰\n\nAnd I’m not ashamed.\n\nI implemented a multi-stage strategic rest cycle to maximize morning alignment.\n\nWhile everyone else was rushing into burnout, I was A/B testing horizontal productivity.\n\nBy 10:15 AM, my horizontal synergy was unmatched.\n\nProtect your bandwidth. 👇\n\n#MentalHealth #FounderLife #Biohacking #MorningRoutine #Synergy #ThoughtLeader',
        'At 6:30 AM, my alarm challenged my boundaries.\n\nI said "Not today" — five consecutive times.\n\nThat’s not laziness. That’s executive prioritization of REM-cycle ROI.\n\nDrop a ⏰ if you refuse to let hustle culture dictate your mornings!\n\n#Biohacking #Boundaries #Leadership #RestIsProductive #10x',
      ],
    },
  },
  {
    test: /dog\s+bark(ed|ing)?|bark(ed|ing)?\s+at\s+(the\s+)?(mailman|delivery|postman|stranger)/i,
    levels: {
      1: [
        'Proactively identified and neutralized a potential perimeter security breach.',
        'Deployed real-time acoustic deterrence against unauthorized logistics personnel.',
      ],
      2: [
        'Big shoutout to our Chief Barking Officer for proactively identifying and neutralizing a potential perimeter security breach today.\n\nZero-trust architecture starts at the front porch.\n\n#CyberSecurity #ZeroTrust #Teamwork',
        'Our home security team executed a rapid-response acoustic alert during a routine parcel delivery.\n\n10/10 situational awareness. Zero packages missed.\n\n#SecurityOps #Leadership #DogsofLinkedIn',
      ],
      3: [
        'Today, my furry VP of Security taught me everything I know about B2B resilience. 🐕\n\nAt 11:02 AM, an unverified logistics vendor approached our perimeter.\n\nDid we schedule a committee meeting? No.\n\nWe proactively identified and neutralized a potential perimeter security breach at 95 decibels.\n\nThe mailman pivoted immediately.\n\nHire for attitude. Train for bark. 🔥\n\n#Security #LeadershipLessons #DogsofLinkedIn #Agile #Execution #Culture',
        'My dog doesn’t have an MBA.\n\nYet today he neutralized an unauthorized perimeter intrusion in 0.4 seconds.\n\nSometimes your best talent just needs a window, a squeaky toy, and total autonomy.\n\nWho else is grateful for their furry co-founders? 🐾👇\n\n#Culture #Autonomy #Security #ThoughtLeadership #DogsOfLinkedIn',
      ],
    },
  },
  {
    test: /laid\s+off|got\s+fired|lost\s+my\s+job|let\s+go|rejected\s+from/i,
    levels: {
      1: [
        'Thrilled to announce I am embarking on an unexpected journey of self-discovery and open to new synergies!',
        'Transitioning into a strategic career sabbatical while exploring high-impact advisory opportunities.',
      ],
      2: [
        'After an incredible chapter, I’m thrilled to announce I am embarking on an unexpected journey of self-discovery and open to new synergies!\n\nGrateful for the learnings, the late nights, and the sudden calendar freedom.\n\n#OpenToWork #NewBeginnings #Gratitude',
        'Following a strategic organizational realignment, I’m officially back on the market.\n\nExcited to bring my cross-functional energy to a team that values impact.\n\n#CareerTransition #OpenToWork #Networking',
      ],
      3: [
        'I have some bittersweet news to share with my network. 💙\n\nDue to recent macroeconomic recalibrations, my role was sunsetted this morning.\n\nAm I devastated? No. I’m THRILLED to announce I am embarking on an unexpected journey of self-discovery and open to new synergies!\n\nThis isn’t a setback—it’s a forced pivot toward greatness.\n\nIf you know anyone hiring a 10x generalist who cries quietly in the shower, my DMs are wide open! 🚀🙏\n\n#OpenToWork #Grateful #Resilience #CareerPivot #Networking #Blessed',
        'When one door closes, HR disables your badge. 🚪\n\nAnd honestly? Thank you.\n\nToday I was liberated from my comfort zone to pursue hyper-growth opportunities.\n\nIf your team needs someone who is chronically online and fueled by mild panic, let’s connect! 👇\n\n#OpenToWork #Resilience #SilverLining #Hiring #CareerGrowth',
      ],
    },
  },
  {
    test: /noodle|ramen|pasta|mac\s+and\s+cheese|microwave|pizza|cereal|toast/i,
    levels: {
      1: [
        'Executed a rapid, lean-budget culinary deployment under tight time constraints.',
        'Leveraged agile nutrition solutions to sustain late-night operational velocity.',
      ],
      2: [
        'Executed a rapid, lean-budget culinary deployment tonight.\n\nSometimes you don’t need a Michelin-star roadmap—you just need boiling water and a 3-minute SLA.\n\n#LeanStartup #Bootstrap #Velocity',
        'Optimized evening caloric intake with a zero-prep, high-efficiency meal architecture.\n\nSimplicity scales.\n\n#LeanOps #Productivity #Bootstrapping',
      ],
      3: [
        '2:00 AM. Empty fridge. High stakes. 🍜\n\nI could have waited for morning.\n\nInstead, I executed a rapid, lean-budget culinary deployment with a 180-second time-to-market.\n\nZero Michelin stars. 100% sodium-driven ROI.\n\nStay hungry. Literally. 🔥\n\n#Bootstrapping #FounderGrind #Agile #NutritionOps #Hustle #MidnightOil',
        'People overcomplicate dinner.\n\nTonight I disrupted traditional meal-prep by shipping a minimum viable bowl of cereal in under 45 seconds.\n\nNo chopping. No dishes. Pure velocity.\n\nMove fast and eat carbs. 🚀\n\n#MVP #Velocity #StartupLife #Lean #10x',
      ],
    },
  },
  {
    test: /ignor(ed|ing)?\s+(my\s+|all\s+)?email|didn'?t\s+reply|ghost(ed|ing)?|unread/i,
    levels: {
      1: [
        'Prioritized deep-work bandwidth by deferring non-critical asynchronous communications.',
        'Implemented aggressive inbox triage to protect high-leverage strategic focus.',
      ],
      2: [
        'Prioritized deep-work bandwidth today by strategically deferring 47 asynchronous communications.\n\n"Unread" isn’t negligence—it’s ruthless prioritization.\n\n#DeepWork #Productivity #InboxZeroIsh',
      ],
      3: [
        'I left 47 emails unread today. On purpose. 📩\n\nLet that sink in.\n\nWhile others confuse motion with progress, I prioritized deep-work bandwidth by deferring non-critical asynchronous communications.\n\nIf it’s truly urgent, they’ll Slack me twice.\n\nProtect your peace. Mute your notifications. 💯\n\n#DeepWork #Boundaries #CEO #ProductivityHacks #Focus #ThoughtLeadership',
      ],
    },
  },
  {
    test: /traffic|commute|stuck\s+on\s+the\s+highway|bus|train|flight/i,
    levels: {
      1: [
        'Navigated a prolonged transit throughput bottleneck while conducting audio-based ideation.',
        'Demonstrated patience and adaptability during an unexpected transit latency event.',
      ],
      2: [
        'Navigated a 60-minute transit throughput bottleneck today.\n\nInstead of getting frustrated, I turned my commute into a mobile innovation lab.\n\n#Mindset #ContinuousLearning #Adaptability',
      ],
      3: [
        'Stuck in gridlock for 60 minutes. Bumper to bumper. 🚗\n\nMost people honk. I reflect.\n\nI navigated a prolonged vehicular throughput bottleneck while auditing 3 podcasts and reimagining Q4.\n\nTraffic isn’t a delay—it’s an unscheduled mobile offsite.\n\nWho else turns red lights into green flags? 🚦👇\n\n#GrowthMindset #Grind #MobileOffice #Resilience #Leadership #Perspective',
      ],
    },
  },
  {
    test: /nap|slept|sleep(ing)?|fell\s+asleep/i,
    levels: {
      1: [
        'Conducted an unplanned mid-day cognitive reboot to optimize afternoon output.',
        'Invested in preventative burnout mitigation via scheduled horizontal downtime.',
      ],
      2: [
        'Conducted a 3-hour cognitive reboot this afternoon.\n\nRest isn’t the opposite of productivity—it’s the foundation of sustainable scale.\n\n#BurnoutPrevention #Wellness #SustainableGrowth',
      ],
      3: [
        'I took a 3-hour nap at 2:00 PM on a Tuesday. 😴\n\nAnd my productivity? Skyrocketed.\n\nI conducted an unscheduled cognitive reboot to optimize Q4 mental bandwidth.\n\nStop glorifying exhaustion. Start glorifying REM cycles.\n\nDrop a 💤 if you believe in horizontal leadership!\n\n#Wellness #FounderMindset #SleepOps #Biohacking #WorkLifeBalance #10x',
      ],
    },
  },
  {
    test: /coffee|espresso|latte|tea|iced\s+coffee/i,
    levels: {
      1: [
        'Procured and integrated artisanal caffeinated fuel to accelerate morning deliverables.',
        'Executed a critical liquid-energy onboarding process prior to daily standup.',
      ],
      2: [
        'Procured and integrated artisanal caffeinated fuel to accelerate morning deliverables.\n\nNever underestimate the ROI of a well-timed oat milk latte.\n\n#MorningRitual #Fuel #Execution',
      ],
      3: [
        'Before I send a single Slack message, I do one thing. ☕\n\nI procure and integrate artisanal caffeinated fuel to accelerate morning deliverables.\n\nPeople ask me how I stay 10x.\n\nIt’s simple: Bean-to-brain synergy.\n\nWhat’s your non-negotiable morning KPI? 👇\n\n#CoffeeTime #MorningRoutine #HighPerformance #Synergy #Hustle #Mindset',
      ],
    },
  },
  {
    test: /netflix|youtube|tv|movie|binge|game|gaming|tiktok|reels|scrolling/i,
    levels: {
      1: [
        'Completed an immersive benchmarking study on modern narrative engagement platforms.',
        'Allocated evening bandwidth to cross-media storytelling analysis and decompression.',
      ],
      2: [
        'Completed a multi-hour benchmarking study on modern narrative engagement platforms.\n\nStudying consumer retention hooks is how you stay sharp.\n\n#MediaStrategy #UserRetention #ContinuousLearning',
      ],
      3: [
        'People told me watching 8 hours of streaming content was "wasting time." 📺\n\nThey don’t see the vision.\n\nI completed an immersive benchmarking study on modern narrative engagement platforms.\n\nEvery cliffhanger is a masterclass in B2C retention.\n\nStay curious. Always be benchmarking. 🚀\n\n#Storytelling #ProductDesign #Retention #Growth #WeekendVibes #AlwaysLearning',
      ],
    },
  },
  {
    test: /password|forgot|lock(ed)?\s+out/i,
    levels: {
      1: [
        'Initiated a proactive credential rotation protocol to reinforce personal cybersecurity.',
        'Tested enterprise-grade identity recovery workflows under real-world conditions.',
      ],
      2: [
        'Initiated a proactive credential rotation protocol today (definitely not because I forgot my password).\n\nSecurity is a journey, not a destination.\n\n#InfoSec #CyberHygiene #ZeroTrust',
      ],
      3: [
        'Locked out of my own account for 25 minutes. 🔐\n\nA failure? Hardly.\n\nI stress-tested our enterprise identity recovery workflows and initiated a proactive credential rotation protocol.\n\nAdded a "!" at the end. Security posture: upgraded.\n\nNever waste a good crisis. 💪\n\n#CyberSecurity #Resilience #TechLeadership #ProblemSolver #IT #Growth',
      ],
    },
  },
  {
    test: /broke\s+in\s+prod|production|bug|crash(ed)?|deploy(ed)?\s+on\s+friday/i,
    levels: {
      1: [
        'Facilitated a live-environment resilience drill to validate incident response SLAs.',
        'Identified an undocumented edge-case opportunity within production infrastructure.',
      ],
      2: [
        'Facilitated an unscheduled live-environment resilience drill today.\n\nNothing builds cross-functional alignment faster than a 500 error at 4:55 PM on a Friday.\n\n#DevOps #IncidentResponse #EngineeringCulture',
      ],
      3: [
        'I pushed directly to production on a Friday afternoon. 💻🔥\n\nDid the server catch fire? Yes.\n\nDid we learn more in 12 minutes of panic than in 6 months of staging? Also yes.\n\nFail fast. Roll back faster.\n\nTag a senior dev who deserves a hug today! 👇\n\n#TechTwitter #SoftwareEngineering #DevOps #FailForward #10xDeveloper #Resilience',
      ],
    },
  },
  {
    test: /lost\s+(my\s+)?keys|forgot\s+(my\s+)?(keys|wallet|umbrella)/i,
    levels: {
      1: [
        'Conducted an unscheduled physical asset audit to optimize departure readiness.',
        'Executed a real-time contingency protocol following temporary hardware misplacement.',
      ],
      2: [
        'Conducted a 20-minute physical asset discovery sprint before leaving the house today.\n\nSometimes the biggest bottlenecks are right inside your own couch cushions.\n\n#ProblemSolving #AssetManagement #Adaptability',
      ],
      3: [
        'Couldn’t find my keys for 25 minutes this morning. 🔑\n\nMissed my bus. Showed up soaked.\n\nAnd yet, it was the greatest asset-traceability audit of my career.\n\nWhen life hides your keys, check the fridge. Think outside the box.\n\nAgree? 👇\n\n#Mindset #LateralThinking #Resilience #ProblemSolver #Growth',
      ],
    },
  },
];

// Multi-word phrase replacements applied before single-word tokenizing
const PHRASE_RULES = [
  [/\bi('?m|\s+am)\s+tired\b/gi, 'operating at peak cognitive depletion after a high-output sprint'],
  [/\bi('?m|\s+am)\s+broke\b/gi, 'navigating a lean pre-seed personal liquidity phase'],
  [/\bi('?m|\s+am)\s+late\b/gi, 'executing a staggered arrival strategy'],
  [/\bi('?m|\s+am)\s+hungry\b/gi, 'experiencing an acute caloric pipeline deficit'],
  [/\bi('?m|\s+am)\s+bored\b/gi, 'experiencing unallocated innovation bandwidth'],
  [/\bi('?m|\s+am)\s+sick\b/gi, 'undergoing an unscheduled biological system maintenance cycle'],
  [/\bstayed\s+up\s+(until|till)?\b/gi, 'extended operational hours through'],
  [/\bfell\s+asleep\b/gi, 'initiated an involuntary cognitive power-down'],
  [/\bran\s+out\s+of\b/gi, 'exhausted legacy inventory of'],
  [/\bwent\s+to\b/gi, 'deployed on-site to'],
  [/\bgot\s+stuck\s+in\b/gi, 'navigated a high-friction bottleneck in'],
  [/\bspent\s+(\$\d+|\d+\s+dollars?)\s+on\b/gi, 'allocated $1 in strategic capital toward'],
  [/\bfor\s+dinner\b/gi, 'as an evening nutritional deliverable'],
  [/\bfor\s+breakfast\b/gi, 'as a morning kickoff fuel'],
  [/\bfor\s+lunch\b/gi, 'as a mid-day energy sync'],
  [/\bin\s+front\s+of\s+everyone\b/gi, 'in a high-visibility stakeholder environment'],
  [/\buntil\s+the\s+last\s+minute\b/gi, 'using just-in-time agile execution'],
  [/\ball\s+day\b/gi, 'across a continuous 24-hour sprint'],
  [/\ball\s+weekend\b/gi, 'throughout a 48-hour off-cycle sprint'],
  [/\bmute(d)?\s+myself\b/gi, 'activated acoustic isolation protocols'],
];

const VERB_MAP = {
  washed: 'spearheaded sanitation protocols for',
  wash: 'spearhead sanitation protocols for',
  cleaned: 'executed end-to-end decontamination of',
  clean: 'execute end-to-end decontamination of',
  made: 'architected and deployed',
  make: 'architect and deploy',
  cooked: 'engineered a bespoke culinary deliverable involving',
  cook: 'engineer a bespoke culinary deliverable involving',
  ate: 'completed strategic nutritional intake of',
  eat: 'complete strategic nutritional intake of',
  bought: 'executed a high-ROI procurement of',
  buy: 'execute a high-ROI procurement of',
  ordered: 'leveraged on-demand supply chain logistics for',
  order: 'leverage on-demand supply chain logistics for',
  fixed: 'resolved a critical production bottleneck in',
  fix: 'resolve a critical production bottleneck in',
  broke: 'conducted destructive stress-testing on',
  break: 'conduct destructive stress-testing on',
  burned: 'performed high-temperature thermal stress-testing on',
  burn: 'perform high-temperature thermal stress-testing on',
  dropped: 'executed an unplanned gravity-assisted drop test on',
  drop: 'execute an unplanned gravity-assisted drop test on',
  spilled: 'facilitated an unscheduled liquid distribution event across',
  spill: 'facilitate an unscheduled liquid distribution event across',
  lost: 'initiated an involuntary asset divestment of',
  lose: 'initiate an involuntary asset divestment of',
  forgot: 'strategically deprioritized legacy memory retention of',
  forget: 'strategically deprioritize legacy memory retention of',
  watched: 'conducted an immersive benchmarking audit of',
  watch: 'conduct an immersive benchmarking audit of',
  played: 'engaged in gamified cognitive-agility training via',
  play: 'engage in gamified cognitive-agility training via',
  walked: 'led an outdoor stakeholder alignment expedition with',
  walk: 'lead an outdoor stakeholder alignment expedition with',
  drove: 'piloted mobile transit infrastructure through',
  drive: 'pilot mobile transit infrastructure through',
  survived: 'demonstrated extraordinary operational resilience throughout',
  survive: 'demonstrate extraordinary operational resilience throughout',
  skipped: 'ruthlessly deprioritized',
  skip: 'ruthlessly deprioritize',
  missed: 'strategically bypassed',
  miss: 'strategically bypass',
  finished: 'delivered 100% completion on',
  finish: 'deliver 100% completion on',
  started: 'kicked off a zero-to-one initiative around',
  start: 'kick off a zero-to-one initiative around',
  cried: 'facilitated an emotional stakeholder release regarding',
  cry: 'facilitate an emotional stakeholder release regarding',
  procrastinated: 'strategically deferred execution to maximize creative tension',
  tripped: 'performed an impromptu kinetic humility exercise',
  failed: 'unlocked a high-velocity learning opportunity in',
  waited: 'managed stakeholder latency expectations',
  quit: 'executed a decisive strategic exit from',
  studied: 'conducted intensive domain-knowledge ingestion on',
  worked: 'drove cross-functional execution',
};

const NOUN_MAP = {
  dishes: 'post-consumption ceramic assets',
  laundry: 'textile maintenance backlog',
  room: 'primary operational headquarters',
  desk: 'executive command center',
  bed: 'horizontal recovery station',
  shirt: 'executive apparel',
  phone: 'mobile communications hardware',
  screen: 'primary user-interface glass',
  laptop: 'mission-critical compute node',
  computer: 'mission-critical compute node',
  wifi: 'wireless broadband infrastructure',
  dog: 'Chief Barking Officer',
  cat: 'Feline Operations Director',
  coffee: 'artisanal caffeinated fuel',
  pizza: 'circular carbohydrate synergy',
  snacks: 'micro-nutritional morale boosters',
  meeting: 'cross-functional alignment sync',
  zoom: 'synchronous video-alignment',
  boss: 'executive stakeholder',
  homework: 'academic deliverable pipeline',
  exam: 'high-stakes competency benchmark',
  code: 'proprietary software architecture',
  bug: 'undocumented feature opportunity',
  monday: 'the Q1 weekly kickoff cycle',
  weekend: 'the 48-hour recharge sprint',
  everyone: 'key cross-functional observers',
  rain: 'unforecasted atmospheric precipitation',
  trash: 'obsolete waste-stream inventory',
  garbage: 'obsolete waste-stream inventory',
  groceries: 'household supply-chain replenishment',
  gym: 'physical KPI optimization facility',
  keys: 'physical access credentials',
  toast: 'artisanal grain substrate',
  cereal: 'fortified crunch-based nutrition',
};

function pickHashtags(text) {
  const lower = text.toLowerCase();
  if (/code|bug|prod|app|wifi|laptop|computer|zoom/.test(lower)) {
    return '#TechLeadership #Agile #EngineeringCulture #Innovation #DevOps #10x';
  }
  if (/coffee|pizza|eat|ate|cook|toast|cereal|dinner|lunch|breakfast|snack/.test(lower)) {
    return '#LeanStartup #NutritionOps #Velocity #Bootstrapping #Fuel #Execution';
  }
  if (/money|\$|broke|spent|bought|cost/.test(lower)) {
    return '#FinancialLiteracy #ROI #CapitalAllocation #Bootstrapping #Growth';
  }
  if (/sleep|nap|tired|late|wait|time|hour|morning|weekend/.test(lower)) {
    return '#TimeManagement #BurnoutPrevention #Productivity #Mindfulness #Balance';
  }
  return '#Leadership #Synergy #GrowthMindset #OperationalExcellence #10x #ThoughtLeadership';
}

const LEVEL_1_TEMPLATES = [
  (core) => `Successfully ${core} to drive cross-functional alignment and measurable impact.`,
  (core) => `Proactively ${core}, ensuring seamless operational continuity and stakeholder value.`,
  (core) => `Strategically ${core} as part of an ongoing commitment to personal KPI optimization.`,
];

const LEVEL_2_TEMPLATES = [
  (core, tags) =>
    `Today I ${core}.\n\nIt wasn’t glamorous, but operational excellence is built in the micro-moments.\n\nKey takeaway: Small daily executions compound into massive long-term ROI.\n\n${tags.split(' ').slice(0, 3).join(' ')}`,
  (core, tags) =>
    `Just wrapped up a key personal sprint where I ${core}.\n\nHere are 3 things it taught me about leadership:\n• Ownership starts with showing up\n• Velocity beats perfection\n• Always document the pivot\n\n${tags.split(' ').slice(0, 3).join(' ')}`,
  (core, tags) =>
    `Proud to share that I ${core} today.\n\nExcellence isn’t an act—it’s a repeatable operational habit.\n\n${tags.split(' ').slice(0, 3).join(' ')}`,
];

const LEVEL_3_TEMPLATES = [
  (core, tags) =>
    `I wasn’t going to post this today, but someone needs to hear it. 👇\n\nEarlier today, I faced a classic execution challenge.\n\nInstead of making excuses, I ${core}.\n\nMost people wait for permission. Leaders ship.\n\nAgree? Let’s discuss in the comments. 🔥\n\n${tags}`,
  (core, tags) =>
    `Hot take: Most people are overcomplicating growth. 💡\n\nThis morning, I ${core}.\n\nZero fancy frameworks. Zero committees.\n\nJust pure, unadulterated execution and a relentless bias toward action.\n\nDrop a 💯 if you’re optimizing every single hour! 🚀\n\n${tags}`,
  (core, tags) =>
    `Stop scrolling. Read this twice. 🚀\n\nA year ago, I would have panicked.\n\nToday? I ${core}—and turned a routine moment into a masterclass in resilience.\n\nIt’s not about what happens to you. It’s about how you leverage the pivot.\n\nRepost to inspire your network! ♻️\n\n${tags}`,
];

function transformTokens(rawText) {
  let cleaned = rawText.trim().replace(/[.!?]+$/, '');
  if (!cleaned) return '';

  // Apply multi-word phrase rules first
  for (const [regex, replacement] of PHRASE_RULES) {
    cleaned = cleaned.replace(regex, replacement);
  }

  // Strip leading subject pronouns if still present
  cleaned = cleaned
    .replace(/^(today\s+)?i\s+/i, '')
    .replace(/^we\s+/i, '')
    .replace(/^my\s+/i, 'our ');

  const words = cleaned.split(/\s+/);
  const transformed = words.map((word) => {
    const match = word.match(/^([a-zA-Z0-9'$]+)(.*)$/);
    if (!match) return word;
    const bare = match[1].toLowerCase();
    const punct = match[2] || '';
    if (VERB_MAP[bare]) return VERB_MAP[bare] + punct;
    if (NOUN_MAP[bare]) return NOUN_MAP[bare] + punct;
    return word;
  });

  const result = transformed.join(' ');
  return result.charAt(0).toLowerCase() + result.slice(1);
}

export function generateLinkedInPost(input, intensity = 2, variantIndex = 0) {
  const trimmed = input.trim();
  if (!trimmed) {
    return 'Enter a mundane everyday sentence on the left to watch it transform into corporate LinkedIn gold.';
  }

  // Check curated meme patterns first
  for (const pattern of CURATED_PATTERNS) {
    if (pattern.test.test(trimmed)) {
      const options = pattern.levels[intensity] || pattern.levels[2];
      return options[variantIndex % options.length];
    }
  }

  // Smart general-purpose corporate-jargon synthesizer
  const core = transformTokens(trimmed);
  const tags = pickHashtags(trimmed);

  if (intensity === 1) {
    const fn = LEVEL_1_TEMPLATES[variantIndex % LEVEL_1_TEMPLATES.length];
    return fn(core);
  }

  if (intensity === 2) {
    const fn = LEVEL_2_TEMPLATES[variantIndex % LEVEL_2_TEMPLATES.length];
    return fn(core, tags);
  }

  const fn = LEVEL_3_TEMPLATES[variantIndex % LEVEL_3_TEMPLATES.length];
  return fn(core, tags);
}

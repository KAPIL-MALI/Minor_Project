import React, { useState } from 'react';

// ── Tier definitions ───────────────────────────────────────────────────────────
const TIERS = {
  bronze:       { label: 'Bronze',       color: 'text-amber-600',   bg: 'from-amber-800 via-amber-500 to-yellow-400',   glow: 'shadow-amber-500/40',  ring: 'ring-amber-500/60'  },
  silver:       { label: 'Silver',       color: 'text-slate-300',   bg: 'from-slate-600 via-slate-300 to-white',        glow: 'shadow-slate-400/40',  ring: 'ring-slate-400/60'  },
  gold:         { label: 'Gold',         color: 'text-yellow-400',  bg: 'from-yellow-700 via-yellow-300 to-amber-100',  glow: 'shadow-yellow-400/50', ring: 'ring-yellow-400/70' },
  platinum:     { label: 'Platinum',     color: 'text-cyan-300',    bg: 'from-cyan-700 via-sky-300 to-white',           glow: 'shadow-cyan-400/50',   ring: 'ring-cyan-400/70'   },
  diamond:      { label: 'Diamond',      color: 'text-blue-300',    bg: 'from-blue-700 via-blue-300 to-cyan-100',       glow: 'shadow-blue-400/60',   ring: 'ring-blue-400/70'   },
  master:       { label: 'Master',       color: 'text-purple-300',  bg: 'from-purple-800 via-purple-400 to-pink-300',   glow: 'shadow-purple-400/60', ring: 'ring-purple-400/70' },
  legend:       { label: 'Legend',       color: 'text-rose-300',    bg: 'from-rose-700 via-orange-400 to-yellow-200',   glow: 'shadow-rose-400/60',   ring: 'ring-rose-400/70'   },
  mythic:       { label: 'Mythic',       color: 'text-fuchsia-300', bg: 'from-fuchsia-800 via-pink-400 to-rose-200',    glow: 'shadow-fuchsia-400/70',ring: 'ring-fuchsia-400/70'},
  transcendent: { label: 'Transcendent', color: 'text-white',       bg: 'from-violet-900 via-fuchsia-400 to-cyan-300',  glow: 'shadow-white/30',      ring: 'ring-white/50'      },
};

// ── Badge definitions (10 → 2000) ─────────────────────────────────────────────
const BADGES = [
  // ── Bronze ────────────────────────────────────────────────────────────────
  { id: 'first_steps',    milestone: 10,   emoji: '🌱', name: 'First Steps',     desc: 'Solved your first 10 problems',       tier: 'bronze'       },
  { id: 'getting_started',milestone: 15,   emoji: '⚡', name: 'Getting Started', desc: 'Powered through 15 problems',          tier: 'bronze'       },
  { id: 'problem_solver', milestone: 20,   emoji: '🔥', name: 'Problem Solver',  desc: 'Conquered 20 challenges',             tier: 'bronze'       },

  // ── Silver ────────────────────────────────────────────────────────────────
  { id: 'rising_star',    milestone: 50,   emoji: '⭐', name: 'Rising Star',     desc: '50 problems — you\'re on a roll!',    tier: 'silver'       },
  { id: 'century_club',   milestone: 100,  emoji: '💯', name: 'Century Club',    desc: 'Hit the elite 100 mark',              tier: 'silver'       },
  { id: 'code_warrior',   milestone: 150,  emoji: '⚔️', name: 'Code Warrior',   desc: 'Battle-hardened at 150 problems',     tier: 'silver'       },

  // ── Gold ──────────────────────────────────────────────────────────────────
  { id: 'double_century', milestone: 200,  emoji: '🏆', name: 'Double Century',  desc: '200 problems — truly impressive!',    tier: 'gold'         },
  { id: 'triple_threat',  milestone: 300,  emoji: '🎯', name: 'Triple Threat',   desc: '300 problems solved — pure focus',    tier: 'gold'         },
  { id: 'quad_force',     milestone: 400,  emoji: '🌟', name: 'Quad Force',      desc: 'Unstoppable — 400 down!',             tier: 'gold'         },

  // ── Platinum ──────────────────────────────────────────────────────────────
  { id: 'five_hundred',   milestone: 500,  emoji: '🚀', name: 'Skybound',        desc: 'Into the stratosphere — 500!',        tier: 'platinum'     },
  { id: 'six_hundred',    milestone: 600,  emoji: '🛸', name: 'Orbit Reached',   desc: 'Orbiting excellence — 600 problems',  tier: 'platinum'     },
  { id: 'seven_hundred',  milestone: 700,  emoji: '🌙', name: 'Moon Walker',     desc: 'You\'ve walked the moon — 700',       tier: 'platinum'     },

  // ── Diamond ───────────────────────────────────────────────────────────────
  { id: 'eight_hundred',  milestone: 800,  emoji: '💠', name: 'Diamond Edge',    desc: 'Razor-sharp at 800 problems',         tier: 'diamond'      },
  { id: 'nine_hundred',   milestone: 900,  emoji: '🔷', name: 'Deep Blue',       desc: 'Depths of mastery — 900 problems',    tier: 'diamond'      },
  { id: 'thousand',       milestone: 1000, emoji: '💎', name: 'Millennium',      desc: 'A TRUE legend — 1000 problems!',      tier: 'diamond'      },

  // ── Master ────────────────────────────────────────────────────────────────
  { id: 'eleven_hundred', milestone: 1100, emoji: '🔮', name: 'Mystic Coder',    desc: 'Beyond ordinary — 1100 problems',     tier: 'master'       },
  { id: 'twelve_hundred', milestone: 1200, emoji: '🌌', name: 'Void Walker',     desc: 'Traversing the void — 1200',          tier: 'master'       },
  { id: 'thirteen_hundred',milestone:1300, emoji: '⚗️', name: 'Alchemist',       desc: 'Transmuting code — 1300 problems',    tier: 'master'       },

  // ── Legend ────────────────────────────────────────────────────────────────
  { id: 'fourteen_hundred',milestone:1400, emoji: '🔱', name: 'Trident',         desc: 'Commanding the seas — 1400',          tier: 'legend'       },
  { id: 'fifteen_hundred', milestone:1500, emoji: '🦅', name: 'Eagle Eye',       desc: 'Precision and power — 1500 problems', tier: 'legend'       },
  { id: 'sixteen_hundred', milestone:1600, emoji: '🌋', name: 'Eruption',        desc: 'Volcanic power — 1600 solved',        tier: 'legend'       },

  // ── Mythic ────────────────────────────────────────────────────────────────
  { id: 'seventeen_hundred',milestone:1700,emoji: '🧬', name: 'DNA Coder',       desc: 'Encoded into greatness — 1700',       tier: 'mythic'       },
  { id: 'eighteen_hundred', milestone:1800,emoji: '🌠', name: 'Star Forged',     desc: 'Forged in starfire — 1800 problems',  tier: 'mythic'       },
  { id: 'nineteen_hundred', milestone:1900,emoji: '🧿', name: 'Oracle',          desc: 'You see all — 1900 problems',         tier: 'mythic'       },

  // ── Transcendent ──────────────────────────────────────────────────────────
  { id: 'two_thousand',    milestone: 2000, emoji: '👑', name: 'Transcendent',   desc: 'Beyond all limits — 2000 problems!',  tier: 'transcendent' },
];

// ── Tier section separator ─────────────────────────────────────────────────────
const TIER_ORDER = ['bronze','silver','gold','platinum','diamond','master','legend','mythic','transcendent'];

// ── Badge Card ─────────────────────────────────────────────────────────────────
function BadgeCard({ badge, unlocked }) {
  const [hovered, setHovered] = useState(false);
  const tier = TIERS[badge.tier];

  return (
    <div
      className="relative flex flex-col items-center group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      {hovered && (
        <div className="absolute -top-[4.5rem] left-1/2 -translate-x-1/2 z-50 w-48
                        bg-base-300/95 backdrop-blur-md border border-base-content/10
                        rounded-xl px-3 py-2 text-center shadow-2xl pointer-events-none">
          <p className="text-xs font-bold text-base-content leading-tight">{badge.name}</p>
          <p className="text-[10px] text-base-content/55 mt-0.5 leading-snug">{badge.desc}</p>
          <p className={`text-[10px] font-bold mt-1 ${tier.color}`}>{tier.label} · {badge.milestone}+</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-base-300/95" />
        </div>
      )}

      {/* Badge icon */}
      <div
        className={`
          relative w-14 h-14 rounded-2xl flex items-center justify-center
          transition-all duration-300 ring-2
          ${unlocked
            ? `bg-gradient-to-br ${tier.bg} shadow-lg ${tier.glow} ${tier.ring}
               group-hover:scale-110 group-hover:shadow-xl`
            : 'bg-base-300/30 ring-base-content/10 opacity-35 cursor-not-allowed'
          }
        `}
      >
        <span className="text-xl select-none">{badge.emoji}</span>

        {/* Animated shimmer for unlocked */}
        {unlocked && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            <div className="absolute -inset-full top-0 h-full w-1/2 z-5
                            block transform -skew-x-12 bg-white/10 opacity-0
                            group-hover:animate-shimmer" />
          </div>
        )}

        {/* Lock for locked */}
        {!unlocked && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full
                          bg-base-200 border border-base-content/20
                          flex items-center justify-center text-[9px]">
            🔒
          </div>
        )}
      </div>

      {/* Label */}
      <p className={`mt-1.5 text-[10px] font-semibold text-center leading-tight
                     ${unlocked ? 'text-base-content' : 'text-base-content/25'}`}>
        {badge.name}
      </p>
      <p className={`text-[9px] font-mono ${unlocked ? tier.color : 'text-base-content/15'}`}>
        {badge.milestone >= 1000 ? `${badge.milestone/1000}k` : badge.milestone}+
      </p>
    </div>
  );
}

// ── Tier Row ───────────────────────────────────────────────────────────────────
function TierRow({ tierKey, badges, totalSolved }) {
  const tier = TIERS[tierKey];
  const unlocked = badges.filter(b => totalSolved >= b.milestone).length;
  const total = badges.length;
  const allUnlocked = unlocked === total;

  return (
    <div className="mb-6">
      {/* Tier label */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`h-px flex-1 bg-gradient-to-r ${tier.bg} opacity-30`} />
        <span className={`text-xs font-bold tracking-widest uppercase ${tier.color}`}>
          {tier.label}
          <span className="ml-2 text-base-content/30 font-normal normal-case tracking-normal">
            {unlocked}/{total}
          </span>
        </span>
        <div className={`h-px flex-1 bg-gradient-to-l ${tier.bg} opacity-30`} />
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-5 justify-start px-1">
        {badges.map(badge => (
          <BadgeCard
            key={badge.id}
            badge={badge}
            unlocked={totalSolved >= badge.milestone}
          />
        ))}
        {allUnlocked && (
          <div className={`self-center text-xs font-bold ${tier.color} animate-pulse`}>
            ✓ Tier Complete!
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Panel ─────────────────────────────────────────────────────────────────
export default function BadgesPanel({ totalSolved = 0 }) {
  const unlockedCount = BADGES.filter(b => totalSolved >= b.milestone).length;
  const nextBadge = BADGES.find(b => totalSolved < b.milestone);
  const prevBadge = [...BADGES].reverse().find(b => totalSolved >= b.milestone);
  const progress = nextBadge
    ? Math.min(100, Math.round(
        ((totalSolved - (prevBadge?.milestone ?? 0)) /
         (nextBadge.milestone - (prevBadge?.milestone ?? 0))) * 100
      ))
    : 100;

  // Group badges by tier
  const grouped = TIER_ORDER.reduce((acc, t) => {
    acc[t] = BADGES.filter(b => b.tier === t);
    return acc;
  }, {});

  const allUnlocked = unlockedCount === BADGES.length;
  const currentTierKey = prevBadge ? prevBadge.tier : null;
  const currentTier = currentTierKey ? TIERS[currentTierKey] : null;

  return (
    <div className="glass-panel p-6 rounded-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span>🏅</span> Badges
            <span className="text-sm font-normal text-base-content/50">
              ({unlockedCount}/{BADGES.length} unlocked)
            </span>
          </h3>
          {currentTier && (
            <p className={`text-xs mt-0.5 ${currentTier.color} font-semibold`}>
              Current tier: {currentTier.label} — {prevBadge.name}
            </p>
          )}
        </div>

        {/* Tier legend chips */}
        <div className="flex flex-wrap gap-1.5">
          {TIER_ORDER.map(t => (
            <span
              key={t}
              className={`px-2 py-0.5 rounded-full text-[10px] font-bold border
                ${TIERS[t].color} border-current/30 bg-base-200/40`}
            >
              {TIERS[t].label}
            </span>
          ))}
        </div>
      </div>

      {/* Next badge progress bar */}
      {nextBadge && (
        <div className="mb-6 p-3 rounded-xl bg-base-200/50 border border-base-content/5">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-base-content/60">
              Next:{' '}
              <span className="font-semibold text-base-content">
                {nextBadge.emoji} {nextBadge.name}
              </span>
              <span className={`ml-1 text-[10px] ${TIERS[nextBadge.tier].color}`}>
                ({TIERS[nextBadge.tier].label})
              </span>
            </span>
            <span className="font-mono text-base-content/60">
              {totalSolved} / {nextBadge.milestone}
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-base-300 overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${TIERS[nextBadge.tier].bg}
                          transition-all duration-700 ease-out`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[10px] text-base-content/40 mt-1">
            {nextBadge.milestone - totalSolved} more problems to unlock this badge
          </p>
        </div>
      )}

      {/* All tiers */}
      {TIER_ORDER.map(tierKey => (
        <TierRow
          key={tierKey}
          tierKey={tierKey}
          badges={grouped[tierKey]}
          totalSolved={totalSolved}
        />
      ))}

      {/* All-unlocked celebration */}
      {allUnlocked && (
        <div className="mt-4 text-center py-4 rounded-2xl
                        bg-gradient-to-r from-violet-500/20 via-fuchsia-400/20 to-cyan-500/20
                        border border-fuchsia-400/30 animate-pulse">
          <p className="text-base font-black text-transparent bg-clip-text
                        bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300">
            👑 TRANSCENDENT — You've conquered all 2000 problems. You are a legend.
          </p>
        </div>
      )}
    </div>
  );
}

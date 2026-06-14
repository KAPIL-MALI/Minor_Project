import React, { useMemo, useState } from 'react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * Build a map of { "YYYY-MM-DD": count } from submissions array
 */
function buildActivityMap(submissions) {
  const map = {};
  for (const sub of submissions) {
    const d = new Date(sub.createdAt);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    map[key] = (map[key] || 0) + 1;
  }
  return map;
}

/**
 * Return all dates (as YYYY-MM-DD strings) for a given year, aligned to week grid.
 * We pad from the first Sunday on or before Jan 1 to the last Saturday on or after Dec 31.
 */
function getYearDates(year) {
  const start = new Date(year, 0, 1);
  // Go back to Sunday
  const dayOfWeek = start.getDay();
  start.setDate(start.getDate() - dayOfWeek);

  const end = new Date(year, 11, 31);
  const endDay = end.getDay();
  if (endDay < 6) end.setDate(end.getDate() + (6 - endDay));

  const dates = [];
  const cur = new Date(start);
  while (cur <= end) {
    const key = `${cur.getFullYear()}-${String(cur.getMonth() + 1).padStart(2, '0')}-${String(cur.getDate()).padStart(2, '0')}`;
    dates.push({
      key,
      date: new Date(cur),
      inYear: cur.getFullYear() === year,
    });
    cur.setDate(cur.getDate() + 1);
  }
  return dates;
}

/**
 * Group flat dates array into weeks (arrays of 7 days)
 */
function groupByWeeks(dates) {
  const weeks = [];
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }
  return weeks;
}

/**
 * Get month label positions (week index where the month starts)
 */
function getMonthLabels(weeks) {
  const labels = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    // find first in-year day of this week
    const first = week.find(d => d.inYear);
    if (first) {
      const m = first.date.getMonth();
      if (m !== lastMonth) {
        labels.push({ month: MONTHS[m], weekIndex: wi });
        lastMonth = m;
      }
    }
  });
  return labels;
}

/**
 * Map count → intensity level 0-4
 */
function getLevel(count) {
  if (!count || count === 0) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count <= 6) return 3;
  return 4;
}

const CELL_SIZE = 13;   // px
const CELL_GAP = 3;     // px
const CELL_STEP = CELL_SIZE + CELL_GAP;

export default function ActivityHeatmap({ submissions = [] }) {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [tooltip, setTooltip] = useState(null); // { text, x, y }

  const availableYears = useMemo(() => {
    const years = new Set();
    years.add(currentYear);
    for (const sub of submissions) {
      years.add(new Date(sub.createdAt).getFullYear());
    }
    return [...years].sort((a, b) => b - a);
  }, [submissions, currentYear]);

  const activityMap = useMemo(() => buildActivityMap(submissions), [submissions]);

  const yearDates = useMemo(() => getYearDates(selectedYear), [selectedYear]);
  const weeks = useMemo(() => groupByWeeks(yearDates), [yearDates]);
  const monthLabels = useMemo(() => getMonthLabels(weeks), [weeks]);

  const totalInYear = useMemo(() => {
    return yearDates.filter(d => d.inYear).reduce((acc, d) => acc + (activityMap[d.key] || 0), 0);
  }, [yearDates, activityMap]);

  // Color levels: dark theme greens
  const levelColors = [
    'var(--hm-0)',
    'var(--hm-1)',
    'var(--hm-2)',
    'var(--hm-3)',
    'var(--hm-4)',
  ];

  const svgWidth = weeks.length * CELL_STEP;
  const svgHeight = 7 * CELL_STEP;
  const TOP_OFFSET = 22; // space for month labels
  const LEFT_OFFSET = 30; // space for day labels

  return (
    <div className="heatmap-container glass-panel p-6 rounded-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="text-primary">📅</span>
            Submission Activity
          </h3>
          <p className="text-sm text-base-content/50 mt-0.5">
            <span className="font-semibold text-base-content">{totalInYear}</span> submissions in {selectedYear}
          </p>
        </div>

        {/* Year selector */}
        <div className="flex gap-1">
          {availableYears.map(y => (
            <button
              key={y}
              onClick={() => setSelectedYear(y)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                y === selectedYear
                  ? 'bg-primary text-primary-content shadow-lg shadow-primary/30'
                  : 'bg-base-200 text-base-content/60 hover:bg-base-300'
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* Heatmap SVG */}
      <div className="overflow-x-auto custom-scrollbar pb-2">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          {/* Tooltip */}
          {tooltip && (
            <div
              className="heatmap-tooltip"
              style={{ left: tooltip.x, top: tooltip.y }}
            >
              {tooltip.text}
            </div>
          )}

          <svg
            width={LEFT_OFFSET + svgWidth}
            height={TOP_OFFSET + svgHeight + 20}
            style={{ display: 'block' }}
          >
            {/* Day labels */}
            {['Mon', 'Wed', 'Fri'].map((day, i) => {
              const dayIndex = { Mon: 1, Wed: 3, Fri: 5 }[day];
              return (
                <text
                  key={day}
                  x={LEFT_OFFSET - 6}
                  y={TOP_OFFSET + dayIndex * CELL_STEP + CELL_SIZE - 2}
                  fontSize="10"
                  textAnchor="end"
                  fill="currentColor"
                  opacity="0.4"
                >
                  {day}
                </text>
              );
            })}

            {/* Month labels */}
            {monthLabels.map(({ month, weekIndex }) => (
              <text
                key={`${month}-${weekIndex}`}
                x={LEFT_OFFSET + weekIndex * CELL_STEP}
                y={TOP_OFFSET - 6}
                fontSize="11"
                fill="currentColor"
                opacity="0.5"
              >
                {month}
              </text>
            ))}

            {/* Cells */}
            {weeks.map((week, wi) =>
              week.map((day, di) => {
                const count = activityMap[day.key] || 0;
                const level = day.inYear ? getLevel(count) : 0;
                const x = LEFT_OFFSET + wi * CELL_STEP;
                const y = TOP_OFFSET + di * CELL_STEP;

                return (
                  <rect
                    key={day.key}
                    x={x}
                    y={y}
                    width={CELL_SIZE}
                    height={CELL_SIZE}
                    rx={3}
                    ry={3}
                    fill={day.inYear ? levelColors[level] : 'var(--hm-bg)'}
                    opacity={day.inYear ? 1 : 0.3}
                    className="heatmap-cell"
                    onMouseEnter={(e) => {
                      if (!day.inYear) return;
                      const dateStr = day.date.toLocaleDateString('en-US', {
                        weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
                      });
                      const rect = e.target.closest('svg').getBoundingClientRect();
                      const svgRect = e.target.getBoundingClientRect();
                      setTooltip({
                        text: count === 0 ? `No submissions on ${dateStr}` : `${count} submission${count > 1 ? 's' : ''} on ${dateStr}`,
                        x: svgRect.left - rect.left + CELL_SIZE / 2,
                        y: svgRect.top - rect.top - 36,
                      });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  />
                );
              })
            )}
          </svg>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-2 mt-3">
        <span className="text-xs text-base-content/40">Less</span>
        {[0, 1, 2, 3, 4].map(l => (
          <div
            key={l}
            style={{
              width: 12,
              height: 12,
              borderRadius: 3,
              backgroundColor: levelColors[l],
            }}
          />
        ))}
        <span className="text-xs text-base-content/40">More</span>
      </div>
    </div>
  );
}

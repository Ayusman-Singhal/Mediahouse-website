"use client"

const DESKTOP_LANES = [
  { id: "lane-1", d: "M250 246 C375 210 468 228 600 350", begin: "0s", side: "left" },
  { id: "lane-2", d: "M250 454 C380 490 470 472 600 350", begin: "1.1s", side: "left" },
  { id: "lane-3", d: "M600 350 C730 228 822 210 950 246", begin: "2.2s", side: "right" },
  { id: "lane-4", d: "M600 350 C730 472 820 490 950 454", begin: "3.3s", side: "right" },
] as const

const MOBILE_LANES = [
  { id: "vertical-lane-1", d: "M120 22 C18 124 14 226 120 300", begin: "0s", segment: "top" },
  { id: "vertical-lane-2", d: "M120 22 C222 124 226 226 120 300", begin: "1.1s", segment: "top" },
  { id: "vertical-lane-3", d: "M120 300 C14 374 18 476 120 578", begin: "2.2s", segment: "bottom" },
  { id: "vertical-lane-4", d: "M120 300 C226 374 222 476 120 578", begin: "3.3s", segment: "bottom" },
] as const

type SignalPacketProps = {
  path: string
  begin: string
  color: string
  filterId: string
  outerRadius: number
  innerRadius: number
}

type ConnectorNodeProps = {
  cx: number
  cy: number
  baseRadius: number
  centerRadius: number
  ringRadius: number
  strokeWidth: number
}

type ConnectorCoreProps = {
  cx: number
  cy: number
  outerRadius: number
  middleRadius: number
  innerRadius: number
  ringRadius: number
  strokeWidth: number
  fillId: string
  filterId: string
}

function SignalPacket({ path, begin, color, filterId, outerRadius, innerRadius }: SignalPacketProps) {
  return (
    <g className="connector-packet" opacity="0.9">
      <animateMotion dur="4.5s" repeatCount="indefinite" path={path} begin={begin} />
      <circle r={outerRadius} fill={color} filter={`url(#${filterId})`} />
      <circle r={innerRadius} fill="#ffffff" fillOpacity="0.92" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.78;1" dur="4.5s" begin={begin} repeatCount="indefinite" />
    </g>
  )
}

function ConnectorNode({ cx, cy, baseRadius, centerRadius, ringRadius, strokeWidth }: ConnectorNodeProps) {
  return (
    <g className="connector-node">
      <circle cx={cx} cy={cy} r={baseRadius} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.22)" strokeWidth={strokeWidth} />
      <circle cx={cx} cy={cy} r={centerRadius} fill="#ffffff" fillOpacity="0.92" />
      <circle cx={cx} cy={cy} r={ringRadius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={strokeWidth * 0.83} />
    </g>
  )
}

function ConnectorCore({ cx, cy, outerRadius, middleRadius, innerRadius, ringRadius, strokeWidth, fillId, filterId }: ConnectorCoreProps) {
  const logoSize = innerRadius * 2.7

  return (
    <g className="connector-core" filter={`url(#${filterId})`}>
      <circle cx={cx} cy={cy} r={outerRadius} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.16)" strokeWidth={strokeWidth} />
      <circle cx={cx} cy={cy} r={middleRadius} fill={`url(#${fillId})`} />
      <image
        href="/assets/MediaHouseLogo.png"
        x={cx - logoSize / 2}
        y={cy - logoSize / 2}
        width={logoSize}
        height={logoSize}
        preserveAspectRatio="xMidYMid meet"
      />
      <circle cx={cx} cy={cy} r={ringRadius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={strokeWidth * 0.83} />
    </g>
  )
}

function DesktopDataConnector() {
  return (
    <div className="connector-scene absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden="true">
      <div className="connector-stage absolute left-1/2 top-1/2 h-[30vh] w-[min(74vw,980px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] opacity-70" aria-hidden="true" />
      <svg
        className="relative h-auto w-[min(74vw,980px)]"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid meet"
        style={{ pointerEvents: "none", overflow: "visible" }}
      >
        <defs>
          <linearGradient id="connector-line-left" x1="250" y1="350" x2="600" y2="350" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="55%" stopColor="rgba(255,107,53,0.7)" />
            <stop offset="100%" stopColor="rgba(255,214,102,0.9)" />
          </linearGradient>

          <linearGradient id="connector-line-right" x1="600" y1="350" x2="950" y2="350" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,214,102,0.92)" />
            <stop offset="45%" stopColor="rgba(255,107,53,0.7)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.12)" />
          </linearGradient>

          <linearGradient id="connector-core-fill" x1="555" y1="305" x2="645" y2="395" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,255,255,0.92)" />
            <stop offset="40%" stopColor="rgba(255,214,102,0.92)" />
            <stop offset="100%" stopColor="rgba(255,107,53,0.92)" />
          </linearGradient>

          <filter id="connector-core-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="connector-packet-glow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {DESKTOP_LANES.map((lane, index) => {
          const stroke = lane.side === "left" ? "url(#connector-line-left)" : "url(#connector-line-right)"

          return (
            <g key={lane.id} className="connector-lane">
              <path d={lane.d} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="15" strokeLinecap="round" />
              <path d={lane.d} fill="none" stroke={stroke} strokeWidth="2.8" strokeLinecap="round" opacity="0.9" />
              <path d={lane.d} fill="none" stroke={stroke} strokeWidth="7" strokeLinecap="round" opacity="0.14" />
              <SignalPacket
                path={lane.d}
                begin={lane.begin}
                color={index % 2 === 0 ? "#ffd666" : "#ff8b63"}
                filterId="connector-packet-glow"
                outerRadius={8}
                innerRadius={3.2}
              />
            </g>
          )
        })}

        <ConnectorNode cx={250} cy={350} baseRadius={18} centerRadius={6} ringRadius={46} strokeWidth={1.2} />
        <ConnectorNode cx={950} cy={350} baseRadius={18} centerRadius={6} ringRadius={46} strokeWidth={1.2} />
        <ConnectorCore cx={600} cy={350} outerRadius={56} middleRadius={32} innerRadius={15} ringRadius={78} strokeWidth={1.2} fillId="connector-core-fill" filterId="connector-core-glow" />
      </svg>
    </div>
  )
}

function MobilePathBridge() {
  return (
    <div className="connector-scene absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden="true">
      <div className="connector-stage absolute left-1/2 top-1/2 h-[min(66vh,560px)] w-[min(36vw,210px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] opacity-70" aria-hidden="true" />
      <svg
        className="relative h-[min(66vh,560px)] w-[min(36vw,210px)] max-w-[210px]"
        viewBox="0 0 240 600"
        preserveAspectRatio="xMidYMid meet"
        style={{ pointerEvents: "none", overflow: "visible" }}
      >
        <defs>
          <linearGradient id="connector-line-top" x1="120" y1="22" x2="120" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="55%" stopColor="rgba(255,107,53,0.7)" />
            <stop offset="100%" stopColor="rgba(255,214,102,0.9)" />
          </linearGradient>

          <linearGradient id="connector-line-bottom" x1="120" y1="300" x2="120" y2="578" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,214,102,0.92)" />
            <stop offset="45%" stopColor="rgba(255,107,53,0.7)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.12)" />
          </linearGradient>

          <linearGradient id="connector-core-fill-vertical" x1="72" y1="252" x2="168" y2="348" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,255,255,0.92)" />
            <stop offset="40%" stopColor="rgba(255,214,102,0.92)" />
            <stop offset="100%" stopColor="rgba(255,107,53,0.92)" />
          </linearGradient>

          <filter id="connector-core-glow-vertical" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="connector-packet-glow-vertical" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform="translate(120 300) scale(1.2) translate(-120 -300)">
          {MOBILE_LANES.map((lane, index) => {
            const stroke = lane.segment === "top" ? "url(#connector-line-top)" : "url(#connector-line-bottom)"

            return (
              <g key={lane.id} className="connector-lane">
                <path d={lane.d} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="20" strokeLinecap="round" />
                <path d={lane.d} fill="none" stroke={stroke} strokeWidth="4.1" strokeLinecap="round" opacity="0.92" />
                <path d={lane.d} fill="none" stroke={stroke} strokeWidth="10.8" strokeLinecap="round" opacity="0.2" />
                <SignalPacket
                  path={lane.d}
                  begin={lane.begin}
                  color={index % 2 === 0 ? "#ffd666" : "#ff8b63"}
                  filterId="connector-packet-glow-vertical"
                  outerRadius={12.5}
                  innerRadius={5.1}
                />
              </g>
            )
          })}

          <ConnectorNode cx={120} cy={22} baseRadius={23} centerRadius={8.2} ringRadius={60} strokeWidth={1.45} />
          <ConnectorNode cx={120} cy={578} baseRadius={23} centerRadius={8.2} ringRadius={60} strokeWidth={1.45} />
          <ConnectorCore cx={120} cy={300} outerRadius={72} middleRadius={43} innerRadius={20} ringRadius={104} strokeWidth={1.45} fillId="connector-core-fill-vertical" filterId="connector-core-glow-vertical" />
        </g>
      </svg>
    </div>
  )
}

export default function DataConnector({ isVertical }: { isVertical: boolean }) {
  if (isVertical) {
    return <MobilePathBridge />
  }

  return <DesktopDataConnector />
}

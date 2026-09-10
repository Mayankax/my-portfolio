import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState } from "react";

interface HangingLampProps {
  wireHeight?: number;
}

export default function HangingLamp({ wireHeight = 60 }: HangingLampProps) {
  const [isOn, setIsOn] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Dynamic wire end coordinates tied directly to drag motion values
  const wireX2 = useTransform(x, (latestX) => latestX);
  const wireY2 = useTransform(y, (latestY) => wireHeight + latestY);

  const handleDragEnd = () => {
    const spring = {
      type: "spring" as const,
      stiffness: 170,
      damping: 14,
      mass: 0.8,
    };

    animate(x, 0, spring);
    animate(y, 0, spring);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* ================================================= */}
      {/* WIRE */}
      {/* ================================================= */}
      <svg
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 overflow-visible z-[55]"
        style={{ width: 1, height: 1 }}
        >
        {/* Main wire line */}
        <motion.line
            x1="0"
            y1="0"
            x2={wireX2}
            y2={wireY2}
            stroke="rgba(255,255,255,0.32)"
            strokeWidth="1.5"
            strokeLinecap="round"
        />

        {/* Soft wire glow */}
        <motion.line
            x1="0"
            y1="0"
            x2={wireX2}
            y2={wireY2}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="3"
            strokeLinecap="round"
        />

        {/* Navbar attachment */}
        <circle
            cx="0"
            cy="0"
            r="2.2"
            fill="white"
            opacity="0.55"
        />

        {/* Lamp attachment */}
        <motion.circle
            cx={wireX2}
            cy={wireY2}
            r="2"
            fill="white"
            opacity="0.5"
        />
        </svg>

      {/* ================================================= */}
      {/* LAMP */}
      {/* ================================================= */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.04}
        onDragEnd={handleDragEnd}
        style={{
          x,
          y,
          top: wireHeight,
        }}
        className="absolute left-1/2 -translate-x-1/2 z-[60] cursor-grab active:cursor-grabbing"
      >
        <motion.div
          animate={{
            rotate: isOn ? [-1.5, 1.5, -1, 1, 0] : 0,
          }}
          transition={{
            duration: 1.4,
            ease: "easeInOut",
          }}
          className="relative origin-top"
        >
          {/* GLOW */}
          <motion.div
            initial={false}
            animate={{
              opacity: isOn ? 0.85 : 0,
              scale: isOn ? 1 : 0.6,
            }}
            transition={{
              duration: 0.35,
            }}
            className="pointer-events-none absolute left-1/2 top-8 h-28 w-28 -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
          />

          {/* MODERN PENDANT */}
          <button
            type="button"
            aria-label={
              isOn ? "Turn lamp off" : "Turn lamp on"
            }
            onClick={() =>
              setIsOn((value) => !value)
            }
            className="relative block h-[76px] w-[56px] outline-none"
          >
            <svg
              width="56"
              height="76"
              viewBox="0 0 56 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top connector */}
              <rect
                x="25"
                y="0"
                width="6"
                height="7"
                rx="2"
                fill={
                  isOn
                    ? "white"
                    : "rgba(255,255,255,0.35)"
                }
              />

              {/* Neck */}
              <rect
                x="26.5"
                y="7"
                width="3"
                height="9"
                rx="1.5"
                fill={
                  isOn
                    ? "rgba(255,255,255,0.8)"
                    : "rgba(255,255,255,0.25)"
                }
              />

              {/* Outer body */}
              <path
                d="M17 16H39L46 44C47 48 44 52 40 52H16C12 52 9 48 10 44L17 16Z"
                fill={
                  isOn
                    ? "rgba(255,255,255,0.94)"
                    : "rgba(255,255,255,0.13)"
                }
                stroke={
                  isOn
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0.32)"
                }
                strokeWidth="1"
              />

              {/* Inner glass */}
              <path
                d="M18 31H38L42 44C42.5 46 41 48 38.5 48H17.5C15 48 13.5 46 14 44L18 31Z"
                fill={
                  isOn
                    ? "rgba(255,255,255,0.68)"
                    : "rgba(255,255,255,0.06)"
                }
              />

              {/* Light */}
              <motion.ellipse
                cx="28"
                cy="44"
                rx="11"
                ry="3.5"
                initial={false}
                animate={{
                  opacity: isOn ? 1 : 0.18,
                  scaleX: isOn ? 1 : 0.7,
                }}
                transition={{
                  duration: 0.3,
                }}
                fill="white"
              />

              {/* Design line */}
              <path
                d="M14 30H42"
                stroke={
                  isOn
                    ? "rgba(255,255,255,0.85)"
                    : "rgba(255,255,255,0.25)"
                }
                strokeWidth="1"
              />

              {/* Bottom ring */}
              <ellipse
                cx="28"
                cy="52"
                rx="17"
                ry="3"
                fill={
                  isOn
                    ? "rgba(255,255,255,0.82)"
                    : "rgba(255,255,255,0.22)"
                }
              />

              {/* Center detail */}
              <circle
                cx="28"
                cy="21"
                r="2"
                fill={
                  isOn
                    ? "white"
                    : "rgba(255,255,255,0.3)"
                }
              />
            </svg>
          </button>

          {/* LOWER CABLE */}
          <div className="absolute left-1/2 top-[76px] h-5 w-px -translate-x-1/2 bg-white/30" />

          {/* FLOATING CORE */}
          <motion.div
            initial={false}
            animate={{
              opacity: isOn ? 1 : 0.2,
            }}
            className="absolute left-1/2 top-[98px] -translate-x-1/2"
          >
            <motion.div
              animate={{
                rotate: isOn ? 360 : 0,
              }}
              transition={{
                duration: 10,
                repeat: isOn ? Infinity : 0,
                ease: "linear",
              }}
            >
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <path
                  d="M19 2L35 11V27L19 36L3 27V11L19 2Z"
                  stroke="rgba(255,255,255,0.6)"
                />

                <path
                  d="M3 11L19 19L35 11"
                  stroke="rgba(255,255,255,0.45)"
                />

                <path
                  d="M19 19V36"
                  stroke="rgba(255,255,255,0.45)"
                />

                <motion.circle
                  cx="19"
                  cy="19"
                  r="2"
                  animate={{
                    opacity: isOn
                      ? [0.2, 1, 0.2]
                      : 0.2,
                    scale: isOn
                      ? [1, 1.35, 1]
                      : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isOn ? Infinity : 0,
                  }}
                  fill="white"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* SPOTLIGHT */}
          <motion.div
            initial={false}
            animate={{
              opacity: isOn ? 0.8 : 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="pointer-events-none absolute left-1/2 top-[55px] -z-10 h-[480px] w-[340px] -translate-x-1/2 blur-3xl"
            style={{
              clipPath:
                "polygon(43% 0%, 57% 0%, 100% 100%, 0% 100%)",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.02), transparent)",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { THAILAND_REGION_PATHS, type BaseRegionKey } from "./thailandRegionPaths";

type FourRegionKey = "north" | "northeast" | "central" | "south";
type SixRegionKey = BaseRegionKey;
type DisplayRegionKey = FourRegionKey | SixRegionKey;

type ThailandMapProps = {
  mode?: "4" | "6";
};

const REGION_META_6: Record<SixRegionKey, { label: string; members: BaseRegionKey[] }> = {
  north: { label: "ภาคเหนือ", members: ["north"] },
  northeast: { label: "ภาคตะวันออกเฉียงเหนือ", members: ["northeast"] },
  central: { label: "ภาคกลาง", members: ["central"] },
  east: { label: "ภาคตะวันออก", members: ["east"] },
  west: { label: "ภาคตะวันตก", members: ["west"] },
  south: { label: "ภาคใต้", members: ["south"] },
};

const REGION_META_4: Record<FourRegionKey, { label: string; members: BaseRegionKey[] }> = {
  north: { label: "ภาคเหนือ", members: ["north"] },
  northeast: { label: "ภาคตะวันออกเฉียงเหนือ", members: ["northeast"] },
  central: { label: "ภาคกลาง", members: ["central", "east", "west"] },
  south: { label: "ภาคใต้", members: ["south"] },
};

export default function ThailandMap({ mode = "4" }: ThailandMapProps) {
  const [active, setActive] = useState<DisplayRegionKey | null>(null);
  const router = useRouter();

  const regionMeta = mode === "4" ? REGION_META_4 : REGION_META_6;

  const displayGroups = useMemo(() => {
    return Object.entries(regionMeta).map(([regionKey, meta]) => ({
      key: regionKey as DisplayRegionKey,
      label: meta.label,
      provinces: meta.members.flatMap((member) => THAILAND_REGION_PATHS[member]),
    }));
  }, [regionMeta]);

  const handleClick = (region: DisplayRegionKey) => {
    setActive(region);
    router.push(`/${region}`);
  };

  return (
    <div className="w-full flex justify-center">
      <svg viewBox="245 35 510 930" className="w-full max-w-md drop-shadow-sm">
        {displayGroups.map((group) => (
          <g
            key={group.key}
            onClick={() => handleClick(group.key)}
            className={`region ${active === group.key ? "active" : ""}`}
            aria-label={group.label}
          >
            {group.provinces.map((province) => (
              <path key={province.name} d={province.d}>
                <title>{province.name}</title>
              </path>
            ))}
          </g>
        ))}
      </svg>

      <style jsx>{`
        .region {
          cursor: pointer;
          transform-box: fill-box;
          transform-origin: center;
        }

        .region path {
          fill: #e5e7eb;
          stroke: #ffffff;
          stroke-width: 1;
          vector-effect: non-scaling-stroke;
          transition: fill 0.25s ease, transform 0.25s ease;
        }

        .region:hover path {
          fill: #60a5fa;
        }

        .region.active path {
          fill: #2563eb;
        }

        .region:hover {
          transform: scale(1.01);
        }
      `}</style>
    </div>
  );
}

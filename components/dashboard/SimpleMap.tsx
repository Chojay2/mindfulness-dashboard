"use client";

interface SimpleMapProps {
  zones: Array<{ name: string; value: number }>;
  indicatorName: string;
}

export function SimpleMap({ zones, indicatorName }: SimpleMapProps) {
  // Generate color based on value (green for good, yellow for medium, red for poor)
  const getZoneColor = (value: number) => {
    if (value >= 70) return "#4e9978"; // green
    if (value >= 40) return "#eab308"; // yellow
    return "#ef4444"; // red
  };

  // Simple SVG map representation
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-auto"
        style={{ maxHeight: "200px" }}
      >
        {/* Background */}
        <rect width="400" height="300" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
        
        {/* Zone areas - simplified representation */}
        {zones.map((zone, index) => {
          const colors = [
            { x: 50, y: 50, width: 120, height: 80 },
            { x: 180, y: 50, width: 120, height: 80 },
            { x: 50, y: 140, width: 120, height: 80 },
            { x: 180, y: 140, width: 120, height: 80 },
            { x: 310, y: 50, width: 70, height: 80 },
            { x: 310, y: 140, width: 70, height: 80 },
          ];
          
          const area = colors[index % colors.length];
          if (!area) return null;
          
          return (
            <g key={zone.name}>
              <rect
                x={area.x}
                y={area.y}
                width={area.width}
                height={area.height}
                fill={getZoneColor(zone.value)}
                fillOpacity={0.7}
                stroke="#fff"
                strokeWidth="2"
              />
              <text
                x={area.x + area.width / 2}
                y={area.y + area.height / 2 - 5}
                textAnchor="middle"
                className="text-[10px] font-semibold fill-white"
              >
                {zone.name}
              </text>
              <text
                x={area.x + area.width / 2}
                y={area.y + area.height / 2 + 8}
                textAnchor="middle"
                className="text-[9px] fill-white"
              >
                {Math.round(zone.value)}%
              </text>
            </g>
          );
        })}
      </svg>
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mt-3 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#4e9978" }}></div>
          <span className="text-muted-foreground">Good (70%+)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#eab308" }}></div>
          <span className="text-muted-foreground">Medium (40-69%)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#ef4444" }}></div>
          <span className="text-muted-foreground">Poor (&lt;40%)</span>
        </div>
      </div>
    </div>
  );
}


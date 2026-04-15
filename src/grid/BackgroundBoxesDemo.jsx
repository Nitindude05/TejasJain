import React from 'react';

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className = '',
  ...props
}) {
  const id = React.useId();

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30 ${className}`}
      {...props}
    >
      <defs>
        <pattern height={height} id={id} patternUnits="userSpaceOnUse" width={width} x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect fill={`url(#${id})`} height="100%" strokeWidth={0} width="100%" />
      {squares && (
        <svg className="overflow-visible" x={x} y={y}>
          {squares.map(([sx, sy], index) => (
            <rect
              key={`${sx}-${sy}-${index}`}
              height={height - 1}
              width={width - 1}
              x={sx * width + 1}
              y={sy * height + 1}
              strokeWidth="0"
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export default GridPattern;
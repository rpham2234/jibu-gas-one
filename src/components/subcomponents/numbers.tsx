import * as React from "react";

type NumberBoxSvgProps = {
  /** The number or label to show inside the tile */
  value: number | string;
  /** Output size in pixels (both width & height) */
  size?: number;
  /** Tile background color */
  tileColor?: string;
  /** Number color */
  numberColor?: string;
  /** Corner radius of the tile */
  radius?: number;
  /** Optional thin border around the tile */
  withBorder?: boolean;
  /** Border color (used only if withBorder is true) */
  borderColor?: string;
  /** Scale the font relative to the base design (1 = default) */
  fontScale?: number;
} & Omit<React.SVGProps<SVGSVGElement>, "width" | "height">;

export function NumberBoxSvg({
  value,
  size = 80,
  tileColor = "#AEE6FF",
  numberColor = "#1294C9",
  radius = 8,
  withBorder = false,
  borderColor = "#7dd3fc",
  fontScale = 1,
  ...svgProps
}: NumberBoxSvgProps) {
  // We keep a constant viewBox so everything scales with width/height.
  // Base design is 80×80; font-size 48 works well for single digits.
  const base = 80;
  const fontSize = 48 * fontScale;

  return (
    <svg
      viewBox={`0 0 ${base} ${base}`}
      width={size}
      height={size}
      role="img"
      aria-label={`Number ${value}`}
      {...svgProps}
    >
      <rect
        x="0"
        y="0"
        width={base}
        height={base}
        rx={radius}
        fill={tileColor}
        stroke={withBorder ? borderColor : "none"}
        strokeWidth={withBorder ? 2 : 0}
      />
      <text
        x={base / 2}
        y={base / 2}
        fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
        fontWeight={700}
        fontSize={fontSize}
        fill={numberColor}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}
      </text>
    </svg>
  );
}

/* Optional convenience exports for 1–4 */
export const NumberOne   = (p: Omit<NumberBoxSvgProps, "value">) => <NumberBoxSvg value={1} {...p} />;
export const NumberTwo   = (p: Omit<NumberBoxSvgProps, "value">) => <NumberBoxSvg value={2} {...p} />;
export const NumberThree = (p: Omit<NumberBoxSvgProps, "value">) => <NumberBoxSvg value={3} {...p} />;
export const NumberFour  = (p: Omit<NumberBoxSvgProps, "value">) => <NumberBoxSvg value={4} {...p} />;

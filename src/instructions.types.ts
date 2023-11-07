export const MOVE = ["M", "L", "R"] as const;
export const ORIENTATION = ["N", "E", "S", "W"] as const;

export type Move = (typeof MOVE)[number];
export type Orientation = (typeof ORIENTATION)[number];

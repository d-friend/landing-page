// One decimal, comma as the decimal separator (Vietnamese): 9.8 -> "9,8".
export const fmt = (x: number) => (Math.round(x * 10) / 10).toString().replace(".", ",");

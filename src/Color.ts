const hexToRgb = (hexColor: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
  
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : {
    r: 0,
    g: 0,
    b: 0
  }
}

export class Color {
  public hex: string;
  public r: number;
  public b: number;
  public g: number;

  constructor(hex: string) {
    this.hex = hex;
    this.r = hexToRgb(hex).r;
    this.b = hexToRgb(hex).b;
    this.g = hexToRgb(hex).g;
  };
}
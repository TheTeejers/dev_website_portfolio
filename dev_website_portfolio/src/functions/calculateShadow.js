export default function calculateShadow(bigX, bigY) {
    if (bigX && bigY) {
      return {
        offsetX: `${bigX * 0.5}em`,
        offsetY: `${bigY * 0.5}em`,
        blur: `${Math.hypot(bigX * 0.25, bigY * 0.5)}em`,
        color: `rgba(0, 255, 170, .75)`,
      };
    }
    return { offsetX: '0rem', offsetY: '0rem' };
  }
  
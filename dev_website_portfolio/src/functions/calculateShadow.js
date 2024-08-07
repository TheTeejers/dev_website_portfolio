export default function calculateShadow(bigX, bigY) {
    if (bigX && bigY) {
      return {
        offsetX: `${bigX * 0.5}em`,
        offsetY: `${bigY * 0.5}em`,
        blur: `${Math.hypot(bigX * 0.5, bigY * 0.5)}em`,
        color: `rgba(160, 255, 210, .75)`,
      };
    }
    return { offsetX: '0rem', offsetY: '0rem' };
  }
  
import { useState, useEffect } from 'react';

export default function useDistance(imageRef) {
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);
  const [bigX, setBigX] = useState(0);
  const [bigY, setBigY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setCenterX(rect.left + rect.width / 2);
      setCenterY(rect.top + rect.height / 2);
    }
  }, [imageRef]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    const handleFrame = () => {
      window.requestAnimationFrame(handleFrame);
    };

    window.addEventListener('mousemove', handleMouseMove);
    handleFrame();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (mouseX !== null && mouseY !== null) {
      const bigX = (-mouseX + centerX);
      const bigY = (-mouseY + centerY);
      setBigX(bigX);
      setBigY(bigY);
    }
  }, [mouseX, mouseY, centerX, centerY]);

  return { bigX, bigY };
}

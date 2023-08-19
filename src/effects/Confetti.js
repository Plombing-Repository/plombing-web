import React, { useCallback, useEffect, useRef } from 'react';

import ReactCanvasConfetti from 'react-canvas-confetti';

export default function Confetti() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.8 },
        particleCount: Math.floor(300 * particleRatio),
        gravity: 3.5,
      });
  }, []);

  const makeShot2 = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { x: 0.2, y: 0.6 },
        particleCount: Math.floor(200 * particleRatio),
        gravity: 3.5,
      });
  }, []);

  const makeShot3 = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { x: 0.7, y: 0.5 },
        particleCount: Math.floor(200 * particleRatio),
        gravity: 3.5,
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fire();
    }, 500);
    setTimeout(() => {
      fire2();
    }, 1000);
    setTimeout(() => {
      fire3();
    }, 1200);
    setTimeout(() => {
      fire();
    }, 1500);
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.2, {
      spread: 120,
    });

    makeShot(0.2, {
      spread: 150,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 180,
      startVelocity: 45,
    });
  }, [makeShot]);

  const fire2 = useCallback(() => {
    makeShot2(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot2(0.2, {
      spread: 60,
    });

    makeShot2(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot2(0.1, {
      spread: 180,
      startVelocity: 45,
    });
  }, [makeShot2]);

  const fire3 = useCallback(() => {
    makeShot3(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot3(0.2, {
      spread: 60,
    });

    makeShot3(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot3(0.1, {
      spread: 180,
      startVelocity: 45,
    });
  }, [makeShot3]);

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
    />
  );
}

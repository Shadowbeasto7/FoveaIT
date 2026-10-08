import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web'; // Vite aliases this → lottie_light (48% smaller)

/**
 * LottiePlayer — performance-optimised wrapper around lottie-web light build.
 * Safely resolves lottie export (ESM / CJS / UMD) and guards against initialization errors.
 */
export function LottiePlayer({
  animationData,
  loop = true,
  autoplay = true,
  style = {},
  className = '',
  speed = 1,
  renderer = 'svg'
}) {
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const isIntersectingRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || !animationData) return;

    let instance = null;
    let observer = null;
    let handleVisibilityChange = null;

    try {
      // Safely resolve lottie library export across ESM/CJS interop
      const lottieLib =
        (lottie && typeof lottie.loadAnimation === 'function' && lottie) ||
        (lottie && lottie.default && typeof lottie.default.loadAnimation === 'function' && lottie.default) ||
        (typeof window !== 'undefined' && window.lottie && typeof window.lottie.loadAnimation === 'function' && window.lottie);

      if (!lottieLib || typeof lottieLib.loadAnimation !== 'function') {
        console.warn('LottiePlayer: lottie-web loadAnimation method unavailable.');
        return;
      }

      instance = lottieLib.loadAnimation({
        container: containerRef.current,
        renderer,
        loop,
        autoplay: false, // controlled by observer
        animationData,
        rendererSettings: {
          progressiveLoad: true,
          hideOnTransparent: true,
          preserveAspectRatio: 'xMidYMid meet',
        },
      });

      animRef.current = instance;

      if (instance.setSpeed) instance.setSpeed(speed);
      if (instance.setSubframe) instance.setSubframe(false); // snap to keyframes -> reduces CPU/GPU load

      // 1. IntersectionObserver — pause when offscreen, play when visible
      observer = new IntersectionObserver(
        ([entry]) => {
          isIntersectingRef.current = entry.isIntersecting;
          if (entry.isIntersecting && autoplay && document.visibilityState === 'visible') {
            instance.play?.();
          } else {
            instance.pause?.();
          }
        },
        { threshold: 0.05, rootMargin: '50px' }
      );

      observer.observe(containerRef.current);

      // 2. Tab Visibility — pause when tab is inactive
      handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') {
          instance.pause?.();
        } else if (isIntersectingRef.current && autoplay) {
          instance.play?.();
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);
    } catch (err) {
      console.error('LottiePlayer initialization error:', err);
    }

    return () => {
      try {
        if (observer) observer.disconnect();
        if (handleVisibilityChange) document.removeEventListener('visibilitychange', handleVisibilityChange);
        if (instance) instance.destroy();
      } catch (_err) {
        // ignore cleanup errors
      }
    };
  }, [animationData, loop, autoplay, speed, renderer]);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100%', ...style }}
      className={className}
    />
  );
}

export default LottiePlayer;

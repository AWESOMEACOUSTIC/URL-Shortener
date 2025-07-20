import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const GRADIENT_CLASSES =
  'text-transparent bg-clip-text bg-gradient-to-b '
  + 'from-[#966FD4] via-[#5F4983] via-[#452578] to-[#1F1430]';

function useRollingText(ref, text) {
  useEffect(() => {
    const split = new SplitText(ref.current, { type: 'chars' });
    const chars = split.chars;
    const timeline = gsap.timeline({ paused: true, repeat: 0 });

    chars.forEach((char, i) => {
      const letter = char.textContent;
      char.innerHTML =
        `<div class=\"original ${GRADIENT_CLASSES}\">${letter}</div>` +
        `<div class=\"clone absolute inset-0 ${GRADIENT_CLASSES}\">${letter}</div>`;

      const clone = char.querySelector('.clone');
      gsap.set(clone, { yPercent: i % 2 === 0 ? -100 : 100 });

      timeline.to(
        [char.querySelector('.original'), clone],
        { yPercent: i % 2 === 0 ? '+=100' : '-=100', ease: 'none', duration: 1 },
        0
      );
    });

    timeline.play();

    const el = ref.current;
    const onEnter = () => {
      timeline.repeat(-1);
      timeline.restart();
    };
    const onLeave = () => {
      timeline.repeat(0);
      gsap.to(timeline, {
        progress: 0,
        duration: 0.8,
        ease: 'power4.inOut',
        onComplete: () => timeline.pause(),
      });
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      split.revert();
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      timeline.kill();
    };
  }, [ref, text]);
}

export default function RollingTextAnimation({ text = 'rolling' }) {
  const headingRef = useRef(null);
  useRollingText(headingRef, text);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F3F3]">
      <h1
        ref={headingRef}
        className="relative font-[reposed] inline-block overflow-hidden uppercase tracking-[0.03em] text-[clamp(2rem,9vw+1rem,12rem)]"
      >
        {text}
      </h1>
    </div>
  );
}

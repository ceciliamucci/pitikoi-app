import React from 'react';

// Geometría de los SVG proporcionados; los colores se definen en CSS.
export function OptionCloud() {
  return (
    <svg className="option-cloud-shape" viewBox="0 0 320 160" aria-hidden="true" focusable="false">
      <path d="M57 139C25 139 8 117 8 93c0-23 17-42 40-46C52 19 75 5 101 5c26 0 47 13 58 34 9-5 20-8 31-8 25 0 46 18 50 42 5-1 10-2 15-2 31 0 57 23 57 52 0 10-3 16-9 16H57Z" />
    </svg>
  );
}

export function FeedbackCloudTop() {
  const curve = 'M0 94 C100 94 127 58 238 58 C302 58 326 69 369 75 C413 22 486 8 553 28 C606 -8 710 -3 758 38 C841 13 920 32 963 74 C1050 44 1125 63 1200 94';
  return (
    <div className="feedback-cloud-edge" aria-hidden="true">
      <svg viewBox="0 0 1200 150" focusable="false">
        <path className="feedback-cloud-fill" d={`${curve} L1200 150 L0 150 Z`} />
        <path className="feedback-cloud-outline" d={curve} />
      </svg>
    </div>
  );
}

import React from 'react';

const SvgRcn = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="rcn_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="rcn_svg__b" cx={16} cy={15} r={15} />
      <filter id="rcn_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="rcn_svg__e"
        d="M14.36 5.627c.85-.158 1.72-.14 2.58-.097.992.116 1.986.324 2.898.734a9.64 9.64 0 0 1 4.423 3.73c.393.573.657 1.215.922 1.852.246-.392.466-.8.68-1.21.092-.193.285-.342.51-.332a.583.583 0 0 1 .624.51c.025.24-.126.447-.225.655-.312.63-.715 1.212-1.132 1.78-.077.082-.045.196-.036.296.464 2.737-.419 5.65-2.3 7.712a9.8 9.8 0 0 1-3.977 2.67c-1.758.615-3.694.754-5.512.324-2.636-.571-4.968-2.309-6.294-4.615-.29-.467-.475-.986-.704-1.482-.25.385-.462.79-.675 1.194a.643.643 0 0 1-.531.354c-.381 0-.727-.41-.574-.775.328-.754.777-1.452 1.28-2.104.108-.113.093-.273.073-.414a9.185 9.185 0 0 1 .16-3.614c.77-3.324 3.53-6.1 6.875-6.965.31-.073.62-.15.935-.203zm-2.362 2.01c-1.773.932-3.2 2.491-3.94 4.332-.428 1.112-.646 2.308-.58 3.498a5.77 5.77 0 0 0 .536-.456c.995-.888 2.16-1.576 3.378-2.124 2.263-1.029 4.755-1.472 7.231-1.592-.837-.868-1.745-1.669-2.582-2.537.264-.29.55-.558.836-.826.325.294.625.613.943.914 1.03 1.025 2.091 2.02 3.104 3.059-1.08 1.077-2.188 2.127-3.268 3.204a3.568 3.568 0 0 1-.286.242c-.272-.274-.588-.514-.806-.835.664-.696 1.42-1.306 2.057-2.027-1.142.016-2.278.178-3.396.4-.903.161-1.771.466-2.638.757-1.816.68-3.491 1.764-4.768 3.214-.076.075-.065.186-.045.28.151.648.436 1.254.748 1.84 1.03 1.857 2.81 3.292 4.855 3.94 1.196.368 2.472.51 3.716.337a8.593 8.593 0 0 0 4.673-2.135c1.865-1.644 2.911-4.149 2.75-6.608-.197.153-.373.327-.557.493a13.408 13.408 0 0 1-4.244 2.466c-2.02.75-4.172 1.138-6.327 1.199.188.246.42.452.639.671.645.628 1.281 1.264 1.936 1.882-.252.297-.546.556-.824.828-.279-.227-.52-.491-.78-.74-.974-.944-1.938-1.9-2.91-2.848a3.168 3.168 0 0 1-.37-.4c.421-.452.905-.842 1.336-1.284.74-.715 1.46-1.451 2.209-2.157.28.272.574.532.823.833-.666.69-1.375 1.339-2.05 2.02.74.037 1.47-.09 2.204-.16.53-.056 1.051-.176 1.574-.285 2.685-.62 5.3-1.895 7.102-3.996-.69-2.984-3.227-5.44-6.246-6.134-2.011-.511-4.204-.22-6.033.735z"
      />
      <filter id="rcn_svg__d" width="115.9%" height="118.4%" x="-8%" y="-6.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#rcn_svg__a)" xlinkHref="#rcn_svg__b" />
      <use fill="#3555F9" xlinkHref="#rcn_svg__b" />
      <use
        fill="url(#rcn_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#rcn_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#rcn_svg__d)" xlinkHref="#rcn_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#rcn_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgRcn;

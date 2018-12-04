import React from 'react';

const SvgRdn = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="rdn_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="rdn_svg__b" cx={16} cy={15} r={15} />
      <filter id="rdn_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="rdn_svg__e"
        d="M10 5.006h8.111c.098-.03.148.06.212.11a14.88 14.88 0 0 1 2.046 2.39 15.153 15.153 0 0 1 1.972 3.946c.482 1.484.71 3.054.65 4.614h-4.135a5 5 0 0 0 .022-.624c-.043-1.471-.497-2.914-1.212-4.192-.765-1.369-1.833-2.55-3.047-3.531-1.322-1.069-2.81-1.913-4.36-2.595-.086-.04-.176-.072-.259-.118zm3.002 7.327a4715.11 4715.11 0 0 1 4.155 7.533c.333.606.67 1.21 1 1.817C16.436 22.785 14.72 23.897 13 25V12.333z"
      />
      <filter id="rdn_svg__d" width="126.9%" height="117.5%" x="-13.5%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#rdn_svg__a)" xlinkHref="#rdn_svg__b" />
      <use fill="#2A2A2A" fillRule="evenodd" xlinkHref="#rdn_svg__b" />
      <use
        fill="url(#rdn_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#rdn_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#rdn_svg__d)" xlinkHref="#rdn_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#rdn_svg__e" />
    </g>
  </svg>
);

export default SvgRdn;

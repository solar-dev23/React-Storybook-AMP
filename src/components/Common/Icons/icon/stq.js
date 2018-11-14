import React from 'react';

const SvgStq = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="stq_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="stq_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="stq_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#stq_svg__a)" xlinkHref="#stq_svg__b" />
        <use fill="#2DC4E7" fillRule="evenodd" xlinkHref="#stq_svg__b" />
        <use
          fill="url(#stq_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#stq_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <path
        d="M6.14 9.032c.964 0 1.96-.064 2.924.022.429.482.525 1.157.857 1.714 4.329.021 8.679 0 13.008 0 .321.021.717.032.878.353.193.354.054.772-.128 1.093-.879 1.49-1.715 3-2.572 4.5-.321.536-.536 1.136-1.018 1.554-.396.332-.943.353-1.446.353h-6c-.322 0-.664-.032-.857-.289-.622-.696-.954-1.586-1.361-2.4a221.97 221.97 0 0 1-2.068-4.253c-.14-.322-.31-.611-.471-.911-.568 0-1.136 0-1.693-.022a6.134 6.134 0 0 1-.054-1.714zM12.9 19.78a3.07 3.07 0 0 1 1.329-.022c.492.107.921.482 1.039.975.128.568.128 1.179-.097 1.725-.214.493-.75.729-1.253.772-.579.042-1.243 0-1.672-.429-.46-.514-.46-1.264-.364-1.907A1.337 1.337 0 0 1 12.9 19.78zm5.357 0c.536-.118 1.114-.108 1.629.085.493.204.75.74.793 1.243.064.59 0 1.264-.429 1.714-.396.375-.975.429-1.5.418-.514-.021-1.071-.214-1.34-.696a2.535 2.535 0 0 1-.192-1.682 1.396 1.396 0 0 1 1.04-1.082z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgStq;

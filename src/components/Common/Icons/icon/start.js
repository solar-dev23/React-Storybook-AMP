import React from 'react';

const SvgStart = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="start_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="start_svg__b" cx={16} cy={15} r={15} />
      <filter id="start_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="start_svg__e"
        d="M21.069 17.89c-.013 2.074-1.211 3.84-3.122 4.565-.448.17-.914.295-1.378.411-.277.07-.428.207-.45.51-.028.382-.067.763-.12 1.14-.064.446-.217.548-.627.45-.706-.168-.782-.282-.688-1.023.008-.063.017-.126.024-.19.07-.607-.016-.694-.597-.665-.261.013-.37.142-.395.398-.034.368-.07.737-.13 1.1-.06.372-.216.464-.574.386-.764-.165-.82-.25-.72-1.058.126-1.003.123-.992-.803-1.271-.41-.124-.808-.296-1.209-.455-.244-.096-.324-.278-.258-.549.084-.345.142-.698.214-1.047.124-.595.412-.775.962-.559.974.383 1.974.619 3.015.644.939.023 1.868-.039 2.725-.5.566-.305.982-.752 1.191-1.393.31-.952.032-1.722-.86-2.105-.735-.315-1.524-.49-2.265-.792-.658-.268-1.342-.536-1.91-.957-1.277-.944-1.5-2.34-1.22-3.831.318-1.681 1.347-2.771 2.874-3.35.407-.153.591-.367.598-.824.006-.495.085-.99.145-1.483.046-.379.194-.485.548-.427.752.123.842.242.768 1.023-.029.305-.054.61-.09.913-.03.255.051.372.318.38.609.018.635.007.707-.623.046-.405.08-.811.135-1.215.06-.448.205-.55.618-.466.695.143.772.249.704.973-.03.317-.045.637-.1.95-.063.36.047.527.405.61.681.158 1.355.358 2.024.566.503.156.523.213.426.736-.057.313-.114.627-.188.936-.138.582-.428.755-.982.569-.948-.32-1.9-.609-2.905-.652-.88-.037-1.748-.024-2.512.529-1.076.778-1.082 2.36.062 3.026.728.424 1.569.64 2.358.952.481.19.975.354 1.437.584 1.238.618 1.859 1.651 1.845 3.085"
      />
      <filter id="start_svg__d" width="129.2%" height="117.5%" x="-14.6%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#start_svg__a)" xlinkHref="#start_svg__b" />
      <use fill="#01AEF0" xlinkHref="#start_svg__b" />
      <use
        fill="url(#start_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#start_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#start_svg__d)" xlinkHref="#start_svg__e" />
      <use fill="#FFF" xlinkHref="#start_svg__e" />
    </g>
  </svg>
);

export default SvgStart;

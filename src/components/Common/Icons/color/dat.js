import React from 'react';

const SvgDat = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#2d9cdb" r={16} />
      <path
        d="M20.054 5.606c.392 0 .708.12.947.359s.358.554.358.947v11.674c0 1.33-.315 2.543-.947 3.635a6.882 6.882 0 0 1-2.534 2.56c-1.058.614-2.244.921-3.559.921-1.314 0-2.517-.307-3.61-.921a6.882 6.882 0 0 1-2.534-2.56c-.614-1.092-.921-2.304-.921-3.635s.281-2.535.845-3.61c.58-1.092 1.365-1.946 2.355-2.56 1.007-.614 2.125-.922 3.353-.922a6.306 6.306 0 0 1 4.941 2.33V6.912c0-.393.12-.708.359-.947a1.33 1.33 0 0 1 .947-.359zm-5.735 17.792c.854 0 1.622-.204 2.304-.614a4.468 4.468 0 0 0 1.639-1.74c.392-.735.589-1.554.589-2.458s-.197-1.716-.59-2.432a4.287 4.287 0 0 0-1.638-1.716c-.682-.426-1.45-.64-2.304-.64-.853 0-1.63.214-2.33.64a4.528 4.528 0 0 0-1.638 1.716c-.392.716-.588 1.527-.588 2.432s.196 1.723.588 2.457a4.73 4.73 0 0 0 1.639 1.741c.7.41 1.476.614 2.33.614z"
        fill="#fff"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgDat;

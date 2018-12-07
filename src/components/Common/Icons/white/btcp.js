import React from 'react';

const SvgBtcp = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.215-24.8l-1.723-.43-.673 2.776c-.454-.117-.92-.221-1.373-.326l.686-2.79L15.41 6l-.7 2.842c-.375-.091-.737-.17-1.1-.26l-2.37-.6-.454 1.851s1.282.3 1.256.313c.7.17.83.639.804 1.004l-.519 2.086-.453 1.812-.971 3.912c-.091.208-.298.534-.79.417.012.026-1.257-.313-1.257-.313L8 21.033l2.24.56c.415.105.83.222 1.232.326l-.713 2.882 1.723.43.7-2.856.556-2.086.946-3.82c.194.053.402.092.622.144.7.156 1.425.221 2.137.274.44.039.868.052 1.308.052a6.459 6.459 0 0 0 1.93-.34c.519-.169 1.127-.39 1.516-.808.453-.482.674-1.12.764-1.76.311-2.099-1.282-3.233-3.445-3.99zm-.142 10.3c-.48.078-.726.117-1.205.143l-.674.039c.648.443 1.05 1.056.842 1.903-.388 1.591-2.448 1.37-3.976 1.03l-.519 2.113-.025.09-.661 2.752 1.71.43.712-2.881c2.928.56 5.143.339 6.062-2.347.583-1.656.156-2.947-.738-3.742-.013.013-.039.013-.052.026-.414.17-.997.365-1.476.443zm-.506-3.495c-.479 1.956-3.484.965-4.456.717l.855-3.468c.972.261 4.107.704 3.601 2.751z"
      fill="#fff"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgBtcp;

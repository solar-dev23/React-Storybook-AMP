import React from 'react';

const SvgQlc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.49-26.997c-.173 0-.346-.007-.519.001-.502.025-.862.383-.876.864-.014.486.316.869.814.925.654.074 1.322.076 1.962.213 4.278.914 7.24 4.532 7.338 8.92.013.595.36.978.89.98.54 0 .932-.404.9-1.004-.038-.68-.074-1.367-.208-2.031-1.019-5.032-5.172-8.592-10.301-8.868zM15.532 27c.257-.017.524.002.77-.059.384-.095.636-.542.581-.942-.058-.423-.406-.718-.84-.763-.76-.08-1.536-.11-2.272-.292-4.08-1.006-6.923-4.624-6.996-8.828a1.333 1.333 0 0 0-.137-.584c-.18-.337-.592-.488-.947-.397-.426.11-.72.44-.689.901.05.753.103 1.513.245 2.252.934 4.833 5.362 8.564 10.285 8.712zm.452-15.003c-2.634.008-4.546 2.53-3.847 5.076.468 1.704 2.086 2.956 3.802 2.94.546-.004.949-.382.953-.893.004-.502-.372-.87-.907-.899a3.064 3.064 0 0 1-.48-.062c-1.153-.249-1.893-1.4-1.664-2.582.224-1.157 1.344-1.939 2.496-1.743a2.202 2.202 0 0 1 1.867 2.132c.014.384.16.67.5.843.627.32 1.305-.146 1.3-.887-.015-2.147-1.843-3.932-4.02-3.925zm7.555 3.757c-.03-.283-.051-.53-.083-.777-.465-3.657-3.671-6.497-7.342-6.504-.61-.002-1.012.35-1.017.888-.005.537.395.89.996.918 2.458.117 4.191 1.316 5.204 3.551.306.676.427 1.4.434 2.146.005.49.316.849.754.92.419.07.849-.165.98-.569.06-.19.054-.402.074-.573zm-15.061.461a7.32 7.32 0 0 0 1.947 4.85c1.485 1.618 3.342 2.443 5.544 2.463.416.004.72-.206.859-.565.246-.638-.205-1.2-.98-1.22a5.712 5.712 0 0 1-5.209-3.682 5.756 5.756 0 0 1-.378-1.994c-.012-.719-.653-1.157-1.265-.874-.465.214-.57.615-.518 1.022zm11.534 2.82c-.044-.106-.078-.32-.2-.45a24.792 24.792 0 0 0-1.44-1.448c-.339-.31-.893-.242-1.203.09-.305.328-.335.851-.024 1.183.45.482.917.95 1.4 1.397.268.247.607.271.94.115.337-.157.49-.44.527-.887z"
      fill="#fff"
    />
  </svg>
);

export default SvgQlc;

import * as React from "react";

function Transaction(props) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 32 32"
      fill="none"
      {...props}>
      <path
        d="M16 2.667a13.356 13.356 0 00-9.333 3.836V4A1.333 1.333 0 004 4v6a1.333 1.333 0 001.333 1.333h6a1.333 1.333 0 100-2.666H8.291a10.656 10.656 0 117.709 18 1.333 1.333 0 000 2.666 13.333 13.333 0 000-26.666z"
        fill="#C8F069"
      />
      <path
        d="M18.667 17.333H16A1.334 1.334 0 0114.667 16v-4a1.333 1.333 0 112.667 0v2.667h1.333a1.333 1.333 0 110 2.666z"
        fill="#C8F069"
      />
      <path
        opacity={0.5}
        d="M16 5.333a10.678 10.678 0 00-7.71 3.334h3.043a1.333 1.333 0 010 2.666h-6a1.319 1.319 0 01-1.301-1.173 13.303 13.303 0 0011.967 19.173 1.334 1.334 0 010-2.666 10.667 10.667 0 100-21.334zm2.666 12H16A1.334 1.334 0 0114.666 16v-4a1.334 1.334 0 012.667 0v2.667h1.333a1.333 1.333 0 010 2.666z"
        fill="#C8F069"
      />
    </svg>
  );
}

const MemoTransaction = React.memo(Transaction);
export default MemoTransaction;

import * as React from "react";

function QuickWidthraw(props) {
  return (
    <svg width="2em" height="2em" viewBox="0 0 69 68" fill="none" {...props}>
      <rect x={0.5} width={68} height={68} rx={34} fill="#144E43" />
      <path
        d="M36.334 43.333c0 .454.053.894.12 1.334h-12.12A2.667 2.667 0 0121.667 42V26a2.657 2.657 0 012.667-2.667h8L35 26h10.667a2.667 2.667 0 012.667 2.667v7.746a8.281 8.281 0 00-2.667-.96v-6.786H24.334V42h12.12c-.067.44-.12.88-.12 1.333zm12 1.334v-5.334h-2.667v5.334h-2l3.333 4 3.334-4h-2zM41.667 38l-3.333 4h2v5.333H43V42h2l-3.333-4z"
        fill="#C8F069"
      />
    </svg>
  );
}

const MemoQuickWidthraw = React.memo(QuickWidthraw);
export default MemoQuickWidthraw;

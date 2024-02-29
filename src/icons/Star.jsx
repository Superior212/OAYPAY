import * as React from "react";

function Star(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M10.92 2.868a1.25 1.25 0 012.16 0l2.795 4.798 5.428 1.176a1.25 1.25 0 01.667 2.054l-3.7 4.141.56 5.525a1.25 1.25 0 01-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 01-1.748-1.27l.56-5.525-3.7-4.14a1.25 1.25 0 01.667-2.055l5.428-1.176 2.795-4.798z"
        fill="#FFCC4D"
      />
    </svg>
  );
}

const MemoStar = React.memo(Star);
export default MemoStar;

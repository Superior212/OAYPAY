import * as React from "react";

function Mark(props) {
  return (
    <svg width="2em" height="2em" viewBox="0 0 40 41" fill="none" {...props}>
      <path
        d="M20 33.833c7.364 0 13.334-5.97 13.334-13.333 0-7.364-5.97-13.334-13.334-13.334S6.667 13.136 6.667 20.5 12.637 33.833 20 33.833z"
        fill="#C8F069"
      />
      <path
        d="M14.167 18.833l3.822 3.822a1.666 1.666 0 002.356 0L32.5 10.5"
        stroke="#0F322E"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </svg>
  );
}

const MemoMark = React.memo(Mark);
export default MemoMark;

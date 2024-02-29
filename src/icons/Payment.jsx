import * as React from "react";

function Payment(props) {
  return (
    <svg width="2em" height="2em" viewBox="0 0 69 68" fill="none" {...props}>
      <rect x={0.5} width={68} height={68} rx={34} fill="#144E43" />
      <path
        d="M47 27.833v-.84c0-1.59 0-2.386-.21-3.026a4.06 4.06 0 00-2.509-2.583c-.624-.218-1.396-.218-2.941-.218H28.66c-1.545 0-2.317 0-2.941.218a4.061 4.061 0 00-2.508 2.581C23 24.608 23 25.403 23 26.993V38.5m24-5.334v12.5c0 1.143-1.313 1.751-2.144.991a1.261 1.261 0 00-1.712 0l-.644.59a2.21 2.21 0 01-3 0 2.21 2.21 0 00-3 0 2.21 2.21 0 01-3 0 2.21 2.21 0 00-3 0 2.21 2.21 0 01-3 0l-.644-.59a1.261 1.261 0 00-1.712 0c-.83.76-2.144.152-2.144-.992v-1.832"
        stroke="#C8F069"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M31.667 32.367l1.905 2.133 4.762-5.334"
        stroke="#C8F069"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 39.166h2m10 0h-6"
        stroke="#C8F069"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

const MemoPayment = React.memo(Payment);
export default MemoPayment;

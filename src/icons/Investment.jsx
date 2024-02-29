import * as React from "react";

function Investment(props) {
  return (
    <svg width="2em" height="2em" viewBox="0 0 69 68" fill="none" {...props}>
      <rect x={0.5} width={68} height={68} rx={34} fill="#144E43" />
      <path
        d="M47.937 19.269l-9.212 3.46 3.306 2.084c-5.906 7.437-14.45 12.018-21.669 13.762l2.045 3.725c8.112-2.644 16.7-7.412 22.23-15.837l2.52 1.587.78-8.781zm.482 7.294l-.3 3.425-3.207-2.026c-.112.17-.23.332-.35.5v19.976h4.875V26.561H48.42zm-9.413 8a39.744 39.744 0 01-2.444 1.95v11.925h4.875V34.562h-2.43zm-7.731 5.25c-.9.474-1.8.912-2.713 1.325v7.3h4.875v-8.626h-2.162zm-10.713 2.75v5.874h4.875v-5.874h-.355c-.926.343-1.852.662-2.772.956l-.44.137-.6-1.093h-.708z"
        fill="#C8F069"
      />
    </svg>
  );
}

const MemoInvestment = React.memo(Investment);
export default MemoInvestment;

import * as React from "react";

function Security(props) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 32 32"
      fill="none"
      {...props}>
      <path
        opacity={0.3}
        d="M16 4.253L6.667 8.4V16H16v11.907c4.96-1.534 8.627-6.427 9.334-11.92H16V4.253z"
        fill="#C8F069"
      />
      <path
        d="M16 1.333L4 6.667v8c0 7.4 5.12 14.32 12 16 6.88-1.68 12-8.6 12-16v-8L16 1.333zm0 26.574V16H6.667V8.4L16 4.253v11.734h9.333C24.627 21.48 20.96 26.373 16 27.907z"
        fill="#C8F069"
      />
    </svg>
  );
}

const MemoSecurity = React.memo(Security);
export default MemoSecurity;

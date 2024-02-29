import * as React from "react";

function Tick(props) {
  return (
    <svg
      width="2em"
      height="2m"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.0003 37.8332C31.3641 37.8332 37.3337 31.8636 37.3337 24.4998C37.3337 17.136 31.3641 11.1665 24.0003 11.1665C16.6365 11.1665 10.667 17.136 10.667 24.4998C10.667 31.8636 16.6365 37.8332 24.0003 37.8332Z"
        fill="#C8F069"
      />
      <path
        d="M18.167 22.8333L21.9887 26.655C22.3012 26.9675 22.7251 27.143 23.167 27.143C23.6089 27.143 24.0328 26.9675 24.3453 26.655L36.5003 14.5"
        stroke="#0F322E"
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
}

const MemoTick = React.memo(Tick);
export default MemoTick;

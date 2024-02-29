import * as React from "react";

function Download(props) {
  return (
    <svg width="2em" height="2em" viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M38 18h-8V6H18v12h-8l14 14 14-14zM10 36v4h28v-4H10z"
        fill="#0F322E"
      />
    </svg>
  );
}

const MemoDownload = React.memo(Download);
export default MemoDownload;

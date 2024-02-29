import * as React from "react";

function Transfer(props) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 32 32"
      fill="none"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.536 8.897C4.189 5.785 7.393 3.5 10.224 4.841l15.925 7.544c3.05 1.444 3.05 5.786 0 7.23L10.224 27.16c-2.831 1.341-6.034-.944-5.688-4.056l.64-5.77H16a1.333 1.333 0 100-2.667H5.177l-.641-5.77z"
        fill="#C8F069"
      />
    </svg>
  );
}

const MemoTransfer = React.memo(Transfer);
export default MemoTransfer;

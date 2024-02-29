import * as React from "react";

function QuickTransfer(props) {
  return (
    <svg width="2em" height="2em" viewBox="0 0 69 68" fill="none" {...props}>
      <rect x={0.5} width={68} height={68} rx={34} fill="#144E43" />
      <path
        d="M35 34c-.863 0-1.707.282-2.424.809a4.732 4.732 0 00-1.608 2.154 5.248 5.248 0 00-.248 2.773 4.966 4.966 0 001.194 2.458 4.257 4.257 0 002.235 1.314c.846.185 1.724.09 2.52-.273a4.482 4.482 0 001.96-1.768c.479-.79.735-1.718.735-2.667 0-1.273-.46-2.494-1.278-3.394C37.267 34.506 36.157 34 35 34zm0 6.4c-.288 0-.569-.094-.808-.27a1.577 1.577 0 01-.536-.718 1.75 1.75 0 01-.083-.924c.056-.31.195-.596.398-.82a1.42 1.42 0 01.745-.437c.282-.062.575-.03.84.09.266.122.494.327.653.59.16.263.245.573.245.889 0 .424-.153.831-.425 1.131-.273.3-.643.469-1.029.469zm-1.033-10.064c.139.146.302.26.48.336a1.263 1.263 0 001.106 0c.178-.076.341-.19.48-.336l3.33-3.6c.282-.31.44-.73.44-1.168a1.74 1.74 0 00-.44-1.168 1.436 1.436 0 00-1.061-.484c-.398 0-.78.174-1.062.484l-.785.944V19.6c0-.424-.154-.831-.426-1.131A1.391 1.391 0 0035 18c-.386 0-.756.169-1.029.469-.272.3-.425.707-.425 1.131v5.744l-.786-.944a1.436 1.436 0 00-1.062-.484c-.398 0-.78.174-1.062.484-.281.31-.44.73-.44 1.168 0 .438.159.858.44 1.168l3.331 3.6zM45.182 38.8c0-.316-.086-.626-.245-.889a1.494 1.494 0 00-.653-.59 1.332 1.332 0 00-.84-.09 1.42 1.42 0 00-.745.438 1.655 1.655 0 00-.398.819 1.75 1.75 0 00.082.924c.11.293.297.543.536.718.24.176.52.27.808.27.386 0 .756-.169 1.029-.469.273-.3.426-.707.426-1.131zm1.454-11.2h-4.363c-.386 0-.756.169-1.029.469-.273.3-.426.707-.426 1.131 0 .424.153.831.426 1.131.273.3.643.469 1.029.469h4.363c.386 0 .756.169 1.029.469.273.3.426.707.426 1.131v12.8c0 .424-.153.831-.426 1.131-.273.3-.643.469-1.029.469H23.364c-.386 0-.756-.169-1.029-.469a1.685 1.685 0 01-.426-1.131V32.4c0-.424.153-.831.426-1.131.273-.3.643-.469 1.029-.469h4.363c.386 0 .756-.169 1.029-.469.273-.3.426-.707.426-1.131 0-.424-.153-.831-.426-1.131a1.391 1.391 0 00-1.029-.469h-4.363c-1.158 0-2.268.506-3.086 1.406-.818.9-1.278 2.121-1.278 3.394v12.8c0 1.273.46 2.494 1.278 3.394.818.9 1.928 1.406 3.086 1.406h23.272c1.158 0 2.268-.506 3.086-1.406.818-.9 1.278-2.121 1.278-3.394V32.4c0-1.273-.46-2.494-1.278-3.394-.818-.9-1.928-1.406-3.086-1.406zM24.818 38.8c0 .317.085.626.245.889.16.263.387.468.653.59.266.12.558.152.84.09a1.42 1.42 0 00.745-.438c.204-.223.342-.508.398-.819a1.75 1.75 0 00-.082-.924 1.578 1.578 0 00-.536-.718c-.24-.176-.52-.27-.808-.27-.386 0-.756.169-1.029.469-.273.3-.426.707-.426 1.131z"
        fill="#C8F069"
      />
    </svg>
  );
}

const MemoQuickTransfer = React.memo(QuickTransfer);
export default MemoQuickTransfer;

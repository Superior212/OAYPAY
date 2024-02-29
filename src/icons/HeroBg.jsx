import * as React from "react";

function HeroBg(props) {
  return (
    <svg viewBox="0 0 1728 1117" fill="none" {...props}>
      <g filter="url(#prefix__filter0_f_3_240)">
        <circle
          cx={1135.5}
          cy={588.5}
          r={451.5}
          fill="#C8F069"
          fillOpacity={0.19}
        />
      </g>
      <g filter="url(#prefix__filter1_f_3_240)">
        <circle
          cx={480.5}
          cy={859.5}
          r={451.5}
          fill="#679D7A"
          fillOpacity={0.73}
        />
      </g>
      <g filter="url(#prefix__filter2_f_3_240)">
        <circle
          cx={1678.5}
          cy={1116.5}
          r={451.5}
          fill="#066829"
          fillOpacity={0.88}
        />
      </g>
      <g filter="url(#prefix__filter3_f_3_240)">
        <circle cx={1163.5} cy={612.5} r={451.5} fill="#357062" />
      </g>
      <defs>
        <filter
          id="prefix__filter0_f_3_240"
          x={184}
          y={-363}
          width={1903}
          height={1903}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={250}
            result="effect1_foregroundBlur_3_240"
          />
        </filter>
        <filter
          id="prefix__filter1_f_3_240"
          x={-371}
          y={8}
          width={1703}
          height={1703}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={200}
            result="effect1_foregroundBlur_3_240"
          />
        </filter>
        <filter
          id="prefix__filter2_f_3_240"
          x={827}
          y={265}
          width={1703}
          height={1703}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={200}
            result="effect1_foregroundBlur_3_240"
          />
        </filter>
        <filter
          id="prefix__filter3_f_3_240"
          x={312}
          y={-239}
          width={1703}
          height={1703}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={200}
            result="effect1_foregroundBlur_3_240"
          />
        </filter>
      </defs>
    </svg>
  );
}

const MemoHeroBg = React.memo(HeroBg);
export default MemoHeroBg;

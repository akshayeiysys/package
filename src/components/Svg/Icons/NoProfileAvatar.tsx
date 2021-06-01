import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="45" height="45" viewBox="0 0 45 45">
    <image x="1" y="1" width="43" height="43" xlinkHref="data:img/png;base64,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"/>
  </Svg>
    // <Svg viewBox="0 0 32 32" {...props}>
    //   <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z" fill={primaryColor} />
    //   <mask id="A" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
    //     <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z" fill="#c4c4c4" />
    //   </mask>
    //   <g mask="url(#A)">
    //     <path
    //       d="M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z"
    //       fill={secondaryColor}
    //     />
    //     <path
    //       fillRule="evenodd"
    //       d="M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z"
    //       fill={secondaryColor}
    //     />
    //     <ellipse cx="12.308" cy="14.846" rx="1.026" ry="1.538" fill={primaryColor} />
    //     <ellipse cx="19.385" cy="14.846" rx="1.026" ry="1.538" fill={primaryColor} />
    //   </g>
    // </Svg>
  );
};

export default Icon;

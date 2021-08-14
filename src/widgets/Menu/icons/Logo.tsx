import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 320 58" {...props}>
      <image width="320" height="58" href={isDark ? '/images/lava/LogoTextNewDark.png' : '/images/lava/LogoTextNewWhite.png'}/>
    </Svg>
  )
};

export default Logo;

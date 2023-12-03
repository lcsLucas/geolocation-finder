import React, { SVGProps } from "react";
import PinIcon from ".";

type PinIconProps = React.DetailedHTMLProps<
  SVGProps<SVGElement>,
  SVGElement
> & {
  primaryColor?: string;
  secondaryColor?: string;
  animation?: string;
};

export default React.forwardRef<SVGSVGElement, PinIconProps>((props, fRef) => {
  return (
    <PinIcon.Styled.SVG
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      x="0"
      y="0"
      viewBox="0 0 511.999 511.999"
      {...props}
      ref={fRef}
    >
      <g>
        <path
          d="M454.848 198.848c0 159.225-179.751 306.689-179.751 306.689-10.503 8.617-27.692 8.617-38.195 0 0 0-179.751-147.464-179.751-306.689C57.153 89.027 146.18 0 256 0s198.848 89.027 198.848 198.848z"
          fill={props.primaryColor ?? "#ee3840"}
        ></path>
        <path
          d="M256 298.89c-55.164 0-100.041-44.879-100.041-100.041S200.838 98.806 256 98.806s100.041 44.879 100.041 100.041S311.164 298.89 256 298.89z"
          fill={props.secondaryColor ?? "#ffe1d6"}
        ></path>
      </g>
    </PinIcon.Styled.SVG>
  );
});

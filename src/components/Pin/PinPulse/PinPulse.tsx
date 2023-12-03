import React from "react";
import PinPulse from ".";

type PinPulseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  backgroundColor?: string;
  shadowColor?: string;
  scale?: number;
};

export default React.forwardRef<HTMLDivElement, PinPulseProps>(
  (props, fRef) => {
    return <PinPulse.Styled.Pulse {...props} ref={fRef} />;
  },
);

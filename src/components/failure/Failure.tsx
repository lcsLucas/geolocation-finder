import React from "react";
import Pin from "../Pin";
import cssStyledAnimPin from "../../assets/cssStyledAnimPin";
import Failure from ".";

type FailureProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export default React.forwardRef<HTMLDivElement, FailureProps>((props, fRef) => {
  return (
    <Failure.Styled.Container {...props} ref={fRef}>
      <Pin.Error
        fontSize={80}
        style={{
          margin: "0 0 4.5rem",
        }}
        animation={cssStyledAnimPin}
      />
      <Pin.Pulse
        shadowColor="#B61C1C"
        scale={1.3}
        style={{
          marginLeft: "-7px",
        }}
      />
    </Failure.Styled.Container>
  );
});

import React from "react";
import Loading from ".";
import Pin from "../Pin";
import cssStyledAnimPin from "../../assets/cssStyledAnimPin";

type LoadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export default React.forwardRef<HTMLDivElement, LoadingProps>((props, fRef) => {
  return (
    <Loading.Styled.Container {...props} ref={fRef}>
      <Pin
        fontSize={60}
        style={{
          margin: "0 0 4.5rem",
        }}
        animation={cssStyledAnimPin}
      />
      <Pin.Pulse
        scale={1.3}
        style={{
          marginLeft: "-7px",
        }}
      />
    </Loading.Styled.Container>
  );
});

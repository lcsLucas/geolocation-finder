import InternalPinError from "./PinError";
import PinErrorStyled from "./PinError.Styled";

type TypeInternalPinError = typeof InternalPinError;

type CompoundedComponent = TypeInternalPinError & {
  Styled: typeof PinErrorStyled;
};

const PinError = InternalPinError as CompoundedComponent;

PinError.Styled = PinErrorStyled;

export default PinError;

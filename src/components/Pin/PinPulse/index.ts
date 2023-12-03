import InternalPinPulse from "./PinPulse";
import PinPulseStyled from "./PinPulse.Styled";

type TypeInternalPinPulse = typeof InternalPinPulse;

type CompoundedComponent = TypeInternalPinPulse & {
  Styled: typeof PinPulseStyled;
};

const PinPulse = InternalPinPulse as CompoundedComponent;

PinPulse.Styled = PinPulseStyled;

export default PinPulse;

import InternalPin from "./PinIcon";
import PinError from "./PinError";
import PinPulse from "./PinPulse";

type TypeInternalPin = typeof InternalPin;

type CompoundedComponent = TypeInternalPin & {
  Pulse: typeof PinPulse;
  Error: typeof PinError;
};

const Pin = InternalPin as CompoundedComponent;

Pin.Pulse = PinPulse;
Pin.Error = PinError;

export default Pin;

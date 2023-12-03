import InternalPinIcon from "./PinIcon";
import PinIconStyled from "./PinIcon.Styled";

type TypeInternalPinIcon = typeof InternalPinIcon;

type CompoundedComponent = TypeInternalPinIcon & {
  Styled: typeof PinIconStyled;
};

const PinIcon = InternalPinIcon as CompoundedComponent;

PinIcon.Styled = PinIconStyled;

export default PinIcon;

import InternalFailure from "./Failure";
import FailureStyled from "./Failure.Styled";

type TypeInternalFailure = typeof InternalFailure;

type CompoundedComponent = TypeInternalFailure & {
  Styled: typeof FailureStyled;
};

const Failure = InternalFailure as CompoundedComponent;

Failure.Styled = FailureStyled;

export default Failure;

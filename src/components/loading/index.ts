import InternalLoading from "./Loading";
import LoadingStyled from "./Loading.Styled";

type TypeInternalLoading = typeof InternalLoading;

type CompoundedComponent = TypeInternalLoading & {
  Styled: typeof LoadingStyled;
};

const Loading = InternalLoading as CompoundedComponent;

Loading.Styled = LoadingStyled;

export default Loading;

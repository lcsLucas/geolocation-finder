import InternalMap from "./Map";
import MapStyled from "./Map.Styled";

type TypeInternalMap = typeof InternalMap;

type CompoundedComponent = TypeInternalMap & {
  Styled: typeof MapStyled;
};

const Map = InternalMap as CompoundedComponent;

Map.Styled = MapStyled;

export default Map;

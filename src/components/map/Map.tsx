import React from "react";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import Loading from "../loading";
import Failure from "../failure";
import initialConfig from "../../utils/initialConfig";
import Map from ".";

type MapProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

const renderStatus = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <Loading />;
    case Status.FAILURE:
      return <Failure />;
    default:
      return <></>;
  }
};

export default React.memo(
  React.forwardRef<HTMLDivElement, MapProps>((props, fRef) => {
    const MapElement = () => {
      const ref = React.useRef<HTMLDivElement | null>(null);

      React.useEffect(() => {
        const objMap = new window.google.maps.Map(ref.current!, initialConfig);

        if (fRef && typeof fRef === "function") {
          fRef(ref.current);
        } else if (fRef && "current" in fRef) {
          fRef.current = ref.current;
        }

        objMap.addListener("click", function () {
          console.log("clicou no map");
        });
      }, []);

      return <Map.Styled.Element id="map" {...props} ref={ref} />;
    };

    return (
      <Wrapper
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        render={renderStatus}
      >
        <MapElement />
      </Wrapper>
    );
  }),
);

/**
import React from "react";
import Map from ".";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import initialConfig from "../../utils/initialConfig";

type MapProps = React.DetailedHTM
,LProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export default React.memo(
  React.forwardRef<HTMLDivElement, MapProps>((props, fRef) => {
    const MapElement = () => {
      const ref = React.useRef<HTMLDivElement | null>(null);

      React.useEffect(() => {
        const objMap = new window.google.maps.Map(ref.current!, initialConfig);

        if (fRef && typeof fRef === "function") {
          fRef(ref.current);
        } else if (fRef && "current" in fRef) {
          fRef.current = ref.current;
        }

        objMap.addListener("click", function () {
          console.log("clicou no map");
        });
      }, []);

      return <Map.Styled.Element id="map" {...props} ref={ref} />;
    };

    const renderStatus = (status: Status) => {
      switch (status) {
        case Status.LOADING:
          return <h1>Loading...</h1>;
        case Status.FAILURE:
          return <h1>Failure...</h1>;
        default:
          return <></>;
      }
    };

    return (
      <Wrapper
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        render={renderStatus}
      >
        <MapElement />
      </Wrapper>
    );
  }),
);
*/

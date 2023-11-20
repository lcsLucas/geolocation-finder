import React from "react";
import Map from ".";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

type MapProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export default React.memo(
  React.forwardRef<HTMLDivElement, MapProps>((props, fRef) => {
    const MapElement = () => {
      const ref = React.useRef<HTMLDivElement | null>(null);

      const position = { lat: -22.116927, lng: -51.3850019 };

      React.useEffect(() => {
        new window.google.maps.Map(ref.current!, {
          center: position,
          zoom: 16,
          mapId: import.meta.env.VITE_GOOGLE_MAPS_ID_MAP,
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        });

        if (fRef && typeof fRef === "function") {
          fRef(ref.current);
        } else if (fRef && "current" in fRef) {
          fRef.current = ref.current;
        }
      }, []);

      return <Map.Styled.Element id="map" {...props} ref={ref} />;
    };

    const renderStatus = (status: Status) => {
      switch (status) {
        case Status.LOADING:
          return <h1>Loading...</h1>;
        case Status.FAILURE:
          return <h1>Failure...</h1>;
        case Status.SUCCESS:
          return <MapElement />;
      }
    };

    return (
      <Wrapper
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        render={renderStatus}
      />
    );
  }),
);

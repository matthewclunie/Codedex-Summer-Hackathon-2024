import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import Date from "../assets/date.png";
import Time from "../assets/time.png";
import BrookSale from "../assets/brooklyn_stoop_sale.png";

const Invite = ({ score }) => {
  const position = { lat: 40.6795, lng: -73.9992 };
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_MAP_ID;

  return (
    <div className="h-screen">
      <div className="p-4">
        <img src={BrookSale} className="mb-2" />
        <h2 className="text-3xl font-bold">Your Score: {score}</h2>
      </div>
      <div className="grid grid-cols-2 border-2 border-black rounded-lg h-4/5">
        <div className="flex items-center justify-center p-8">
          <p>
            Greetings, Brooklyn neighbors! Youre invited to our vibrant Stoop
            Sale extravaganza on July 12, 2024. Explore treasures old and new
            right here in Carroll Gardens, where our community comes together.
            From vintage finds to handmade crafts, theres something special for
            everyone. Join us under the Brooklyn sky, where conversations flow
            as freely as our coffee. Bring your friends and family for a day of
            local delights and discover hidden gems that tell stories of our
            eclectic neighborhood. See you there!
          </p>
        </div>
        <APIProvider apiKey={apiKey}>
          <div className="flex items-center justify-center m-8 border-2 border-black rounded-sm">
            <Map zoom={15} center={position} mapId={mapId}>
              <AdvancedMarker position={position} />
            </Map>
          </div>
        </APIProvider>
        <div className="flex items-center justify-center p-8">
          <img src={Date} className="pb-12" />
        </div>
        <div className="flex items-center justify-center p-8">
          <img src={Time} className="pb-12" />
        </div>
      </div>
    </div>
  );
};

export default Invite;

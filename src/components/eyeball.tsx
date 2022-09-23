import { MouseEventHandler, useEffect, useRef, useState } from "react";

const Eyeball = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  const eyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event: any) => {
      setGlobalCoords({
        x: event.clientX,
        y: event.clientY,
      });

      const rect = eyeRef?.current?.getBoundingClientRect();

      setCoords({
        x: event.clientX - (rect?.left || 0),
        y: event.clientY - (rect?.top || 0),
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  const relativeAngle = Math.atan2(coords.x, coords.y);
  // convert to degrees
  const angle = -(relativeAngle * 180) / Math.PI;
  return (
    <>
      <div
        className="eye absolute top-0 left-0"
        ref={eyeRef}
        style={{
          // rotate 45
          transform: `rotate(${angle}deg)`,
        }}
      >
        <div className="eyeball">
          <div className="eyeball_shine"></div>
        </div>

        {/* <h2>
        Coords: {coords.x} {coords.y}
      </h2>
      <h2>
        Global coords: {globalCoords.x} {globalCoords.y}
      </h2>

      <h2>Relative Angle {angle}</h2> */}
      </div>
      <div
        className="eye absolute top-0 left-50"
        ref={eyeRef}
        style={{
          // rotate 45
          transform: `rotate(${angle}deg)`,
        }}
      >
        <div className="eyeball">
          <div className="eyeball_shine"></div>
        </div>

        {/* <h2>
        Coords: {coords.x} {coords.y}
      </h2>
      <h2>
        Global coords: {globalCoords.x} {globalCoords.y}
      </h2>

      <h2>Relative Angle {angle}</h2> */}
      </div>
    </>
  );
};

export default Eyeball;

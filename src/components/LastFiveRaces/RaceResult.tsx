import { RaceResult as RaceResultModel } from "../../models";

interface RaceResultProps extends Omit<RaceResultModel, "race_id"> {
  name: string;
  flag: string;
}

export function RaceResult({
  name,
  flag,
  position,
  race_points,
  pole,
  fastest_lap,
  sprint_points,
}: RaceResultProps) {
  const setPositionColor = (position: number) => {
    if (position === 1) return "first-place--text";
    if (position === 2) return "second-place--text";
    if (position === 3) return "third-place--text";
    if (position >= 4 && position <= 10) return "points-place--text";

    return "other-positions--text";
  };

  const FLapSprintPointsStyle = {
    width: "25px",
    height: "25px",
    lineHeight: "25px",
    fontSize: "0.9rem",
  }

  return (
    <div className="d-flex flex-grow-1 flex-column align-items-center">
      <div className="w-100 d-flex flex-column justify-content-between">
        <div className="d-flex flex-column align-items-center">
          <img
            src={flag}
            alt={name}
            width={25}
            className="rounded-circle m-auto"
          />
          <div className="d-flex flex-column align-items-center mt-2">
            <div className="flex-grow-1 text-center">
              {position === 0 && <p className="m-0">🚫</p>}
              {position > 0 && (
                <p className="m-0">
                  <strong
                    className={setPositionColor(position)}
                    style={{
                      fontSize: "1.5rem",
                    }}
                  >
                    {position}
                    {pole && 
                      <sup 
                        className="d-inline-block pole--background rounded-circle" 
                        style={{ 
                          width: '8px', 
                          height: '8px'}} 
                      />
                    }
                  </strong>
                </p>
              )}
              {race_points > 0 && (
                <p className="m-0">
                  {race_points > 0 && "+"}
                  <strong>{race_points}</strong>
                </p>
              )}
            </div>
            {fastest_lap && (
              <p
                className="m-0 mt-1 fastest-lap rounded-circle d-inline-block text-center"
                style={FLapSprintPointsStyle}
              ><strong>+1</strong></p>
            )}
            {sprint_points && (
              <p
                className="m-0 mt-1 sprint rounded-circle d-inline-block text-center"
                style={FLapSprintPointsStyle}
              ><strong>+{sprint_points}</strong></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

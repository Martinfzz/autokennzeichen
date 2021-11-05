import * as React from "react";

function CityInfo(props) {
  const { info } = props;

  return (
    <>
      <div>
        <div>
          {info.city}
          {" "}
          |
          {" "}
          <a
            target="_new"
            href={`${info.city_url}`}
          >
            Wikipedia
          </a>
        </div>
      </div>
    </>
  );
}

export default React.memo(CityInfo);

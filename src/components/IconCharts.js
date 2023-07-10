import React, { useState } from "react";

const formatNumber = (number) => {
  if (number > 1000) {
    const formattedNumber = (number / 1000).toFixed(1);
    return formattedNumber + "k";
  } else {
    return number.toString();
  }
};

const PersonIcon = ({ value = 0, label = 0, race = '', scale = 1, onDisclaimerChange = () => {} }) => {
  const valueRoof = Math.ceil(value);
  const maskHeight = {
    height: `${valueRoof * 100 - value * 100}%`,
  };
  if (label < 10) {
    onDisclaimerChange("N/A")
  }
  return (
    <div className="icon-chart-data">
      {((valueRoof > 0 && label >= 10) || scale == 1) ? (
        Array(valueRoof)
          .fill(0)
          .map((_, index) => {
            return (
              <div className="icon-chart-data-point" key={index}>
                <svg
                  aria-label="Person"
                  className={`icon-person re-${race}`}
                  title={valueRoof}
                >
                  <use href="/images/sprites.svg#person"></use>
                </svg>
                <span
                  className="icon-chart-data-point-mask"
                  style={valueRoof - 1 === index ? maskHeight : {}}
                >
                  {valueRoof - 1 === index && (
                    <div className="icon-chart-data-label">
                      {formatNumber(label)}
                    </div>
                  )}
                </span>
              </div>
            );
          })
      ) : (
        <div className="icon-chart-data-point">
          <div className="icon-person icon-person-placeholder" />
          <span className="icon-chart-data-point-mask">
            <div className="icon-chart-data-label">N/A</div>
          </span>
        </div>
      )}
    </div>
  );
};

const CHART_DISCLAIMER = {
  "N/A": "N/A: Our tool displays N/A when when there are 10 or less underlying observations.",
}

const SCALE = {
  100: 10,
  500: 50,
  1000: 100,
  5000: 500,
  10000: 1000,
  50000: 5000,
  100000: 10000,
  500000: 50000,
  1000000: 100000,
  5000000: 500000,
  10000000: 1000000
}

const getScale = (data) => {
  let max = 0
  data.forEach(({items}) => {
    max = Math.max(...Object.values(items), max)
  })
  const list = Object.keys(SCALE).map(item => parseInt(item, 10)).concat([max])
  return {
    max,
    scale: SCALE[`${list[list.sort((a,b) => a - b).indexOf(max) + 1]}`]
  }
}

const IconCharInner = ({ chartData, races, base, measurement }) => {
  const [disclaimer, setDisclaimer] = useState('')
  let scale = 1;
  const isRawNumber = [
    "Raw numbers",
    "Rate per population",
    "Rate per prior event point",
  ].includes(measurement);
  const yearData = JSON.parse(JSON.stringify({
    ...chartData,
    ...getScale(chartData.data),
  }));
  if (measurement === "Raw numbers" || measurement === "Rate per prior event point") {
    scale = yearData.scale 
  }
  const scaledYearData = yearData.data.map((yd) => {
    return {
      label: yd.label,
      items: Object.keys(yd.items).reduce((acc, k) => {
        acc[k] = {
          scaled: isRawNumber
            ? (yd.items[k] / scale).toFixed(2)
            : (yd.items[k] / yd.records[k] / scale).toFixed(2),
          origin: isRawNumber
            ? yd.items[k]
            : (yd.items[k] / yd.records[k]).toFixed(2),
          scale,
        };
        return acc;
      }, {}),
    };
  });
  return (
    <div className="icon-chart" key={yearData.year}>
      <h3>
        {yearData.year}
        <div className="chart-meta">
          <div className="chart-scale">
            <PersonIcon value={1} race={base} scale={1} /> {scale}{" "}
            {!base ? (scale > 1 ? "Adults" : "Adult ") : "White Adult"}
          </div>
        </div>
      </h3>
      <div className="icon-chart-races-container">
        {Object.keys(races)
          .filter((raceItem) => raceItem.toLowerCase() !== base)
          .map((raceItem) => {
            return (
              <div className="icon-chart-race-container" key={raceItem}>
                <h4>{races[raceItem]}</h4>
                <div className="icon-chart-rows">
                  {base && (
                    <div className="icon-chart-row">
                      <PersonIcon value={1} race={base} scale={1} label={1}/>
                    </div>
                  )}
                  {scaledYearData.map((raceData, raceDataIndex) => {
                    return (
                      <div className="icon-chart-row" key={raceDataIndex}>
                        <div className="icon-chart-label">{raceData.label}</div>
                        <PersonIcon
                          value={raceData?.items[raceItem]?.scaled}
                          race={raceItem}
                          scale={scale}
                          label={raceData?.items[raceItem]?.origin}
                          onDisclaimerChange={setDisclaimer}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
      {CHART_DISCLAIMER[disclaimer] && (<p className="icon-chart-disclaimer">{CHART_DISCLAIMER[disclaimer]}</p>)}
    </div>
  );
};

const IconCharts = ({ data, races, base, measurement }) => {
  return (
    <div className="icon-charts">
      {data.map((yd, idx) => (
        <IconCharInner
          key={idx}
          chartData={yd}
          races={races}
          base={base}
          measurement={measurement}
        />
      ))}
    </div>
  );
};

export default IconCharts;

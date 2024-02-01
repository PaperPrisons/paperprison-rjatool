import React, { useEffect, useState } from "react";
import PublicGoogleSheetsParser from "public-google-sheets-parser";
import { utils, writeFileXLSX } from "xlsx";
import { IconCharts } from "@/components/IconCharts";
import DataTable from "@/components/DataTable";
import PrivateSelect from "@/components/Select";
import Grid from "@/components/Grid";

const MEASUREMENTS = {
  RAW: "Raw numbers",
  RATE: "Rate per population",
  R_PEP: "Rate per prior event point",
  DG: "Disparity gap per population",
  DG_PEP: "Disparity gap per prior event point",
};

const MEASUREMENTS_MAP = {
  "Raw numbers": "Raw numbers",
  "Rate per population": "Rate per unit population",
  "Rate per prior event point": "Rate per prior decision point",
  "Disparity gap per population": "Disparity gap vs. white adults",
  "Disparity gap per prior event point":
    "Disparity gap per prior decision point",
};
const RACES = {
  White: "White",
  Black: "Black",
  Hispanic: "Latino",
  AAPI: "Asian / Pacific Islander",
  "Native American": "Native American",
};
const getURLQueryParameterByName = (name, url = window.location.href) => {
  const sanitizedName = name.replace(/[[]]/g, "\\$&");
  const regex = new RegExp(`[?&]${sanitizedName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};
export default function App() {
  const [yearsAvailable, setYearsAvailable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [years, setYears] = useState([]);
  const [countiesAvailable, _] = useState([
    "All Counties",
    "County 1",
    "County 2",
    "County 3",
    "County 4",
    "County 5",
  ]);
  const [county, setCounty] = useState("All Counties");
  const [decisionPointsAvailable, setDecisionPointsAvailable] = useState([]);
  const [decisionPoints, setDecisionPoints] = useState([]);
  const [offensesAvailable, setOffensesAvailable] = useState([]);
  const [offenses, setOffenses] = useState([]);
  //const [gendersAvailable, setGendersAvailable] = useState([]);
  //const [genders, setGenders] = useState([]);
  const [racesAvailable, setRacesAvailable] = useState([]);
  const [races, setRaces] = useState(Object.keys(RACES));
  const [measurement, setMeasurement] = useState("Raw numbers");
  const [chartConfig, setChartConfig] = useState({
    ratio: 1,
    base: null,
  });
  const [fullRecords, setFullRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState({
    raw: [],
    chart: [],
  });
  const [showTable, setShowTable] = useState(false);
  const onDataDownload = () => {
    const ws = utils.json_to_sheet(filteredRecords.raw);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, "PaperPrison - Data.xlsx");
  };
  const onDataTableDisplayToggled = () => {
    setShowTable(!showTable);
  };

  const filter = (
    { decisionPoints, races, offenses, years, measurement /*, genders*/ },
    records = fullRecords
  ) => {
    const allowedEventPoints = [
      "Charge",
      "Conviction",
      "Prison sentence",
      "Felony conviction",
    ];

    const raw = records.filter((r) => {
      if (
        measurement.indexOf("prior event point") > -1 &&
        !allowedEventPoints.includes(r["Event Point"])
      ) {
        return false;
      }
      if (races.length > 0 && !races.includes(r.Race)) {
        return false;
      }
      if (
        decisionPoints.length > 0 &&
        !decisionPoints.includes(r["Event Point"])
      ) {
        return false;
      }
      if (offenses.length > 0 && !offenses.includes(r.Offenses)) {
        return false;
      }
      /* if (genders.length > 0 && !genders.includes(r.Gender)) {
        return false;
      }*/
      if (!years.includes(r.Year)) {
        return false;
      }
      return true;
    });
    const filtered = raw.reduce((acc, item) => {
      if (!acc[item.Year]) {
        acc[item.Year] = {
          year: item.Year,
          data: {},
        };
      }
      if (!acc[item.Year].data[item["Event Point"]]) {
        acc[item.Year].data[item["Event Point"]] = {
          label: item["Event Point"],
          items: {},
          records: {},
        };
      }
      if (!acc[item.Year].data[item["Event Point"]].items[item["Offenses"]]) {
        acc[item.Year].data[item["Event Point"]].items[item["Offenses"]] = {
          label: item["Offenses"],
          items: {},
        };
      }
      acc[item.Year].data[item["Event Point"]].items[item["Offenses"]].items[
        item["Race"]
      ] = item[measurement] || 0;
      if (!acc[item.Year].data[item["Event Point"]].records[item["Race"]]) {
        acc[item.Year].data[item["Event Point"]].records[item["Race"]] = 1;
      } else {
        acc[item.Year].data[item["Event Point"]].records[item["Race"]]++;
      }
      return acc;
    }, {});
    setFilteredRecords({
      raw,
      chart: Object.values(filtered).map((item) => {
        item.data = Object.values(item.data).map((d) => {
          d.items = Object.values(d.items).reduce((acc, dd) => {
            Object.keys(dd.items).forEach((k) => {
              if (!(k in acc)) {
                acc[k] = 0;
              }
              let temp = acc[k] + (dd.items[k] || 0);
              if (measurement === "Raw numbers") {
                temp = Math.ceil(temp);
              }
              acc[k] = temp;
              return acc;
            });
            return acc;
          }, {});
          return d;
        });
        return item;
      }),
    });
  };

  // https://docs.google.com/spreadsheets/d/1nJ3k0KXVrhXm8La-lOTpw8U7xL7Cc-GioANxxH5KsXE/edit#gid=0
  // Make sure share this link to the public, so anyone who has the link can open this spreedsheet
  const fetchData = async (sheet, useDefaults) => {
    setLoading(true);
    const parser = new PublicGoogleSheetsParser();
    parser
      .parse("1mo1CvXXVMoyFDciUwvoNI_0T6LwB5Yl2U4Q6COd_0JI", sheet)
      .then((originItems) => {
        let _years = [];
        let _decisionPoints = [];
        let _offenses = [];
        let _races = [];
        //const _genders = [];

        const items = originItems.map((item) => {
          item.Offenses = item.PC_offense;
          item.Race = item.race;
          //item.Gender = item.gender;
          item.Year = item.year;
          item["Event Point"] = item.decision;
          item["Raw numbers"] = item.number;
          item["Rate per population"] = isNaN(item.rate_per_100_pop)
            ? 0
            : item.rate_per_100_pop;
          item["Rate per prior event point"] = isNaN(item.rate_cond_previous)
            ? 0
            : item.rate_cond_previous / 100; // divide by 100 since this is a percentage
          item["Disparity gap per population"] = isNaN(item.disparity_gap_pop_w)
            ? 0
            : item.disparity_gap_pop_w;
          item["Disparity gap per prior event point"] = isNaN(
            item.disparity_gap_cond_w
          )
            ? 0
            : item.disparity_gap_cond_w;
          return item;
        });
        items.forEach((item) => {
          if (_years.indexOf(item["Year"]) === -1) {
            _years.push(item["Year"]);
          }
          /*  if (_genders.indexOf(item["Gender"]) === -1) {
             _genders.push(item["Gender"]);
          }*/
          if (_decisionPoints.indexOf(item["Event Point"]) === -1) {
            _decisionPoints.push(item["Event Point"]);
          }
          if (_offenses.indexOf(item["Offenses"]) === -1) {
            _offenses.push(item["Offenses"]);
          }
          if (_races.indexOf(item["Race"]) === -1) {
            _races.push(item["Race"]);
          }
        });
        _years = _years.reverse().sort((a, b) => {
          if (a === "All Years (2010-2021)") {
            return -1;
          } else if (b === "All Years (2010-2021)") {
            return 1;
          } else if (a === "2010-2021") {
            return -1;
          } else if (b === "2010-2021") {
            return 1;
          } else {
            return b - a;
          }
        });
        setFullRecords(items);

        const mostRecentYear = _years[0];
        const defaultOffense = "459 PC-BURGLARY";
        //const defaultGender = _genders[0];

        setYearsAvailable([..._years]);
        setDecisionPointsAvailable([..._decisionPoints]);
        setOffensesAvailable([..._offenses]);
        setRacesAvailable([..._races]);
        //setGendersAvailable([..._genders]);

        if (useDefaults) {
          _years = [mostRecentYear];
          _offenses = [defaultOffense];
        } else {
          // Update filters: choose all items which were selected by the user AND
          // are present in the dataset
          _years = years.filter((y) => _years.includes(y));
          _decisionPoints = decisionPoints.filter((d) =>
            _decisionPoints.includes(d)
          );
          _offenses = _offenses.includes(offenses[0])
            ? [offenses[0]]
            : [defaultOffense];
          _races = races.filter((r) => _races.includes(r));
        }

        setYears([..._years]);
        setDecisionPoints([..._decisionPoints]);
        setOffenses([..._offenses]);
        setRaces([..._races]);

        filter(
          {
            decisionPoints: _decisionPoints,
            races: _races,
            offenses: _offenses,
            years: _years,
            measurement: measurement,
            //genders: genders,
          },
          items
        );

        setLoading(false);
      });
  };

  useEffect(() => {
    const sheet = getURLQueryParameterByName("sheet") || "All Counties";
    fetchData(sheet, true).catch((e) => {});
  }, []);

  const onCountyChange = async (value) => {
    setCounty(value);
    await fetchData(value, false);
    filter({
      decisionPoints: decisionPoints,
      races: races,
      offenses: offenses,
      years: years,
      measurement: measurement,
      //genders: genders,
    });
  };

  const onYearChange = (values) => {
    setYears(values);
    filter({
      decisionPoints: decisionPoints,
      races: races,
      offenses: offenses,
      years: values,
      measurement: measurement,
      //genders: genders,
    });
  };

  const onDecisionPointChange = (values) => {
    setDecisionPoints(values);
    if (values.length === 0) {
      setFilteredRecords({
        raw: [],
        chart: [],
      });
    } else {
      filter({
        decisionPoints: values,
        races: races,
        offenses: offenses,
        years: years,
        measurement: measurement,
        //genders: genders,
      });
    }
  };
  const onRacesChange = (values) => {
    setRaces(values);
    if (values.length === 0) {
      setFilteredRecords({
        raw: [],
        chart: [],
      });
    } else {
      filter({
        decisionPoints: decisionPoints,
        races: values,
        offenses: offenses,
        years: years,
        measurement: measurement,
        //genders: genders,
      });
    }
  };
  /*const onGendersChange = (values) => {
    if (!values || values.length === 0) {
      return;
    }
    setGenders(values);
    if (values.length === 0) {
      setFilteredRecords({
        raw: [],
        chart: [],
      });
    } else {
      filter({
        genders: values,
        races,
        decisionPoints,
        offenses,
        years,
        measurement,
      });
    }
  };*/

  const onOffensesChange = (values) => {
    if (!values || values.length === 0) {
      return;
    }
    setOffenses(values);
    filter({
      decisionPoints: decisionPoints,
      races: races,
      offenses: values,
      years: years,
      measurement: measurement,
      //genders: genders,
    });
  };

  const onMeasurementsChange = (value) => {
    if (value) {
      setMeasurement(value);
      if (value === MEASUREMENTS.DG || value === MEASUREMENTS.DG_PEP) {
        setChartConfig({
          base: "white",
          ratio: 0.01,
        });
      } else if (value === MEASUREMENTS.RAW) {
        setChartConfig({
          base: null,
          ratio: 1,
        });
      } else {
        setChartConfig({
          base: null,
          ratio: 0.1,
        });
      }

      filter({
        decisionPoints: decisionPoints,
        races: races,
        offenses: offenses,
        years: years,
        measurement: value,
        //genders: genders,
      });
    } else {
      setMeasurement(MEASUREMENTS.RAW);
      setChartConfig({
        base: null,
        ratio: 1,
      });

      filter({
        decisionPoints: decisionPoints,
        races: races,
        offenses: offenses,
        years: years,
        measurement: MEASUREMENTS.RAW,
        //genders: genders,
      });
    }
  };
  return (
    <div className="tool" id="tool">
      <p className="generic-page">
        This site provides a dummy data version of a tool that we will be
        launching (pending approval from the California Department of Justice)
        that will provide summary data representing the raw numbers, rates per
        population, and disparity gaps by race of adults in the California
        criminal justice system using data provided by the CalDOJ and the Census
        Department. To be notified when the tool becomes live, please email us
        at{" "}
        <a href="mailto:rja@paperprisons.org?subject=Feedback%20for%20Your%20App">
          rja@paperprisons.org
        </a>
        ; we also welcome your comments and or feedback on the tool’s design are
        welcome too. (See also{" "}
        <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4392014">
          <i>
            Proving Actionable Racial Disparity Under the California Racial
            Justice Act
          </i>
        </a>
        , 76 UC L. Journal 1 (2023))
      </p>
      <div className="filters">
        <div>Customize: </div>
        <div className="filter">
          <PrivateSelect
            label="Years"
            multiple={true}
            disableAll={true}
            value={years}
            onChange={onYearChange}
            options={yearsAvailable.map((y) => ({
              text: y,
              value: y,
            }))}
          />
        </div>
        <div className="filter">
          <PrivateSelect
            label="Counties"
            value={county}
            multiple={false}
            onChange={onCountyChange}
            options={countiesAvailable.map((county) => ({
              text: county,
              value: county,
            }))}
          />
        </div>
        <div className="filter">
          <PrivateSelect
            label="Event Point"
            multiple={true}
            value={decisionPoints}
            onChange={onDecisionPointChange}
            options={decisionPointsAvailable.map((dp) => ({
              text: dp,
              value: dp,
            }))}
          />
        </div>
        <div className="filter">
          <PrivateSelect
            label="Race"
            multiple={true}
            value={races}
            onChange={onRacesChange}
            options={racesAvailable.map((r) => ({
              text: r,
              value: r,
            }))}
          />
        </div>
        <div className="filter">
          <PrivateSelect
            label="Offenses"
            value={offenses}
            multiple={false}
            onChange={onOffensesChange}
            options={offensesAvailable.map((o) => ({
              text: o,
              value: o,
            }))}
          />
        </div>
        <div className="filter">
          <PrivateSelect
            label="Measurement"
            value={measurement}
            onChange={onMeasurementsChange}
            options={Object.keys(MEASUREMENTS_MAP).map((m) => ({
              text: m,
              value: m,
            }))}
          />
        </div>
      </div>
      <div className="chart-selected">
        <p>
          <strong>Demo Only - Populated with Fictitious Data</strong>
        </p>
        <h2>
          <h2>{county}</h2>
        </h2>
        <p
          dangerouslySetInnerHTML={{
            __html: [
              MEASUREMENTS_MAP[measurement],
              decisionPoints.length === decisionPointsAvailable.length
                ? "All Event Points"
                : decisionPoints.join(", "),
              years.length === yearsAvailable.length
                ? "All Years"
                : years.join(", "),
              races.length === racesAvailable.length
                ? "All Races"
                : races.join(", "),
              `${offenses}`,
            ]
              .filter((item) => !!item)
              .map((item) => `<span>${item}</span>`)
              .join(";"),
          }}
        />
      </div>
      <div className="chart-containers">
        {loading ? (
          <div className="loading-animation-centered">
            <Grid />
          </div>
        ) : filteredRecords.chart.length > 0 ? (
          <IconCharts
            data={filteredRecords.chart}
            races={Object.fromEntries(
              Object.entries(RACES).filter(([key]) => races.includes(key))
            )}
            eventPoints={decisionPoints}
            base={chartConfig.base}
            measurement={measurement}
          />
        ) : (
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            <p>Unable to display due to insufficient data.</p>
            {years.length === 0 && <p>Select at least one year.</p>}
            {decisionPoints.length === 0 && (
              <p>Select at least one event point.</p>
            )}
            {races.length === 0 && <p>Select at least one race.</p>}
          </div>
        )}
      </div>

      {/* <pre>{JSON.stringify(filteredRecords, null, 4)}</pre> */}
      <div className="buttons">
        <div className="button" onClick={() => window && window.print()}>
          Print
        </div>
        <div className="button" onClick={onDataTableDisplayToggled}>
          {showTable ? "Hide Table" : "View Data"}
        </div>
        <div className="button" onClick={onDataDownload}>
          Download Data
        </div>
      </div>
      {showTable && filteredRecords.raw.length > 0 && (
        <DataTable data={filteredRecords.raw} />
      )}
    </div>
  );
}
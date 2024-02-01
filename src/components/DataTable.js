import React from "react";
import { useState } from "react";

const DATA_DATA_COLUMNS = [
  "county",
  "PC_code",
  "PC_offense",
  // "race",
  // "decision",
  //   "number",
  //   "rate_per_100_pop",
  //   "disparity_gap_pop_w",
  // "Offenses",
  "Race",
  //"Gender",
  "Year",
  "Event Point",
  "Raw numbers",
  "Rate per population",
  "Rate per prior event point",
  "Disparity gap per population",
  "Disparity gap per prior event point",
];

const DataTable = ({ data }) => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = data.slice(startIndex, endIndex);

  return (
    <div className="table-container">
      <table className="ui celled table">
        <thead>
          <tr>
            {DATA_DATA_COLUMNS.map((r) => (
              <th key={r}>{r}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visibleData.map((row, rIndex) => {
            return (
              <tr key={rIndex}>
                {DATA_DATA_COLUMNS.map((k) => {
                  if (k === "county") {
                    console.log(row[k]);
                  }
                  let value = row[k];
                  if (k === "Raw numbers" && value < 10) {
                    value = "N/A";
                  } else if (
                    [
                      "Rate per population",
                      "Rate per prior event point",
                      "Disparity gap per population",
                      "Disparity gap per prior event point",
                    ].indexOf(k) > -1
                  ) {
                    value = parseFloat(value).toFixed(2);
                  }
                  return <td key={k}>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-controls">
        <button
          className="pagination-button"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          className="pagination-button"
          onClick={goToNextPage}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
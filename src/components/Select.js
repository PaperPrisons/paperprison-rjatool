import React, { useState, useRef, useEffect } from "react";

const Select = ({
  label,
  value = null,
  options = [],
  multiple = false,
  disableAll = false,
  onChange = () => {},
}) => {
  const [all, setAll] = useState(false);
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef(null);
  const labelId = label.toLowerCase().replace(/\s+/g, "-");

  const toggleModal = () => {
    setAll(
      multiple &&
        value.sort().join(".") ===
          options
            .map((o) => o.value)
            .sort()
            .join("."),
    );
    setShow(!show);
  };

  const onAllToggle = () => {
    if (all) {
      onChange([]);
    } else {
      onChange(options.map((o) => o.value));
    }
    setAll(!all);
  };

  const onItemToggle = (v) => {
    let newValue;
    if (multiple) {
      if (value.includes(v)) {
        newValue = value.filter((item) => item !== v);
      } else {
        newValue = [...value, v];
      }
    } else {
      newValue = value === v ? null : v;
    }
    setAll(
      multiple &&
        newValue.sort().join(".") ===
          options
            .map((o) => o.value)
            .sort()
            .join("."),
    );
    onChange(newValue);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        !wrapperRef.current.parentNode.contains(event.target)
      ) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const filteredOptions = options.filter((option) =>
    String(option.text).toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className={`select-component select-component-${labelId}`}>
      <label onClick={toggleModal} className={show ? "modal-actived" : ""}>
        {label} ▼
      </label>
      {show && (
        <div ref={wrapperRef} className="modal-wrapper">
          <h3>{label}</h3>
          {label === "Offenses" && (
            <div className="search-bar-container">
              <input
                type="text"
                placeholder="Search Offenses"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
              />
              {searchTerm && (
                <div className="clear-icon" onClick={() => setSearchTerm("")}>
                  &#x2715;
                </div>
              )}
            </div>
          )}
          <ul className={`modal-${labelId}`}>
            {multiple && !disableAll && (
              <li onClick={onAllToggle}>
                <input type="checkbox" checked={all} />
                All
              </li>
            )}
            {filteredOptions.map((option) => (
              <li key={option.text} onClick={() => onItemToggle(option.value)}>
                <input
                  type="checkbox"
                  checked={
                    multiple
                      ? value.includes(option.value)
                      : value === option.value
                  }
                />{" "}
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
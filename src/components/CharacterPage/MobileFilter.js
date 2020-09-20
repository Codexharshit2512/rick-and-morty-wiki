import React, { useState, useRef } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileFilter = (props) => {
  let [isOpen, setOpen] = useState(false);
  const filterRef = useRef();

  return (
    <>
      <div className="mobile-filter-container">
        <div className="heading-container">
          <h2>Filters</h2>
          <div className="open-btn">
            <span onClick={() => setOpen((prev) => !prev)}>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </div>
        </div>
        {isOpen ? (
          <div ref={filterRef} className="mobile-filters">
            {props.defaultFilters()}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default MobileFilter;

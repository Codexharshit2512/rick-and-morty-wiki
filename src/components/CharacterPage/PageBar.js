import React, { useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";

export default function PaginationControlled(props) {
  const [page, setPage] = React.useState(1);
  useEffect(() => {
    setPage(props.currentPage);
    console.log("hello");
  }, [props]);

  const handleChange = (event, value) => {
    props.setPage(value);
  };

  return (
    <div className="pagination-container">
      <Pagination
        count={props.pageNo}
        page={page}
        onChange={handleChange}
        size="large"
      />
    </div>
  );
}

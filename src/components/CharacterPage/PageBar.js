import React from "react";
import Pagination from "@material-ui/lab/Pagination";

export default function PaginationControlled(props) {
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    props.setPage(page);
  }, [page]);
  const handleChange = (event, value) => {
    setPage(value);
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

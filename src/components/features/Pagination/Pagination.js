import Button from "../../common/Button/Button";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";
import styles from "./Pagination.module.scss";
import { PAGINATION_PAGES } from "../../../constans";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handleFirstPage = () => setCurrentPage(1);
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleGoToPage = (pageNumber) => setCurrentPage(pageNumber);
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handleLastPage = () => setCurrentPage(totalPages);

  const pageButtons = () => {
    let startPage = Math.max(1, currentPage - Math.floor(PAGINATION_PAGES / 2));
    let endPage = startPage + PAGINATION_PAGES - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - PAGINATION_PAGES + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  return (
    <section className={styles.pagination}>
      <Button
        disabled={currentPage === 1}
        onClick={handleFirstPage}
        content={<MdKeyboardDoubleArrowLeft />}
        ariaLabel={"first page"}
      />
      <Button
        disabled={currentPage === 1}
        onClick={handlePreviousPage}
        content={<MdKeyboardArrowLeft />}
        ariaLabel={"previous page"}
      />
      {pageButtons().map((page) => (
        <Button
          key={page}
          content={page}
          onClick={() => handleGoToPage(page)}
          disabled={currentPage === page}
          ariaLabel={`page ${page}`}
        />
      ))}
      <Button
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
        content={<MdKeyboardArrowRight />}
        ariaLabel={"next page"}
      />
      <Button
        disabled={currentPage === totalPages}
        onClick={handleLastPage}
        content={<MdKeyboardDoubleArrowRight />}
        ariaLabel={"last page"}
      />
    </section>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;

import Button from "../../common/Button/Button";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";
import styles from "./Pagination.module.scss";

const Pagination = ({
  nextPage,
  previousPage,
  firstPage,
  lastPage,
  currentPage,
  totalPages,
  goToPage,
}) => {
  return (
    <section className={styles.pagination}>
      <Button
        disabled={currentPage === 1}
        onClick={firstPage}
        content={<MdKeyboardDoubleArrowLeft />}
        ariaLabel={"first page"}
      />
      <Button
        disabled={currentPage === 1}
        onClick={previousPage}
        content={<MdKeyboardArrowLeft />}
        ariaLabel={"previous page"}
      />
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          content={index + 1}
          onClick={() => goToPage(index + 1)}
          disabled={currentPage === index + 1}
          ariaLabel={`page ${index + 1}`}
        />
      ))}
      <Button
        disabled={currentPage === totalPages}
        onClick={nextPage}
        content={<MdKeyboardArrowRight />}
        ariaLabel={"next page"}
      />
      <Button
        disabled={currentPage === totalPages}
        onClick={lastPage}
        content={<MdKeyboardDoubleArrowRight />}
        ariaLabel={"last page"}
      />
    </section>
  );
};

Pagination.propTypes = {
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  firstPage: PropTypes.func.isRequired,
  lastPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  goToPage: PropTypes.func.isRequired,
};

export default Pagination;

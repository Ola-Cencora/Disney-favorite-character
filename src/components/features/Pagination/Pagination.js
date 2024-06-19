import Button from "../../common/Button/Button";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";
import { CHANGE_PAGE_URL } from "../../../constans";
import styles from "./Pagination.module.scss";
import { useFetch } from "../../../hooks/useFetch";
import { useEffect, useState } from "react";

const Pagination = ({ setCharacters, setIsPending, setError }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { characters, totalPages, isPending, error } = useFetch(
    CHANGE_PAGE_URL(currentPage)
  );

  useEffect(() => {
    setCharacters(characters);
    setIsPending(isPending);
    setError(error);
  }, [characters, setCharacters, isPending, setIsPending, error, setError]);

  const handleFirstPage = () => setCurrentPage(1);
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleGoToPage = (pageNumber) => setCurrentPage(pageNumber);
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handleLastPage = () => setCurrentPage(totalPages);

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
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          content={index + 1}
          onClick={() => handleGoToPage(index + 1)}
          disabled={currentPage === index + 1}
          ariaLabel={`page ${index + 1}`}
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
  setCharacters: PropTypes.func.isRequired,
  setIsPending: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default Pagination;

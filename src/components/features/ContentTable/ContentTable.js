import { useState } from "react";
import {
  goToFirstPage,
  goToLastPage,
  goToNextPage,
  goToPage,
  goToPreviousPage,
} from "../../../utils/changePage";
import { ITEMS_PER_PAGE } from "../../../constans";
import Pagination from "../Pagination/Pagination";
import CharactersTable from "../CharactersTable/CharactersTable";
import Spinner from "../../common/Spinner/Spinner";

const ContentTable = ({ characters, count, isPending, error }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

  return (
    <>
      {isPending && <Spinner />}
      {error && <p>{error}</p>}
      {characters && !isPending && (
        <section>
          <CharactersTable currentPage={currentPage} characters={characters} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            nextPage={() =>
              goToNextPage(setCurrentPage, currentPage, totalPages)
            }
            previousPage={() => goToPreviousPage(setCurrentPage, currentPage)}
            firstPage={() => goToFirstPage(setCurrentPage)}
            lastPage={() => goToLastPage(setCurrentPage, totalPages)}
            goToPage={(pageNumber) => goToPage(setCurrentPage, pageNumber)}
          />
        </section>
      )}
    </>
  );
};

export default ContentTable;

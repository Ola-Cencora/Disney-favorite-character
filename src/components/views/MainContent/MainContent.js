import ContentTable from "../../features/ContentTable/ContentTable";
import Filters from "../../features/Filters/Filters";
import Pagination from "../../features/Pagination/Pagination";

const MainContent = () => (
    <div>
        <Filters />
        <ContentTable />
        <Pagination />
    </div>
);

export default MainContent;
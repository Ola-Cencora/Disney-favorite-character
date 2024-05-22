import Button from "../../common/Button/Button";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const Pagination = () => {
    return (
        <section>
            <Button content={<MdKeyboardDoubleArrowLeft />} />
            <Button content={<MdKeyboardArrowLeft />} />
            <Button content={<MdKeyboardArrowRight />} />
            <Button content={<MdKeyboardDoubleArrowRight />} />
        </section>
    );
};

export default Pagination;
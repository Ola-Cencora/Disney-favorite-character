import { useState } from "react";
import Button from "../../common/Button/Button";
import PropTypes from "prop-types";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import styles from "./DropdownList.module.scss";

const DropdownList = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const firstTwoItems = list.slice(0, 2).join(", ");
  const allItems = list.join(", ");

  return (
    <>
      {!isExpanded && (
        <>
          <span>{firstTwoItems}</span>
          <div className={styles.btn}>
            <Button
              content={<FaArrowDown />}
              onClick={handleToggle}
              ariaLabel="see more"
              variant="round"
            />
          </div>
        </>
      )}
      {isExpanded && (
        <>
          <span>{allItems}</span>
          <div className={styles.btn}>
            <Button
              content={<FaArrowUp />}
              onClick={handleToggle}
              ariaLabel="hide"
              variant="round"
            />
          </div>
        </>
      )}
    </>
  );
};

DropdownList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default DropdownList;

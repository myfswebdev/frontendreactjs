import { FunctionComponent } from "react";
import styles from "./SearchSectionHeader.module.css";

const SearchSectionHeader: FunctionComponent = () => {
  return (
<>
<div className={styles.locationDisplay}>
        <h5>Top Crypto Creators and Projects to Follow<br/><h6>Answers to your crypto doubts, straight from the experts</h6>
</h5>
</div>
</>
  );
};

export default SearchSectionHeader;

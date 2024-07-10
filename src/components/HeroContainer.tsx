import { FunctionComponent, useCallback} from "react";
import {Button} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./HeroContainer.module.css";

const HeroContainer: FunctionComponent = () => {
  const onShowMoreButtonClick = useCallback(() => {
    //TODO: Please show more items on click of this button
  }, []);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.heroContainer}>
        <div className={styles.priceChartContainer}>
          <div className={styles.trendIcon}>
            <div className={styles.findAHostForEveryJourneyParent}>
              <b className={styles.findAHostContainer}>
                <span>{`WXYZ `}</span>
              </b>
              <h3 className={styles.discoverTheBest}>
                Academy
              </h3>
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Button
          className={styles.showMoreButton}
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "0.42em",
            borderColor: "#00c29f",
            borderRadius: "6px",
            "&:hover": { borderColor: "#fff" },
            width: 147,
            height: 48,
          }}
          onClick={onShowMoreButtonClick}
        >
          Get Started -&gt;
        </Button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default HeroContainer;

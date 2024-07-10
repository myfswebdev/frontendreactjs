import { FunctionComponent } from "react";
import styles from "./Header.module.css";
import { TextField } from "@mui/material"; 

export type HeaderType = {
  notifications?: string;
  avatar?: string;
  showLoginSection?: boolean;
};

const Header: FunctionComponent<HeaderType> = ({
  notifications,
  avatar,
  showLoginSection,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo-icon.png"
        />
        <div className={styles.navLinks}>
          <div className={styles.home}>Compass</div>
          <div className={styles.stays}>Explore</div>
          <div className={styles.becomeAHost}>Academy <button>New</button></div>
          <div className={styles.stays}>NFTS</div>
          <div className={styles.stays}>For Projects</div>
          <div className={styles.form}>
              <div className={styles.grouped}>
                <TextField
                  className={styles.datesField1}
                  InputProps={{
                    endAdornment: (
                      <img width="20px" height="20px" src="/search-icon.jpg"/>
                    ),
                  }}
                  placeholder="Search for ecosystems, trending quests etc.,"
                />
              </div>
              </div>
        </div>
        {showLoginSection && (
          <div className={styles.loginSection}>
            <img
              className={styles.notificationsIcon}
              loading="lazy"
              alt=""
              width="40px"
              height="40px"
              src='./public/feed.png'
            />
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt=""
              width="50px"
              height="50px"
              src='./public/signin.png'
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

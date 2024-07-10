import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../components/Mycomponent";
import HeroContainer from "../components/HeroContainer";
import SearchSectionHeader from "../components/SearchSectionHeader";
import ListingItem from "../components/ListingItem";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onListingItemContainerClick = useCallback(() => {
    navigate("/#");
  }, [navigate]);

  const onShowMoreButtonClick = useCallback(() => {
    //TODO: Please show more items on click of this button
  }, []);

  return (
    <div className={styles.homepage}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <HeroContainer />
      <Dashboard/>
      <main className={styles.staysSection}>
        <SearchSectionHeader />
        <section className={styles.homes}>
          <ListingItem
            listingImage="/blackcat.png"
            onListingItemContainerClick={onListingItemContainerClick}
            heartIcon="/icon.png"
          />
          <ListingItem 
          listingImage="/frog.png"
          onListingItemContainerClick={onListingItemContainerClick}
          heartIcon="/icon.png"
           />
          <ListingItem 
          listingImage="/unicorn.png"
          onListingItemContainerClick={onListingItemContainerClick}
          listingTitle="How does Uniswap actually work?"
          heartIcon="/icon.png" 
          />
          <ListingItem 
          listingImage="/ape.png"
          onListingItemContainerClick={onListingItemContainerClick}
          listingTitle="How to spot crypto projects to work in?"
          heartIcon="/icon.png" />
        </section>
        <div className={styles.locationDisplay}>
        <h5>Crypto Dictionary<br/><h6>Your one-stop to catch up on all crypto terms</h6>
</h5>
</div>
        <img src="/web3.png" width="1280px" height="423px" alt="web3.png"/>
        <br/>
        <Button
          className={styles.showMoreButton}
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#00c29f",
            fontSize: "16",
            borderColor: "#00c29f",
            borderRadius: "6px",
            "&:hover": { borderColor: "#00c29f" },
            width: 147,
            height: 48,
          }}
          onClick={onShowMoreButtonClick}
        >
          Essentials
        </Button>
      </main>
      <Footer />
      <div className={styles.band}>
        <div className={styles.bandInner}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              created by WXYZ
            </div>
            <div className={styles.policyNavigation}>
              <div className={styles.contactUs}><button className={styles.bordernone}><a href="https://www.x.com"><img src="/X.png" width="40px" height="40px" alt="X.png"></img></a></button></div>
              <div className={styles.contactUs}><button className={styles.bordernone}><a href="https://www.discord.com"><img src="/discord.png" width="40px" height="40px" alt="discord.png"></img></a></button></div>
              <div className={styles.contactUs}><button className={styles.bordernone}><a href="https://www.t.me"><img src="/telegram.png" width="40px" height="40px" alt="telegram.png"></img></a></button></div>
              <div className={styles.contactUs}><button className={styles.bordernone}><a href="https://www.spotify.com"><img src="/spotify.png" width="40px" height="40px" alt="spotify.png"></img></a></button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

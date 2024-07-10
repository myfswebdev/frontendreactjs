import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  /** Style props */
  propMargin?: CSSProperties["margin"];
  propMargin1?: CSSProperties["margin"];
  propMargin2?: CSSProperties["margin"];
};

const Footer: FunctionComponent<FooterType> = ({
  propMargin,
  propMargin1,
  propMargin2,
}) => {
  const supportStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const hostingStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  const localhostStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin2,
    };
  }, [propMargin2]);

  return (
    <footer className={styles.footer}>
      <>
      <div className={styles.footerInner}>
        <div className={styles.frameParent}>
          <div className={styles.supportParent}>
            <h3 className={styles.support} style={supportStyle}>
              WXYZ
            </h3>
            <div className={styles.helpCentre}>We are personal guide for exploring <br/>web3 projects & earning 100x rewards</div>
          </div>
          <div className={styles.hostingParent}>
            <h3 className={styles.hosting} style={hostingStyle}>
              WXYZ
            </h3>
            <div className={styles.localHome}>Explore Guests</div>
            <div className={styles.coverForHosts}>Communities</div>
            <div className={styles.hostingResources}>Alpha Hub</div>
          </div>
          <div className={styles.hostingParent}>
            <h3 className={styles.hosting} style={hostingStyle}>
              Earn
            </h3>
            <div className={styles.localHome}>Refer & Earn</div>
            <div className={styles.coverForHosts}>Leader Board</div>
            <div className={styles.hostingResources}>Achievements</div>
          </div>
          <div className={styles.hostingParent}>
            <h3 className={styles.hosting} style={hostingStyle}>
              About
            </h3>
            <div className={styles.localHome}>Product Roadmap</div>
            <div className={styles.coverForHosts}>Affiliate Program</div>
            <div className={styles.hostingResources}>Sign up Program</div>
            <div className={styles.communityForum}>Growth Community</div>
            <div className={styles.hostingResponsibly}>Blogs</div>
          </div>
          <div className={styles.hostingParent}>
            <h3 className={styles.hosting} style={hostingStyle}>
              Support
            </h3>
            <div className={styles.localHome}>Help Center</div>
            <div className={styles.coverForHosts}>Create your quest</div>
            <div className={styles.hostingResources}>Terms of Service</div>
            <div className={styles.communityForum}>Privacy Policy</div>
            <div className={styles.hostingResponsibly}>Community Guidelines</div>
          </div>
        </div>
      </div>
      <div>
        <br/>
        <hr></hr>
        <hr></hr>
        <br/>
        <br/>
      Disclaimer: Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.
      <br/>
      <br/>
      <hr></hr>
      <hr></hr>
      <br/>
      </div>
      </>
    </footer>
  );
};

export default Footer;

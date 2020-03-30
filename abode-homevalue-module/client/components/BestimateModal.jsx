import React from 'react';
import styles from '../style/BestimateModal.css';
import walkingIcon from '../../public/icons/walking.svg';
import houseIcon from '../../public/icons/iconfinder_House_4265801.svg';
import eyeIcon from '../../public/icons/eye.svg';
import listingIcon from '../../public/icons/listing.svg';

const BestimateModal = (props) => {
  const showHideClassname = props.show === true ? `${styles.modal} ${styles.displayBlock}` : `${styles.modal} ${styles.displayNone}`;
  return (
    <div className={showHideClassname} onClick={props.handleClose}>
      <section className={styles.modalMain} onClick={event => event.stopPropagation()}>
        <p>The Zestimate is Zillow's best estimate of this home's market value. It is not an appraisal and it should be used as a starting point. <a href="https://www.zillow.com/zestimate/">Learn more.</a></p>
        <p>If your home facts are wrong, your Zestimate may be incorrect. <a href="https://www.zillow.com">Update them here.</a></p>
        <p>The Zestimate incorporates multiple data models and responds to factors like:</p>
        <div>
          <div className={styles.factorsRow}>
            <span className={styles.factor}><img src={walkingIcon} className={styles.iconWithSpace}></img>Neighborhood details</span>
            <span className={styles.factor}><img src={houseIcon} className={styles.iconWithSpace}></img>Home facts</span>
          </div>
          <div className={styles.factorsRow}>
            <span className={styles.factor}><img src={eyeIcon} className={styles.iconWithSpace}></img>Popularity on Zillow</span>
            <span className={styles.factor}><img src={listingIcon} className={styles.iconWithSpace}></img>Listing price</span>
          </div>
        </div>
        <button onClick={props.handleClose} className={styles.closeButton}>X</button>
      </section>
    </div>
  );
}

export default BestimateModal;

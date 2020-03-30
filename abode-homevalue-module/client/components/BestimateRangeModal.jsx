import React from 'react';
import styles from '../style/BestimateRangeModal.css';

const BestimateRangeModal = (props) => {
  const showHideClassname = props.show === true ? `${styles.modal} ${styles.displayBlock}` : `${styles.modal} ${styles.displayNone}`;
  return (
    <div className={showHideClassname} onClick={props.handleClose}>
      <section className={styles.modalMain} onClick={event => event.stopPropagation()}>
        <p>We calculate the estimated sales range based on the current market and the info we have about this home.</p>
        <button onClick={props.handleClose} className={styles.closeButton}>X</button>
      </section>
    </div>
  );
}

export default BestimateRangeModal;

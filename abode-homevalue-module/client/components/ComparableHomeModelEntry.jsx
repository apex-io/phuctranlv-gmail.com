import React from 'react';
import $ from 'jquery';
import SignInModal from './SignInModal.jsx';
import styles from '../style/ComparableHomeModelEntry.css';
import redIcon from '../../public/icons/Button_Icon_Red.svg';
import grayIcon from '../../public/icons/Gray_Light_Icon.svg';
import heartIcon from '../../public/icons/heart.svg';

class ComparableHomeModelEntry extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.addressSummary.on_market === 'true') {
      this.state = {
        saleIcon: redIcon,
        heartModal: {show: false}
      };
    } else {
      this.state = {
        saleIcon: grayIcon,
        heartModal: {show: false}
      };
    }
    this.onClickHandler = this.onClickHandler.bind(this);
    this.showHeartModal = this.showHeartModal.bind(this);
    this.hideHeartModal = this.hideHeartModal.bind(this);
  }

  onClickHandler(event) {
    // test if the correct data is being sent
    $.ajax({
      type: 'get',
      url: '/exampleHomeSummary/',
      data: {
        address: this.props.addressSummary.address,
        zipCode: this.props.addressSummary.zipcode,
      },
      success: (result) => {
        this.props.onClickNewAddressShowMoreHandler();
        this.props.onClickNewAddressHandler(result);
        window.scrollTo(0, 0);
      },
    });
    event.preventDefault();
  }

  hideHeartModal() {
    this.setState({
      heartModal: {show: false}
    })
  }

  showHeartModal() {
    this.setState({
      heartModal: {show: true}
    })
  }

  render() {
    return (
      // test if the below render
      // <div>{JSON.stringify(this.props.addressSummary)}</div>
      <div className={styles.ComparableHomeModelEntry} onClick={this.onClickHandler}>
        {/* <div>Address: {this.props.addressSummary.address}</div> */}
        <div className={styles.upperSide}>
          <img className={styles.image} src={this.props.addressSummary.pictureurl}></img>
          <div className={styles.heart} onClick={event => event.stopPropagation()}>
            <img src={heartIcon} onClick={this.showHeartModal}></img>
          </div>
        </div>
        <div className={styles.homeSummary}>
          <div className={styles.homeValue}>
            <div>${new Intl.NumberFormat().format(this.props.addressSummary.currentestimatedvalue)}</div>
            <div className={styles.forSale}>
              <img className={styles.icon} src={this.state.saleIcon}></img></div>
          </div>
          <div className={styles.homeValuePerSqft}>
            ${new Intl.NumberFormat().format((this.props.addressSummary.currentestimatedvalue / this.props.addressSummary.sqft).toFixed(2))}/sqft
            </div>
          <div className={styles.homeDetails}>
            <span className={styles.detailNumber}>{this.props.addressSummary.bed}</span> <span> bd</span>
            <div className={styles.detailSpacing}></div>
            <span className={styles.detailNumber}>{this.props.addressSummary.bath}</span><span> ba</span>
            <div className={styles.detailSpacing}></div>
            <span className={styles.detailNumber}>{this.props.addressSummary.sqft}</span> <span> sqft</span>
          </div>
        </div>

        <SignInModal show={this.state.heartModal.show} handleClose={this.hideHeartModal} handleOpen={this.showHeartModal} />

      </div>
    );
  }
}

export default ComparableHomeModelEntry;

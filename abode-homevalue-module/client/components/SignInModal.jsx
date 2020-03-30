import React from 'react';
import styles from '../style/SignInModal.css';
import appleIcon from '../../public/icons/apple.svg';
import fbIcon from '../../public/icons/fb.svg';
import googleIcon from '../../public/icons/google.svg';

class SignInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Enter email'
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({
      email: event.target.value
    })
  }

  onSubmitHandler(event) {
    alert('An email was submitted: ' + this.state.email);
    event.preventDefault();
  }

  render() {
    const showHideClassname = this.props.show === true ? `${styles.modal} ${styles.displayBlock}` : `${styles.modal} ${styles.displayNone}`;
    return(
      <div onClick={event => event.stopPropagation()} >
        <div className={showHideClassname} onClick={this.props.handleClose}>
          <section className={styles.modalMain} onClick={event => event.stopPropagation()}>
            <div className={styles.instruction}>Sign in or register to save home</div>
            <form onSubmit={this.onSubmitHandler} className={styles.form}>
              <input type="email" name="email" placeholder="Enter email" onChange={this.onChangeHandler} className={styles.input}></input>
              <input type="submit" value="submit" className={styles.submit}></input>
              <p className={styles.terms}>By submitting, I accept Abode's <a href="https://www.zillow.com/corp/Terms.htm">terms of use.</a></p>
            </form>
            <div className={styles.socialVerify}>
              <span className={styles.socialVerifyInstruction}>Or connect with:</span>
              <button className={styles.verifierApple}><img src={appleIcon} className={styles.icon}></img>Continue with Apple</button>
              <button className={styles.verifierFb}><img src={fbIcon} className={styles.icon}></img>Continue with Facebook</button>
              <button className={styles.verifierGoogle}><img src={googleIcon} className={styles.icon}></img>Continue with Google</button>
            </div>
            <button onClick={this.props.handleClose} className={styles.closeButton}>X</button>
          </section>
        </div>
      </div>
    )
  }
}

export default SignInModal;

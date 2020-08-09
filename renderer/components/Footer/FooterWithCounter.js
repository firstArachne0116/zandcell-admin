import React from 'react';
import Footer from './Footer';
import useStyles from './footer-style';

function FooterWithDeco() {
  const classes = useStyles();
  return (
    <div className={classes.footerCounter}>
      <div className={classes.decoTop}>
        <svg>
          <use xlinkHref="/static/images/crypto/deco-footer.svg#main" />
        </svg>
      </div>
      {/* <Counter /> */}
      <Footer />
    </div>
  );
}

FooterWithDeco.propTypes = {
};

export default FooterWithDeco;

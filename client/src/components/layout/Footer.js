import React from 'react';
import PropTypes from 'prop-types';

function Footer({ icon, iconType }) {
  return (
    <div>
      <footer className='footer p-3'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-4'>
              <span id={icon} data-color={iconType}></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
Footer.defaultProps = {
  icon: 'edamam-badge',
  iconType: 'badge',
};
Footer.propTypes = {
  icon: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
};
export default Footer;

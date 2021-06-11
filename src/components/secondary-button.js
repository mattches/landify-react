import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './secondary-button.module.css'

const SecondaryButton = (props) => {
  return (
    <div className={styles.container}>
      <button
        className={` ${projectStyles.mediumLabel} ${projectStyles.thqButton} ${styles.button} `}
      >
        {props.button}
      </button>
    </div>
  )
}

SecondaryButton.defaultProps = {
  button: 'Button',
}

SecondaryButton.propTypes = {
  button: PropTypes.string,
}

export default SecondaryButton

import React from 'react'
import ProsTypes from "prop-types"
import styles from "./Button.module.css"

export default function Button({text}) {
  return (
    <button className={styles.btn}>{text}</button>
  )
}

Button.prototype = {
    text : ProsTypes.string.isRequired,
};

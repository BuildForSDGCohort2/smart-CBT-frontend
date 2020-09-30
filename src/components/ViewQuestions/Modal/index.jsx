import React from "react";

import Button from "../../Button";
import styles from "./index.module.scss";


const Modal = props => {

    const {switchModal} = props;


    return(
        <div className={styles["modal__container"]}>
            <div className={styles["modal__header"]}>
                <p>Enter Course Code</p>
            </div>
            <div className={styles["form"]}>

                <div className={styles["form__group"]}>
                    <label htmlFor="coursecode">Course Code</label>
                    <select id="coursecode">
                        <option value="MCE 401">MCE 401</option>
                        <option value="MCE 401">GS 301</option>
                        <option value="MCE 401">ENGR 101</option>
                        <option value="MCE 401">MATH 201</option>
                    </select>
                </div>

                <div className={styles["form__button"]}>
                    <Button type="click" onClick={() => switchModal(false)}>
                        Ok
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
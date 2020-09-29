import React, {useState} from "react";


import Modal from "./Modal";
import Questions from "./Questions"

const ViewQuestions = () => {

    const [showModal, setModal] = useState(true);

    const modal = showModal ? <Modal  switchModal={setModal} /> 
    : <Questions />;

    return(
        <>
        {modal}
        </>
    )
}


export default ViewQuestions;
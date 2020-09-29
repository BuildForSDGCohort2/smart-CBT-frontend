import React, {useState} from "react";


import Modal from "./Modal";
import Question from "./Question";


const Container = props => {

    const [showModal, setModal] = useState(true);

    const modal = showModal ? <Modal switchModal={setModal} /> : <Question />


    return(
        <>
        {modal}
        </>
    )
}


export default Container;
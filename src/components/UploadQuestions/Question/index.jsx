import React, {useState} from "react";


import Button from "../../Button";
import styles from "./index.module.scss";


const UploadQuestion = props => {
    
    const [questions, setQuestions] = useState({
        questions: [],
    })

    const [inputChange, setInputChange] = useState({
        question: "",
        answer: ""
    })

    const onChangeHandler = e => {
        console.log(e.target.value);
        setInputChange({
            [e.target.name]: e.target.value
        })
    }


    return(
        <div className={styles["question__container"]}>
            <div className={styles["question__header"]}>
                <h1>Question Review</h1>
            </div>
            <div className={styles["separator"]}></div>
            <div className={styles["question__view"]}>
                <h1 htmlFor="question">English 1/50</h1>
                <textarea value={inputChange["question"]} name="question"
                onChange={onChangeHandler} id="question" rows="6"></textarea>
            </div>
            <div className={styles["question__answer"]}>
               <h1 htmlFor="answer">Answer</h1>
               <input type="text" name="answer" value={inputChange["answer"]}
               id="answer" onChange={onChangeHandler} />
            </div>
            <div className={styles["question__control--button"]}>
                <Button type="click">
                    Prev
                </Button>
                <Button type="click">
                    Next
                </Button>
            </div>
            <div className={styles["question__control--numbers"]}>
                {
                    Array(50).fill().map((_, i) =>{

                      return <Button type="click" key={i}>{i + 1}</Button>
                    })
                }
            </div>
        </div>
    )
}


export default UploadQuestion;
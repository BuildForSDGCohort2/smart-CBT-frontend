import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";

import Button from "../../Button";
import styles from "./index.module.scss";
import { v1 as uuidv1 } from "uuid";

const Modal = (props) => {
  const [showQuestions, setQuestionsModal] = React.useState(false);

  const handleShowQuestions = () => {
    setQuestionsModal(!showQuestions);
  };

  return (
    <>
      {showQuestions ? (
        <UploadQuestion values="" />
      ) : (
        <div className={styles["modal__container"]}>
          <div className={styles["modal__header"]}>
            <p>Enter Course Code</p>
          </div>
          <div className={styles["form"]}>
            <div className={styles["form__group"]}>
              <label htmlFor="coursecode">Course Code</label>
              <select id="coursecode">
                <option value="1">MCE 401</option>
                <option value="1">GS 301</option>
                <option value="1">ENGR 101</option>
                <option value="1">MATH 201</option>
              </select>
            </div>

            <div className={styles["form__button"]}>
              <Button type="click" onClick={() => handleShowQuestions()}>
                Ok
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

const UploadQuestion = ({ values }) => {
  const [questions, setQuestions] = React.useState([]);
  const [index, setIndex] = React.useState(0);

  const [inputChange, setInputChange] = React.useState({
    question: "",
    answer: "",
  });

  const { courseTitle, noOfQuestions } = values;

  const handlePrevBtn = (e) => {
    setInputChange(questions[index]);
    setIndex(index - 1);
  };

  const handleNextBtn = (values) => {
    // console.log("qiestions index", questions[index-1]);
    // questions[index + 1] &&
    //   (questions[index + 1] = values || console.log("indexed"));

    // setQuestions([...questions, values]);

    questions[index + 1] !== undefined
      ? setInputChange(questions[index + 1])
      : handleInput(values);
  };

  const handleInput = (values) => {
    // console.log(values);

    // !values.id === questions[index + 1].id &&
    setQuestions([...questions, values]);
    setInputChange({ ...inputChange, id: "", question: "", answer: "" });
    setIndex(index + 1);

    console.log("handleInput", questions[index]);
  };

  // console.log(questions);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setInputChange({
      ...inputChange,
      id: uuidv1(),
      [e.target.name]: e.target.value,
    });
  };

  React.useEffect(() => {
    sessionStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  return (
    <div className={styles["question__container"]}>
      <div className={styles["question__header"]}>
        <h1>Question Review</h1>
      </div>
      <div className={styles["separator"]}></div>
      <div className={styles["question__view"]} id="view">
        <h1 htmlFor="question">
          {courseTitle} {index + 1}/{noOfQuestions}
        </h1>
        <textarea
          value={inputChange["question"]}
          name="question"
          onChange={handleChange}
          id="question"
          rows="6"
        ></textarea>
      </div>
      <div className={styles["question__answer"]} id="answer">
        <h1 htmlFor="answer">Answer</h1>
        <input
          type="text"
          name="answer"
          value={inputChange["answer"]}
          id="answer"
          onChange={handleChange}
        />
      </div>
      <div className={styles["question__control--button"]}>
        <Button type="button" onClick={handlePrevBtn} disabled={index === 0}>
          Prev
        </Button>

        {index + 1 === noOfQuestions ? (
          <Button type="button" onClick={() => handleNextBtn(inputChange)}>
            Upload
          </Button>
        ) : (
          <Button type="button" onClick={() => handleNextBtn(inputChange)}>
            Next
          </Button>
        )}
      </div>
      {/* <div className={styles["question__control--numbers"]}>
        {Array(noOfQuestions)
          .fill()
          .map((_, i) => {
            return (
              <Button type="button" className={styles["button"]} key={i} disabled={index === i}>
                {i + 1}
              </Button>
            );
          })}
      </div> */}
    </div>
  );
};

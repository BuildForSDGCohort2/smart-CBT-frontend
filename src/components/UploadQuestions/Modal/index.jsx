import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";

import Button from "../../Button";
import styles from "./index.module.scss";
import { v1 as uuidv1 } from "uuid";

const Question = () => {
  const initialValues = {
    courseTitle: "English",
    noOfQuestions: 12,
    marksPerQuestion: "11",
  };
  const [showQuestions, setQuestionsModal] = React.useState(false);
  const [Questions, setQuestionDetails] = React.useState(initialValues);

  const handleShowQuestions = () => {
    setQuestionsModal(!showQuestions);
  };

  const validationSchema = object({
    courseTitle: string()
      .min(5)
      .max(20, "Must be 20 characters or less")
      .required(),
    noOfQuestions: number().required(),
    marksPerQuestion: string().required(),
  });
  return (
    <>
      {true ? (
        <UploadQuestion values={Questions} />
      ) : (
        <div className={styles["modal__container"]}>
          <div className={styles["modal__title"]}>
            <h1>New Course</h1>
            <Button type="click">X</Button>
          </div>
          <div className={styles["modal__content"]}>
            <div className={styles["modal__header"]}>
              <p>Name and Size</p>
              <hr />
            </div>
            <div className={styles["modal__body"]}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={({
                  courseTitle,
                  noOfQuestions,
                  marksPerQuestion,
                }) => {
                  setQuestionDetails({
                    ...Questions,
                    courseTitle,
                    noOfQuestions,
                    marksPerQuestion,
                  });
                  handleShowQuestions();
                }}
              >
                {({ values, handleSubmit, handleChange }) => (
                  <Form autoComplete="off" id="my-form">
                    <div className={styles["form__group"]}>
                      <div className={styles["form__label"]}>
                        <label htmlFor="coursename">Enter Course Title: </label>
                      </div>

                      <div className={styles["form__control"]}>
                        <Field
                          name="courseTitle"
                          value={values.courseTitle}
                          onChange={handleChange}
                          type="text"
                          id="coursename"
                        />
                        <ErrorMessage name="courseTitle" />
                      </div>
                    </div>

                    <div className={styles["form__group"]}>
                      <div className={styles["form__label"]}>
                        <label htmlFor="noofquestions">
                          Enter Number of Questions:
                        </label>
                      </div>

                      <div className={styles["form__control"]}>
                        <Field
                          name="noOfQuestions"
                          value={values.noOfQuestions}
                          onChange={handleChange}
                          type="number"
                          id="noofquestions"
                        />
                        <ErrorMessage name="noOfQuestions" />
                      </div>
                    </div>

                    <div className={styles["form__group"]}>
                      <div className={styles["form__label"]}>
                        <label htmlFor="marksperquestion">
                          Marks per Question:
                        </label>
                      </div>

                      <div className={styles["form__control"]}>
                        <Field
                          name="marksPerQuestion"
                          value={values.marksPerQuestion}
                          onChange={handleChange}
                          type="text"
                          id="marksperquestion"
                        />
                        <ErrorMessage name="marksPerQuestion" />
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
              <hr />
              <p>
                <b>
                  * &nbsp; Please fill up the above and click on <i>Next</i> to
                  continue.
                </b>
              </p>
            </div>
          </div>

          <div className={styles["modal__footer"]}>
            <Button type="submit" form="my-form">
              Next
            </Button>
            <Button type="click">Cancel</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Question;

const UploadQuestion = ({ values }) => {
  const { courseTitle, noOfQuestions } = values;
  const [questions, setQuestions] = React.useState([]);
  const [index, setIndex] = React.useState(0);

  const [inputChange, setInputChange] = React.useState({
    question: "",
    answer: "",
  });

  const handlePrevBtn = (e) => {
    console.log("prev index", index);
    setIndex(index - 1);
    setInputChange(questions[index - 1]);
  };

  const handleNextBtn = (values) => {
    // console.log(" index", questions[index]);
    setIndex(index + 1);

    questions[index] !== undefined ? handleInputChange() : handleInput(values);
  };

  const handleInputChange = () => {
    // console.log("input changed");
    questions[index + 1] === undefined
      ? setInputChange({ ...inputChange, id: "", question: "", answer: "" })
      : setInputChange(questions[index + 1]);

    setIndex(index + 1);
  };

  const handleInput = (values) => {
    console.log("handleinput index", index);

    questions[index]=values;

    // setQuestions([...questions, values]);
    setInputChange({ ...inputChange, id: "", question: "", answer: "" });
    setIndex(index + 1);

    console.log("handleInput", questions[index]);
  };

  console.log(questions);

  const handleChange = (e) => {
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
          // value={inputChange["question"]}
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
          value={inputChange.answer}
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

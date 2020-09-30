import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";

import Button from "../../Button";
import styles from "./index.module.scss";

const Question = () => {
  const initialValues = {
    courseTitle: "",
    noOfQuestions: "",
    marksPerQuestion: "",
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
    marksPerQuestion: string().min(2).required(),
  });
  return (
    <>
      {showQuestions ? (
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
  console.log(values);
  const [questions, setQuestions] = React.useState({
    questions: [],
  });

  const [inputChange, setInputChange] = React.useState([
    {
      question: "",
      answer: "",
    },
  ]);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setInputChange([{...inputChange,
      [e.target.name]: e.target.value,
    }]);
  };

  console.log(inputChange)
  return (
    <div className={styles["question__container"]}>
      <div className={styles["question__header"]}>
        <h1>Question Review</h1>
      </div>
      <div className={styles["separator"]}></div>
      <div className={styles["question__view"]}>
        <h1 htmlFor="question">
          {values.courseTitle} 1/{values.noOfQuestions}
        </h1>
        <textarea
          value={inputChange["question"]}
          name="question"
          onChange={onChangeHandler}
          id="question"
          rows="6"
        ></textarea>
      </div>
      <div className={styles["question__answer"]}>
        <h1 htmlFor="answer">Answer</h1>
        <input
          type="text"
          name="answer"
          value={inputChange["answer"]}
          id="answer"
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles["question__control--button"]}>
        <Button type="click">Prev</Button>
        <Button type="click">Next</Button>
      </div>
      <div className={styles["question__control--numbers"]}>
        {Array(values.noOfQuestions)
          .fill()
          .map((_, i) => {
            return (
              <Button type="click" key={i}>
                {i + 1}
              </Button>
            );
          })}
      </div>
    </div>
  );
};

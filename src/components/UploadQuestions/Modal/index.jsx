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
    marksPerQuestion: string().required(),
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
  
  const [questions, setQuestions] = React.useState({
    questions: []
  });

  const [inputChange, setInputChange] = React.useState({
      question: "",
      answer: "",
    });

  const {courseTitle, noOfQuestions, marksPerQuestion} = values;

  const onChangeHandler = (e) => {
    setInputChange([{...inputChange,
      [e.target.name]: e.target.value,
    }]);
  };

  const addQuestionHandler = e => {

    //first we get our input values
    const parent = e.target.parentNode.parentNode.parentNode;

    const question = parent.querySelector("#view").querySelector("[name=question]").value;
    const answer = parent.querySelector("#answer").querySelector("[name=answer]").value;

    console.log(question, answer);

    const quest = [...questions.questions];
    quest.push({ question, answer });

    //then we add it to the setQuestions
    setQuestions({
      questions: quest
    });

    //then we set the inputs back to its initial state
    parent.querySelector("#view").querySelector("[name=question]").value = "";
    parent.querySelector("#answer").querySelector("[name=answer]").value = "";

    console.log(questions);
  }

  const prevQuestionHandler = e => {

    const quest = [...questions.questions];
    //then we get the previous one that is current page - 1
    const prevPage = quest.length - 1;
    console.log(prevPage); 

    //we use this number to fetch the data from the state and display
    const questee = quest[prevPage];

    console.log(questee);
  }

  return (
    <div className={styles["question__container"]}>
      <div className={styles["question__header"]}>
        <h1>Question Review</h1>
      </div>
      <div className={styles["separator"]}></div>
      <div className={styles["question__view"]} id="view">
        <h1 htmlFor="question">
           {courseTitle} {questions.questions.length + 1}/{noOfQuestions}
        </h1>
        <textarea
          value={inputChange["question"]}
          name="question"
          onChange={onChangeHandler}
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
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles["question__control--button"]}>

        <Button type="click" 
        onClick={prevQuestionHandler}>
        Prev</Button>
        <Button type="click" 
        onClick={addQuestionHandler}>
        Next</Button>

      </div>
      <div className={styles["question__control--numbers"]}>
        {Array(noOfQuestions)
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

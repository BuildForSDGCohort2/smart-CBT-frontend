import React from "react";
import { useDispatch } from "react-redux";
import Button from "../Button";
import style from "./index.module.scss";
import * as examActions from "../../redux/actions/examActions";
import ViewQuestion from "../ViewQuestions/Questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock } from "@fortawesome/free-regular-svg-icons";

export default function StartExam() {
  const dispatch = useDispatch();
  const [showQuestions, setShowQuestions] = React.useState(false);

  const ExamInput = [
    {
      coursecode: "MHS 444",
      courseTitle: "11",
      creditLoad: "",
      exam_duration: "44",
      question_amt: "",
      exam_type: "",
      instructions: ["Attempt all questions"],
    },
  ];

  const ShowQuestions = () => {
    setShowQuestions(!showQuestions)
  };
  React.useEffect(() => {
    dispatch(examActions.getSingleExam(1));
  }, []);

  return (
    <>
      {showQuestions ? (
        <ViewQuestions />
      ) : (
        <section className={style["container"]}>
          <div className={style["instructions"]}>
            <header>
              <h3>Please Read Carefully</h3>
            </header>

            {ExamInput.map((item) => {
              return (
                <>
                  <div>
                    <label htmlFor={item.coursecode}>Course Code:</label>
                    <span>{item.coursecode}</span>
                  </div>

                  <div>
                    <label htmlFor={item.courseTitle}>Course Title:</label>
                    <span>{item.courseTitle}</span>
                  </div>

                  <div>
                    <label htmlFor={item.creditLoad}>Credit Load:</label>
                    <span>{item.creditLoad}</span>
                  </div>
                  <div>
                    <label htmlFor={item.exam_duration}>Exam Duration:</label>
                    <span>{item.exam_duration}</span>
                  </div>
                  <div>
                    <label htmlFor={item.coursecode}>No of Questions:</label>
                    <span>{item.question_amt}</span>
                  </div>
                  <div>
                    <label htmlFor={item.exam_type}>Exam Type:</label>
                    <span>{item.exam_duration}</span>
                  </div>
                  <div>
                    <label htmlFor={item.instructions}>Instructions:</label>
                    <span>{item.instructions[0]}</span>
                  </div>
                  <Button type="button" className="refresh" onClick={()=>ShowQuestions()}>
                    Start
                  </Button>
                </>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

const ViewQuestions = () => {
  return (
    <div className={style["view__questions--container"]}>
      <ViewQuestion />
      <div className={style["aside"]}>
        <div></div>

        <div>
          <FontAwesomeIcon icon={faClock} />
        </div>
      </div>
    </div>
  );
};

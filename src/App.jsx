import { useState } from "react";
import ExcellenceSection from "./Component/ExcellenceSection";
import Hero from "./Component/Hero";
import QuizSection from "./Component/QuizSection";
import Footer from "./Component/Footer";
import ApplyForm from "./Component/ApplyForm";

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [step, setStep] = useState("quiz");

  const questions = [
    {
      text: "Are you interested in studying a Master’s in Public Health?",
      options: ["Yes", "No"],
    },
    {
      text: "Did you know TAU Guyana is BAC Accredited?",
      options: ["Yes", "No"],
    },
    {
      text: "Is the MPH program fee manageable for you?",
      options: ["Affordable", "Manageable", "Not Affordable"],
    },
  ];

  const schemaNames = [
    "mx_Are_you_interested_in_studying_Doctor_of_Medicine",
    "mx_Are_you_aware_that_TAU_Guyana_is_Triple_Accredited",
    "mx_The_MD_program_fee_is_USD_How_does_this_fit_your",
  ];

  return (
    <>
      <Hero />
      <ExcellenceSection />

      {step === "quiz" && (
        <QuizSection
          currentQuestion={currentQuestion}
          questions={questions}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setCurrentQuestion={setCurrentQuestion}
          setStep={setStep}
          schemaNames={schemaNames}
        />
      )}
      {step === "apply" && <ApplyForm />}
        <Footer />
    </>
  );
}

export default App;
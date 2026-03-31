import React from "react";

const QuizSection = ({
  currentQuestion,
  questions,
  selectedOption,
  setSelectedOption,
  setCurrentQuestion,
  setStep,
  schemaNames
}) => {

  const progress =
    ((currentQuestion + 0) / questions.length) * 100;

  return (
    <section id="quiz" className="min-h-screen bg-white">

      {/* Header */}
      <div className="bg-[#E5F8FF] py-4 px-6 flex items-center justify-around">

        <div>
          <h4 className="text-base md:text-lg font-medium">
            Question {currentQuestion + 1} of {questions.length}
          </h4>
          <p className="text-base text-gray-700">
            Answer a few quick questions to see if you qualify for our MPH program.
          </p>
        </div>

        {/* Progress */}
       <div className="w-1/3 hidden md:block">
  <div className="h-3 bg-white rounded-full overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-[#089B1E] to-[#3EDC63] 
                 rounded-full transition-all duration-500 ease-in-out"
      style={{ width: `${progress}%` }}
    ></div>
  </div>

</div>

        <div className="text-base md:text-lg font-medium">
          TAU Guyana
        </div>
      </div>

      {/* Card */}
      <div className="flex items-center justify-center py-16 px-4">
        <div className="bg-[#BDE8F5] rounded-2xl p-10 w-full max-w-2xl shadow-md">

          <h3 className="text-center text-[#0D0E3A] text-lg font-medium mb-8">
            Q{currentQuestion + 1}. {questions[currentQuestion].text}
          </h3>

          {/* Options */}
          <div className="space-y-4 max-w-md mx-auto">
            {questions[currentQuestion].options.map((option, index) => (
              <label
                key={index}
                className={`flex items-center gap-3 w- bg-white px-4 py-3 rounded-lg cursor-pointer border 
                ${selectedOption === option
                    ? " ring-2 ring-[#0D0E3A]"
                    : "border-gray-300"
                  }`}
              >
                <input
                  type="radio"
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  className="accent-[#238632]"
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-10 max-w-md mx-auto">
            <button
              disabled={currentQuestion === 0}
              onClick={() => {
                setCurrentQuestion(currentQuestion - 1);
                setSelectedOption(null);
              }}
              className="bg-[#0D0E3A] text-white px-6 py-3 border-2 border-[#4D54AF] rounded-md shadow-xl hover:opacity-90 disabled:opacity-40"
            >
              Previous
            </button>

            <button
              disabled={!selectedOption}
              onClick={() => {
                sessionStorage.setItem(
                  schemaNames[currentQuestion],
                  selectedOption
                );

                if (currentQuestion < questions.length - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                  setSelectedOption(null);
                } else {
                  setStep("apply");
                }
              }}
             className="bg-[#089B1E] text-white px-8 py-2 border-2 border-[#238632] rounded-md shadow-xl hover:bg-green-700 disabled:opacity-40" >
              Next
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuizSection;
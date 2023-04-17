const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const answer = question.querySelector(".answer");
  answer.style.display = "none";

  question.addEventListener("click", () => {
    if (answer.style.display === "none") {
      answer.style.display = "block";
      question.querySelector(".prompt").style.display = "none";
    } else {
      answer.style.display = "none";
      question.querySelector(".prompt").style.display = "block";
    }
  });
});

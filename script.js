document.addEventListener("DOMContentLoaded", () => {
  const todayElement = document.getElementById("today");
  const resultElement = document.getElementById("result");

  const providedDate = new Date("2024-05-15");
  const currentDate = new Date();

  const timeDifference = providedDate - currentDate;
  const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  const absoluteDayDifference = Math.abs(dayDifference);

  // Display the current date
  const options = { year: "numeric", month: "long", day: "numeric" };
  todayElement.textContent = `Today is ${currentDate.toLocaleDateString(
    undefined,
    options
  )}.`;

  // Function to animate the count
  function animateCount(target, element) {
    let start = 0;
    const end = target;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start++;
      element.textContent = `${start}`;
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  // Start the animation
  animateCount(absoluteDayDifference, resultElement);
});

document.querySelector("#grandparent")
  .addEventListener('click', (e) => {
    console.log("Grandparent Clicked!");
    //e.stopPropagation();
  }, true);

  document.querySelector("#parent")
  .addEventListener('click', (e) => {
    console.log("Parent Clicked!");
  }, true);

  document.querySelector("#child")
  .addEventListener('click', (e) => {
    console.log("Child Clicked!");
  }, true);
document.querySelector("#category").addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.tagName == 'LI') {
      window.location.href = "/" + e.target.id;
    }
  });
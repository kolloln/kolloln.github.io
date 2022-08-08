let date, start = Date.parse('2021-07-08'),
  end = new Date();
end.setDate(end.getDate() - 1);
const getDate = () => {
  date = new Date(Math.floor(Math.random() * (end - start + 1) + start)).toISOString().split('T')[0];
  return date
};
let img, title, explanation;
const newImage = () => fetch(`https://api.nasa.gov/planetary/apod?api_key=gp8fLtBGE7tNuYJUwqzJErWhGcRuwOEPhumAUQKd`)
  .then(response => response.json())
  .then(data => {
    img.src = data[0].url
    title.innerText = data[0].title
    explanation.innerText = data[0].explanation
  })




window.addEventListener("DOMContentLoaded", function() {
  img = document.querySelector(".picture");
  title = document.querySelector(".title");
  explanation = document.querySelector(".explanation");
  document.getElementById("next").addEventListener("click", newImage)
  newImage()
})

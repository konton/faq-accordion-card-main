
var question = document.querySelectorAll(".faq");
var ans = document.querySelectorAll(".ans");
let firstChild = document.body.childNodes;
console.log(firstChild);
console.log("HI")



// question.forEach((element) => {
//   element.addEventListener("click", () => {
//     element.classList.toggle("hidden");
//     // element.classList.remove("faq");
//     // element.classList.add("faqn")
    
//   });
// });

for (const q of question){
    q.addEventListener('click', function onClick(){
        console.log("CLICKED");
        q.classList.toggle('hidden');
    })
}
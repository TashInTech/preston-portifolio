const animatedElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{ threshold:0.2 });
animatedElements.forEach(el => observer.observe(el));


document.getElementById("contactForm").addEventListener("submit", function(){
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let message = document.getElementById("message").value;
let name = document.getElementById("name").value;

let text = `
Name:${name}
PhoneNumber:${phone}
Message:${message}
Email:${email}
`;

window.open(`https://wa.me/256759258767?text=${encodeURIComponent(text)}`);
});
// toggleicon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    })


    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

    // send email
    const form = document.querySelector("form");
    const fullName = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    function sendEmail(){
        const bodyMessage = `Full name: ${fullName.value}<br> Email: ${email.value}<br>
        Phone Number: ${phone.value}<br> Message: ${message.value}<br>`;

        Email.send({
            SecureToken: "7471ce07-6fe4-44e3-8eaf-873d1fa7de5c",
            To : 'hemnerbyyt07@gmail.com',
            From : "hemnerbyyt07@gmail.com",
            Subject : subject.value,
            Body : bodyMessage
        }).then(
          message => {
            if (message == "OK"){
                Swal.fire({
                    title: "Éxitoso!",
                    text: "Mensaje enviado!",
                    icon: "success"
                  });
            }
          }
        );
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        sendEmail();
        form.reset();
    })


    function FullView(ImgLink){
        document.getElementById("FullImage").src = ImgLink;
        document.getElementById("fullImageView").style.display = "block";
    }

    function CloseFullView(){
        document.getElementById("fullImageView").style.display = "none";
    }
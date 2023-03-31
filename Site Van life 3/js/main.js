// // mail

// function validate() {
//     let name = document.querySelector('')
// }

// // email

// function validate() {
//     let name = document.querySelector('.name');
//     let email = document.querySelector('.email');
//     let msg = document.querySelector('.message');
//     let sendBtn = document.querySelector('.send-btn');

//     sendBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (name.value == "" || email.value == "" || msg.value == "") {
//           emptyerror();
//         } else {
//             sendmail(name.value, email.value, msg.value);
//             success();
//         }
//     });
// }

// validate();

// function sendmail(name,email,msg){
//     emailjs.send("service_r0aq5m8","template_n82qu3a",{
//         from_name: email,
//         to_name: name,
//         message: msg,
//         });
// }

// function emptyerror() {
//     swal({
//         title: "oh non...!",
//         text: "vous devez remplir tous les champs",
//         icon: "error",
//     });
// }

// function success() {
//     swal({
//         title: "Succés",
//         text: "Le message à bien été reçu",
//         icon: "success",
//     });
// }

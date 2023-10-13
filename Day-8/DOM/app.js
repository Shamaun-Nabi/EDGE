// let myPara = document.getElementById("myPara").innerHTML;
// console.log(myPara);
// let myClassPara = document.getElementsByTagName("p");
// console.log(myClassPara);

// let myPara = document.querySelector("#queryId_1");
// console.log(myPara);
// myPara.style.color = "red";
// myPara.style.backgroundColor = "green";

// function changeName() {
//   let userName = document.getElementById("userName");
//   userName.innerText = "Rahman";
//   console.log(userName.innerText);
// }

// let myButton = document.getElementById("mybtn");

// myButton.addEventListener("click", changeName);

// let myFormData = document.getElementById("myForm");

// myFormData.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let name = e.target.getUserName.value;
//   let email = e.target.getuserEmaail.value;
//   let passsword = e.target.getuserPassword.value;

//   const userInfo = {
//     name,
//     email,
//     passsword,
//   };

//   console.log(userInfo);
// });

let myFriend = [
  {
    name: "Rakib",
    age: 30,
    salary: "50k",
    friends: [
      {
        name: "Sakila",
        age: 20,
      },
      {
        name: "Sapla",
        age: 22,
      },
    ],
  },
];

console.log(myFriend[0].friends[0].name);

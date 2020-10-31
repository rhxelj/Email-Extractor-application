let txtarea = document.querySelector("textarea[name=txtarea]");
let txtoutput = document.querySelector("textarea[name=output]");
let btn = document.querySelector("button");
let counter = document.querySelector(".counter");

const { log } = console;
log("txtarea ", txtarea);
// log("txtoutput ", txtoutput);
// log("btn ", btn);

btn.addEventListener("click", function () {
  let rawTxt = txtarea.value;
  let regex = /\S+@\S+/g;
  let emails = rawTxt.match(regex);
  let newEmails = [];
  for (let i = 0; i < emails.length; i++) {
    if (newEmails.indexOf(emails[i]) == -1) {
      newEmails.push(emails[i]);
    }
  }
  emails = newEmails;
  txtoutput.innerText = emails;
  counter.innerText = "Emails Found " + emails.length;
});

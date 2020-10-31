let txtarea = document.querySelector("textarea[name=txtarea]");
let txtoutput = document.querySelector("textarea[name=output]");
let btn = document.querySelector("button");

const { log } = console;
log("txtarea ", txtarea);
// log("txtoutput ", txtoutput);
// log("btn ", btn);

btn.addEventListener("click", function () {
  let rawTxt = txtarea.value;
  let regex = /\S+@\S+/g;
  let emails = rawTxt.match(regex);
  log(emails);
});

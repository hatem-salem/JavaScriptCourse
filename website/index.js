let username;
document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("username").value;
  document.getElementById("myH1").textContent = `Hello ${username}`;
  console.log(username);
};
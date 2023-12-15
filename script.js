var usersInfo = [];
var saveUserDetails = (userName, email, gender, country, githubID) => {
  const newRow = document.createElement("tr");
  updateLocalStorage(
    userName.value,
    email.value,
    gender.value,
    country.value,
    githubID.value
  );
  newRow.innerHTML = `
        <td>${userName.value}</td>
        <td>${email.value}</td>
        <td>${gender.value}</td>
        <td>${country.value}</td>
        <td><a href="https://github.com/${githubID.value}" target="_blank"><center><img class="githubProfilePic" src="https://avatars.githubusercontent.com/${githubID.value}" alt="GitHub Profile Picture"></center></a></td>
      `;

  document.querySelector("#userDataTable tbody").appendChild(newRow);
  document.getElementById("userDataTable").style.display = "block";
  document.getElementById("table").scrollIntoView({ behavior: "smooth" });
  document.getElementById("form").reset();
};

const updateLocalStorage = (userName, email, gender, country, githubID) =>
  usersInfo.push({
    userName: userName,
    email: email,
    gender: gender,
    country: country,
    githubID: githubID,
  });

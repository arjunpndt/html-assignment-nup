// usersInfo stores the user details
var usersInfo = [];

// function to save user details
var saveUserDetails = (userName, email, gender, country, githubID) => {
  const newRow = document.createElement("tr");
  // will use this to store the user details in local storage now just using it to store in array
  updateLocalStorage(
    userName.value,
    email.value,
    gender.value,
    country.value,
    githubID.value
  );

  // creating a new row in the table and adding the user details
  newRow.innerHTML = `
        <td>${userName.value}</td>
        <td>${email.value}</td>
        <td>${gender.value}</td>
        <td>${country.value}</td>
        <td><a href="https://github.com/${githubID.value}" target="_blank"><center><img class="githubProfilePic" src="https://avatars.githubusercontent.com/${githubID.value}" alt="GitHub Profile Picture"></center></a></td>
      `;

  document.querySelector("#userDataTable tbody").appendChild(newRow);
  document.getElementById("userDataTable").style.display = "block";
  // document.getElementById("table").scrollIntoView({ behavior: "smooth" });
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

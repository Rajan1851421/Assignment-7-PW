function getUserData(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        const avatarElement = document.getElementById("avatar");
        const nameElement = document.getElementById("name");
        const id = document.getElementById("ID");

  
        avatarElement.src = data.avatar_url;
        nameElement.textContent = data.name || "N/A";
        nameElement.textContent=data.name;
        id.textContent=data.id;
        
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Failed to fetch user data. Please try again.");
      });
  }
  
  const searchBtn = document.getElementById("search-btn");
  
  searchBtn.addEventListener("click", () => {
    const usernameInput = document.getElementById("username-input");
    const username = usernameInput.value.trim();
  
    if (username) {
      getUserData(username);
      usernameInput.value = "";
    } else {
      alert("Please enter a GitHub username.");
    }
  });
  
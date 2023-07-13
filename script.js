function updateTime() {
    const clockElement = document.getElementById("time");
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");
    
    let AMPM = hours < 12 ? "AM" : "PM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    
    clockElement.textContent = `${hours}:${minutes}:${seconds} ${AMPM}`;
  }
  
  // Update the clock every second
  setInterval(updateTime, 1000);
  
  // Initial update
  updateTime();
  
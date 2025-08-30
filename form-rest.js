document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    // Wait a moment to let Formspree process the submission
    setTimeout(() => {
      form.reset(); // This clears all the fields
    }, 500);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const birthYear = 2008;
  const birthMonth = 3;
  const birthDay = 28;

  const today = new Date();
  let age = today.getFullYear() - birthYear;

  // Check if birthday has occurred yet this year
  const hasHadBirthday =
    today.getMonth() + 1 > birthMonth ||
    (today.getMonth() + 1 === birthMonth && today.getDate() >= birthDay);

  if (!hasHadBirthday) {
    age -= 1;
  }

  document.getElementById("dev-age").textContent = age;
});

//Count how many times a button is tapped. To use, make a button have an id="myButton"and then have an h2 or something have the id clickCount
let count = 0;

document.getElementById('myButton').addEventListener('click', () => {
  count++;
  document.getElementById('clickCount').textContent = `Clicked ${count} times`;
  console.log(`Button clicked ${count} times`);
});

function getOS() {
  const ua = navigator.userAgent;

  if (/Windows NT/i.test(ua)) return "Windows";
  if (/Macintosh/i.test(ua)) return "macOS";
  if (/Android/i.test(ua)) return "Android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
  if (/Linux/i.test(ua)) return "Linux";

  return "Unknown";
}

function getDeviceType() {
  const ua = navigator.userAgent;
  if (/Mobi|Android/i.test(ua)) return "Mobile";
  if (/Tablet|iPad/i.test(ua)) return "Tablet";
  return "Desktop";
}

function getBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Edg")) return "Edge";
  return "Other";
}

document.getElementById("device_type").value = getDeviceType();
document.getElementById("os").value = getOS();
document.getElementById("browser").value = getBrowser();
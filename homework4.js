/*
Name: Raymundo Licon Castaneda
Program Name: Homework4.js
Date created: Feb 25, 2026
Date Last Updated: May 9, 2026
version 5.0
Purpose: Homework 4 JS Code

This file is shared across ALL pages (homework4.html, ThankYou.html, MentalHealth.html)
adds functionalities to pages
*/

document.addEventListener("DOMContentLoaded", () => 
  {
    const byId = (id) => document.getElementById(id);

    // time/date/slider functions
    const todaySpan = byId("today");
    const clockSpan = byId("clock");

    function showPainValue() 
      {
        const value = document.getElementById("range").value;
        document.getElementById("range-slider").textContent = value;
      }

    function showDepressionValue() 
      {
        const value = document.getElementById("depression").value;
        document.getElementById("depression-slider").textContent = value;
      }

    function showStressValue() 
      {
        const value = document.getElementById("stress").value;
        document.getElementById("stress-slider").textContent = value;
      }

    // Checking address to see if it meets criteria
    function validateAddress1() 
    {
      const address1 = document.getElementById("address1").value.trim();

      if (address1.length < 2 || address1.length > 30) 
      {
        document.getElementById("address1-error").innerHTML =
        "Address line 1 must be 2 to 30 characters.";
        return false;
      } 
        else 
      {
        document.getElementById("address1-error").innerHTML = "";
        return true;
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("range")) {
    showPainValue();
    document.getElementById("range").addEventListener("input", showPainValue);
  }

  if (document.getElementById("depression")) {
    showDepressionValue();
    document.getElementById("depression").addEventListener("input", showDepressionValue);
  }

  if (document.getElementById("stress")) {
    showStressValue();
    document.getElementById("stress").addEventListener("input", showStressValue);
  }
});

    //Checking second address box to see if it fits criteria
    function validateAddress2() 
    {
      const address2 = document.getElementById("address2").value.trim();

      if (address2.length === 0) 
        {
          document.getElementById("address2-error").innerHTML = "";
          return true;
        }

      if (address2.length < 2 || address2.length > 30) 
        {
          document.getElementById("address2-error").innerHTML =
          "Address line 2 must be blank or 2 to 30 characters.";
          return false;
        } 
        else 
          {
            document.getElementById("address2-error").innerHTML = "";
            return true;
          }
    }

    //checking to see if city selection is acceptable
    function validateCity() 
    {
      const city = document.getElementById("city").value.trim();
      if (city.length < 2 || city.length > 30) 
        {
          document.getElementById("city-error").innerHTML =
          "City must be 2 to 30 characters.";
          return false;
        } 
      else 
        {
          document.getElementById("city-error").innerHTML = "";
          return true;
        }
    }

    //Checking to see if two letters are selected for state
    function validateState() 
    {
    const state = document.getElementById("state").value;

    if (state === "") 
      {
        document.getElementById("state-error").innerHTML =
        "Please choose a state.";
        return false;
      }
    else 
      {
        document.getElementById("state-error").innerHTML = "";
        return true;
      }
    }

  // Checking first name requirements
  function validateFname() 
  {
    const fname = document.getElementById("fname").value.trim();
    const pattern = /^[A-Za-z'-]{1,30}$/;

    if (!pattern.test(fname)) 
      {
        document.getElementById("fname-error").innerHTML =
        "First name: letters, apostrophes, and dashes only.";
        return false;
      } 
    else 
      {
        document.getElementById("fname-error").innerHTML = "";
        return true;
      }
  }
  // Allowing ZIP+4, but redesplaying the first five digits
  function validateZip() 
    {
      const zipInput = document.getElementById("zip1");
      let zip = zipInput.value.trim();
      const zipPattern = /^\d{5}(-\d{4})?$/;
      if (!zipPattern.test(zip)) 
      {
        document.getElementById("zip-error").innerHTML =
        "ZIP must be 5 digits or ZIP+4.";
        return false;
      }

      zip = zip.substring(0, 5);
      zipInput.value = zip;
      document.getElementById("zip-error").innerHTML = "";
      return true;
    }


  // Validate Name 
  function validateMini() 
  {
    const mini = document.getElementById("middleini").value.trim();
    const pattern = /^[A-Za-z]{0,1}$/;

    if (!pattern.test(mini)) 
      {
        document.getElementById("mini-error").innerHTML =
        "Middle initial must be blank or one letter.";
        return false;
      } 
    else 
      {
        document.getElementById("mini-error").innerHTML = "";
        return true;
      }
  }

  // Checking Last name to see if it meets criteria
  function validateLname() 
  {
    const lname = document.getElementById("lname").value.trim();
    const pattern = /^[A-Za-z0-9'-]{1,30}$/;
    if (!pattern.test(lname)) 
      {
        document.getElementById("lname-error").innerHTML =
        "Last name may use letters, apostrophes, dashes, and small suffix numbers.";
        return false;
      } 
    else 
      {
        document.getElementById("lname-error").innerHTML = "";
        return true;
      }
  }

  // Checking to see if email fits the criteria
  function validateEmail() 
    {
      const email = document.getElementById("email").value.trim();
      const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[A-Za-z]{2,}$/;

    if (email === "") 
      {
        document.getElementById("email-error").innerHTML =
       "Email cannot be blank.";
        return false;
      }

    if (!emailPattern.test(email)) 
      {
        document.getElementById("email-error").innerHTML =
        "Please enter a valid email address.";
        return false;
      }

    document.getElementById("email-error").innerHTML = "";
    return true;
    }
// Checking phone input for acceptable input
  function validatePhone() 
    {
      const phoneInput = document.getElementById("phone1");
      let phone = phoneInput.value.replace(/\D/g, "");

      if (phone.length !== 10) 
      {
        document.getElementById("phone-error").innerHTML =
        "Phone must contain 10 digits.";
        return false;
      }

      const formatted = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6);
      phoneInput.value = formatted;
      document.getElementById("phone-error").innerHTML = "";
      return true;
    }    

    //Checking username for errors
  function validateUname() 
  {
    let uname = document.getElementById("username").value.trim().toLowerCase();
    document.getElementById("username").value = uname;

    const pattern = /^[a-z][a-z0-9_-]{4,29}$/;

    if (uname.length === 0) 
      {
        document.getElementById("uname-error").innerHTML =
        "Username field cannot be empty.";
        return false;
      }

    if (uname.length < 5) 
      {
        document.getElementById("uname-error").innerHTML =
        "Username must be at least 5 characters.";
        return false;
      }

    if (uname.length > 30) 
      {
        document.getElementById("uname-error").innerHTML =
        "Username cannot exceed 30 characters.";
        return false;
      }

    if (!pattern.test(uname)) 
      {
        document.getElementById("uname-error").innerHTML =
        "Username must start with a letter and contain only letters, numbers, underscores, or dashes.";
        return false;
      }

    document.getElementById("uname-error").innerHTML = "";
    return true;
  }

  //Checking password for "must contain" criteria
  function validatePword() 
  {
    const pword = document.getElementById("password1").value;
    const uname = document.getElementById("username").value.toLowerCase();
    const container = document.querySelector(".pword-message");
    const errors = [];

    if (!/[a-z]/.test(pword))  
      {
        errors.push("Password must contain a lowercase letter.");
      }

    if (!/[A-Z]/.test(pword)) 
      {
        errors.push("Password must contain an uppercase letter.");
      }

    if (!/[0-9]/.test(pword)) 
      {
        errors.push("Password must contain a number.");
      }

    if (!/[!@#%^&*()\-_=+\\/<>.,`~?$]/.test(pword)) 
      {
        errors.push("Password must contain a special character.");
      }

    if (/"/.test(pword)) 
      {
        errors.push('Password cannot contain double quotes.');
      }

    if (pword.length < 8 || pword.length > 30) 
      {
        errors.push("Password must be 8 to 30 characters.");
      }

    if (uname !== "" && (pword.toLowerCase() === uname || pword.toLowerCase().includes(uname))) 
      {
        errors.push("Password cannot equal or contain the username.");
      }

    if (errors.length > 0) 
      {
        container.innerHTML = errors.map(msg => `<span class="error">${msg}</span><br>`).join("");
        document.getElementById("pword-error").innerHTML = "Please fix password rules above.";
        return false;
      } 
    else 
      {
        container.innerHTML = `<span class="pass-msg">Password looks good.</span>`;
        document.getElementById("pword-error").innerHTML = "";
        return true;
      }
  }
  // Do the passwords match?
  function confirmPword() 
    {
      const p1 = document.getElementById("password1").value;
    const p2 = document.getElementById("password2").value;

    if (p1 !== p2) 
      {
        document.getElementById("pword2-error").innerHTML =
        "Passwords do not match.";
        return false;
      } 
    else 
      {
        document.getElementById("pword2-error").innerHTML = "";
        return true;
      }
  }

  // Setting date/time formatting
  if (todaySpan || clockSpan) 
    {
      const ctDateFormatter = new Intl.DateTimeFormat("en-US", 
        {
          timeZone: "America/Chicago",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
    });

    const ctTimeFormatter = new Intl.DateTimeFormat("en-US", 
      {
        timeZone: "America/Chicago",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const updateCentralTime = () => 
      {
        const now = new Date();
        if (todaySpan) todaySpan.textContent = ctDateFormatter.format(now);
        if (clockSpan) clockSpan.textContent = ctTimeFormatter.format(now);
      };

    updateCentralTime();
    setInterval(updateCentralTime, 1000);
  }

  // 2 Sliders
  const hookSlider = (sliderId, outputId, label) => 
    {
      const slider = byId(sliderId);
      const output = byId(outputId);
    
      const render = () => 
      {
      if (slider && output) output.textContent = `${label}: ${slider.value}/10`;
      };

      if (slider && output) 
      {
      render();
      slider.addEventListener("input", render);
      }

      // reset
      return render;
    };

    const renderPain = hookSlider("range", "range-slider", "Pain Level");
    const renderDepression = hookSlider("depression", "depression-slider", "Depression Level");
    const renderStress = hookSlider("stress", "stress-slider", "Stress Level");
    const attachCharCounter = (textareaId, counterSpanId, maxChars) => 
    {
      const ta = byId(textareaId);
      if (!ta) return null;

      let counter = byId(counterSpanId);
      if (!counter) {
      counter = document.createElement("span");
      counter.id = counterSpanId;
      counter.className = "char-counter";
      ta.insertAdjacentElement("afterend", counter);

      // add spacing
      ta.insertAdjacentHTML("afterend", "<br /><br />");
    }

    const render = () => 
    {
      const remaining = maxChars - ta.value.length;
      counter.textContent = `Characters remaining: ${remaining}`;
    };

    render();
    ta.addEventListener("input", render);
    return render;
  };

  
  const renderNotes = attachCharCounter("notes", "description_text", 500);
  const renderMHNotes = attachCharCounter("mhNotes", "mh_description_text", 500);

  function validateDOB() {
  const dob = document.getElementById("dob").value.trim();
  const dobPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;

  if (!dobPattern.test(dob)) {
    document.getElementById("dob-error").innerHTML =
      "Use MM/DD/YYYY format.";
    return false;
  }
  // DOB Validation
  const parts = dob.split("/");
  const month = parseInt(parts[0], 10) - 1;
  const day = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  const dobDate = new Date(year, month, day);
  const today = new Date();
  const maxPast = new Date();
  maxPast.setFullYear(today.getFullYear() - 120);

  if (dobDate > today) {
    document.getElementById("dob-error").innerHTML =
      "Date of birth cannot be in the future.";
    return false;
  }

  if (dobDate < maxPast) {
    document.getElementById("dob-error").innerHTML =
      "Date of birth cannot be more than 120 years ago.";
    return false;
  }

  document.getElementById("dob-error").innerHTML = "";
  return true;
  }
  // SSN Validation
  function validateSSN() 
  {
    const ssn = document.getElementById("ssn").value.trim();
    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;

    if (!ssnPattern.test(ssn)) 
      {
      document.getElementById("ssn-error").innerHTML =
      "Use SSN format 123-45-6789.";
      return false;
      } 
      else 
      {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
      }   
  }

  // Added for homework 3. Submit button must now be validated by java, not html
  function showSubmitButton() 
    {
    document.getElementById("submit").style.display = "inline-block";
    }

  function hideSubmitButton() 
    {
    document.getElementById("submit").style.display = "none";
    }

  // Password check 
  const form = document.querySelector("form");
  const p1 = byId("password1");
  const p2 = byId("password2");
  const depressionSlider = byId("depression");

  if (form) 
  {
      form.addEventListener("submit", (e) => {
      if (p1 && p2 && p1.value !== p2.value) 
        {
          e.preventDefault();
          alert("Passwords do not match.");
          p2.focus();
          return;
        }

      //goes to ThankYou.html.
      if (depressionSlider && Number(depressionSlider.value) >= 8) 
        {
          window.open("MentalHealth.html", "_blank");
        }
    });

    form.addEventListener("reset", () => 
      {
        setTimeout(() => 
          {
            if (typeof renderPain === "function") renderPain();
            if (typeof renderDepression === "function") renderDepression();
            if (typeof renderStress === "function") renderStress();
            if (typeof renderNotes === "function") renderNotes();
            if (typeof renderMHNotes === "function") renderMHNotes();
          }, 0);
      });
  }

  // Review area, Clear
  
  function reviewInput() 
  {
    validateFname();
    validateMini();
    validateLname();
    validateDOB();
    validateSSN();
    validateAddress1();
    validateAddress2();
    validateCity();
    validateState();
    validateZip();
    validateEmail();
    validatePhone();
    validateUname();
    validatePword();
    confirmPword();

    const fname = document.getElementById("fname").value.trim();
    const mini = document.getElementById("middleini").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const ssn = document.getElementById("ssn").value.trim();
    const address1 = document.getElementById("address1").value.trim();
    const address2 = document.getElementById("address2").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip1").value.trim().substring(0, 5);
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone1").value.trim();
    const uname = document.getElementById("username").value.trim().toLowerCase();
    const pword = document.getElementById("password1").value;
    const pain = document.getElementById("range").value;
    const depression = document.getElementById("depression").value;
    const stress = document.getElementById("stress").value;

    let sex = "";
    const sexOptions = document.getElementsByName("psex");
    for (let i = 0; i < sexOptions.length; i++) 
    {
      if (sexOptions[i].checked) 
      {
        sex = sexOptions[i].value;
      }
    }

    const checks = [];
    const checkboxes = document.querySelectorAll('input[name="history"]:checked');
    checkboxes.forEach(box => checks.push(box.value));

    let output = `
      <table class="review-table">
        <tr><th colspan="2">PLEASE REVIEW THIS INFORMATION</th></tr>
        <tr><td class="review-label">Name</td><td>${fname} ${mini} ${lname}</td></tr>
        <tr><td class="review-label">Sex</td><td>${sex}</td></tr>
        <tr><td class="review-label">Date of Birth</td><td>${dob}</td></tr>
        <tr><td class="review-label">SSN</td><td>${ssn.replace(/\d(?=\d{4})/g, "*")}</td></tr>
        <tr><td class="review-label">Address</td><td>${address1}<br>${address2}<br>${city}, ${state} ${zip}</td></tr>
        <tr><td class="review-label">Email</td><td>${email}</td></tr>
        <tr><td class="review-label">Phone</td><td>${phone}</td></tr>
        <tr><td class="review-label">Medical History</td><td>${checks.length ? checks.join(", ") : "None selected"}</td></tr>
        <tr><td class="review-label">Pain Level</td><td>${pain}</td></tr>
        <tr><td class="review-label">Depression Level</td><td>${depression}</td></tr>
        <tr><td class="review-label">Stress Level</td><td>${stress}</td></tr>
        <tr><td class="review-label">Username</td><td>${uname}</td></tr>
        <tr><td class="review-label">Password</td><td>${"*".repeat(pword.length)}</td></tr>
      </table>
    `;

    document.getElementById("showInput").innerHTML = output;
  }

  function removeReview() 
  {
    document.getElementById("showInput").innerHTML = "";
    const pwBox = document.querySelector(".pword-message");
    if (pwBox) 
    {
      pwBox.innerHTML = "";
    }
  }

  window.reviewInput = reviewInput;
  window.removeReview = removeReview;
  window.validateFname = validateFname;
  window.validateMini = validateMini;
  window.validateLname = validateLname;
  window.validateDOB = validateDOB;
  window.validateSSN = validateSSN;
  window.validateAddress1 = validateAddress1;
  window.validateAddress2 = validateAddress2;
  window.validateCity = validateCity;
  window.validateState = validateState;
  window.validateZip = validateZip;
  window.validateEmail = validateEmail;
  window.validatePhone = validatePhone;
  window.validateUname = validateUname;
  window.validatePword = validatePword;
  window.confirmPword = confirmPword;
  window.showDepressionValue = showDepressionValue;
  window.showStressValue = showStressValue;

  window.onload = async function () 
  {
    showDepressionValue();
    showStressValue();
    await loadStates();
    checkUser();
    attachStorageListeners();

    if (getCookie("firstname") !== "") 
    {
      loadData();
    }
  };
});

if (depressionSlider && Number(depressionSlider.value) >= 8) 
  {
    const newTab = window.open("MentalHealth.html", "_blank");
    if (!newTab) {
      alert("Please allow popups so we can show your mental health resources.");
    }
  }
  
/* added this to fetch the states from local*/
async function loadStates() {
  try {
    const response = await fetch("states.txt");

    if (!response.ok) {
      throw new Error("Could not load states.");
    }

    const data = await response.text();
    document.getElementById("state").innerHTML = data;
  }
  catch (error) {
    console.log("Fetch error:", error);
  }
}

/* HOMEWORK 3 ADDED VALIDATIONS TO FIELDS */
function setError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearError(id) {
  document.getElementById(id).textContent = "";
}

function showSubmitButton() {
  document.getElementById("submit").style.display = "inline-block";
}

function hideSubmitButton() {
  document.getElementById("submit").style.display = "none";
}

function resetValidationUI() {
  const errorIds = [
    "fname-error",
    "mini-error",
    "lname-error",
    "dob-error",
    "ssn-error",
    "address1-error",
    "address2-error",
    "city-error",
    "state-error",
    "zip-error",
    "email-error",
    "phone-error",
    "sex-error",
    "history-error",
    "uname-error",
    "pword-error",
    "pword2-error"
  ];

  errorIds.forEach(clearError);

  hideSubmitButton();

  const reviewArea = document.getElementById("showInput");
  if (reviewArea) reviewArea.innerHTML = "";
}

/* HOMEWORK 3 ADDED AUTOMATIC DASH INSERT */
function formatSSN() {
  const ssnField = document.getElementById("ssn");
  let val = ssnField.value.replace(/\D/g, "").slice(0, 9);

  if (val.length > 5) {
    val = val.slice(0, 3) + "-" + val.slice(3, 5) + "-" + val.slice(5);
  } else if (val.length > 3) {
    val = val.slice(0, 3) + "-" + val.slice(3);
  }

  ssnField.value = val;
}

function formatDOB() {
  const dobField = document.getElementById("dob");
  let val = dobField.value.replace(/\D/g, "").slice(0, 8);

  if (val.length > 4) {
    val = val.slice(0, 2) + "/" + val.slice(2, 4) + "/" + val.slice(4);
  } else if (val.length > 2) {
    val = val.slice(0, 2) + "/" + val.slice(2);
  }

  dobField.value = val;
}

function validateFname() {
  const value = document.getElementById("fname").value.trim();
  const regex = /^[A-Za-z'-]{1,30}$/;

  if (value === "") {
    setError("fname-error", "First name is required.");
    return false;
  }
  if (!regex.test(value)) {
    setError("fname-error", "Use 1 to 30 letters, apostrophes, or dashes only.");
    return false;
  }

  clearError("fname-error");
  return true;
}

function validateMini() {
  const value = document.getElementById("middleini").value.trim();
  const regex = /^[A-Za-z]?$/;

  if (value === "") {
    clearError("mini-error");
    return true;
  }
  if (!regex.test(value)) {
    setError("mini-error", "Middle initial must be one letter or blank.");
    return false;
  }

  clearError("mini-error");
  return true;
}

function validateLname() {
  const value = document.getElementById("lname").value.trim();
  const regex = /^[A-Za-z'-]{1,30}$/;

  if (value === "") {
    setError("lname-error", "Last name is required.");
    return false;
  }
  if (!regex.test(value)) {
    setError("lname-error", "Use 1 to 30 letters, apostrophes, or dashes only.");
    return false;
  }

  clearError("lname-error");
  return true;
}

function validateDOB() {
  const value = document.getElementById("dob").value.trim();
  const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;

  if (value === "") {
    setError("dob-error", "Date of birth is required.");
    return false;
  }
  if (!regex.test(value)) {
    setError("dob-error", "Use MM/DD/YYYY format.");
    return false;
  }

  const [mm, dd, yyyy] = value.split("/");
  const dob = new Date(`${yyyy}-${mm}-${dd}T00:00:00`);
  const today = new Date();

  if (
    dob.getFullYear() !== Number(yyyy) ||
    dob.getMonth() + 1 !== Number(mm) ||
    dob.getDate() !== Number(dd)
  ) {
    setError("dob-error", "Enter a real calendar date.");
    return false;
  }

  if (dob > today) {
    setError("dob-error", "Date of birth cannot be in the future.");
    return false;
  }

  const oldest = new Date();
  oldest.setFullYear(today.getFullYear() - 120);

  if (dob < oldest) {
    setError("dob-error", "Date of birth cannot be more than 120 years ago.");
    return false;
  }

  clearError("dob-error");
  return true;
}

function validateSSN() {
  const value = document.getElementById("ssn").value.trim();
  const regex = /^\d{3}-\d{2}-\d{4}$/;

  if (value === "") {
    setError("ssn-error", "SSN is required.");
    return false;
  }
  if (!regex.test(value)) {
    setError("ssn-error", "Use format 123-45-6789.");
    return false;
  }

  clearError("ssn-error");
  return true;
}

function validateAddress1() {
  const value = document.getElementById("address1").value.trim();

  if (value === "") {
    setError("address1-error", "Address is required.");
    return false;
  }
  if (value.length < 2 || value.length > 30) {
    setError("address1-error", "Address must be 2 to 30 characters.");
    return false;
  }

  clearError("address1-error");
  return true;
}

function validateAddress2() {
  const value = document.getElementById("address2").value.trim();

  if (value === "") {
    clearError("address2-error");
    return true;
  }
  if (value.length < 2 || value.length > 30) {
    setError("address2-error", "Address line 2 must be 2 to 30 characters if used.");
    return false;
  }

  clearError("address2-error");
  return true;
}

function validateCity() {
  const value = document.getElementById("city").value.trim();

  if (value === "") {
    setError("city-error", "City is required.");
    return false;
  }
  if (value.length < 2 || value.length > 30) {
    setError("city-error", "City must be 2 to 30 characters.");
    return false;
  }

  clearError("city-error");
  return true;
}

function validateState() {
  const value = document.getElementById("state").value;

  if (!value) {
    setError("state-error", "Please choose a state.");
    return false;
  }

  clearError("state-error");
  return true;
}

function validateZip() {
  const field = document.getElementById("zip1");
  let value = field.value.trim();

  if (value === "") {
    setError("zip-error", "ZIP code is required.");
    return false;
  }

  const regex = /^\d{5}(-\d{4})?$/;
  if (!regex.test(value)) {
    setError("zip-error", "Use 5 digits or ZIP+4.");
    return false;
  }

  field.value = value.substring(0, 5);

  clearError("zip-error");
  return true;
}

function validateEmail() {
  const field = document.getElementById("email");
  let value = field.value.trim().toLowerCase();
  field.value = value;

  const regex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[A-Za-z]{2,}$/;

  if (value === "") {
    setError("email-error", "Email is required.");
    return false;
  }
  if (!regex.test(value)) {
    setError("email-error", "Enter a valid email like name@domain.tld.");
    return false;
  }

  clearError("email-error");
  return true;
}

function validatePhone() {
  const value = document.getElementById("phone1").value.trim();
  const regex = /^\d{3}-\d{3}-\d{4}$/;

  if (value === "") {
    setError("phone-error", "Phone number is required.");
    return false;
  }
  if (!regex.test(value)) {
    setError("phone-error", "Use format 000-000-0000.");
    return false;
  }

  clearError("phone-error");
  return true;
}

function validateSex() {
  const selected = document.querySelector('input[name="psex"]:checked');

  if (!selected) {
    setError("sex-error", "Please select a sex option.");
    return false;
  }

  clearError("sex-error");
  return true;
}

function validateHistory() {
  const checked = document.querySelectorAll('input[name="history"]:checked');

  if (checked.length === 0) {
    setError("history-error", "Please select at least one history item.");
    return false;
  }

  clearError("history-error");
  return true;
}

function validateUname() {
  const value = document.getElementById("username").value.trim();
  const regex = /^[A-Za-z][A-Za-z0-9_-]{4,19}$/;

  if (value === "") {
    setError("uname-error", "Username is required.");
    return false;
  }
  if (!regex.test(value)) {
    setError("uname-error", "5 to 20 chars, start with a letter, no spaces, only letters/numbers/_/-.");
    return false;
  }

  clearError("uname-error");
  return true;
}

function validatePword() {
  const username = document.getElementById("username").value.trim();
  const value = document.getElementById("password1").value;
  const msgBox = document.querySelector(".pword-message");

  if (value === "") {
    setError("pword-error", "Password is required.");
    if (msgBox) msgBox.textContent = "";
    return false;
  }
  if (value.length < 8 || value.length > 30) {
    setError("pword-error", "Password must be 8 to 30 characters.");
    if (msgBox) msgBox.textContent = "";
    return false;
  }
  if (!/[a-z]/.test(value)) {
    setError("pword-error", "Password must contain a lowercase letter.");
    if (msgBox) msgBox.textContent = "";
    return false;
  }
  if (!/[A-Z]/.test(value)) {
    setError("pword-error", "Password must contain an uppercase letter.");
    if (msgBox) msgBox.textContent = "";
    return false;
  }
  if (!/[0-9]/.test(value)) {
    setError("pword-error", "Password must contain a number.");
    if (msgBox) msgBox.textContent = "";
    return false;
  }
  if (!/[!@#%^&*()\-_=+\\/<>.,`~?$]/.test(value)) {
    setError("pword-error", "Password must contain a special character.");
    if (msgBox) msgBox.textContent = "";
    return false;
  }
  if (username !== "" && value === username) {
    setError("pword-error", "Password cannot match the username.");
    if (msgBox) msgBox.textContent = "";
    return false;
  }

  clearError("pword-error");
  if (msgBox) msgBox.textContent = "Strong password.";
  return true;
}

function confirmPword() {
  const p1 = document.getElementById("password1").value;
  const p2 = document.getElementById("password2").value;

  if (p2 === "") {
    setError("pword2-error", "Please re-enter your password.");
    return false;
  }
  if (p1 !== p2) {
    setError("pword2-error", "Passwords do not match.");
    return false;
  }

  clearError("pword2-error");
  return true;
}


function validateForm() {
  const results = [
    validateFname(),
    validateMini(),
    validateLname(),
    validateDOB(),
    validateSSN(),
    validateAddress1(),
    validateAddress2(),
    validateCity(),
    validateState(),
    validateZip(),
    validateEmail(),
    validatePhone(),
    validateSex(),
    validateHistory(),
    validateUname(),
    validatePword(),
    confirmPword()
  ];

  const allValid = results.every(result => result === true);

  if (allValid) {
    saveUserCookie();
    showSubmitButton();
    alert("All fields look good. You may now submit the form.");
  } else {
    hideSubmitButton();
    alert("Please correct the highlighted errors before submitting.");
  }

  return allValid;
}

function validateHistory() {
  const checked = document.querySelectorAll('input[name="history"]:checked');

  if (checked.length === 0) {
    document.getElementById("history-error").textContent = "Select at least one option.";
    return false;
  }

  document.getElementById("history-error").textContent = "";
  return true;
}

/* PREVENTS SUBMISSION UNLESS SUCCESSFUL VALIDATION */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup");

  if (form) {
    form.addEventListener("submit", function (event) {
      if (!validateForm()) {
        event.preventDefault();
      }
    });
  }
});

/* ADDED a ton of new code for Cookies for assignment 4 */

// Standard cookie helpers
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cookieName = name + "=";
  const decoded = decodeURIComponent(document.cookie);
  const parts = decoded.split(";");
  for (let i = 0; i < parts.length; i++) {
    let c = parts[i].trim();
    if (c.indexOf(cookieName) === 0) {
      return c.substring(cookieName.length);
    }
  }
  return "";
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function checkUser() {
  const fname = getCookie("firstname");
  const welcomeMsg = document.getElementById("welcomeMessage");
  const newUserSection = document.getElementById("newUserSection");
  const fnameField = document.getElementById("fname");

  if (fname !== "") {
    welcomeMsg.innerHTML = "Welcome back, " + fname + "!";
    newUserSection.innerHTML =
      '<label><input type="checkbox" id="notMe" onclick="startNewUser()" /> ' +
      'Not ' + fname + '? Click here to start as a new user.</label>';
    if (fnameField) {
      fnameField.value = fname;
    }
  } else {
    welcomeMsg.innerHTML = "Hello new user!";
    newUserSection.innerHTML = "";
  }
}

function startNewUser() {
  deleteCookie("firstname");
  localStorage.clear();
  const form = document.getElementById("signup");
  if (form) form.reset();
  location.reload();
}

function saveUserCookie() {
  const remember = document.getElementById("rememberMe");
  const fnameField = document.getElementById("fname");
  if (!remember || !fnameField) return;

  const fname = fnameField.value.trim();
  if (remember.checked && fname !== "") {
    setCookie("firstname", fname, 2); // 2 days = 48 hours
  } else if (!remember.checked) {
    deleteCookie("firstname");
    localStorage.clear();
  }
}

function rememberMeChanged() {
  saveUserCookie();
  checkUser();
}

/* Saves all non-secure fields to local storage */

const STORAGE_FIELDS = [
  "fname", "middleini", "lname", "dob",
  "address1", "address2", "city", "state", "zip1",
  "email", "phone1", "username",
  "notes", "range", "depression", "stress"
];

function saveField(id) {
  const el = document.getElementById(id);
  if (el) {
    localStorage.setItem("rrc_" + id, el.value);
  }
}

function saveRadioGroup(name) {
  const selected = document.querySelector('input[name="' + name + '"]:checked');
  localStorage.setItem("rrc_" + name, selected ? selected.value : "");
}

function saveCheckGroup(name) {
  const checked = document.querySelectorAll('input[name="' + name + '"]:checked');
  const values = [];
  checked.forEach(c => values.push(c.value));
  localStorage.setItem("rrc_" + name, values.join(","));
}

function loadData() {
  STORAGE_FIELDS.forEach(id => {
    const saved = localStorage.getItem("rrc_" + id);
    const el = document.getElementById(id);
    if (saved !== null && el) {
      el.value = saved;
    }
  });

  const sex = localStorage.getItem("rrc_psex");
  if (sex) {
    const radio = document.querySelector('input[name="psex"][value="' + sex + '"]');
    if (radio) radio.checked = true;
  }

  const hist = localStorage.getItem("rrc_history");
  if (hist) {
    hist.split(",").forEach(value => {
      if (!value) return;
      const box = document.querySelector('input[name="history"][value="' + value + '"]');
      if (box) box.checked = true;
    });
  }

  if (typeof showDepressionValue === "function") showDepressionValue();
  if (typeof showStressValue === "function") showStressValue();
  const painSlider = document.getElementById("range");
  const painOut = document.getElementById("range-slider");
  if (painSlider && painOut) painOut.textContent = "Pain Level: " + painSlider.value + "/10";
}

function attachStorageListeners() {
  STORAGE_FIELDS.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.type === "range") {
      el.addEventListener("input", () => saveField(id));
    } else {
      el.addEventListener("blur", () => saveField(id));
      el.addEventListener("change", () => saveField(id));
    }
  });

  document.querySelectorAll('input[name="psex"]').forEach(r => {
    r.addEventListener("click", () => saveRadioGroup("psex"));
  });

  document.querySelectorAll('input[name="history"]').forEach(c => {
    c.addEventListener("click", () => saveCheckGroup("history"));
  });
}
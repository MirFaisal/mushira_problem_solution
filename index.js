// problem 1
function cashOut(amount) {
  const cashOutChargeRate = 1.75;
  if (typeof amount === "number" && amount >= 0) {
    return (amount * cashOutChargeRate) / 100;
  } else {
    return "Invalid";
  }
}

// problem 2
function validEmail(email) {
  if (typeof email === "string") {
    if (
      email.charAt(0).includes(".") ||
      email.charAt(0).includes("-") ||
      email.charAt(0).includes("_") ||
      email.charAt(0).includes("@") ||
      email.charAt(0).includes("+")
    ) {
      return false;
    }

    if (!email.includes("@")) {
      return false;
    }
    if (!email.endsWith(".com")) {
      return false;
    }
    return true;
  } else {
    return "Invalid";
  }
}

// problem 3
function electionResult(votes) {
  if (Array.isArray(votes)) {
    let mango = 0;
    let banana = 0;

    for (let i = 0; i < votes.length; i++) {
      if (votes[i] === "mango") {
        mango++;
      } else if (votes[i] === "banana") {
        banana++;
      }
    }

    if (mango > banana) {
      return "Mango";
    } else if (banana > mango) {
      return "Banana";
    } else {
      return "Draw";
    }
  } else {
    return "Invalid";
  }
}

// problem 4

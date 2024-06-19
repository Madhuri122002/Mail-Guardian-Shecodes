console.log("Mail Guardian content script loaded.");

function detectPhishing() {
  const emailSelectors = ['.a3s', '.ii.gt']; // Specific selectors used in Gmail for email content
  let emailText = '';
  let isEmailPage = false;

  emailSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      isEmailPage = true;
      elements.forEach(element => {
        emailText += element.innerText + ' ';
      });
    }
  });

  if (!isEmailPage) {
    return "This is not an email page.";
  }

  const phishingWords = [
    'win', 'free', 'prize', 'click here', 'urgent', 'congratulations',
    'lottery', 'cash', 'winner', 'exclusive', 'offer', 'buy now',
    'limited time', 'act now', 'discount', 'no cost', 'risk-free',
    'promise', 'guarantee', 'trial', 'investment', 'urgent'
  ];

  let phishingScore = 0;

  phishingWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    if (regex.test(emailText)) {
      phishingScore += 1;
    }
  });

  // Set a threshold for phishing determination
  const phishingThreshold = 3;

  if (phishingScore >= phishingThreshold) {
    return "This email might be phishing!";
  } else {
    return "This email looks safe.";
  }
}

// Make the function accessible from popup.js
window.detectPhishing = detectPhishing;

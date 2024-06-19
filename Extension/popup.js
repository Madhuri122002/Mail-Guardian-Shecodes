// document.getElementById('checkPhishing').addEventListener('click', () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     if (chrome.runtime.lastError || !tabs.length) {
//       console.error(chrome.runtime.lastError || "No active tab found.");
//       return;
//     }

//     const tab = tabs[0];
//     const emailDomains = ['mail.google.com', 'outlook.live.com', 'mail.yahoo.com'];

//     if (emailDomains.some(domain => tab.url.includes(domain))) {
//       chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         func: detectPhishing
//       }).then((results) => {
//         const resultElement = document.getElementById('result');
//         if (results && results[0] && results[0].result) {
//           const isPhishing = results[0].result.includes("phishing");
//           resultElement.textContent = results[0].result;
//           if (isPhishing) {
//             resultElement.style.backgroundColor = 'red';
//             resultElement.style.color = 'white';
//           } else if (results[0].result === "This is not an email page.") {
//             resultElement.style.backgroundColor = '';
//             resultElement.style.color = '';
//           } else {
//             resultElement.style.backgroundColor = 'green';
//             resultElement.style.color = 'white';
//           }
//         } else {
//           resultElement.textContent = 'Unable to determine phishing status.';
//         }
//       }).catch((err) => {
//         console.error('Error executing script:', err);
//       });
//     } else {
//       document.getElementById('result').textContent = 'This is not an email page.';
//     }
//   });
// });

// function detectPhishing() {
//   const emailSelectors = ['.a3s', '.ii.gt']; // Specific selectors used in Gmail for email content
//   let emailText = '';
//   let isEmailPage = false;

//   emailSelectors.forEach(selector => {
//     const elements = document.querySelectorAll(selector);
//     if (elements.length > 0) {
//       isEmailPage = true;
//       elements.forEach(element => {
//         emailText += element.innerText + ' ';
//       });
//     }
//   });

//   if (!isEmailPage) {
//     return "This is not an email page.";
//   }

//   const phishingWords = [
//     'win', 'free', 'prize', 'click here', 'urgent', 'congratulations',
//     'lottery', 'cash', 'winner', 'exclusive', 'offer', 'buy now',
//     'limited time', 'act now', 'discount', 'no cost', 'risk-free',
//     'promise', 'guarantee', 'trial', 'investment', 'urgent'
//   ];

//   let phishingScore = 0;

//   phishingWords.forEach(word => {
//     const regex = new RegExp(`\\b${word}\\b`, 'i');
//     if (regex.test(emailText)) {
//       phishingScore += 1;
//     }
//   });

//   // Set a threshold for phishing determination
//   const phishingThreshold = 3;

//   if (phishingScore >= phishingThreshold) {
//     return "This email might be phishing!";
//   } else {
//     return "This email looks safe.";
//   }
// }

// document.getElementById('checkPhishing').addEventListener('click', () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     if (chrome.runtime.lastError || !tabs.length) {
//       console.error(chrome.runtime.lastError || "No active tab found.");
//       return;
//     }

//     const tab = tabs[0];
//     const emailDomains = ['mail.google.com', 'outlook.live.com', 'mail.yahoo.com'];

//     if (emailDomains.some(domain => tab.url.includes(domain))) {
//       chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         func: detectPhishing
//       }).then((results) => {
//         const resultElement = document.getElementById('result');
//         const chatbotButton = document.getElementById('chatbot');
//         if (results && results[0] && results[0].result) {
//           const isPhishing = results[0].result.includes("phishing");
//           resultElement.textContent = results[0].result;
//           if (isPhishing) {
//             resultElement.style.backgroundColor = 'red';
//             resultElement.style.color = 'white';
//           } else if (results[0].result === "This is not an email page.") {
//             resultElement.style.backgroundColor = '';
//             resultElement.style.color = '';
//           } else {
//             resultElement.style.backgroundColor = 'green';
//             resultElement.style.color = 'white';
//           }
//         } else {
//           resultElement.textContent = 'Unable to determine phishing status.';
//         }
//         chatbotButton.style.display = 'block'; // Show chatbot button
//       }).catch((err) => {
//         console.error('Error executing script:', err);
//       });
//     } else {
//       document.getElementById('result').textContent = 'This is not an email page.';
//     }
//   });
// });

// function detectPhishing() {
//   const emailSelectors = ['.a3s', '.ii.gt']; // Specific selectors used in Gmail for email content
//   let emailText = '';
//   let isEmailPage = false;

//   emailSelectors.forEach(selector => {
//     const elements = document.querySelectorAll(selector);
//     if (elements.length > 0) {
//       isEmailPage = true;
//       elements.forEach(element => {
//         emailText += element.innerText + ' ';
//       });
//     }
//   });

//   if (!isEmailPage) {
//     return "This is not an email page.";
//   }

//   const phishingWords = [
//     'win', 'free', 'prize', 'click here', 'urgent', 'congratulations',
//     'lottery', 'cash', 'winner', 'exclusive', 'offer', 'buy now',
//     'limited time', 'act now', 'discount', 'no cost', 'risk-free',
//     'promise', 'guarantee', 'trial', 'investment', 'urgent'
//   ];

//   let phishingScore = 0;

//   phishingWords.forEach(word => {
//     const regex = new RegExp(`\\b${word}\\b`, 'i');
//     if (regex.test(emailText)) {
//       phishingScore += 1;
//     }
//   });

//   // Set a threshold for phishing determination
//   const phishingThreshold = 3;

//   if (phishingScore >= phishingThreshold) {
//     return "This email might be phishing!";
//   } else {
//     return "This email looks safe.";
//   }
// }


document.getElementById('checkPhishing').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (chrome.runtime.lastError || !tabs.length) {
      console.error(chrome.runtime.lastError || "No active tab found.");
      return;
    }

    const tab = tabs[0];
    const emailDomains = ['mail.google.com', 'outlook.live.com', 'mail.yahoo.com'];

    if (emailDomains.some(domain => tab.url.includes(domain))) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: detectPhishing
      }).then((results) => {
        const resultElement = document.getElementById('result');
        const chatbotButton = document.getElementById('chatbot');
        if (results && results[0] && results[0].result) {
          const isPhishing = results[0].result.includes("phishing");
          resultElement.textContent = results[0].result;
          if (isPhishing) {
            resultElement.style.backgroundColor = 'red';
            resultElement.style.color = 'white';
          } else if (results[0].result === "This is not an email page.") {
            resultElement.style.backgroundColor = '';
            resultElement.style.color = '';
          } else {
            resultElement.style.backgroundColor = 'green';
            resultElement.style.color = 'white';
          }
        } else {
          resultElement.textContent = 'Unable to determine phishing status.';
        }
        chatbotButton.hidden = false; // Show chatbot button
        chatbotButton.style.display = 'flex'; // Ensure it's displayed as a flex item

        // Automatically read out the result
        const resultText = resultElement.textContent;
        const utterance = new SpeechSynthesisUtterance(resultText);
        speechSynthesis.speak(utterance);
      }).catch((err) => {
        console.error('Error executing script:', err);
      });
    } else {
      document.getElementById('result').textContent = 'This is not an email page.';
    }
  });
});

document.getElementById('chatbot').addEventListener('click', () => {
  const resultText = document.getElementById('result').textContent;
  const utterance = new SpeechSynthesisUtterance(resultText);
  speechSynthesis.speak(utterance);
});

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
    'promise', 'guarantee', 'trial', 'investment', 'urgent',
    'viagra', 'cialis', 'pharmacy', 'online pharmacy', 'prescription', 'medication',
    'free', 'offer', 'earn', 'income', 'money', 'cash', 'guarantee', 'cheap',
    'credit', 'loan', 'debt', 'mortgage', 'finance', 'investment', 'bank', 'interest',
    'winner', 'prize', 'congratulations', 'lottery', 'winning', 'cash prize', 'free gift',
    'million', 'billion', 'trillion', 'urgent', 'immediate', 'act now', 'limited time',
    'exclusive', 'secret', 'hidden', 'miracle', 'magic', 'weight loss', 'diet', 'fat',
    'exercise', 'fitness', 'bodybuilding', 'enhancement', 'enlargement', 'replica',
    'luxury', 'watch', 'rolex', 'prada', 'designer', 'discount', 'sale', 'clearance',
    'work from home', 'home based', 'online marketing', 'mlm', 'multi-level marketing',
    'earn money', 'extra income', 'fast cash', 'no cost', 'risk-free', 'unsecured',
    'credit card', 'tracking', 'dollar', 'profit', 'guaranteed', 'save big money',
    'mortgage rates', 'lower rates', 'refinance', 'prevent', 'lose', 'weight', 'pounds',
    'click below', 'below market', 'shopper', 'order', 'direct email', 'bulk email', 'ad',
    'visit our website', "alert", "authenticate", "blocked", "breach", "click", "confirm",
    "credentials", "download", "error", "expired", "failure", "hack", "install",
    "invoice", "login", "malicious", "malware", "notification", "password", "phish",
    "reactivate", "refund", "risk", "secure", "security", "sign-in", "suspended",
    "threat", "trojan", "unauthorized", "unusual", "update", "verify", "virus",
    "warning", "account", "activation", "attachment", "compromise", "confidential",
    "danger", "deactivate", "deceptive", "encryption", "exploit", "fake", "fraud",
    "hijack", "identity", "infected", "keylogger", "link", "locked", "overdue",
    "payment", "phishing", "prompt", "protection", "reset", "reward", "scam",
    "sensitive", "server", "service", "spam", "spyware", "ssn", "steal",
    "subscription", "suspicious", "transaction", "unverified", "webmail", "win",
    "wire", "attempt", "block", "card"
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

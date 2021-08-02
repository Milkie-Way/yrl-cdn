const setCookie = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const y = urlParams.get("yrl_y");
  const d = new Date().getTime() + 1000 * 60 * 60 * 24 * 7;
  const expires = "expires=" + new Date(d).toUTCString();
  const parentDomain = window.location.hostname;
  if (y)
    document.cookie = `__yrl_referral=${y};domain=${parentDomain};` + expires;
};

setCookie();
const staging_yrl_conversion = (content = {}) => {
  console.log("Recording YRL Conversion in Staging Env");

  let cookies = decodeURIComponent(document.cookie).split(";");
  let refId = "";
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf("__yrl_referral=") === 0) {
      refId = c.substring("__yrl_referral=".length, c.length);
    }
  }

  return new Promise(async (resolve, reject) => {
    try {
      const rawResponse = await fetch(`https://staging.yrl.is/conversion/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ yrl: refId, content: content }),
      });
      const resp = await rawResponse.json();
      document.cookie = `__yrl_referral=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
      resolve("success");
    } catch (err) {
      console.log("something went wrong: ", err);
      reject("There is an error.");
    }
  });
};

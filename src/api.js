// api.js
export async function fetchScreenData(userid, screenid, devmode = 0) {
    const apiServer = devmode === 1 ? "https://dev.api.gmod-lsm.com/v2/" : "https://api.gmod-lsm.com/v2/";
    const response = await fetch(`${apiServer}screenGetLive.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ screen: screenid, user: userid }),
      credentials: 'include'
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await response.json();
    return data;
  }
  

async function fetchData() {
    const url = 'http://127.0.0.1:8000/api/categories'; // Ensure correct URL format
    const apiKey = 'WG6wpbrT.zWp1Cxy1bqHEL2bf93yZ2cm8hu3fUVu1'; // Replace with your actual API key

    try {
        console.log(`Fetching data from: ${url}`); // Log the URL for debugging

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function
fetchData();

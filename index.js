const https = require('https');

const fetchUserActivity = (username) => {
    const url = `https://api.github.com/users/${username}/events`;
    const options = {
        headers: {
            'User-Agent': 'Node.js'
        }
    };

    https.get(url, options, (res) => {
        let data = '';

        // Received chunk of data
        res.on('data', (chunk) => {
            data += chunk;
        });

        // When whole data is received
        res.on('end', () => {
            if (res.statusCode === 200) {
                const events = JSON.parse(data);
                console.log('Recent activities:');
                
                // Check if events are received
                if (events.length === 0) {
                    console.log("No recent activity found for this user");
                } else {
                    events.forEach((event) => {
                        let output = '';
                        switch (event.type) {
                            case 'PushEvent':
                                output = `Pushed ${event.payload.size} commits to ${event.repo.name}`;
                                break;
                            case 'WatchEvent':
                                output = `Starred ${event.repo.name}`;
                                break;
                            case 'IssuesEvent':
                                output = `Opened a new issue in ${event.repo.name}`;
                                break;
                            default:
                                output = `Performed action in ${event.repo.name}`;
                        }
                        console.log(output);
                    });
                }
            } else {
                console.log(`ERROR: Unable to fetch the user activity (Status Code: ${res.statusCode})`);
            }
        });
    }).on('error', (err) => {
        console.error('Error:', err.message);
    });
};

// Example usage
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("ERROR: Enter the username");
    process.exit(1);
}
const username = args[0];
console.log(`Fetching activity for username: ${username}`);
fetchUserActivity(username);

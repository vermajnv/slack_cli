const axios = require('axios');

module.exports = class SlackLib {
    constructor()
    {
        // An access token (from your Slack app or custom integration - xoxp, xoxb)
        this.token = process.env.SLACK_TOKEN;
    }
    
    // Send message using Slack web API
    
    async publishMessage(channel, message) {
        console.log(`Sending... : ${message} on channel : ${channel}`);
        const url = 'https://slack.com/api/chat.postMessage';
        try {
            const res = await axios.post(url, {
              channel: '#' + channel,
              text: message,
              as_user : true,
              username : 'vermajnv'
            }, 
            { 
                headers: 
                { 
                    authorization: `Bearer ${this.token}` 
                } 
            });
            return (res.data.ok) ? 'Message sent successfully.' : res.data;
        } 
        catch (error) {
            console.log(error);
        }
    }
}
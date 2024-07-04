const NodeHelper = require("node_helper");
const fetch = require("node-fetch");

module.exports = NodeHelper.create({
    start: function() {
        console.log("Starting node_helper for module: " + this.name);
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "FETCH_DATA") {
            this.fetchData();
        }
    },

    fetchData: function() {
        Promise.all([
            fetch("https://hourlypricing.comed.com/api?type=5minutefeed").then(res => res.json()),
        ])
        .then((results) => {
            const currentPrice = parseFloat(results[0][0].price);
            const lastPrice = parseFloat(results[0][1].price);
            this.sendSocketNotification("DATA_FETCHED", { currentPrice, lastPrice });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }
});

Module.register("MMM-ComEdPricing", {
    defaults: {
        updateInterval: 300000, // 5 minutes
    },

    getStyles: function() {
        return ["MMM-ComEdPricing.css"];
    },

    start: function() {
        this.currentPrice = null;
        this.lastPrice = null;
        this.sendSocketNotification("FETCH_DATA");
        setInterval(() => {
            this.sendSocketNotification("FETCH_DATA");
        }, this.config.updateInterval);
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "DATA_FETCHED") {
            this.lastPrice = this.currentPrice;
            this.currentPrice = payload.currentPrice;
            this.updateDom();
        }
    },

    getDom: function() {
        let wrapper = document.createElement("div");
        if (this.currentPrice !== null) {
            let priceElement = document.createElement("div");
            priceElement.innerHTML = `Current Price: ${this.currentPrice}¢/kWh`;

            let arrowElement = document.createElement("div");
            if (this.lastPrice !== null) {
                if (this.currentPrice > this.lastPrice) {
                    arrowElement.innerHTML = "&#9650;"; // Up arrow
                    arrowElement.style.color = "green";
                } else if (this.currentPrice < this.lastPrice) {
                    arrowElement.innerHTML = "&#9660;"; // Down arrow
                    arrowElement.style.color = "red";
                } else {
                    arrowElement.innerHTML = "&#9654;"; // Right arrow
                    arrowElement.style.color = "gray";
                }
            }

            wrapper.appendChild(priceElement);
            wrapper.appendChild(arrowElement);
        } else {
            wrapper.innerHTML = "Loading...";
        }
        return wrapper;
    }
});

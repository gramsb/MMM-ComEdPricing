### MMM-ComEdPricing

The MMM-ComEdPricing module is designed for [MagicMirror²](https://github.com/MichMich/MagicMirror) to display the current hourly average and 5 minute pricing for ComEd. 

![image](https://github.com/skruglov2023/MMM-ComEdPricing/assets/55259393/2a364512-3840-440f-a60d-c9e5a4f4b9c2)

## Installation

1. Navigate to your MagicMirror's `modules` directory.
2. Clone this repository:
   ```sh
   git clone https://github.com/skruglov2023/MMM-ComEdPricing/
   ```

## Configuration

To use this module, add it to the modules array in the `config/config.js` file of your MagicMirror:

```
{
    module: "MMM-ComEdPricing",
    position: "top_right",
    config: {
        updateInterval: 300000 // 5 minutes
    }
}
```

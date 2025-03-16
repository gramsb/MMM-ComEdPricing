### MMM-ComEdPricing

The MMM-ComEdPricing module is designed for [MagicMirror²](https://github.com/MichMich/MagicMirror) to display the current hourly average and 5 minute pricing for ComEd. 

![image](https://github.com/user-attachments/assets/a0352b03-68c8-4dab-bec5-bcb729ced430)


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

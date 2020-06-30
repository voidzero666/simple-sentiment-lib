# simple-sentiment-lib
Ultra simple NodeJS Sentiment text analyzer based on afinn.

##Usage:
```javascript
const analyse = require("simple-sentiment-lib");

const exampleData = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit good great bad ";

var result = analyse(exampleData);

console.dir(result);
```

##Result:
```javascript
{
  score: 3,
  comparative: 0.2727272727272727,
  positive: {
    score: 6,
    comparative: 0.5454545454545454,
    words: [ 'good', 'great' ]
  },
  negative: { score: 3, comparative: 0.2727272727272727, words: [ 'bad' ] }
}
```

Credits:

https://github.com/voidzero-development

https://github.com/marc0tjevp


<a href="https://www.buymeacoffee.com/VoidZero1337" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>




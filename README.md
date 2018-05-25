[![Build Status](https://travis-ci.org/HackRegina/techmap.svg?branch=master)](https://travis-ci.org/HackRegina/techmap)

# HackRegina Tech Map

A map of Regina's tech companies and the technologies they use. 

Check it out here: https://hackregina.github.io/techmap/#/

#### Adding your company to the list

Just add your company to the file `src/assets/data.json` and create a pull request. We will do the rest! 

Listings should be in the following format: 

```
{
    "id": "vivvo", 
    "name": "Vivvo Application Studios", 
    "website": "http://www.vivvo.com/",
    "address": "300A - 2221 Cornwall Street, Regina, SK., S4P 2L1",
    "lat": 50.443612,
    "lng": -104.611938,
    "technology": [
      "AngularJs",
      "Angular",
      "Java",
      "Go",
      "Node.js"
    ]
  }
```

### For companies that are sponsoring HackRegina include the sponsorship tag and level below the "lng": value pair such as:
```
{
    "id": "vivvo", 
    "name": "Vivvo Application Studios", 
    "website": "http://www.vivvo.com/",
    "address": "300A - 2221 Cornwall Street, Regina, SK., S4P 2L1",
    "lat": 50.443612,
    "lng": -104.611938,
    "sponsorship": "platinum",
    "technology": [
      "AngularJs",
      "Angular",
      "Java",
      "Go",
      "Node.js"
    ]
  }
```

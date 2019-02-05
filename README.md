[![Build Status](https://travis-ci.org/HackRegina/techmap.svg?branch=master)](https://travis-ci.org/HackRegina/techmap)

# HackRegina Tech Map

A map of Regina's tech companies and the technologies they use.

Check it out here: https://hackregina.github.io/techmap/#/

## Contribute

We highly encourage learning new technology and process including contributing to open source software.  We understand that not everyone will have the skill set but we would love to teach you a new skill. Below we have provided instructions to contribute to this private repository.

#### Fork the repository

Forking a repository is a simple two-step process. We've created a repository for you to practice with!

1. On GitHub, navigate to the [HackRegina/techmap](https://github.com/HackRegina/techmap) repository.
2. In the top-right corner of the page, click Fork.

That's it! Now, you have a fork of the original HackRegina/techmap repository. [Read more on forking here](https://help.github.com/articles/fork-a-repo/).

#### Adding your company to the list

Just add your company to the file [`src/assets/data.json`](src/assets/data.json). You can find out your `lat` and `lng` using [Google Maps](http://maps.google.com/) or [another website](https://www.latlong.net/convert-address-to-lat-long.html). Listings should be in the following format:

```
{
    "id": "hackregina",
    "name": "HackRegina",
    "website": "https://hackregina.github.io",
    "address": "5 Asgar Walk, Regina, SK S4S 6W4",
    "lat": 50.415184,
    "lng": -104.590244,
    "technology": [
      "AngularJs",
      "Angular",
      "Node.js"
    ]
  }
```

For companies that are sponsoring HackRegina include the sponsorship tag and level below the `lng`: value pair such as:
```
{
    "id": "hackregina",
    "name": "HackRegina",
    "website": "https://hackregina.github.io",
    "address": "5 Asgar Walk, Regina, SK S4S 6W4",
    "lat": 50.415184,
    "lng": -104.590244,
    "sponsorship": "platinum",
    "technology": [
      "AngularJs",
      "Angular",
      "Node.js"
    ]
  }
```

#### Create a Pull Request

You can open a pull request to the upstream repository from any branch or commit in your fork.

1. Navigate to the original repository you created your fork from.
2. To the right of the Branch menu, click New pull request.
3. On the Compare page, click compare across forks.
4. Confirm that the base fork is the repository you'd like to merge changes into. Use the base branch drop-down menu to select the branch of the upstream repository you'd like to merge changes into.
5. Drop-down menus for choosing the head fork and compare branch. Use the head fork drop-down menu to select your fork, then use the compare branch drop-down menu to select the branch you made your changes in.
6. Type a title and description for your pull request.
7. If you do not want to allow anyone with push access to the upstream repository to make changes to your PR, unselect Allow edits from maintainers.
8. Click Create pull request.

[Read more on creating a pull request from a fork here](https://help.github.com/articles/creating-a-pull-request-from-a-fork/).

#### We will do the rest!

Great work! Now you have gain the basic skills needed to contribute to open source software. We'll take it from here and merge the changes in.

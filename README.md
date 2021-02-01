# Work Intitiative and Entrepenuership Web App Code


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need the following properly installed on your computer.

- [Git](http://git-scm.com/)
- [Node](http://nodejs.org/)
- [NVM](https://github.com/creationix/nvm)
- [Gatsby](https://www.gatsbyjs.org/)

## Installing

In a terminal window run these commands.

```sh
$ git clone https://github.com/wiecare/wie-care.git
$ cd wie-care
$ nvm install
$ yarn
$ yarn develop
```

You should be able to view the website locally at `http://localhost:8000/`.

### Enabling and Running the Blog - NOT AVAILABLE AT THE MOMENT

**The blog is disabled by default. Please reach out in the `#product` channel in slack to request api keys.**

```sh
$ git clone ttps://github.com/wiecare/wie-care.git
$ cd wie-care
$ nvm install
$ yarn enable:blog
```
> **Your package.json and node modules will be updated automatically.**

### Create a new `.env` file in the root of your project

```sh
$ touch .env
```

### Add necessary api keys to your new `.env` file.

> **Reference the .env.example file for available keys.**

```sh
$ yarn develop
```

You should be able to view the website locally at `http://localhost:8000/`.

<details>
<summary>If you get an error on start up</summary>
<br>

```
1. Validate you ran yarn enable:blog
2. Check that your keys are correct
3. If you still are facing issues reach out in the #product channel in slack
```
</details>

### Once you have completed your edits please run the following command

```sh
$ yarn disable:blog
```

> **This will remove the modules needed to run the blog and clean up the lock file. Commit your changes as normal.**

> If you are seeing a ghooks error in the console when committing and pushing your code run `node ./scripts/remove-git-hooks.js` in the terminal.

<!-- ## Tests -->

## Testing

In a terminal window run these commands to install jest globally and run the jest test suite.

```sh
$ cd wie-care
$ yarn test
```

<details>
<summary>If you get a Watchman Error/Warning</summary>
<br>

```sh
~ watchman shutdown-server
~ brew update
~ brew reinstall watchman
```
</details>

<br>

In a terminal window run these commands to run the jest test suite in watch mode.

```sh
$ cd wie-care
$ yarn test:watch
```
<details>
<summary>The following options are available when running watch mode</summary>
<br>

<p align=center>
  <img src=./.github/jest-options.png alt="Jest Options" />
</p>
</details>

In a terminal window run these commands to view the jest coverage report.

```sh
$ cd wie-care
$ yarn test:coverage
$ yarn view:coverage
```

In a terminal window run these commands if you need to update a snapshot.

```sh
$ cd wie-care
$ yarn test --updateSnapshot
```

<!-- ## Deployment -->

## License

This project is licensed under the MIT License - please see [license](https://github.com/wiecare/wie-care/blob/master/LICENSE) for more details.

<!-- ## Acknowledgements -->

## Roadmap

Please checkout our [roadmap](https://github.com/wiecare/wie-care/blob/update/README/roadmap.md) for details of upcoming features.

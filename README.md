# BusinessCard

## Table of contents

- [General info](#general-info)

* [Technologies](#technologies)

* [Setup](#setup)

* [Contributor](#contributor)

* [License](#license)

## General info

This package purpose is only to provide social links from myself

## Technologies

This project is build with:

- node.js
- npm

## Setup

To run this project, make sure you have the latest version of node.js and npm installed :

```
$ npm install -g npm@latest
```

By adding the n module, you can interactively manage Node.js versions.

1. First, clear the npm cache:

```
$ npm cache clean -f
```

2. Install n, Node’s version manager:

```
$ npm install -g n
```

3. With the n module installed, you can use it to:

- Install the latest stable version:

```
$ sudo n stable
```

Note: Some Ubuntu distros may respond with the command not found output after running the n command. To fix this issue run sudo -E env "PATH=$PATH" [command]. For example, to install the latest stable version, as in the example above, you would run sudo -E env "PATH=$PATH" n stable.

- Install the latest release:

```
$ sudo n latest
```

- Install a specific version:

```
$ sudo n [version.number]
```

Then you can try the package there :

```
$ npx rkcard
```

## Contributor

- Kezzou Raphael

1. [My mail](mailto:raphael.kezzou@live.fr)
2. [My github](https://github.com/KezzouRaphael)

## License

This project is under the [MIT license](./LICENSE)

[Back to top](#)

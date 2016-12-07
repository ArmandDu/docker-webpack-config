# Docker + Webpack config

sample config for node + react app, all in docker, ready for dev and production

## install

### the add remote way:

with [HUB](https://hub.github.com/) :
```Shell
cd my/git/repo/
git init #if not already done
git remote add config ArmandDu/docker-webpack-config
git pull config master
```

with git:
```Shell
cd my/git/repo/
git init #if not already done
git remote add config https://github.com/ArmandDu/docker-webpack-config.git
git pull config master
```

### the cloning way:

with [HUB](https://hub.github.com/) :
```Shell
git clone ArmandDu/docker-webpack-config
```

with git:
```Shell
git clone https://github.com/ArmandDu/docker-webpack-config.git
```

## Setup

By default, this configuration won't start anything. You'll be required to add (or remove from configuration) the missing pieces of the puzzle.
Such as the `.env` files, you `package.json` and dependencies in `client/` and `server/`, 


### services

By default, docker-compose will build and start 2 images:

- your web-app located in client/
- you api located in server/

You can remove or update them as you wish, follow the [docker-compose documentation](https://docs.docker.com/compose/compose-file/)


### env_file
By default the config will ask for 3 .env files

- one in the root folder
- one in client/ folder
- one in server/ folder

You can either provide them all or disable what you want (by removing the entry in the docker-compose.yml and docker-compose.production.yml)

## Usage

### Development

In development, You can run this command to start the everything in dev mode: 
```Shell
docker-compose up -d
```



### Production (coming soon)

In production, you have to use the `docker-compse.production.yml` file, it will build the new docker images with production code
```Shell
docker-compose -f docker-compose.production.yml up
```

# Resources

This project was made using external projects:
- modifications of this webpack starter: [react-webpack-babel](https://github.com/alicoding/react-webpack-babel)

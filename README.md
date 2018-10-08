# <img src="oShi.png" alt="drawing" width="25"/> `oShi`

> `oShi` is a Discord bot which make basic tasks

## Sommaire 
<!-- TOC -->

- [<img src="oShi.png" alt="drawing" width="25"/> `oShi`](#img-srcoshipng-altdrawing-width25-oshi)
    - [Sommaire](#sommaire)
    - [I - Run it & add it :](#i---run-it--add-it-)
        - [1. Run it ( poor man's version ) :](#1-run-it--poor-mans-version--)
        - [2. Add `oShi` to your server :](#2-add-oshi-to-your-server-)
    - [II - Basic commands :](#ii---basic-commands-)
            - [Cooldowns:](#cooldowns)
        - [1.Informations :](#1informations-)
        - [2.Interaction :](#2interaction-)
    - [III - Dependencies](#iii---dependencies)
    - [IV - Want to help me ?](#iv---want-to-help-me-)

<!-- /TOC -->

## I - Run it & add it :

### 1. Run it ( poor man's version ) :

* Download or clone the repo with this command line : `git clone https://github.com/blyndusk/oShi.git`
* Install all dependencies with `npm install` or `yarn `
* At the root of the repo, lanch pm2 with this command `pm2 start app.js --watch`

### 2. Add `oShi` to your server :
> [use this link 🔵](https://discordapp.com/oauth2/authorize?&client_id=NotAvailableNow&scope=bot&permissions=1745349696)

## II - Basic commands :

* `o!help || command` => give information about a command

#### Cooldowns: 
* The message takes an entire screen: `30s`
* The message takes an half screen: `15s`
* The message takes many lines: `5s`
* The message takes one line: `2s`


### 1.Informations :
* `o!shi` => give informations about the bot
* `o!me` => give information about you
* `o!user @user` => give information about a user

### 2.Interaction :
* `o!action exampleaction @user` => interract with a user with a specific action
* `o!autoanswers` => send a list with all the autoanswers
* `o!epenis || @user` => give your e-penis size 

## III - Dependencies

* [Discord.js](https://discord.js.org/#/) `11.4.2`
* [eslint](https://eslint.org/) `5.6.1`
* [pm2](http://pm2.keymetrics.io/) `3.2.2`

## IV - Want to help me ? 

Did you spot a bug ? Do you have some upgrades ideas ? You can send me an [issue](https://github.com/blyndusk/oShi/issues) and I'll take about it ! 
# Dota2-Statistics
A website that helps users to track the stats of Dota2 World. [Live Preview on Vercel Here] (https://dota2-statistics.vercel.app/)

## Reasons for building this project.
Back in the days when I was griding Dota2 rank. I wanted an application that shows the stats of Dota2.
For Example which hero is good against which hero, which item is suitable for it, which ability should I learn for this hero, how professional players play this hero and their item build. 

At that time I had to use an application called maxplus, a betting application and it doesn't have all the features I want. So I built this project with the help of OpenDota Api.

## Tech Stacks
1. React
2. Type Script
3. React Router 
4. React Query
5. GSAP
6. Tailwind

## Things I learnt from this project.
1. Skeleton Loading
2. Code Splitting. (lazy and Suspense)
3. Basic Usage of GSAP

## Features

### Home Page 
It shows a list of features the website have and some introduction.

### Heroes Page 
It shows every heroes of Dota2. User can filter according to hero name or its attribute type.

### Hero Detail Page
Clicking on each hero of Heroes Page will take user to hero detail page.
It shows
1. Hero Base Stats(hp, hp regen, mp, mp regen, attribute gain, damage, movement speed and so on)
2. Hero Story
3. Hero Innate Ability
4. Hero Facets
5. Hero Abilities in detail
6. Recommand Items for the hero
7. Match ups for the hero and win rate
8. Win Rate of the hero in each rank
9. Professional matches that use the hero (Clicking each match will take you to Pro Match Detail Page)

### Public Matches Page
It shows a list of latest public matches. User can filter it according to rank.
Clicking each match will take user to Public Match Detail Page.

### Pro Matches Page 
It shows a list of latest pro matches. 
Clicking each match will take user to Pro Match Detail Page.

### Pro Team Page
It shows a list of professional team. User can filter according to team name.
Clicking each team will take user to Pro Team Detail Page.


### Public Match Detail Page
This page show the detail of a public dota2 match. It includes
1. Result
2. Date
3. Duration
4. Kill Scores
5. Overview of each player(Kills, Deaths, Assists, GPM, XPM, Items build and so on)

### Pro Match Detail Page 
This page show the detail of a professional match and has more information compared to Public Match Detail.
It includes
1. Result
2. Teams
3. Kill Score
4. Duration
5. Overview of each player(kills, deaths, assists, GPM, XPM, last hits, denies and networth)
6. Kill of each player(Hero, Tower, Roshan, Neutral Creeps and so on). It also includes how many time it kill a specific hero and how many times it is killed by.Additionally it shows the exact time that kill happened.
7. Damage of each player(Tower, Hero, Damage Taken). It also includes how much damage it deals to each enemy hero.
8. Item of each player (Item builds, Item Timing, Item Usage)
9. Ability of each player(Ability Learning Order, Ability Usage and Ability Targets)

### Pro Team Detail Page 
It shows the detail of a professional team. It includes
1. Rating
2. Win Rate
3. Current Players of the team.
4. Previous Players of the team.
5. The Heroes stats of the team.(how many time the team use a specific hero and its win rate)
6. The matches of the team.


### Player Detail Page
Clicking the name of the player from Public Match Detail, Pro Match Detail and Players section from pro Team Detail will take user to Player Detail Page.
It shows the infomation of a player. It includes
1. Basic Info of the player(last login time, country code and MMR-mark match ranking)
2. Win Rate of the player
3. The Heroes stats of the player. (how many time the player use a specific hero and its win rate and also against win rate)
4. Recent Matches of the player.
5. Matches of the player.
6. Peers of the player. (person who player played with or played against)
7. Pros. (Professional Player that player played with or played against)

### Notice Info
Clicking each match will always take user to the corresponding match detail page.
Clicking player name will take user to the player detail of that user.

### The Flaws of the project
It doesn't have authentication so user can't login to it by using steam account:(.
It will be added sooner than later.

### How to run locally?
First install node server and clone this repo. Also run this command in terminal
npm install react-router-dom @tanstack/react-query gsap
Then run one more
npm run dev
and click the url it provides.


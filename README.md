# fitkit
Kit of fitness tools, now known as str.quest

## Tools
1. Ken Lain's Bench Press Strength Cycle
2. The 'Evil Russian' Pushup Program

## DONE
1. ### Programs
- Ken Lain's Bench Press Strength Cycle
- The 'Evil Russian' Pushup Program

2. ### Features
- Navigation Header
- New Router (react-router-dom)
- Dynamic Workout Rendering
- Coming Soon Page
- Domain Name (https://str.quest)
- Bench Press 1RM Persistency in Local Storage

3. ### Design
- Navigation
- Mobile Friendly (hopefully)
- Weight Unit Display (Kilograms)

## TODO
1. ### Programs
- [Jim Wendler's 5/3/1 Program](https://www.superphysique.org/articles/4272)
- [Squat Workout](https://www.exerse.fr/programme-squat.php#:~:text=En%20semaine%201%2C%20il%20vous,%2C%2085%25%20et%2095%25.)
- [Grueling Leg Workout](https://www.mensjournal.com/health-fitness/most-grueling-leg-workout-all-time/)

2. ### Features
- URL Queries
- Store 1RM in LocalStorage
- Store Last Visited Route in LocalStorage
- Customization of routines (Workout days, )
- 404 Page
- Collapsible Sections (Introduction, Rules, etc...)

- ?Update packages/React version? (more than 3 years old)

3. ### Design
- Better Visuals
- Always Check if Responsive
- Logo?/Favicon
- Brand Identity
- Text Sanitization
- Text Coherence (Capitalization, etc...)

## Development
1. Install [yarn](https://yarnpkg.com/)
2. Clone project
3. Run `yarn` when in the root folder of project
4. Once everything is installed, run `npm start`

## Deployment
The Deployment is handled via [react-gh-pages](https://github.com/gitname/react-gh-pages). Follow their guide to deploy.

Otherwise just run `npm run build` to build and deploy.

## Feedback
- For weight based trainings specify unit (kg/lbs) (DONE)
- On mobile, when link is 'active' it stays that way. (Implement 'selected training' visual cue on desktop)
- Prettier embed (SEMI DONE)
- Input placeholder leads to confusion
- Bench Press table not readable for newbies
- Add legend or even verbose mode (3x10@50 will become 3s * 10r @ 50kg where s = sets and r = reps
OR add verbose mode switch that will display 3 sets of 10 reps at 50kg)


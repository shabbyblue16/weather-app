# Weather App
A simple weather app that allows the user to search by ZIP Code for local weather forecasts.

## Demo
Here is a visual representation of the app:
![Weather-app](https://user-images.githubusercontent.com/55521671/163090266-a247910f-02ef-45a9-9bfe-a4252dec067f.png)

## Usage

### Run
To run application locally:

1. Fork and clone this repo: `git clone https://github.com/shabbyblue16/weather-app.git`
2. Register an account with [AccuWeather API](https://developer.accuweather.com/). Create an app and fill out the requisite information. This will generate an access key that you can copy and past into your local repo's `.env` file as `API_KEY`
3. Open a terminal window and run `npm install`
4. Open a new terminal window and run `npm run server`
5. Open a new terminal window and run `npm run dev` to serve the app bundle in development mode
6. Navigate to `http://localhost:8080`
7. Type in any 5 digit ZIP Code into the search bar to check the weather
8. WARNING: AccuWeather API's free package is restricted to 50 API calls per day. The backend server makes 3 calls for every new ZIP Code search
9. To stop the application, press `CTRL + C` in each of the above terminal windows.

### Test
To run unit tests, in a new terminal window, run `npm test`

To view linting problems, in a new terminal window, run `npm run lint`

## Developement

### Tech Stack
[React](https://reactjs.org/)\
[MaterialUI](https://mui.com/)\
[Recoil](https://recoiljs.org/)\
[React-query](https://react-query.tanstack.com/)\
[Node](https://nodejs.org/en/about/)\
[Express](https://expressjs.com/)\
[Jest](https://jestjs.io/)

### Technical Challenges
The building of this app presented an opportunity to reevaluate my working understanding of the relationship between client state and server state. My go to set up would be for the client to fetch data from the server and then store response data in client state, often with a state managment framework like Redux. React-query requires a different approach.

The biggest challenge in creating this app was my own lack of understanding for what react-query does, and how powerful it can be. I was using react-query to fetch data from the server and then attempting to store that data with recoil, but since react-query caches that data there isn't any need to set server data in client state. I can define the same query in multiple components without worry of redundant api calls. Recoil sticks to handling client state. One of those a-ha moments that can make developing, and learning in general, so exhilarating. Makes for some really clean code as well.

![Screenshot from 2022-04-12 07-42-33](https://user-images.githubusercontent.com/55521671/162953597-b04c44ab-4e21-4ae4-80bb-69a2f5585fe0.png)

![Screenshot from 2022-04-12 07-42-26](https://user-images.githubusercontent.com/55521671/162953649-2dffa643-4a9e-4d82-bc36-a0aa034e1e06.png)

React-query does a whole a lot more like background fetching to update stale data/synchronize with server state, but even this tiny use case in a simple weather app was enough to sell me on it.

### Bug / Feature Request
If you run into any bugs kindly open an issue [here](https://github.com/shabbyblue16/weather-app/issues)\
Please include steps to recreate the bug with the expected results

To fix a bug on your own or make a contribution follow these steps:
1. After cloning locally, create a new branch (`git checkout -b bug-fix`)
2. Make the appropriate changes
3. Commit changes
5. Push to the branch (`git push origin bug-fix`)
6. Create a Pull Request

If you'd like to request a new feature, please do so with a detailed description [here](https://github.com/shabbyblue16/weather-app/issues)

### Credit
Thanks to [AccuWeather API](https://developer.accuweather.com/) for powering this app with real time weather data

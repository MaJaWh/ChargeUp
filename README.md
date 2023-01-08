<a name="readme-top"></a>

  [![Contributors][contributors-shield]][contributors-url]
  [![Downloads][download-badge]][download-url]
  [![LastCommit][commit-badge]][commit-url]

<!-- PROJECT LOGO -->

<div align="center">
  <a href="https://github.com/MaJaWh/evtest">
    <img src="./src/images/Reduced images/loginCloseUp(1).jpg" alt="Logo" width="250" height="auto">
  </a>


<h1 align="center">Charge Up</h1>

  <p align="center">
    A simple app linked to the government Vehicle Charging API. Chargers can be filtered on distance from location and plug type. You can also create a user account and sign in and out using email and password
    <br />
    ·
    <a href="https://github.com/MaJaWh/evtest">Report Bug</a>
    ·
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project
  The final project of our Manchester Codes Software Engineering Bootcamp. We tasked ourselves with putting together an app which could search any country in the world for all the EV charging sites. We hoped it would then be possible to use various filter methods to find and navigate to your desired charging station. We hoped to build the frontend using React and the native React Testing Library. The backend would be built using Express, Mongoose and MongoDB. Using the MERN stack we hoped that we would have pleanty of up to date documentation to work from.
    

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Java-script][javascript-shield]][javascript-url]
- [![Node.js][node-shield]][node-url]
- [![React.js][react.js]][react-url]
- [![CSS][CSS]][CSS-url]
- [![HTML][HTML]][HTML-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started

### Prerequisites

Please use the below to set of instructions to get your project up and running

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo into your chosen file
   ```sh
   $git clone https://github.com/MaJaWh/evtest
   ```
2. CD into database and Install NPM packages
   ```sh
   $npm install
   ```
3. CD into evtest and Install NPM packages
   ```sh
   $npm install
   ```

### Testing   
- Testing
   ```sh
   $npm test
   ```

###  Running the Development Server  

1. Enter your API in `.env` in evtest. If you dont have an API key you will see a development only map
      ```js
      REACT_APP_GOOGLE_MAPS_EMBED_API_KEY = 'ENTER YOUR API';
      ```
2. From evtest run
   ```sh
   $npm start
   ```    

### Running the Server

3. From database run
   ```sh
   $npm start
   ```    

### Using The App

1. Opening the app you will be directed to the LandingPage and asked to create a user.

2. If you successfully create a user you will be directed to the dashboard.

3. Here you get an alert askeing you to allow location services and the map shoudl center on your location.

4. You can then enter your home town and set the distance in miles you would liket o search from your location.

5. Pressing the plug type button you can then toggle on and off the locations which match your plug type. Some plug types are more popular than others.

6. If you like you can remove the search window by clicking the SearchForm button at the bottom of the page.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Usage Examples

<div align="center">
  <a href="https://github.com/MaJaWh/evtest">
    <img src="./src/images/Reduced images/loginImage.jpg" alt="Logo" width="250" height="auto">
  </a>


  <div align="center">
  <a href="https://github.com/MaJaWh/evtest">
    <img src="./src/images/Reduced images/dashboardWithFlag.jpg" alt="Logo" width="250" height="auto">
  </a>


  <div align="center">
  <a href="https://github.com/MaJaWh/evtest">
    <img src="./src/images/Reduced images/acccountPage.jpg" alt="Logo" width="250" height="auto">
  </a>
</div>

<!-- Roadmap -->
### Roadmap

 #### Frontend
- [ ] Create a more informative landing page
- [ ] 
- [ ] Feature 3
    - [ ] Nested Feature

 #### Backend
- [ ] Complete reset password function
- [ ] Complete add a new car route
    - [ ] Add an 'update users car' route
- [ ] Create function so the user can add an image to thir profile.
    - [ ] Display the users image on the header bar.
- [ ] 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contact

Mark Whitehead - [@twitter_handle](https://twitter.com/twitter_handle)

Ben Seed - []()

Project Link: [https://github.com/MaJaWh/evtest](https://github.com/MaJaWh/evtest)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->

[download-badge]: https://img.shields.io/github/downloads/MaJaWh/evtest/total
[download-url]: https://github.com/MaJaWh/evtest
[commit-badge]: https://img.shields.io/github/last-commit/MaJAWh/evtest
[commit-url]: https://www.github.com/MaJaWh/evtest
[javascript-url]: https://www.javascript.com/
[javascript-shield]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://www.w3.org/Style/CSS/Overview.en.html
[HTML]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://html.com/
[node-shield]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/en/
[express-shield]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[express-url]: https://expressjs.com/
[mysql-shield]: https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white
[mysql-url]: https://www.mysql.com/
[contributors-shield]: https://img.shields.io/github/contributors/MaJaWh/evtest.svg?style=for-the-badge
[contributors-url]: https://github.com/MaJaWh/evtest/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D


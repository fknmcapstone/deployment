## FKNM Dashboard Website

This site details the research done by the Feeding Kids, Nourishing Minds team at the Joannah and Brian Lawson
Centre for Child Nutrition at the University of Toronto.  

> Placeholder text here regarding research conducted and its visuals?

Next.js, PowerBI, Typescript, and React were used to create this website.

### Setup  
**Steps 3-4 are optional if you only want to view the site running locally.**

1. Install Node.JS based on your platform
2. Install `npm`
3. Clone this repository
```
$ git clone https://github.com/fknmcapstone/fknmdashboard.git
```
5. Change directory into the project's folder  
```
$ cd fknmdashboard
```
6. Install the npm dependencies in this project
```
$ npm ci
```
3. Install the ESLint and Prettier plugins for your code editor.
4. Enable Prettier to format on saving the file.
5. Start the website locally
```
$ npm run dev
```

### Executing Cypress Tests  
Cypress tests can be run directly from the command line or through the Cypress GUI. The instructions below are how to start the GUI. Please follow [this link](https://docs.cypress.io/guides/guides/command-line) to learn how to use Cypress through the command line. 

1. Change directory into the project's folder  
```
$ cd fknmdashboard
```
2. Start the website locally if you haven't already done so. Keep this terminal window open. Do not close or stop this process as the Cypress tests are pointed towards using this local site.
> If the Cypress tests are pointed towards the deployed website, there is no need to run this command
```
$ npm run dev
```
3. Open a new terminal and start the Cypress app
```
$ npx cypress open 
```
4. Choose E2E testing and the browser you wish to run the tests on


### Project Structure
```
.   
├── cypress                            # Cypress test files
├── public                             # Images used in the website are stored here
├── src/app                                    
│   └── (dashboard)                    # Contains all the folders for each page used. Next.js uses folder structure for page routing
│       ├── (publications)             # A (folder) means that this name will *not* show in the url as such: http://localhost:3000/publications/manuscripts
│       │   ├── manuscripts
│       │   ├── presentations
│       │   └── publications.json      # Contains information for both the presentations and manuscripts page
│       ├── (research)
│       │   ├── intake_visuals
│       │   └── measurement_tool_assessment
│       ├── about_fknm
│       │   ├── page.module.css        # Each page.tsx references its own CSS file
│       │   └── page.tsx               # Each page folder must have its own page.tsx. This file describes the layout of the page. 
│       ├── covid_19_impacts
│       ├── news
│       │   └── articles.json          # Contains information for the news articles displayed on the news page
│       └── school_food_programs
├── layout.tsx                         # Navigation bar related code
├── page.tsx                           # Contains the landing page
├── page.module.css                    # Contains CSS for both the navigation bar and the landing page
├── globals.css                        # Global variables used for font size, colors, and various element properties
├── cypress.config.ts                  # Cypress configuration file. Changing the baseUrl option in this file will change what website the Cypress tests point towards
├── LICENSE  
└── README.md
```


## Credits

    Phantom by HTML5 UP
    html5up.net | @ajlkn

    Demo Images:
    	Unsplash (unsplash.com)
    Icons:
    	Font Awesome (fontawesome.io)
    Other:
    	jQuery (jquery.com)
    	Responsive Tools (github.com/ajlkn/responsive-tools)

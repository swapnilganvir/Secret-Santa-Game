<div id="readme-top" align="center">
  <h3 align="center">Secret Santa Game</h3>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#implementation-steps">Implementation Steps</a></li>
    <li><a href="#how-to-use">How to use</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project
This project automates the **Secret Santa assignment** for employees by ensuring each participant is randomly assigned a unique gift recipient while avoiding previous year’s matches. It processes employee data from a CSV file, applies assignment rules, and outputs the new pairings in a structured format. The system is built using **Node.js, Express, and file handling techniques**, ensuring modularity, error handling, and extensibility.


<!-- Tech Stack -->
## Tech Stack
  * <b>Backend</b>: Node.js with Express.js
  * <b>Storage</b>: In-memory (for simplicity)
  * <b>Testing</b>: Unit testing using assertions
  * <b>Version Control</b>: GitHub with a structured repository


<!-- Implementation Steps -->
### Implementation Steps
1. #### Read Input CSV Files
    * Load current year’s employees.csv.
    * Load last year’s assignments.csv (if available).
    * Validate the data (check for duplicates, missing values, incorrect email formats).

2. #### Shuffle Employees to Assign Secret Children
    * Use a randomized approach (Fisher-Yates shuffle or random.sample).
    * Ensure:
        * No one is assigned to themselves.
        * No one gets the same assignment as last year.
        * The assignment remains fairly random.
     
3. #### Generate the Output CSV
    * Create a CSV file containing
        * Employee Name & Email.
        * Assigned Secret Child’s Name & Email.

  4. #### Error Handling & Testing
      * Handle empty files, duplicates, missing fields, or format issues.
      * Write unit tests to validate that no employee is assigned to themselves and assignments do not repeat from last year.
    

<!-- How to use -->
### How to use
1. #### Get code 
    * Get code from the GitHub repository to your local machine.
      
2. #### Install Dependencies
    * `npm install express fs-extra csv-parser fast-csv`

3. #### Add data
    * Replace your CSV files in the data folder
    * Update the filepath in the assignSecretSanta() function in the server.js file if required.
  
3. #### Run project / Start server
    * `npm run server` : works with nodemon
    * Goto `http://localhost:${PORT}`
    * It will show the data in JSON format on the browser and create/update `output.csv` file on your local machine


<!-- CONTACT -->
## Contact
Swapnil Ganvir  - [@LinkedIn](https://www.linkedin.com/in/swapnilganvir) - swapnilganvir54@gmail.com

Project Link: [https://github.com/swapnilganvir/Secret-Santa-Game](https://github.com/swapnilganvir/Secret-Santa-Game)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

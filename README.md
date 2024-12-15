## Alma Technical Exercise

### Technologies used
- NextJS v14
- React v18
- Zustand (Data Storing)
- zod (Data Validation)
- Ant Design (Design System)

<br />

### How to run the application: 
1. Clone the project using your terminal
   
   <pre>
     git clone https://github.com/SetropLeo/alma-technical-exercise
   </pre>
   
2. Install node v22/LTS (https://nodejs.org/pt)
3. Run the command to install the packages using your terminal
   
   <pre>
     npm install
   </pre>

4. Run the project using your terminal

   <pre>
     npm run dev
   </pre>

<br />

### Pages available
1. The page used to capture leads can be found in the root page

   <pre>localhost:3000/</pre>
   
2. The page used to manage the leads collected can be found in the /dashboard page

   <pre>localhost:3000/dashboard</pre>

- When you get to this page, you'll se that there's a Login Form. If you use following values, your access will be granted
- Any other Login or password values are goint to be denied.
  
  <pre>Login: testuser   |   Password: password123</pre>

<br/>

### Detailments

Initially, I started by planning which components would be essential for the project's progress:

- AssessmentForm
- Banner
- ConfirmationModal
- CountrySelect
- FileUpload
- LeadsTable
- Sidebar
- FormStep
- The plan was to create components that would carry exclusive responsibilities for: presenting data, manipulating data, formatting elements, and generating specific actions.
<br />

1. I implemented `Zustand Stores` for `data-storage-and-sharing` without prop drilling.
   
2. I implemented `interfaces` to assist me in feature development by moving data from one place to another.
   
3. I implemented `Zod` for complete `validation` of input fields on the lead capture screen, as well as to assist with user feedback in case of incorrect entries.
   
4. I created `utility functions` that would be used throughout the project, such as the notification utility.

<br />

### System Design - Initial Concept

![NextJs](https://github.com/user-attachments/assets/9fa620d2-6611-42d4-a4f0-ac279363f072)


### System Design - Actual Design

![NextJs (3)](https://github.com/user-attachments/assets/6c9c996a-2cb0-42ef-88a6-eeb53e6bf56d)

   
<br />

Regarding APIs, all data was mocked and did not interact with any server or database.

I had in mind the idea of implementing `Sanitize`, considering it is a `simple and quick database` to work with, in addition to offering `validations and easy access to the necessary information` that would be used.

I also planned to implement `unit tests` individually for each component,` integration tests` to validate the behavior of components regarding API responses, and `E2E tests` to test the system as a whole based on "human interactions" that would be automated to closely mimic user actions.

Finally, I had planned to implement `streaming and real-time data` using `Next v15` so that, as soon as a lead filled out the form data, the table data would update in real-time if someone had the tab open, eliminating the need to refresh the page to see the changes.

<br />
Notes: 
- Regarding this last point, it was the one that frustrated me the most. Next v15, combined with React v19, results in an extremely powerful force that enables new ways of interacting with the web. However, numerous libraries are still not ready to work with these technologies, including the Ant Design library. I spent countless precious hours trying to solve numerous issues with reactivity, visuals, and screen hydration.

- Although it is a small project with simple features, the speed required to complete it was high and demanded a lot of attention to detail. I did not finish the test, leaving some visual details on the dashboard and the feature to change the lead state incomplete.

- These components were created and implemented on the screens. However, due to the short deadline, it was not possible to implement all the visual details needed to make the screens complete.

Although it is a small project with simple features, the speed required to complete it was high and demanded a lot of attention to detail. I did not finish the test, leaving some visual details on the dashboard and the feature to change the lead state incomplete.

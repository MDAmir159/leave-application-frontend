# Leave Appication

Automated web-based leave application for smart office in educational institution.

For employees in educational institutions it is common and frequent to apply for educational leave. In this era of technology, it is rigorous and cumbersome to write applications by hand. Another eminent problem is the application needs to be approved by several levels of authority manually. This whole procedure is time consuming and error-prone. Here, we are using web-based automation strategy to automate this cumbersome frequent process.For employees in educational institutions it is common and frequent to apply for educational leave. In this era of technology, it is rigorous and cumbersome to write applications by hand. Another eminent problem is the application needs to be approved by several levels of authority manually. This whole procedure is time consuming and error-prone. Here, we are using web-based automation strategy to automate this cumbersome frequent process.


## Why this?

- Ease of use
- Suitable for any educational/commercial organization.
- Easily can be used as an activity sharing system within a smart automated office system.

## User Interfaces

- Log In
Anyone who wishes to use the site must should firstly log in to their accounts. Log in informations are provided via admin panel. So only authorised personnels have access to this system. There is no way to create account for any user own.

- Home
The homepage displays all of the sections for the user. User to user this will vary as their level and exapansion of their responsibilites. A lecturer has of course much less responsibilities than the Vice Chancellor, so he has a fewer section to access.

- Application
In this section a faculty member or office staff can submit their leave application and see his current profile status.

- Application List
 This section works as  follows as this is a same type interface for the HR, Registrar and the Vice Chancellor.
 1.	User can log in as one of five user levels (in ascending order of their administrative precedence):
      a.	Employee
      b.	Teacher
      c.	Human resource officer
      d.	Registrar
      e.	Vice chancellor
2.	When logged in as an employee or teacher, user can apply for leave mentioning the required leave duration and excuse for leaving
3.	The application, when submitted all users of other user levels (i.e., Head of the department, Human resource officer,       Registrar, Vice-chancellor) will be notified sequentially according to the administrative precedence
4.	The user’s application will be pending until it is approved by all higher precedence user levels
5.	Once get approved, the user will be notified that his/ her application for leave has been granted and he will see the total number of reserved vacations for him is discarded from his account.


# Tech Used

Friends-blog uses a number of frameworks to work properly:
- [React.js](https://reactjs.org/)- for front end development
- [Mongo DB](https://www.mongodb.com/) - for database
- [Node.js](http://nodejs.org/) - evented I/O for the backend
- [Express](https://expressjs.com/) - fast node.js network app framework

## Installation

Leave-application requires [Node.js](https://nodejs.org/) v10+ to run.
Install the dependencies for the front end side.

```sh
npm install
```
After successfully installing all modules and dependecies run the following command in your current folder
```sh
npm start
```

By default this project will run on your localhost:3000 port.
## Development

Want to contribute? Great!

- Fork the project
- Create your own featured branch
```sh
    git checkout -b feature/NewFeatures
```
- Commit your changes
```sh
    git commit -m "feature/NewFeatures"
```
- Push to the branch
```sh
    git push origin feature/NewFeatures
```
- Open a pull request

#Screenshots
<br/>

<p align="center">
  <img src="github_images/login.jpg" width="80%" align="center" style="border-radius:10px"/>
</p>
<h5 align="center">
  Login page
</h5>
<br/>
<br/>
<p align="center">
  <img src="github_images/faculty_window.jpg" width="80%" align="center" style="border-radius:2%"/>
</p>
<h5 align="center">
  Faculty window
</h5>
<br/>
<br/>
<p align="center">
  <img src="github_images/hr_window.jpg" width="80%" align="center" style="border-radius:2%"/>
</p>
<h5 align="center">
  Human Resource's window
</h5>
<br/>
<br/>
<p align="center">
  <img src="github_images/registrar.jpg" width="80%" align="center" style="border-radius:2%"/>
</p>
<h5 align="center">
  Registrar's portal
</h5>
<br/>
<br/>
<p align="center">
  <img src="github_images/vc.jpg" width="80%" align="center" style="border-radius:2%"/>
</p>
<h5 align="center">
  Vice Chancellor's portal
</h5>
<br/>
<br/>
<p align="center">
  <img src="github_images/application.jpg" width="80%" align="center" style="border-radius:2%"/>
</p>
<h5 align="center">
  Faculty/Office staff's application window
</h5>


<br/>
<br/>

# Server Side

Here is the link to the server side repository
 [leave-application-backend](https://github.com/MDAmir159/leave-application-backend)
 Enjoy !


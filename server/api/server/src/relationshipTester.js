const models = require('./models');
//TODO:import all models here

/*  then creating first registration
 Center models
 Departments
 Dependent
 at beginning of schema */

 Center.create({
  name: "My super center"
})
.then((newCenter) => {
  // The get() function allows you to recover only the DataValues of the object
  console.log(newCompany.get())
})
.catch((err) => {
  console.log("Error while company creation : ", err)
})
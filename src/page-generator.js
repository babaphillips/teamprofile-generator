const generatePage = (employeesData) => {
  //creates manager html container // parameter can be any name
  const generateManager = (manager) => {
    return `
    <div class="card">
                <div class="card-header p-3 mb-2 bg-primary text-white text-center">
                  <h2 class="card-title">${manager.getName()}</h2>
                  <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                      <li class="list-group-item">ID: ${manager.getId()} </li>
                      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                      <li class="list-group-item">Office Number: ${manager.getOfficenumber()}</li>
                    </ul>
                </div>
                </div>
    `;
  };
  // create engineer html // parameter can be any name
  const generateEngineer = (engineer) => {
    return `
    <div class="card">
                <div class="card-header p-3 mb-2 bg-primary text-white text-center">
                  <h2 class="card-title">${engineer.getName()}</h2>
                  <h3 class="card-title"><i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                      <li class="list-group-item">ID: ${engineer.getId()} </li>
                      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
    </div>
    `;
  };

  // create intern html // parameter can be any name
  const generateIntern = (intern) => {
    return `
    <div class="card">
                <div class="card-header p-3 mb-2 bg-primary text-white text-center">
                  <h2 class="card-title">${intern.getName()}</h2>
                  <h3 class="card-title"><i class="fa-solid fa-graduation-cap"></i> ${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                      <li class="list-group-item">ID: ${intern.getId()} </li>
                      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                      <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
    </div>
    `;
  };

  // empty array called const pageProfiles where we will push all data into it
  const pageProfiles = [];

  // example of how to push the data into the HTML in module 9 over portofolio generator project
  // The push() method adds new items to the end of an array. The push() method changes the length of the array
  // The push method is pushing the employeesData into the pageProfiles empty array. Filter will
  // remove all the elements that don't belong such as Engineer or Intern. Map will create a new array with all the information gathered.
  // Same process for Engineer and Intern then return pageProfiles with join method which will add all elements (Manager/Engineer/Intern) into the array
  pageProfiles.push(
    employeesData
      // filter creates a new array by removing elements that don't belong. The filter() method does not change the original array.
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
    //map creates a new array by transforming every element in an array individually.
  );
  pageProfiles.push(
    employeesData
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  pageProfiles.push(
    employeesData
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );

  // join() method joins all the elements of an array into a string.
  return pageProfiles.join("");
};

// export function to generate entire page // parameter can be any name
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/4383c4a7c8.js" crossorigin="anonymous"></script>
    <title>My Team</title>
</head>
<body>
    <header>
        <div class="container-fluid">
            <div class="jumbotron bg-danger" id="title">
                <h1 class="text-center text-white">My Team</h1>
            </div>
            </div>
    </header>
        <main>
        <div class="container">
        <div class="card-deck">
        ${generatePage(team)}
        </div>
        </div>
    </main>
</body>
</html>
    `;
};

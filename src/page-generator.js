const generatePage = (team) => {
  //creates manager html
  const generateManager = (manager) => {
    return `
    <div class="card employee-card" style="width: 15rem;">
                <div class="card-header p-3 mb-2 bg-primary text-white text-center">
                  <h2 class="card-title">${manager.getName()}</h2>
                  <h3 class="card-title"><i class="bi bi-cup-hot-fill"></i>${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                      <li class="list-group-item">ID: ${manager.getId()} </li>
                      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}"></a></li>
                      <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
                </div>
    `;
  };
  // create engineer html
  const generateEngineer = (engineer) => {
    return `
    <div class="card employee-card" style="width: 15rem;">
                <div class="card-header p-3 mb-2 bg-primary text-white text-center">
                  <h2 class="card-title">${engineer.getName()}</h2>
                  <h3 class="card-title"><i class="bi bi-eyeglasses"></i>${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                      <li class="list-group-item">ID: ${engineer.getId()} </li>
                      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}"></a></li>
                      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}"</li>
                    </ul>
                </div>
    </div>
    `;
  };

  // create intern html
  const generateIntern = (intern) => {
    return `
    <div class="card employee-card" style="width: 15rem;">
                <div class="card-header p-3 mb-2 bg-primary text-white text-center">
                  <h2 class="card-title">${intern.getName()}</h2>
                  <h3 class="card-title"><i class="bi bi-eyeglasses"></i>${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                      <li class="list-group-item">ID: ${intern.getId()} </li>
                      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}"></a></li>
                      <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
    </div>
    `;
  };
  
};

// export function to generate entire page
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
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
        ${generatePage(team)}
        </div>
    </main>
</body>
</html>
    `;
};

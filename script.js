var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus est sed ante rhoncus iaculis. " +
    "Pellentesque nec risus lectus. Sed euismod diam et justo molestie, ut tincidunt lorem tincidunt. " +
    "Cras iaculis nisi placerat, varius justo at, consectetur lectus. Etiam porttitor sapien nibh, " +
    "non cursus massa finibus et. Fusce rhoncus accumsan purus, sit amet maximus nisl varius vitae. Maecenas " +
    "tincidunt placerat nibh eu convallis. Aenean vitae felis vitae metus iaculis pulvinar nec eu orci. Aliquam a " +
    "aliquam leo. Quisque feugiat ligula vel efficitur porttitor. Curabitur congue ex quis urna gravida aliquet. " +
    "Mauris arcu enim, pulvinar vitae nulla at, dignissim pharetra libero. ";
//შემოგვაქვს ცვლადი Lorem და მას ვანიჭებტ მნიშვნელობას//

var id = "container";
//შემოგვაქვს ცვლადი id და მას ვანიჭებთ მნიშვლებობას (string) container//

var el = document.getElementById(id);
//შემოგვაქვს ცვლადი el, რომელსაც document იდან გამოაქვს ელემენტი id,idს მიხედვით//

for (var i = 0; i < 10; i++) { /*for ბრძანება, რომელიც გვაძლევს გამეორების საშუალებას; ცვლადი i და მისის რაოდენობა ყოველ ჯერზე იმატებს ერთით*/
    var row = document.createElement("div");//შემოდის ცვლადი row რომელიც დოკუმენტში ქნის ელემენტს სახელად div//
    row.classList.add("row"); // ცვლადი rowს ენიჭება კლასი row//
    for (var j = 0; j < 3; j++) { //ახალი ცვლადი j//
        var col = document.createElement("div");// ცვლადი col დოკუმენტში ქმნის ელემენტს სახელად div//
        col.classList.add("col"); //ცვლად colს ენიჭება კლასო col//
        col.innerHTML = lorem; // ცვლადი col ის შიდა HTML ში lorem ის მნიშვნელობა//
        col.style.backgroundColor = "#5" + i + j * 4; //col ენიჭება ბექგრაუნდ ფერი, რომელიც რაღაც პროგრესიით იცვლება//
        row.appendChild(col);// ცვლადი col თავდება row ს შიგნით//
    } //აქ დამტავრდა ლუპი//
    el.appendChild(row); // ცვლადი row თავდება ცვლად el ში, რომელიც თვითონ არის container//
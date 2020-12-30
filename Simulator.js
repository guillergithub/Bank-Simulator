let inputUsers = document.getElementById("inputUsers"),
  inputTime = document.getElementById("inputTime"),
  usersCount = 0,
  timeCount = 0;

let button = () => {
  Client.randomClient();
};

let random = () => {
  return Math.floor(Math.random() * 4) + 1;
};

class Bank {
  constructor(maxClients, time, offices) {
    this.maxClients = maxClients;
    this.time = time;
    this.offices = [[], [], [], []];
  }

  //Metodo que asigna clientes a una taquilla aleatoria cada 1 - 10 segundos
  randomClient() {
    let randomClientInterval = setInterval(() => {
      if (usersCount < inputUsers.value) {
        switch (random()) {
          case 1:
            if (this.offices[0].length < 14) {
              this.offices[0].push("x");
              this.addElementOffice1();
            } else {
              if (
                this.offices[1].length < this.offices[2].length &&
                Client.offices[1].length < Client.offices[3].length
              ) {
                this.offices[1].push("x");
                this.addElementOffice2();
                alert("it works!");
              } else if (
                this.offices[2].length < this.offices[1].length &&
                this.offices[2].length < this.offices[3].length
              ) {
                this.offices[2].push("x");
                this.addElementOffice3();
                alert("it works!");
              } else {
                this.offices[3].push("x");
                this.addElementOffice4();
                alert("it works!");
              }
            }
            console.log(this.offices);
            break;

          case 2:
            if (this.offices[1].length < 14) {
              this.offices[1].push("x");
              this.addElementOffice2();
            } else {
              if (
                Client.offices[0].length < Client.offices[2].length &&
                Client.offices[0].length < Client.offices[3].length
              ) {
                this.offices[0].push("x");
                this.addElementOffice1();
                alert("it works! 2");
              } else if (
                Client.offices[2].length < Client.offices[0].length &&
                Client.offices[2].length < Client.offices[3].length
              ) {
                this.offices[2].push("x");
                this.addElementOffice3();
                alert("it works! 2");
              } else {
                this.offices[3].push("x");
                this.addElementOffice4();
                alert("it works! 2");
              }
            }
            console.log(this.offices);
            break;

          case 3:
            if (this.offices[2].length < 14) {
              this.offices[2].push("x");
              this.addElementOffice3();
            } else {
              if (
                Client.offices[0].length < Client.offices[1].length &&
                Client.offices[0].length < Client.offices[3].length
              ) {
                Client.offices[0].push("x");
                this.addElementOffice1();
                alert("it works! 3");
              } else if (
                Client.offices[1].length < Client.offices[0].length &&
                Client.offices[1].length < Client.offices[3].length
              ) {
                this.offices[1].push("x");
                this.addElementOffice2();
                alert("it works! 3");
              } else {
                this.offices[3].push("x");
                this.addElementOffice4();
                alert("it works! 3");
              }
            }
            console.log(this.offices);
            break;

          case 4:
            if (this.offices[3].length < 14) {
              this.offices[3].push("x");
              this.addElementOffice4();
            } else {
              if (
                Client.offices[0].length < Client.offices[1].length &&
                Client.offices[0].length < Client.offices[2].length
              ) {
                this.offices[0].push("x");
                this.addElementOffice1();
                alert("it works! 4");
              } else if (
                Client.offices[1].length < Client.offices[0].length &&
                Client.offices[1].length < Client.offices[2].length
              ) {
                this.offices[1].push("x");
                this.addElementOffice2();
                alert("it works! 4");
              } else {
                this.offices[2].push("x");
                this.addElementOffice3();
                alert("it works! 4");
              }
            }
            console.log(this.offices);
        }
      }
    }, 2000);
  }

  //Metodos para crear y añadir elemento HTML al documento
  addElementOffice1() {
    // creo un nuevo div
    let newDiv = document.createElement("div");

    // añado estilos al nuevo elemento
    newDiv.classList.add("client");
    newDiv.style.background = "random";

    // añadir el elemento creado y su contenido al DOM
    let currentDiv = document.getElementById("office1");
    currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);

    usersCount++;
  }

  addElementOffice2() {
    // creo un nuevo div
    let newDiv = document.createElement("div");

    // añado estilos al nuevo elemento
    newDiv.classList.add("client");
    newDiv.style.background = "random";

    // añadir el elemento creado y su contenido al DOM
    let currentDiv = document.getElementById("office2");
    currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);

    usersCount++;
  }

  addElementOffice3() {
    // creo un nuevo div
    let newDiv = document.createElement("div");

    // añado estilos al nuevo elemento
    newDiv.classList.add("client");
    newDiv.style.background = "random";

    // añadir el elemento creado y su contenido al DOM
    let currentDiv = document.getElementById("office3");
    currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);

    usersCount++;
  }

  addElementOffice4() {
    // creo un nuevo div
    let newDiv = document.createElement("div");

    // añado estilos al nuevo elemento
    newDiv.classList.add("client");

    // añadir el elemento creado y su contenido al DOM
    let currentDiv = document.getElementById("office4");
    currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);
    usersCount++;
  }
}

class Taquilla extends Bank {
  deleteElementOffice1() {
    setTimeout(() => {
      if (Client.offices[0].length > 0) {
        currentDiv.removeChild(newDiv);
      }
    }, 1000); //Random 3 a 7 segundos
  }

  deleteElementOffice2() {
    setTimeout(() => {
      if (Client.offices[1].length > 0) {
        currentDiv.removeChild(newDiv);
      }
    }, 1000); //Random 3 a 7 segundos
  }

  deleteElementOffice3() {
    setTimeout(() => {
      if (Client.offices[2].length > 0) {
        currentDiv.removeChild(newDiv);
      }
    }, 1000); //Random 3 a 7 segundos
  }

  deleteElementOffice4() {
    setTimeout(() => {
      if (Client.offices[3].length > 0) {
        currentDiv.removeChild(newDiv);
      }
    }, 1000); //Random 3 a 7 segundos
  }
}

let btn = () => {
  Client.randomClient();
  /*  let time = setInterval(() => {
    if (timeCount < inputTime.value) {
      if (usersCount < inputUsers.value) {
        timeCount++;
        console.log(`Van ${timeCount}`);
        Client.randomClient();
      }
    } else {
      return alert(
        `Hay ${inputUsers.value} usuarios en cola.
        Taquilla 1 hay ${Client.offices[0].length} usuarios en cola
        Taquilla 2 hay ${Client.offices[1].length} usuarios en cola
        Taquilla 3 hay ${Client.offices[2].length} usuarios en cola 
        Taquilla 4 hay ${Client.offices[3].length} usuarios en cola`
      );
      clearInterval(time);
    }
  }, 1000); */
};

//Creando instancia de Bank
const Client = new Bank(inputUsers, inputTime);

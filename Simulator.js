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
                /** ¿por qué esta primera línea de este if es diferente a los demás if? */
                /** Busca una forma de optimizar la compoaración de cuál es el arreglo más corto 
                 * https://stackoverflow.com/questions/18277774/whats-the-best-way-to-find-the-shortest-array-in-a-two-dimensional-array
                 * eso te puede servir, usa algo que entiendas.
                */
                this.offices[1].length < this.offices[2].length &&
                Client.offices[1].length < Client.offices[3].length
              ) {
                this.offices[1].push("x");
                this.addElementOffice2();
                /** no utilices el mismo mensaje para todos los casos del if, es más sencilo de identificar
                 * cada parte del flujo si utilizas un mensaje diferente para cada caso.
                 * Otra cosa, no utilices alerts para hacer debug, usa console.log, no interrumpes el flujo 
                 * de funcionamiento del sistema y los tiempos se mantienen corriendo.
                 */
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
      /** esto no es random. */
    }, 2000);
  }

  //Metodos para crear y añadir elemento HTML al documento
  addElementOffice1() {
    // creo un nuevo div
    let newDiv = document.createElement("div");

    // añado estilos al nuevo elemento
    newDiv.classList.add("client");
    /** no entiendo esta línea */
    newDiv.style.background = "random";

    // añadir el elemento creado y su contenido al DOM
    /** Si le pasas a la función un index, puedes hacer document.getElementById("office"+index) y 
     * te ahorras duplicar la función 4 veces. Piénsalo como si el banco pudiese crecer, tendrías que 
     * duplicar la función N veces para alcanzar siempre el número de taquillas.
     */
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
    /** esto tampoco es random. */
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


/**
 * Lo primero que encuentro al correr el proyecto es que no tenemos condición de parada, esta parte 
 * es súmamente importante tenerla en cuenta porque si no, el proyecto, sea lo que sea que haga, 
 * nunca va a terminar. Siempre define una condición de parada o al menos un botón que lo haga.
 * 
 * En el proceso de ejecución también encontré que los tiempos de ejecución no son aleatorios sino
 * establecidos. 
 * 
 * En estos métodos:
 *   //Metodos para crear y añadir elemento HTML al documento
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
 * Si notas, todos esos métodos se pueden resumir en uno solo al que le pases el índice de cuál será 
 * la taquilla que vas a utilizar. Intenta pensar siempre en la reutilización del código para optimizar
 * tanto la cantidad de líneas como la funcionalidad. Lo mismo puedes aplicar para los delete.
 * 
 * En el proceso de ejecución, también vi que los elementos no se están eliminando. Recuerda que es
 * útil agregar los console.log para saber por dónde está pasando la ejecución del sistema y dónde está
 * fallando o qué se está saltando. Me comentaste que lo habías agregado, pero no está funcional.
 * 
 * En la info que tienes comentada después de Client.randomClient tienes varias líneas en el mismo log, 
 * ten en cuenta que todo eso se va a imprimir en la misma línea, para cada línea que quieras imprimir
 * tienes que hacer una llamada a la función.
 * 
 * Con respecto a la interfaz gráfica del proyecto, 
 * https://coolors.co
 * Te dejo esa página con la que puedes generar paletas de colores, ten en cuneta que para ti es importante
 * el funcionamiento del proyecto, pero para el usuario es más importante la interfaz que le indique qué
 * está sucediendo y cómo se está comportando todo.
 * 
 */
const objeto1 = {
  name: "Pedro",
  number: 44,
};

// Construyan un objeto con 2 propiedades name y lastName y hagan un console.log que diga "Hola soy [nombre] [apellido]"

const obj = {
    name: "Gere",
    lastName: "Costa"
}

console.log(`Hola soy ${obj.name} ${obj.lastName}`)
console.log("Hola soy " + obj.name + " " + obj.lastName)

////////////////////////////////////////////////////////////////////////////////////////////////////////

const objeto2 = {
  name: "Pedro",
  saludar: function () {
    return `Hola ${this.age}`;
  },
  age: 4 
};

console.log(objeto2.saludar())

// Construyan un objeto con 1 propiedad name y una función run que al invocarse diga: "Run [nombre] run"

////////////////////////////////////////////////////////////////////////////////////////////////////////

const objeto3 = {
  name: "Pedro",
  saludar: function () {
    return `Hola ${this.name}`;
  },
  saludarFlecha: () => `Hola ${objeto3.name}`
};

console.log(objeto3.saludarFlecha())

////////////////////////////////////////////////////////////////////////////////////////////////////////

const objeto4 = {
    objetito: {
      ["actividades-delictivas"]: "robos",
      edad: 22,
    },
    number: 44,
};


console.log(objeto4.objetito["actividades-delictivas"])

// Construyan un objeto con 1 propiedad con guion del medio y hagan un console.log que lo use.

////////////////////////////////////////////////////////////////////////////////////////////////////////

const objeto5 = {
    number: 44,
    sumarNumberMas20: function () {
      return this.number + 20;
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////

const objeto6 = {
    number: 44,
    sumarNumberMas20: function () {
      return this.number + 20;
    },
    sumarNumberMas20MasArgumento: function (param = 4) {
      return this.sumarNumberMas20() + param;
    }
};

console.log(objeto6.sumarNumberMas20MasArgumento(["r"]))

// Construyan un objeto con 1 propiedades y tres funciones que se vayan llamando entre si.





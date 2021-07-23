"use strict";

class Consultorio {
  constructor(consNombre, consPacientes) {
    this.consNombre = consNombre;
    this.consPacientes = consPacientes;
  }
}

class Paciente {
  constructor(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;
  }
}

// Pacientes
const PacienteLoyola = new Paciente(
  "Eduardo Loyola",
  57,
  "1.222.333-4",
  "Puñete"
);
const PacienteNeruda = new Paciente(
  "Pablo Neruda",
  69,
  "4.333.222-1",
  "Se tropezó"
);
const PacientePedro = new Paciente(
  "Pedro Sanchez",
  55,
  "2.333.444-5",
  "Infección"
);

// Consultorios
const ConsultorioDonJuan = new Consultorio("Don Juan", [
  PacienteLoyola,
  PacienteNeruda,
]);

const ConsultorioMaipu = new Consultorio("Renacin", [PacientePedro]);

Object.defineProperty(this, "nombre", {
  get: function () {
    return nombre;
  },
  set: function (newNombre) {
    nombre = newNombre;
  },
});

Object.defineProperty(this, "edad", {
  get: function () {
    return edad;
  },
  set: function (newEdad) {
    edad = newEdad;
  },
});

Object.defineProperty(this, "rut", {
  get: function () {
    return rut;
  },
  set: function (newRut) {
    rut = newRut;
  },
});

Object.defineProperty(this, "diagnostico", {
  get: function () {
    return diagnostico;
  },
  set: function (newDiagnostico) {
    diagnostico = newDiagnostico;
  },
});

Consultorio.prototype.todosLosPacientes = function () {
  console.log(JSON.parse(JSON.stringify(this.consPacientes)));
};

Consultorio.prototype.buscarPaciente = function (pacienteABuscar) {
  var index = -1;

  for (var i = 0; i < this.consPacientes.length; i++) {
    if (this.consPacientes[i].nombre == pacienteABuscar) {
      index = i;
    }
  }

  if (index >= 0) {
    console.log(
      "Se encontro el paciente , sus datos son: ",
      JSON.parse(JSON.stringify(this.consPacientes[index]))
    );
  } else {
    console.log("No se encontro el paciente, intente nuevamente");
  }
};

ConsultorioDonJuan.todosLosPacientes(); // todos los pacientes del consultorio don juan
ConsultorioDonJuan.buscarPaciente("Eduardo Loyola"); // success
ConsultorioDonJuan.buscarPaciente("Guaton"); // failure
ConsultorioMaipu.buscarPaciente("Pedro Sanchez"); // success
ConsultorioMaipu.todosLosPacientes(); // todos los pacientes del consultorio maipu

// ********************************************
// *************** TYPESCRIPT *****************
// ********************************************

// COMENTAR TODOS LOS EJERCICIOS PARA COMPROBAR LOS RESULTADOS INDIVIDUALMENTE

// ************** EJERCICIO 1 TS *******************

// Dados el siguiente snippet de código, crea la interfaz Student y úsala para sustituir los unknown:

interface Student {
  name: string;
  age: number;
  occupation: string;
}

const students: Student[] = [
  {
    name: "Patrick Berry",
    age: 25,
    occupation: "Medical scientist",
  },
  {
    name: "Alice Garner",
    age: 34,
    occupation: "Media planner",
  },
];

const logStudent = ({ name, age }: Student) => {
  console.log(`  - ${name}, ${age}`);
};

console.log("Students:");
students.forEach(logStudent);

// ************** EJERCICIO 2 TS *******************

// Utilizando la interfaz Student del ejercicio anterior, crea la definición de User de tal manera que pueda ser o Student o Teacher. Aplica la definición de User donde sea requerido solventar los errores de tipos.

interface User {
  name: string;
  age: number;
}

interface Teacher extends User {
  subject: string;
}

interface Student extends User {
  occupation: string;
}

const users: (Teacher | Student)[] = [
  {
    name: "Luke Patterson",
    age: 32,
    occupation: "Internal auditor",
  },
  {
    name: "Jane Doe",
    age: 41,
    subject: "English",
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker",
  },
  {
    name: "Bruce Willis",
    age: 39,
    subject: "Biology",
  },
];

const logUser = ({ name, age }: User) => {
  console.log(`  - ${name}, ${age}`);
};

users.forEach(logUser);

// ************** EJERCICIO 3 TS *******************

// Con el resultado del ejercicio 2, sustituye la función logUser por la siguiente y modifica el código aplicando las guardas que creas conveniente para corregir los errores de compilación:

interface User {
  name: string;
  age: number;
}

interface Teacher extends User {
  subject: string;
}

interface Student extends User {
  occupation: string;
}

const users: (Teacher | Student)[] = [
  {
    name: "Luke Patterson",
    age: 32,
    occupation: "Internal auditor",
  },
  {
    name: "Jane Doe",
    age: 41,
    subject: "English",
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker",
  },
  {
    name: "Bruce Willis",
    age: 39,
    subject: "Biology",
  },
];

const logUser = (userArray: User[]) => {
  let extraInfo: string | undefined;

  userArray.map((user: User) => {
    if (user.occupation) {
      extraInfo = user.occupation;
    } else {
      extraInfo = user.subject;
    }
    console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
  });
};

logUser(users);

Extra: Crea dos funciones isStudent e isTeacher que apliquen la guarda y úsalas en la función logPerson. Aplica tipado completo en la función (argumentos y valor de retorno). Utiliza is.

function logPerson(users: (Teacher | Student)[]) {
  users.forEach((user) => {
    if (isStudent(user)) {
      console.log(`Student - ${user.name}, ${user.age}, ${user.occupation}`);
    } else {
      console.log(`Professor - ${user.name}, ${user.age}, ${user.subject}`);
    }
  });
}

function isStudent(user: Teacher | Student): user is Student {
  return (user as Student).occupation !== undefined;
}
logPerson(users);

// ************** EJERCICIO 4 TS *******************

// Utilizando las misma interfaz de Student, de los ejercicios anteriores arregla los errores de TypeScript para podamos pasar aquellos criterios que necesitemos sin tener que pasar toda la información de un Student. Arregla los subsiguientes errores que aparezcan al asignar tipo a criteria.

interface User {
  name: string;
  age: number;
}

interface Criteria {
  name?: string;
  age?: number;
}

interface Teacher extends User {
  subject: string;
}

interface Student extends User {
  occupation: string;
}

const students: Student[] = [
  {
    name: "Luke Patterson",
    age: 32,
    occupation: "Internal auditor",
  },
  {
    name: "Emily Coleman",
    age: 25,
    occupation: "English",
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker",
  },
  {
    name: "Bruce Willis",
    age: 39,
    occupation: "Placement officer",
  },
];

const filterStudentsBy = (
  students: Student[],
  criteria: Criteria
): Student[] => {
  return students.filter((user) => {
    const criteriaKeys = Object.keys(criteria);
    console.log(criteriaKeys);
    return criteriaKeys.every((fieldName) => {
      return user[fieldName] === criteria[fieldName];
    });
  });
};

filterStudentsBy(students, { name: "Alexandra Morton" });

// ************** EJERCICIO 5 TS *******************

// Mediante genéricos y tuplas, tipa de forma completa la función para solventar los errores de compilación.

const swap = <T, U>(arg1: T, arg2: U): [U, T] => {
  return [arg2, arg1];
};

let age: number, occupation: string;

[occupation, age] = swap(39, "Placement officer");
console.log("Occupation: ", occupation);
console.log("Age: ", age);

export default class Validator {
  constructor(login) {
    this.login = login;
  }


  validateUsername() {
   return (!(/\d{4,}/).test(this.login) && (/^[A-Za-z]+[A-Za-z_\-0-9]+[A-Za-z]$/g).test(this.login));
  }
}

let valid = new Validator('abSd455_544---Dasaf').validateUsername();
console.log(valid);

// Реализуйте класс Validator с методом validateUsername, который проверяет имя пользователя с помощью регулярных выражений на соответствие следующим правилам:

// Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
// Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.
// Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.
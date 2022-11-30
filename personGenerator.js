const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    FemJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Ольга",
            "id_3": "Ирина",
            "id_4": "Анна",
            "id_5": "Динара",
            "id_6": "Надежда",
            "id_7": "Кристина",
            "id_8": "Екатерина",
            "id_9": "Елизаветта",
            "id_10": "Агнесса"
        }
    }`,

    profMale: `{
        "count": 10,
        "list": {     
            "id_1": "Космонавт",
            "id_2": "Электрик",
            "id_3": "Слесарь",
            "id_4": "Строитель",
            "id_5": "Программист",
            "id_6": "Врач",
            "id_7": "Ученый",
            "id_8": "Инженер",
            "id_9": "Полицейский",
            "id_10": "Лесник"
        }
    }`,

    profFemale: `{
        "count": 10,
        "list": {     
            "id_1": "Кладовщица",
            "id_2": "Секретарша",
            "id_3": "Уборщица",
            "id_4": "Учительница",
            "id_5": "Парикмахер",
            "id_6": "Психолог",
            "id_7": "Медсестра",
            "id_8": "Менеджер",
            "id_9": "Врач",
            "id_10": "Доярка"
        }
    }`,

    secondMale: `{
        "count": 10,
        "list": {     
            "id_1": "Евгеньевич",
            "id_2": "Серафимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Александрович",
            "id_6": "Алексеевич",
            "id_7": "Михайлович",
            "id_8": "Сергеевич",
            "id_9": "Владимирович",
            "id_10": "Николаевич"
        }
    }`,

    secondFemale: `{
        "count": 10,
        "list": {     
            "id_1": "Евгеньевна",
            "id_2": "Серафимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Александровна",
            "id_6": "Алексеевна",
            "id_7": "Михайловна",
            "id_8": "Сергеевна",
            "id_9": "Владимировна",
            "id_10": "Николаевна"
        }
    }`,

    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина, ',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        return this.randomValue(this.firstNameMaleJson);

    },

    randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },
    randomGender: function () {
        if (this.randomIntNumber()===0){
            return this.GENDER_FEMALE;
        } else return this.GENDER_MALE;
    },
    randomFemname: function() {

        return this.randomValue(this.FemJson);

    },
    year: function(){
        return this.randomIntNumber(1950,2010);
    },

    randomprofmale: function() {
        return this.randomValue(this.profMale);
    },
    randomproffemale: function() {
        return this.randomValue(this.profFemale);
    },

    randomsecondmale: function() {
        return this.randomValue(this.secondMale);
    },
    randomsecondfem: function() {
        return this.randomValue(this.secondFemale);
    },
    month: function() {
        let a = this.randomIntNumber(12,1);
        if (a===1){
            return "Января";
        } if (a===2){
            return "Февраля";
        } if (a===3){
            return "Марта";
        } if (a===4){
            return "Апреля";
        } if (a===5){
            return "Мая";
        } if (a===6){
            return "Июня";
        } if (a===7){
            return "Июля";
        } if (a===8){
            return "Августа";
        } if (a===9){
            return "Сентября";
        } if (a===10){
            return "Октября";
        } if (a===11){
            return "Ноября";
        } else return "Декабря"
    },
    day: function() {
        if (this.month === "Январь" || "Март" || "Май" || "Июль" || "Август" || "Октябрь" || "Декабрь") {
            return this.randomIntNumber(31,1)
        } if (this.month === "Февраль"){
            return this.randomIntNumber(28,1)
        } else {
            return this.randomIntNumber(30,1)
        }
    },

   getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.fem = this.randomFemname();
        this.person.surname = this.randomSurname();
        this.person.year = this.year();
        this.person.profMale = this.randomprofmale();
        this.person.profFemale = this.randomproffemale();
        this.person.secondmale = this.randomsecondmale();
        this.person.secondfem = this.randomsecondfem();
        this.person.month = this.month();
        this.person.day = this.day();
        return this.person;
    }
};
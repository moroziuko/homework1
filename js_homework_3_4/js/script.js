"use strict";

let question1 = {
    title: "1. Вопрос №1",
    optionList: {
        option1: "Вариант ответа №1",
        option2: "Вариант ответа №2",
        option3: "Вариант ответа №3"
    }
};

let question2 = {
    title: "2. Вопрос №2",
    optionList: {
        option1: "Вариант ответа №1",
        option2: "Вариант ответа №2",
        option3: "Вариант ответа №3"
    }
};

let question3 = {
    title: "3. Вопрос №3",
    optionList: {
        option1: "Вариант ответа №1",
        option2: "Вариант ответа №2",
        option3: "Вариант ответа №3"
    }
};

let questionList = [question1, question2, question3];
let form = generateElement(generateElement(document.body, "div"), "form");

function generateElement(parentElement, tagName) {
    let element = document.createElement(tagName);
    parentElement.appendChild(element);
    return element;
}

function generateElementWithText(parentElement, tagName, text) {
    let element = document.createElement(tagName);
    element.innerHTML = text;
    parentElement.appendChild(element);
}

function generateQuestionOptions(parentElement, optionList) {
    for (let option in optionList) {
        if (optionList.hasOwnProperty(option)) {
            let div = generateElement(parentElement, "div")
            let label = generateElement(div, "label");
            let input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            label.appendChild(input);

            let labelText = document.createTextNode(optionList[option]);
            label.appendChild(labelText);
        }
    }
}

function generateSubmitButton(parentForm) {
    let div = generateElement(parentForm, "div");
    let button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.innerHTML = "Проверить мои результаты";
    div.appendChild(button);
}

function generateQuestions(parentForm, questionList) {
    for (let index = 0; index <= questionList.length - 1; index++) {
        let fieldset = generateElement(parentForm, "fieldset");
        generateElementWithText(fieldset, "p", questionList[index].title);
        let div = generateElement(fieldset, "div");
        generateQuestionOptions(fieldset, questionList[index].optionList);
    }
}

function generateFormContent(parentForm, questionList) {
    generateElementWithText(parentForm, "h4", "Тест по программированию");
    generateQuestions(parentForm, questionList)
    generateSubmitButton(parentForm);
}

function addClassNameToElements(selector, className) {
    let ulList = document.querySelectorAll(selector);
    for (let index = 0; index < ulList.length; index++) {
        ulList[index].classList.add(className);
    }
}

generateFormContent(form, questionList);

addClassNameToElements("body>div", "container");
addClassNameToElements("body>div", "col-6");
addClassNameToElements("h4", "text-center");
addClassNameToElements("form>div", "text-center");
addClassNameToElements("button", "btn");
addClassNameToElements("button", "btn-primary");



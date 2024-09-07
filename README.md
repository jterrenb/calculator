TOP Project: Calculator

The goal of this project is to make a simple calculator with HTML, CSS and Javascript.
The basic functions of this calculator will be add, substract, multiply and divide.
The calculator is only based in buttons to function propperly.

PSEUDOCODE:
- Make the HTML buttons and all the image of the calculator in HTML, all of the content done in a container.
- Do the CSS to make the calculator look good enought.
- Create the event listener for the action when a click is done in the container who has the calculator.
- Switch the action depending of the button clicked,storing the value clicked and showing it in the display.
    - Por defecto el valor de los números pulsados de incluirá en la variable firstNum, la cual no está inicializada.
    - Establecemos un máximo de 17 caracteres para que sean mostrados en la pantalla y así no hacer overflow.
    - Cuando se pulsa un número, si la variable carece de valor, se le asignará el valor del contenido del botón. Si tiene ya un valor y no es mayor de 17, se añadirá el valor del contenido del botón a la variable. Si tiene 17 caracteres, entonces no asignará ningún valor adicional.
    - Una vez pulsado un botón operador, los números que se pulsen deben ser almacenados en la variable secondNum.
    - Al pulsar el botón de igual o de cualquier operador, debe realizarse la operación matemática, mostrando el resultado en el display.
    - Si 

TOP Project: Calculator

The goal of this project is to make a simple calculator with HTML, CSS and Javascript.
The basic functions of this calculator will be add, substract, multiply and divide.
The calculator is only based in buttons to function propperly.

PSEUDOCODE:
- Make the HTML buttons and all the image of the calculator in HTML, all of the content done in a container.
- Do the CSS to make the calculator look good enought.
- Create the event listener for the action when a click is done in the container who has the calculator.
- Switch the action depending of the button clicked,storing the value clicked and showing it in the display.
    - Por defecto el valor de los números pulsados se incluirá en la variable nums[0], la cual no está inicializada.
        - Si se pulsa un número y la variable no está inicializada, el número la inicializa. Si ya está inicializada, agrega el número tras el que hubiera.
        - Se establece un máximo de 15 caracteres para las variables, por lo tanto cada vez que un número va a agregarse a la variable, se revisa la cantidad de caracteres y cuando llega a 15 deja de admitir ningún carácter más.
    - Una vez pulsado un botón operador, se guarda el valor en la variable operator, la cual en un principio no está inicializada.los números que se pulsen después de pulsar un operador deben ser almacenados en la variable nums[1]. Además, ese botón cambia de color para que el usuario pueda saber que operación es la que va a realizar.
        - Si se pulsa el botón de cualquier operador y la variable nums[0] no está definida, no se guardará ningún valor en el operador ni se cambiará el eventListener a la variable nums[1].
    - Al pulsar el botón de igual o de cualquier operador, debe realizarse la operación matemática, mostrando el resultado en el display y eliminando el fondo modificado al operador, dejando vacía tanto la variable operador como nums.
        - Si nums[1] no está definida, entonces el botón del operador vuelve a su fondo original y la variable operador vuelve a quedar vacía, volviendo el eventListener a la variable nums[0].
        - Si en vez de pulsar el botón equal, se pulsa un botón operador, una vez realizada la operación anterior, se almacena el número contenido en el display en la variable nums[0], y se almacena ese nuevo operador en la variable operator, además de cambiar el eventListener a nums[1].
    - Si se pulsa el botón ".", se evalúa la variable en que se encuentre en uso, si ya tiene un "." en la variable, no hace nada, y si no lo hay, añade un "." al final de la variable.
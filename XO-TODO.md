# Крестики-нолики (XO):

+ вёрстка поля N x M (пока 3 на 3)
+ очередность ходов
+ проверка на конец игры
+ модель поля
+ рисование модели в ДОМ элементы

- разобраться с Event Bubling и пофиксить багу с перетягиванием
- не обновлять уже заполненную ячейку
- вынести getElementById из checkGameEnd() в отдельную функцию
- показывать (где-то) чей сейчас ход
- блокировать поле полностью когда достигнут конец игры
- после конца игры показывать (опять где-то) победителя

# Docs
    
* Model-View-Controler: https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
* Event bubling and capturing: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture

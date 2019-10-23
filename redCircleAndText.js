createCircle();

expandCirclePromise(document.getElementById('circle'), 5).then(addText); 
// time указывается в секундах, за сколько круг должен быть нарисован


// ----------------------------------- НОВЫЙ ЧЕРЕЗ Promise --------------------------------------------

function expandCirclePromise(domElement, time) {
  let radius = 200;
  let pxStep = 5;
  time = time * 1000 / (radius / pxStep);
  return new Promise(function(resolve) {
    // тут resolve - это тот же callback, только завернутый в "коробку"
    //  let stepPx = radius / time / 1000;
    setTimeout(function expand() {

      let currentWidthNumber = Number(domElement.style.width.slice(0, -2));

      if (currentWidthNumber >= radius) {
        resolve(domElement);
        return
      }
      domElement.style.width = currentWidthNumber + pxStep + 'px';
      domElement.style.height = currentWidthNumber + pxStep + 'px';
      domElement.style.borderRadius = currentWidthNumber + pxStep + 'px';
      setTimeout(expand, time)
    }, time)

  });
}

/**
 * Это - JSDoc.
 * @param {HTMLElement} domElement - reference to circle element
 * @param {number} time - time to expand in ms
 * @param {function} onCompleted - callback which will execute after the circle is fully shown
 */

// ----------------------------------- НОВЫЙ ЧЕРЕЗ setTimeout --------------------------------------------

function expandCircle(domElement, time, onCompleted) {
  setTimeout(function expand() {
    let currentWidthNumber = Number(domElement.style.width.slice(0, -2));
    if (currentWidthNumber >= 200) {
      onCompleted(domElement);
      return
    }
    domElement.style.width = currentWidthNumber + 5 + 'px';
    domElement.style.height = currentWidthNumber + 5 + 'px';
    domElement.style.borderRadius = currentWidthNumber + 5 + 'px';
    setTimeout(expand, time)
  }, time)
}

function createCircle(size = 5, color = 'red') {
  let circle = document.createElement("div");
  circle.style.backgroundColor = 'red';
  circle.style.borderRadius = size + 'px';
  circle.style.width = size + 'px';
  circle.style.height = size + 'px';
  circle.id = 'circle';
  circle.style.position = 'absolute';
  circle.style.top = '150px';
  circle.style.left = '150px';

  document.querySelector("body").appendChild(circle);
}


function addText(domElement, lineHeight = '200px', text = 'Random Test Text') {
  domElement.innerHTML = text;
  domElement.style.textAlign = 'center';
  domElement.style.lineHeight = lineHeight;
}

// ----------------------------------- СТАРЫЙ ЧЕРЕЗ setInterval --------------------------------------------

/*function expandCircle(domElement, time, onCompleted) {

  // если хо, то попробуй тут заменить на setTimeout, это более гибкий инструмент
  let intervalId = setInterval(function addSomePx(px = 5) { // px - не используемая --- подумал на случай того, если придется сменить скорость отображения или еще что-то

    let currentWidthNumber = Number(domElement.style.width.slice(0, -2));
    domElement.style.width = currentWidthNumber + 5 + 'px';
    domElement.style.height = currentWidthNumber + 5 + 'px';
    domElement.style.borderRadius = currentWidthNumber + 5 + 'px';

    if (currentWidthNumber >= 200) {
      clearInterval(intervalId);
      onCompleted(domElement);
    }
  }, time)
}*/


// ----------------------------------- Старые комментарии --------------------------------------------

// Промисы кажутся более сложными, но у них есть свои фичи:
// * на промис можно вешать много независимых коллбеков
// * их можно объеденять в линейные цепочки
// * в цепочках можно преобразовывать возвращенное значение
// * разные промисы можно объеденить в один: Promise.all([promise1, promise2, ...])
// * на промисах и async/await асинхронный код может быть простым как синхронный :)

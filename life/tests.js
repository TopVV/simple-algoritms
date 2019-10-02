describe("Check How Much Alive Is Around", function () {

    it("Проверяет сколько живых клеток вокруг 0, 0", function () {
        assert.equal(checkHowMuchIsAliveAround(forTest, 0, 0), 1);

    });
    it("Проверяет сколько живых клеток вокруг 1, 1", function () {
        assert.equal(checkHowMuchIsAliveAround(forTest, 1, 1), 4);
    });
    it("Проверяет сколько живых клеток вокруг 2, 2", function () {
        assert.equal(checkHowMuchIsAliveAround(forTest, 2, 2), 2);
    });
    it("Проверяет сколько живых клеток вокруг 3, 3", function () {
        assert.equal(checkHowMuchIsAliveAround(forTest, 3, 3), 3);
    });
    it("Проверяет сколько живых клеток вокруг 4, 4", function () {
        assert.equal(checkHowMuchIsAliveAround(forTest, 4, 4), 3);
    });
    it("Проверяет сколько живых клеток вокруг 5, 5", function () {
        assert.equal(checkHowMuchIsAliveAround(forTest, 5, 5), 2);
    });

});
mocha.run();







// FOR HTML
/* 
<!-- для тестов -->

<!-- добавим стили mocha для отображения результатов -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
<!-- добавляем сам фреймворк mocha -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
<script>
// включаем режим тестирования в стиле BDD
mocha.setup('bdd');
</script>
<!-- добавим chai -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
<script>
// chai предоставляет большое количество функций. Объявим assert глобально
let assert = chai.assert;
</script>
 */
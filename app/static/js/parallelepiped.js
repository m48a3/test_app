export class Parallelepiped {
    constructor() {
        this.w = 0;
        this.l = 0;
        this.h = 0;
        this.s = 0;
        this.v = 0;
        this.d = 0;
    }
    /**
     * Ввод пользователем значений сторон параллелепипеда и обнуление его площади, объема и диагонали.
     * @param callback Функция ввода сторон параллелепипеда в виде массива из трёх чисел.
     */
    async inputWLH(callback) {
        [this.w, this.l, this.h] = await callback();
        this.s = 0;
        this.v = 0;
        this.d = 0;
    }
    /**
     * Расчет и вывод на экран диагонали параллелепипеда.
     * @param callback Функция вывода на экран диагонали параллелепипеда.
     */
    calcAndShowD(callback) {
        if (!this.d)
            this.d = Math.sqrt(this.w * this.w + this.l * this.l + this.h * this.h);
        callback(this.d);
    }
    /**
     * Расчет и вывод на экран площади поверхности параллелепипеда.
     * @param callback Функция вывода на экран площади поверхности параллелепипеда.
     */
    calcAndShowS(callback) {
        if (!this.s)
            this.s = 2 * (this.w * this.l + this.w * this.h + this.l * this.h);
        callback(this.s);
    }
    /**
     * Расчет объема параллелепипеда и вывод его значения на экран.
     * @param callback Функция вывода на экран объема параллелепипеда.
     */
    calcAndShowV(callback) {
        if (!this.v)
            this.v = this.w * this.l * this.h;
        callback(this.v);
    }
}
let X = 4
let Y = 4
led.plot(X, Y)
basic.forever(function () {
    if (X != 0) {
        if (X % Y == X % X) {
            if (led.point(X, Y) == true) {
                X += -1
                led.plot(X, Y)
                led.plot(Y, X)
                basic.pause(25)
                led.plot(X, X)
            }
        } else if (X % Y != X % X) {
            X += -1
            led.plot(X, Y)
            led.plot(Y, X)
            basic.pause(15)
            led.plot(Y / 2, Y / 2)
            if (X + Y == 4) {
                X += -1
                led.plot(X, Y)
                led.plot(Y, X)
                X += 1
            }
        }
        for (let index = 0; index < 2; index++) {
            Y += -1
            led.plot(X, Y)
            led.plot(Y, X)
            Y += 1
            led.plot(X, Y)
            led.plot(Y, X)
            basic.pause(20)
        }
    } else if (X == 0) {
        led.plot(Y / 2, Y / 2)
        Y += -1
        led.plot(Y, X)
        led.plot(X, Y)
        led.plot(Y, Y)
        for (let index = 0; index < 2; index++) {
            X += 1
            led.plot(X, Y)
            led.plot(Y, X)
        }
    }
    if (led.point(0, 0) == true) {
        basic.pause(500)
        basic.clearScreen()
        X = 4
        Y = 4
    }
})

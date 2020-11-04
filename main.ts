basic.forever(function () {
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= X + 1; Y++) {
            led.plot(4 - (X - Y), 0 + Y)
        }
        basic.pause(500)
    }
    for (let X = 0; X <= 5; X++) {
        for (let Y = 0; Y <= X; Y++) {
            led.plot(0 + Y, 4 - (X - Y))
        }
        basic.pause(500)
    }
    basic.clearScreen()
    basic.clearScreen()
})

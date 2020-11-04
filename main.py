X = 4
Y = 4
led.plot(X, Y)

def on_forever():
    global X, Y
    if X != 0:
        if X % Y == X % X:
            if led.point(X, Y) == True:
                X += -1
                led.plot(X, Y)
                led.plot(Y, X)
                basic.pause(100)
                led.plot(X, X)
                X += -1
                led.plot(X, Y)
                led.plot(Y, X)
        elif X % Y != X % X:
            X += -1
            led.plot(X, Y)
            led.plot(Y, X)
            basic.pause(100)
            led.plot(Y / 2, Y / 2)
            if X + Y == 4:
                X += -1
                led.plot(X, Y)
                led.plot(Y, X)
                X += 1
        for index in range(2):
            Y += -1
            led.plot(X, Y)
            led.plot(Y, X)
            Y += 1
            led.plot(X, Y)
            led.plot(Y, X)
            Y += 1
            led.plot(X, Y)
            led.plot(Y, X)
            Y += -1
    elif X == 0:
        led.plot(Y / 2, Y / 2)
        Y += -1
        led.plot(Y, X)
        led.plot(X, Y)
        led.plot(Y, Y)
        for index2 in range(2):
            X += 1
            led.plot(X, Y)
            led.plot(Y, X)
            X += 1
            led.plot(X, Y)
            led.plot(Y, X)
            X += -1
    if led.point(0, 0) == True:
        basic.pause(500)
        basic.clear_screen()
        X = 4
        Y = 4
basic.forever(on_forever)

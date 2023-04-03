input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("i am m. microbit")
})
let ssp = 0
basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("" + ("" + input.temperature()))
    }
    
})
basic.forever(function on_forever2() {
    
})
basic.forever(function on_forever3() {
    
    if (input.logoIsPressed()) {
        basic.showNumber(1)
        basic.showNumber(2)
        basic.showNumber(3)
        ssp += randint(1, 3)
        music.playMelody("C5 B A G F - - - ", 120)
        if (ssp == 1) {
            basic.showLeds(`
                . . . . #
                                # # . # .
                                . . # . .
                                # # . # .
                                . . . . #
            `)
        } else if (ssp == 2) {
            basic.showLeds(`
                . . . . .
                                . . # . .
                                . # # # .
                                . . # . .
                                . . . . .
            `)
        } else if (ssp == 3) {
            basic.showLeds(`
                . . # . .
                                . . # . .
                                . . # . .
                                . . # . .
                                . . # . .
            `)
        }
        
        basic.pause(2000)
        basic.clearScreen()
    }
    
})

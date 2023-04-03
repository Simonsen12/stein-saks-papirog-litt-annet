def on_button_pressed_a():
    radio.send_string("i am m. microbit")
input.on_button_pressed(Button.A, on_button_pressed_a)

ssp = 0

def on_forever():
    if input.button_is_pressed(Button.AB):
        basic.show_string("" + str((input.temperature())))
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)

def on_forever3():
    global ssp
    if input.logo_is_pressed():
        basic.show_number(1)
        basic.show_number(2)
        basic.show_number(3)
        ssp += randint(1, 3)
        music.play_melody("C5 B A G F - - - ", 120)
        if ssp == 1:
            basic.show_leds("""
                . . . . #
                                # # . # .
                                . . # . .
                                # # . # .
                                . . . . #
            """)
        elif ssp == 2:
            basic.show_leds("""
                . . . . .
                                . . # . .
                                . # # # .
                                . . # . .
                                . . . . .
            """)
        elif ssp == 3:
            basic.show_leds("""
                . . # . .
                                . . # . .
                                . . # . .
                                . . # . .
                                . . # . .
            """)
        basic.pause(2000)
        basic.clear_screen()
basic.forever(on_forever3)

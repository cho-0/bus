def on_received_string(receivedString):
    global v
    if receivedString == convert_to_text(n):
        pins.digital_write_pin(DigitalPin.P11, 1)
        radio.set_transmit_power(7)
        radio.send_string("o")
        while v < 0:
            v += 1
            basic.pause(10)
        if v == 0:
            for index in range(5):
                music.play_tone(523, music.beat(BeatFraction.QUARTER))
                basic.pause(100)
            music.play_tone(523, music.beat(BeatFraction.BREVE))
            music.play_tone(523, music.beat(BeatFraction.BREVE))
            music.play_tone(523, music.beat(BeatFraction.BREVE))
radio.on_received_string(on_received_string)

v = 0
n = 0
n = 147
v = -50
pins.digital_write_pin(DigitalPin.P11, 0)
radio.set_group(21)
radio.on()

def on_forever():
    motorbit.freestyle(v, v)
basic.forever(on_forever)

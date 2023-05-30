Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    basic.showNumber(1)
    basic.pause(500)
    basic.showNumber(0)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showNumber(1)
    basic.pause(500)
    basic.showNumber(0)
})
basic.showNumber(0)
basic.forever(function () {
	
})

#pragma strict
var hSliderValue : float  = 1;

function Start () {
	hSliderValue = 1;
}

function Update () {

}

function OnGUI () {
	var espacio : int = 10;
	hSliderValue = GUI.HorizontalSlider(Rect((Screen.width /2) - (250/2) ,Screen.height /2,250,80),hSliderValue,0.0,1.0);
	AudioListener.volume = hSliderValue;
}

#pragma strict

var continuar_texture : Texture;
var continuar_pressed_texture : Texture;

function OnMouseDown()
{
	guiTexture.texture = continuar_pressed_texture;
}

function OnMouseUp()
{
	guiTexture.texture = continuar_texture;
	
	Application.LoadLevel(Application.loadedLevel);
}


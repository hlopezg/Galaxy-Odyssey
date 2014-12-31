#pragma strict

var continuar_texture : Texture;
var continuar_pressed_texture : Texture;
private var ratio : int;

function OnMouseDown()
{
	guiTexture.texture = continuar_pressed_texture;
}

function OnMouseUp()
{
	guiTexture.texture = continuar_texture;
	
	var pausa : GameObject;
	pausa = GameObject.FindGameObjectWithTag("Pausa_texture");

	if(pausa != null)
		pausa.GetComponent(pausa_script).pausa(true);
		
}
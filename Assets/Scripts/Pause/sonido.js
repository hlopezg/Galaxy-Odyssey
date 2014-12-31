#pragma strict

var sonido_texture : Texture;
var sonido_pressed_texture : Texture;

var sonido_apagado_texture : Texture;
var sonido_apagado_pressed_texture : Texture;

private var volumen_activado : boolean = true;

function Start()
{
}

function OnMouseDown()
{
	if(volumen_activado)
		guiTexture.texture = sonido_pressed_texture;
	else
		guiTexture.texture = sonido_apagado_pressed_texture;
}

function OnMouseUp()
{
	
	volumen_activado = !volumen_activado;
	if(volumen_activado)
	{
		AudioListener.volume = 1;
		guiTexture.texture = sonido_texture;
	}
	else
	{
		AudioListener.volume = 0;
		guiTexture.texture = sonido_apagado_texture;
	}
}



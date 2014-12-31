#pragma strict
public var energia : float = 70;
private var factor_energia : float;
public var offset_X : float = 0;
public var offset_Y : float = 0;

function Start () {
	factor_energia = (Screen.width/3)/energia;

	var newInset : Rect = new Rect( offset_X,
									(Screen.height - guiTexture.texture.height) + offset_Y, 
									energia *factor_energia, 
									guiTexture.texture.height);  
	//Rect (x, y, width, height) from the bottom left corner.
 	guiTexture.pixelInset = newInset;
}

function Update () {
	guiTexture.pixelInset.width = energia *factor_energia;
}

public function ajustar_barra_energia(dano : int)
{
	energia = energia + dano;
}
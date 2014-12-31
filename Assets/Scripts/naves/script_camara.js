#pragma strict
var muerto : boolean = false;
var font : Font;
var reiniciar_texture : GUITexture;
var salir_texture : GUITexture;

function Start () {
	reiniciar_texture.enabled = false;
	salir_texture.enabled = false;
}

public function Gameover()
{
	muerto = true;
	//yield WaitForSeconds (1);
	reiniciar_texture.enabled = true;
	salir_texture.enabled = true;
	
	var newInset : Rect;
	if(Screen.width <= 479)
	{
		reiniciar_texture.transform.position.x = 0.55;
		salir_texture.transform.position.x = 0.35;
	}else if(Screen.width > 479 && Screen.width < 1200)
	{
		newInset = new Rect(0, reiniciar_texture.transform.position.y, reiniciar_texture.texture.width*0.6, reiniciar_texture.texture.height*0.6);  
 		reiniciar_texture.pixelInset = newInset;
 		salir_texture.pixelInset = newInset;
 		
		reiniciar_texture.transform.position.x = 0.55;
		salir_texture.transform.position.x = 0.35;
	}
	else if(Screen.width >= 1200)
	{
		newInset = new Rect(0, reiniciar_texture.transform.position.y, reiniciar_texture.texture.width, reiniciar_texture.texture.height);  
 		reiniciar_texture.pixelInset = newInset;
 		salir_texture.pixelInset = newInset;
 		
		reiniciar_texture.transform.position.x = 0.55;
		salir_texture.transform.position.x = 0.35;
	}
	//Application.LoadLevel(Application.loadedLevel);
}
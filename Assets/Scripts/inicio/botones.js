#pragma strict

var incio : GUITexture;
var creditos : GUITexture;
var salir : GUITexture;

function Start () {
	/*if(Screen.width> 1200)
	{
		incio.pixelInset = Rect (incio.pixelInset.x, incio.pixelInset.y, incio.pixelInset.width*1.6, incio.pixelInset.height*1.6);
		creditos.pixelInset = Rect (creditos.pixelInset.x, creditos.pixelInset.y, creditos.pixelInset.width*1.6, creditos.pixelInset.height*1.6);
		salir.pixelInset = Rect (salir.pixelInset.x, salir.pixelInset.y, salir.pixelInset.width*1.6, salir.pixelInset.height*1.6);
	}else if(Screen.width > 479 && Screen.width < 1200)
	{
		incio.pixelInset = Rect (incio.pixelInset.x, incio.pixelInset.y, incio.pixelInset.width*0.6, incio.pixelInset.height*0.6);
		creditos.pixelInset = Rect (creditos.pixelInset.x, creditos.pixelInset.y, creditos.pixelInset.width*0.6, creditos.pixelInset.height*0.6);
		salir.pixelInset = Rect (salir.pixelInset.x, salir.pixelInset.y, salir.pixelInset.width*0.6, salir.pixelInset.height*0.6);
	}*/
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape))
	{
		Application.Quit();
	}
}
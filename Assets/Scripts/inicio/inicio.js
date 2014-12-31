var texture1 : Texture;
var texture2 : Texture;
var camara : Camera;

private var animacion = false;

function Start()
{
	if(PlayerPrefs.GetInt("LoadLevel",0) == 0)
		PlayerPrefs.SetInt("LoadLevel",1);
}


function OnMouseDown()
{
	if(gameObject.name.Equals("Iniciar"))
	{
		//PlayerPrefs.SetInt("LoadLevel",1);
		Application.LoadLevel("elegir_etapa");
	}
	if(gameObject.name.Equals("Creditos") && animacion == false)
	{
		camara.animation.Play("creditos_in");
		animacion = true;
	}else if(gameObject.name.Equals("Creditos") && animacion == true)
	{
		camara.animation.Play("creditos_out");
		animacion = false;
	}
	if(gameObject.name.Equals("Salir"))
	{
		Application.Quit();
	}
}

function OnMouseEnter()
{
		guiTexture.texture = texture2;
}

function OnMouseExit()
{
		guiTexture.texture = texture1;
}
#pragma strict
private var energia : float = 250;
public var restar_energia : float = 5;
private var factor_energia : float;
public var offset_X : float = 0;
public var offset_Y : float = 0;

private var tiempo : float = 0;
public var energia_agotada :boolean = false;
private var energia_original : float;

private var mn : GameObject;

private var restar_por_frame : float;

private var tamano_por_energia : float;
function Start()
{
	var ancho : int;
	var alto : int;
	
	ancho = Screen.width;
	alto = Screen.height;
		
	energia_original = energia;
	
	factor_energia = (Screen.width/3);
	
	tamano_por_energia = factor_energia / energia;
	//Debug.Log("tamano_por_energia " + tamano_por_energia);
	
	//Debug.Log(" factor_energia : " + factor_energia	 + ", ancho: " + ancho + " energia_original: "+ energia_original);
	energia = 0;
	var newInset : Rect = new Rect(offset_X,
									(Screen.height - guiTexture.texture.height) + offset_Y, 
									0, 
									guiTexture.texture.height);  
	//Rect (x, y, width, height) from the bottom left corner.

 	guiTexture.pixelInset = newInset;
	mn = GameObject.Find("Player");
	
}

function Update () {
	if(Time.time > tiempo + 0.3 && energia > 0)
	{
		energia = energia - restar_energia;
		guiTexture.pixelInset.width = energia * tamano_por_energia;
		tiempo = Time.time;
	}else if(energia <= 0 && energia_agotada == false)
	{
		if(mn != null)
			mn.GetComponent(MovimientoNave).disminuir_power_up();
		//Debug.Log(energia + " " + energia_agotada);
		//energia_agotada = true;
	}
}

public function ajustar_barra_energia(dano : int)
{
	energia = energia + dano;
	
	if(energia <= 0 && energia_agotada == false)
	{
		energia = 0;
		var mn : GameObject = GameObject.Find("Player");
		if(mn != null)
			mn.GetComponent(MovimientoNave).disminuir_power_up();
	}
	guiTexture.pixelInset.width = energia;
}

public function reestablecer_barra_power_up()
{
	energia_agotada = false;
	
	//factor_energia = 240/energia_original;
	energia = energia_original;
}


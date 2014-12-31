#pragma strict

public var posicion : int = 1;
var como_jugar_1 : GameObject;
var como_jugar_2 : GameObject;
var como_jugar_3 : GameObject;
public var actualizar : GameObject;
 
function Start()
{
	//loading.SetActive(false);
	if (Application.platform == RuntimePlatform.Android
		|| Application.platform == RuntimePlatform.WP8Player
		|| Application.platform == RuntimePlatform.IPhonePlayer)
	{
		posicion = 3;
		como_jugar_1.SetActive(false);
		como_jugar_2.SetActive(false);	
		como_jugar_3.SetActive(true);
	}else 
	{
		posicion = 2;
		como_jugar_1.SetActive(false);
		como_jugar_2.SetActive(true);	
		como_jugar_3.SetActive(false);
	}
}

function OnMouseUp(){
	if(gameObject.name.Equals("Play"))
	{
		var act = actualizar.GetComponent(como_jugar);
		como_jugar_1.SetActive(false);
		como_jugar_2.SetActive(false);	
		como_jugar_3.SetActive(false);
		gameObject.SetActive(false);
		act.gameObject.SetActive(false);
	}
}

function OnMouseDown()
{
	var act = actualizar.GetComponent(como_jugar);
		
	if(gameObject.name.Equals("siguiente"))
	{
		posicion++;
		
		if(posicion == 2)
		{	
				como_jugar_1.SetActive(false);
				como_jugar_2.SetActive(true);	
				como_jugar_3.SetActive(false);
		}
		if(posicion == 3)
		{
				como_jugar_1.SetActive(false);
				como_jugar_2.SetActive(false);	
				como_jugar_3.SetActive(true);
		}		
		if(posicion == 4)
		{
			como_jugar_1.SetActive(false);
			como_jugar_2.SetActive(false);	
			como_jugar_3.SetActive(false);
			gameObject.SetActive(false);
			
			act.gameObject.SetActive(false);
		}
		act.posicion = posicion;
	}
	
	if(gameObject.name.Equals("antes"))
	{
		posicion = posicion - 1;
		
		if(posicion == 0)
		{
			Application.LoadLevel("inicio");
		}
		else if(posicion == 1)
		{
			como_jugar_1.SetActive(true);
			como_jugar_2.SetActive(false);	
			como_jugar_3.SetActive(false);
		}
		else if(posicion == 2)
		{
			como_jugar_1.SetActive(false);
			como_jugar_2.SetActive(true);	
			como_jugar_3.SetActive(false);
		}
		act.posicion = posicion;
	}
}
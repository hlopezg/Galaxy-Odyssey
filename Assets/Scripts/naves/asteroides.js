var i : int;

var Nave = new Array(10);
var AnchoPantalla;
var AltoPantalla;

var Salto = new Array(10);

for(i = 1; i<11; i++)
{
	Salto[i]=Random.Range(0.5,3);
}

function Start () {
/*
	AnchoPantalla = Screen.width;
	AltoPantalla = Screen.height;
	
	for(i = 1; i<11;i++)
	{
		Nave[i] = GameObject.CreatePrimitive(PrimitiveType.Sphere);
		Nave[i].name = "Nave" + i.ToString();
		
		Nave[i].transform.position = Vector3(Random.Range((AnchoPantalla/6.0)*-1.0,AnchoPantalla/6.0),
									 		 Random.Range((AltoPantalla/6.0)*-1.0,AltoPantalla/6.0),
									 		 0);	
									 		 							
		var escala = Random.Range(2,10);
		Nave[i].transform.localScale.x = escala;
		Nave[i].transform.localScale.y = escala;
		Nave[i].transform.localScale.z = escala;
		
		Nave[i].AddComponent("Rigidbody");
		Nave[i].rigidbody.useGravity = false;
							
	}
	*/
}

function Update () {
	/*for(i = 1;i<11;i++)
	{
		Nave[i].transform.position.x = Nave[i].transform.position.x - Salto[i];
		if(Nave[i].transform.position.x < (AnchoPantalla/6.0)*-1.0)
		{
			Nave[i].transform.position.x  = (AnchoPantalla/6.0);
			Nave[i].transform.position.y  = Random.Range((AnchoPantalla / 6.0)*(-1.0),AltoPantalla / 6.0);
		}
	}*/
}
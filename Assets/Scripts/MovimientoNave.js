#pragma strict
@script RequireComponent(Collider)

public var velocidad = 0.0f;
var misiles : Transform;
var explosion : Transform;
var mover = true;
public var bullet : Rigidbody; 
public var misil : Rigidbody;
var pistola: Transform;
var pistola2: Transform;
var pistola_misil: Transform;
var muerto = false;
private var mainCamara : GameObject;
private var height : int;
private var width : int;
private var margen : int = 2;

var attacktimer :float; 
var attacktimer_misil :float;
var coolDown : float = 1.0f;
var coolDown_misil : float = 2f;

public var escudo : GameObject; 

public var power_disparo : int = 0;
private var nivel_escudo : int = 0;
private var cambio_escudo : boolean= false;

private var tipo_disparo = 1;		//1 = normal, 2 = hacia el Player

function Start () {
	mainCamara  = GameObject.Find("Main Camera");
	escudo = GameObject.Find("Escudo");
	escudo.SetActive(false);

	height = 2 * Camera.main.orthographicSize;
  	width = height * Camera.main.aspect;
  	
  	attacktimer = 0;
  	attacktimer_misil = 0;
  	Time.timeScale = 1;
  	
}

function FixedUpdate  () {
	if(mover)
	{
		transform.Translate(-(Input.GetAxis("Horizontal")) - velocidad,Input.GetAxis("Vertical"),0);	
		mainCamara.transform.position.x = mainCamara.transform.position.x + velocidad;	

	}
}

function Update  () {
	if(mover)
	{
		if(Input.GetButton ("Fire1"))	//con teclado o conrol
		{
			if(tipo_disparo == 1)
			{
				if(Time.time > attacktimer)
				{
					if(power_disparo >= 0)
					{
						var clone : Rigidbody= Instantiate(bullet,pistola.position,pistola.rotation);
						clone.velocity = transform.TransformDirection(Vector3(-200,0,0));
						
					}
					if(power_disparo >= 1 && Time.time > attacktimer)
					{
						var clone2 : Rigidbody= Instantiate(bullet,pistola2.position,pistola2.rotation);
						clone2.velocity = transform.TransformDirection(Vector3(-200,0,0));
					}
					attacktimer = Time.time + coolDown;
				}
				
				if(Time.time > attacktimer_misil && power_disparo >= 3)
				{
					var clone3 : Rigidbody= Instantiate(misil,pistola_misil.position,pistola_misil.rotation);
					attacktimer_misil = Time.time + coolDown_misil;
				}
			}
		}
		
		if(Input.touchCount > 0)		//touch
		{
			var touchPos3D:Vector3 = Camera.main.ScreenToWorldPoint(Vector3(Input.GetTouch(0).position.x,Input.GetTouch(0).position.y,0));
			//var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;
            
            // Move object across XY plane
                        
			var worldPos = Camera.main.ScreenToWorldPoint(Input.GetTouch(0).position);
			worldPos.z = 0;
			worldPos.x = worldPos.x + 15;
            transform.position = Vector3.MoveTowards(transform.position, worldPos, 1.5);
            
            
			
			if(Time.time > attacktimer)
			{
				if(power_disparo >= 0)
				{
					var clone4 : Rigidbody= Instantiate(bullet,pistola.position,pistola.rotation);
					clone4.velocity = transform.TransformDirection(Vector3(-200,0,0));
				}
				if(power_disparo >= 1)
				{
					var clone5 : Rigidbody= Instantiate(bullet,pistola2.position,pistola2.rotation);
					clone5.velocity = transform.TransformDirection(Vector3(-200,0,0));
				}
				if(power_disparo >= 2)
				{
					if(Time.time > attacktimer_misil)
					{
						var clone6 : Rigidbody= Instantiate(misil,pistola_misil.position,pistola_misil.rotation);
						attacktimer_misil = Time.time + coolDown_misil;
					}
				}
				attacktimer = Time.time + coolDown;
			}
		}
		
		if(transform.position.y > (height/2)-margen)
		{
			transform.position.y = (height/2)-margen;
		}
		if(transform.position.y <(-height/2)+margen)
		{
			transform.position.y = (-height/2)+margen;
		}
		if(transform.position.x < mainCamara.transform.position.x-(width/2)+margen)
		{
			transform.position.x = mainCamara.transform.position.x-(width/2)+margen;
		}
		if(transform.position.x > mainCamara.transform.position.x+(width/2)-margen)
		{
			transform.position.x = mainCamara.transform.position.x+(width/2)-margen;
		}
	
		if(cambio_escudo == true && nivel_escudo==1)
		{
			cambio_escudo = false;
			escudo.SetActive(true);
		}
	}	
}

function EstarConEnemigo(){
	velocidad = 0;
}

function OnTriggerEnter(otro: Collider){
	if(otro.tag.Equals("Power_up"))
	{
		power_up();
	}
	else if(otro.tag.Equals("escudo"))
	{
		activar_escudo(true);
	}
}

function OnCollisionEnter(otro : Collision)
{
	Debug.Log(otro.collider.tag);
	if(otro.collider.tag.Equals("Enemigo"))
	{
		gameObject.GetComponent(Vida_player).AddjustCurrentHealth(-20);
		otro.gameObject.GetComponent(Vida_enemigo_sin_barra).AddjustCurrentHealth(-20);
	}
}

function activar_escudo(activar : boolean){
	if(activar)
	{
		nivel_escudo++;
		cambio_escudo =true;
	}else
	{
		nivel_escudo--;
		cambio_escudo =false;
		escudo.SetActive(false);
	}

}

function destruirNave(){
	var explotar = Instantiate(explosion,transform.position, transform.rotation);
	Destroy(gameObject);
	//var myController = mainCamara.GetComponent("script_camara");
//	myController.Gameover();
}


function power_up()
{
	if(power_disparo<4)
	{
		power_disparo++;
		var mn : GameObject;
		var power_up : GameObject;
		power_up = GameObject.Find("Barra_power_up");
		if(power_disparo == 1)
		{
			mn = GameObject.Find("icono_bullet");
			if( mn!=null)
			{
				mn.GetComponent(script_gui).mostrar_bullet = true;
			}
		}
		else if(power_disparo == 2)
		{
			mn = GameObject.Find("icono_escudo");
			if( mn!=null)
			{
				mn.GetComponent(script_gui).mostrar_escudo = true;
				activar_escudo(true);
			}
		}
		else if(power_disparo == 3)
		{
			mn = GameObject.Find("icono_misil");
			if( mn!=null)
				mn.GetComponent(script_gui).mostrar_misil = true;			
		}
		power_up.GetComponent(script_barra_power_up).reestablecer_barra_power_up();
	} 
}

function disminuir_power_up()
{	
	if(power_disparo>0)
	{
		power_disparo--;
		var mn : GameObject;
		if(power_disparo == 0)
		{
			mn = GameObject.Find("icono_bullet");
			if( mn!=null)
				mn.GetComponent(script_gui).mostrar_bullet = false;
			reestablecer_power_up();
		}
		else if(power_disparo == 1)
		{
			mn = GameObject.Find("icono_escudo");
			if( mn!=null)
				mn.GetComponent(script_gui).mostrar_escudo = false;
			reestablecer_power_up();
			activar_escudo(false);
		}
		else if(power_disparo == 2)
		{
			mn = GameObject.Find("icono_misil");
			if( mn!=null)
				mn.GetComponent(script_gui).mostrar_misil = false;
			reestablecer_power_up();
		}
		
	}
}

function reestablecer_power_up()
{
	if(power_disparo > 0)
	{
		var mn : GameObject;
	 	mn = GameObject.Find("Barra_power_up");
	 	if( mn!=null)
			mn.GetComponent(script_barra_power_up).reestablecer_barra_power_up();
	}
}


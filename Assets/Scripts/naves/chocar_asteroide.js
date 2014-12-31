var velocidad_rotacion_random : float;
var tipo_random : int;

function Start () {
	velocidad_rotacion_random = Random.Range(6.0, 9.0);
	tipo_random = Random.Range(0, 4);
}

function FixedUpdate () {

	if(tipo_random == 0)
	  	transform.Rotate(0,0,3.0*velocidad_rotacion_random*Time.deltaTime);
	else if(tipo_random == 1)
	  transform.Rotate(3.0*velocidad_rotacion_random*Time.deltaTime,0,3.0*velocidad_rotacion_random*Time.deltaTime);
	else if(tipo_random == 2)
	  transform.Rotate(0,3.0*velocidad_rotacion_random*Time.deltaTime,0);
	else if(tipo_random == 3)
	  transform.Rotate(3.0*velocidad_rotacion_random*Time.deltaTime,3.0*velocidad_rotacion_random*Time.deltaTime,3.0*velocidad_rotacion_random*Time.deltaTime);
	else if(tipo_random == 4)
		transform.Rotate(3.0*velocidad_rotacion_random*Time.deltaTime,0,0);
}


/*function OnCollisionEnter(enemigo : Collision){
	if(enemigo.gameObject.tag.Equals("Player"))
	{		
		var myController = enemigo.gameObject.GetComponent (Vida_player);
		myController.matar();
	}
}*/

function OnBecameVisible() {
    enabled = true;
}
    
function OnBecameInvisible () {
    Destroy(gameObject);
}

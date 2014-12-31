#pragma strict

var degrees = 10;
var target : Transform;
private var posicion : Transform;

function Start()
{
	transform.renderer.material.color = Color.blue;
}
 
function FixedUpdate() {
 	if(target != null)
    	transform.RotateAround (target.position, Vector3.back, 400 * Time.fixedDeltaTime);
}

function OnTriggerEnter (other : Collider) {
	if(other.name.Equals("disparo_enemigo") || other.name.Equals("misil_enemigo"))
	{
		Destroy(other.gameObject);
	}
}
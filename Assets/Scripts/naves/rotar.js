#pragma strict
public var velocidad = 0.0f;
public var mover = true;
function Start () {

}

function FixedUpdate () {
	//transform.Rotate (0,1,0);
	if(mover)
		transform.Translate(velocidad,0,0);	
}

function cambiar_mover(mover_gameobject : boolean)
{
	mover = mover_gameobject;
}
#pragma strict
public var velocidad = 0.0f;

function Start () {
//velocidad = Random.Range(2.0, 10.0);
}

function FixedUpdate () {
	transform.Translate(-velocidad,0,0);	
}
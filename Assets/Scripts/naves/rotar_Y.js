#pragma strict
var rotar_x : float = 0.3f;
var rotar_y : float = 0.3f;
var rotar_z : float = 0.3f;
function Start () {

}

function FixedUpdate () {
	transform.Rotate (rotar_x,rotar_y,rotar_z);
}
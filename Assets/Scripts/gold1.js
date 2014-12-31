#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) 
{
	Debug.Log(other.gameObject.tag);
	if(other.gameObject.tag.Equals("Player"))
	{	
		Score.score = Score.score + 20;
		Destroy(gameObject);
	}
		
}
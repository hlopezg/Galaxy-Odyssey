//@script RequireComponent(AudioSource)
var nTime : float = 4;
var DisparoChoque : Transform;
//var audio_disparo : AudioClip;

function Start () {
	Destroy(this.gameObject, nTime);

	//audio.Play();
	//var instance : GameObject = Instantiate(Resources.Load("Futuristic Gun Sound 13"));
}

function Update()
{
	if(!gameObject.renderer.isVisible)
	{
		Destroy(gameObject);
	}
}

function OnCollisionEnter(enemigo : Collision){

	var clone : Transform;
	clone = Instantiate(DisparoChoque, transform.position, transform.rotation);
	Destroy(gameObject);
	if(enemigo.gameObject.tag.Equals("Enemigo") || enemigo.gameObject.tag.Equals("Asteroide"))
	{
		var myController = enemigo.gameObject.GetComponent(Vida_enemigo_sin_barra);
		myController.AddjustCurrentHealth(-10);
	}
}
var nTime : float = 4;
//public var Aceleracion : float = 1;
var DisparoChoque : Transform;
var dano_disparo : int = 10;

function Start () {
	Destroy(this.gameObject, nTime);
	//transform.TransformDirection(Vector3(-100,0,0));
}

function OnCollisionEnter(enemigo : Collision){
	var clone : Transform;
	clone = Instantiate(DisparoChoque, transform.position, transform.rotation);
	Destroy(gameObject);
	if(enemigo.gameObject.tag.Equals("Player"))
	{
		var myController = enemigo.gameObject.GetComponent (Vida_player);
		myController.AddjustCurrentHealth(-10);
	}
}
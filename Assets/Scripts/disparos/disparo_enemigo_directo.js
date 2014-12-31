var distance;
    var target : Transform;    
    var attackRange = Screen.width;
    var moveSpeed = 10.0;
    var damping = 6.0;
    var DisparoChoque : Transform;
    var dano_misil : float = 10;
    
    private var posicion_x;
    private var posicion_y;
 
    function Start()
    {   	
    	var go : GameObject = GameObject.FindGameObjectWithTag("Player");
	
		target = go.transform;
					 	
	    posicion_x = (target.position.x - transform.position.x)/2;
	    posicion_y = (target.position.y - transform.position.y)/2;
	    
	    //Debug.Log("target.position.x: " +  posicion_x + " target.position.y: "+ posicion_y);
	    transform.rigidbody.velocity = transform.TransformDirection(Vector3(posicion_x,posicion_y,0));
    }   
 
 
    function Update () 
    {

	}
 	 
	
	function OnCollisionEnter(enemigo : Collision){
		var clone : Transform;
		clone = Instantiate(DisparoChoque, transform.position, transform.rotation);

		if(enemigo.gameObject.tag.Equals("Player"))
		{
			var myController = enemigo.gameObject.GetComponent(Vida_player);
			myController.AddjustCurrentHealth(-dano_misil);
		}
		Destroy(gameObject);
	}
var distance;
    var target : GameObject;    
    var attackRange = Screen.width;
    var moveSpeed = 10.0;
    var damping = 6.0;
    var DisparoChoque : Transform;
    var tiempo_autodestruccion : float = 8;
     var dano_misil : float = 15;
 
    function Start()
    {   			
		var player : GameObject = GameObject.FindGameObjectWithTag("Player"); 
		Physics.IgnoreCollision(player.collider, collider);
		
		target = FindClosestEnemy();
		//Debug.Log(target);
		if(target != null)
		{
			Destroy(this.gameObject, tiempo_autodestruccion);
			
			yield WaitForSeconds(tiempo_autodestruccion);
						
	   		var clone : Transform;
			clone = Instantiate(DisparoChoque, transform.position, transform.rotation);
		}else
			Destroy(this.gameObject);
    }   
 
    function Update () 
    {
    	
	    attack ();
		
	}
  
	 
	function attack ()
	{
		if(target== null)
		{
			target = FindClosestEnemy();
		}
		if(target == null)
		{
			var rotation = Quaternion.LookRotation(transform.position);
			transform.rotation = Quaternion.Slerp(transform.transform.rotation, rotation, Time.deltaTime * damping);
			
			transform.Translate(Vector3.forward * moveSpeed *Time.deltaTime);
		}
		else
		{
		    var rotation2 = Quaternion.LookRotation(target.transform.position - transform.position);
			transform.rotation = Quaternion.Slerp(transform.transform.rotation, rotation2, Time.deltaTime * damping);
		 
		    transform.Translate(Vector3.forward * moveSpeed *Time.deltaTime);
	    }
	}
	
	 function FindClosestEnemy () : GameObject {
        // Find all game objects with tag Enemy
        var gos : GameObject[];
        gos = GameObject.FindGameObjectsWithTag("Enemigo"); 
        var closest : GameObject; 
        var distance = Mathf.Infinity; 
        var position = transform.position; 
        // Iterate through them and find the closest one
        for (var go : GameObject in gos)  { 
        	if(go.renderer.isVisible)
        	{
        	 	var diff = (go.transform.position - position);
            	var curDistance = diff.sqrMagnitude; 
           		if (curDistance < distance) { 
                	closest = go; 
                	distance = curDistance; 
            	}
        	}
        } 
        if(closest != null)
        	return closest;    
        else
        {
        	gos = GameObject.FindGameObjectsWithTag("Asteroide"); 
        	for (var go : GameObject in gos)  { 
        	if(go.renderer.isVisible)
        	{
        	 	diff = (go.transform.position - position);
            	curDistance = diff.sqrMagnitude; 
           		if (curDistance < distance) { 
                	closest = go; 
                	distance = curDistance; 
            	}
        	}
        } 
        }
        return closest; 
    }
	
	function OnCollisionEnter(enemigo : Collision){
		var clone : Transform;
		clone = Instantiate(DisparoChoque, transform.position, transform.rotation);
		Destroy(gameObject);
		
		if(enemigo.gameObject.tag.Equals("Enemigo"))
		{
			var myController = enemigo.gameObject.GetComponent(Vida_enemigo_sin_barra);
			myController.AddjustCurrentHealth(-dano_misil);
			//(enemigo.GetComponent("Vida_enemigo_sin_barra") as Vida_enemigo_sin_barra).AddjustCurrentHealth(-10);
			//enemigo.SendMessage("AddjustCurrentHealth",-10);
			//Vida_enemigo_sin_barra eh = (Vida_enemigo_sin_barra)target.GetComponent("Vida_enemigo_sin_barra");
			//eh.AddjustCurrentHealth(-10);
		}
	}
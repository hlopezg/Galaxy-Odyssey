	var distance;
    private var target : GameObject;    
    public var bullet : Rigidbody; 
    var pistola: Transform;
    var pistola2: Transform;
    var pistola3: Transform;
    var pistola4: Transform;
    var pistola5: Transform;
    var pistola6: Transform;
    var pistola7: Transform;
    var pistola8: Transform;
    var pistola_doble: Transform;
    var pistola_triple: Transform;
    
    var attacktimer :float = 0;  //me permite no poder atacar en cierto tiempo
	var coolDown : float = 0.3f;
	var tiempo_parar_disparo : float = 1.3f;
	var cantidad_de_disparos_seguidos : int = 3;
	private var cantidad_de_disparos_realizados : int;
	var objecto_gameObject : GameObject; 
	var velocidad_disparo :int = 100;
 	var aparecio: boolean = false;
 	
    function Start()
    {
    	 target  = GameObject.Find("Player");
		cantidad_de_disparos_realizados = 0;
    }   
 
    function FixedUpdate () 
    {
    	if(target != null && objecto_gameObject != null)
    	{  			
		    if(objecto_gameObject.renderer.isVisible)
		    {
		    	if(!aparecio)
		    		aparecio = true;
		    	if(Time.time > attacktimer)
		    	{
					attack ();	
					
					cantidad_de_disparos_realizados = cantidad_de_disparos_realizados + 1;
					if(cantidad_de_disparos_realizados == cantidad_de_disparos_seguidos)
					{
						cantidad_de_disparos_realizados = 0;
						attacktimer = Time.time + coolDown + tiempo_parar_disparo;
					}else
						attacktimer = Time.time + coolDown;
				}
				
				//transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
		    	
		    }    
	    }
	    if(aparecio && objecto_gameObject!= null && !objecto_gameObject.renderer.isVisible)
	    	Destroy(objecto_gameObject);
	}
 	 
	function attack ()
	{
		var clone : Rigidbody;
		if(bullet.name.Equals("disparo_enemigo"))
		{
			clone = Instantiate(bullet,pistola.position,Quaternion.Euler(0, 0, 0));
			clone.velocity = pistola.TransformDirection(Vector3(-velocidad_disparo,0,0));
		} else if(bullet.name.Equals("disparo_enemigo_directo"))
		{
			clone = Instantiate(bullet,pistola.position,Quaternion.Euler(0, 0, 0));
		}else
		{
			if(attacktimer == 0)
				tiempo_parar_disparo = tiempo_parar_disparo*2;
			clone = Instantiate(bullet,pistola.position,Quaternion.Euler(0, -90, 0));		//si es misil tengo que rotar en-90 para que valla en buena direccion
		}
		
			
			
		if(pistola2 != null)
		{
			var clone2 : Rigidbody= Instantiate(bullet,pistola2.position,pistola2.rotation);
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clone2.velocity = pistola2.TransformDirection(Vector3(-velocidad_disparo,velocidad_disparo,0));
		}
				
		if(pistola3 != null)
		{
			var clone3 : Rigidbody= Instantiate(bullet,pistola3.position,pistola3.rotation);
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clone3.velocity = pistola3.TransformDirection(Vector3(-velocidad_disparo,-velocidad_disparo,0));
		}
		
		if(pistola4 != null)
		{
			var clone4 : Rigidbody= Instantiate(bullet,pistola4.position,pistola4.rotation);
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clone4.velocity = pistola4.TransformDirection(Vector3(0,-velocidad_disparo,0));
		}
		
		if(pistola5 != null)
		{
			var clone5 : Rigidbody= Instantiate(bullet,pistola5.position,pistola5.rotation);
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clone5.velocity = pistola5.TransformDirection(Vector3(velocidad_disparo,-velocidad_disparo,0));
		}
	
		if(pistola6 != null)
		{
			var clone6 : Rigidbody= Instantiate(bullet,pistola6.position,pistola6.rotation);
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clone6.velocity = pistola6.TransformDirection(Vector3(velocidad_disparo,0,0));
		}
		
		if(pistola7 != null)
		{
			var clone7 : Rigidbody= Instantiate(bullet,pistola7.position,pistola7.rotation);
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clone7.velocity = pistola7.TransformDirection(Vector3(velocidad_disparo,velocidad_disparo,0));
		}
		
		if(pistola8 != null)
		{
			var clone8 : Rigidbody= Instantiate(bullet,pistola8.position,pistola8.rotation);
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clone8.velocity = pistola8.TransformDirection(Vector3(0,velocidad_disparo,0));
		}
		if(pistola_doble != null)
		{
			var clonedoble : Rigidbody= Instantiate(bullet,pistola_doble.position,pistola_doble.rotation);
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clonedoble.velocity = pistola_doble.TransformDirection(Vector3(-velocidad_disparo,0,0));
		}
		if(pistola_triple != null)
		{
			var clonetriple : Rigidbody= Instantiate(bullet,pistola_triple.position,pistola_triple.rotation);
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clonetriple.velocity = pistola_triple.TransformDirection(Vector3(-velocidad_disparo,0,0));
		}
		//var enemigo : GameObject = GameObject.FindGameObjectWithTag("Enemigo"); 
		/*
	
		try
		{
			//Physics.IgnoreCollision(enemigo.collider, transform.FindChild("Nave").collider);
		}catch(e)
		{
			Debug.Log("Error: " + e);
		}
		
		try
		{
			//Physics.IgnoreCollision(enemigo.collider, transform.collider);
		}catch(e)
		{
			Debug.Log("Error: " + e);
		}*/
	}
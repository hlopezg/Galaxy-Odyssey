var distance;
    var target : Transform;    
    public var bullet : Rigidbody; 
    public var bullet_directo : Rigidbody; 
    public var misil : Rigidbody; 
    var pistola: Transform;
    var pistola2: Transform;
    var pistola3: Transform;
    var pistola4: Transform;
    var pistola_misil: Transform;
    
    var attacktimer :float;  //me permite no poder atacar en cierto tiempo
	var coolDown : float;
	var coolDown_misiles : float;
	var tiempo_parar_disparo : float;
	var cantidad_de_disparos_seguidos : int = 3;
	var cantidad_de_disparos_realizados : int;
	private var contador_cantidad_de_disparos_seguidos = 0;
	var objecto_gameObject : GameObject; 
 
 	var animar : Transform;
 	
 	private var tipo_disparo = 1;
 	
 	private var posicion_x;
    private var posicion_y;
    
    private var vivo = true;
    function Start()
    {
    	attacktimer = 0;
		coolDown = 0.3f;
		coolDown_misiles = 1.4f;
		tiempo_parar_disparo = 1.3f;
		cantidad_de_disparos_realizados = 0;
		animar.parent.animation.Stop();	
    }   
 
    function Update () 
    {
    	if(target != null && objecto_gameObject != null && objecto_gameObject.renderer.isVisible)
    	{  		

	    	if(Time.time > attacktimer && vivo == true)
	    	{
	    		if(tipo_disparo == 1)
	    		{
					var clone : Rigidbody= Instantiate(bullet,pistola.position,pistola.rotation);
					if(!bullet.name.Equals("misil"))
						clone.velocity = transform.TransformDirection(Vector3(-100,0,0));	
				}else if(tipo_disparo == 2)
				{
					var clone2 : Rigidbody= Instantiate(misil,pistola_misil.position,pistola_misil.rotation);
				}
				else if(tipo_disparo == 3)
				{
					var clone3 : Rigidbody= Instantiate(bullet,pistola.position,pistola.rotation);
					clone3.velocity = transform.TransformDirection(Vector3(-100,-5,0));
					
					var clone4 : Rigidbody= Instantiate(bullet,pistola2.position,pistola2.rotation);
					clone4.velocity = transform.TransformDirection(Vector3(-100,-15,0));
					
					var clone5 : Rigidbody= Instantiate(bullet,pistola3.position,pistola3.rotation);
					clone5.velocity = transform.TransformDirection(Vector3(-100,15,0));
					
					var clone6 : Rigidbody= Instantiate(bullet,pistola4.position,pistola4.rotation);
					clone6.velocity = transform.TransformDirection(Vector3(-100,5,0));
				}
				else if(tipo_disparo == 4)
				{
					var clone7 : Rigidbody= Instantiate(bullet_directo,pistola.position,pistola.rotation);

					var clone10 : Rigidbody= Instantiate(bullet_directo,pistola4.position,pistola4.rotation);
				}
				cantidad_de_disparos_realizados = cantidad_de_disparos_realizados + 1;
				contador_cantidad_de_disparos_seguidos++;
				
				if(contador_cantidad_de_disparos_seguidos == cantidad_de_disparos_seguidos)
				{
					contador_cantidad_de_disparos_seguidos = 0;
					if(tipo_disparo == 1)
						attacktimer = Time.time + coolDown + tiempo_parar_disparo;
					else if(tipo_disparo == 2)
						attacktimer = Time.time + coolDown_misiles + tiempo_parar_disparo +1.5f ;
					else if(tipo_disparo == 3)
						attacktimer = Time.time + coolDown + tiempo_parar_disparo + 0.8f;
					else if(tipo_disparo == 4)
						attacktimer = Time.time + coolDown + tiempo_parar_disparo + 0.8f;
				}else
				{
					if(tipo_disparo == 1)
						attacktimer = Time.time + coolDown;
					else if(tipo_disparo == 2)
						attacktimer = Time.time + coolDown_misiles;
					else if(tipo_disparo == 3)
						attacktimer = Time.time + coolDown + 0.5f;
					else if(tipo_disparo == 4)
						attacktimer = Time.time + coolDown + 0.5f;
				}
						
				if(cantidad_de_disparos_realizados%9 == 0)
					tipo_disparo = 4;
				else if(cantidad_de_disparos_realizados%6 == 0)
					tipo_disparo = 3;
				else if(cantidad_de_disparos_realizados%3 == 0)
					tipo_disparo = 2;
			} 
	    }
	}
 	 
	function detener()
	{
		animar.parent.animation.Play();	
		vivo = false;
	}
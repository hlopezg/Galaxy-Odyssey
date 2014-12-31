	var maxHealth : int = 50;
	var curHealth : int;
	var healthBarLength : int;
	var muerto : boolean = false;
	var mn : GameObject;
	var invencible : boolean = false;

function Start () {
	healthBarLength = Screen.width / 2;
	curHealth = maxHealth;
	mn = GameObject.Find("Barra_power_up");
}

function Update () {
	if(curHealth == 0 && muerto == false)
	{		
		muerto = true;
		matar();
	}
}

function OnCollisionEnter(otro: Collision){
	if(otro.collider.tag.Equals("nave1"))
	{
		AddjustCurrentHealth(-20);
	}
	else if(otro.collider.tag.Equals("Asteroide"))
	{
		matar();
	}

}
	public function AddjustCurrentHealth(adj : int)
	{
		if(!invencible)
		{
			GameObject.FindGameObjectWithTag("Barra_energia").GetComponent(script_barra_energia).ajustar_barra_energia(adj);
			if(adj < 0)
				mn.GetComponent(script_barra_power_up).ajustar_barra_energia(adj*3);
				
			curHealth += adj;

			if(curHealth <0)
				curHealth = 0;
		
			if(curHealth > maxHealth)
				curHealth = maxHealth;
		
			if(maxHealth <1)
				maxHealth = 1;		
		}
		if(!invencible)
	 		golpeado_invencible();
	}
	
	function golpeado_invencible()
	{
		invencible = true;
		var i : int;
		for(i = 0; i<8;i++)
		{
			transform.renderer.material.shader = Shader.Find("Transparent/Diffuse");
			yield WaitForSeconds(.1);
			transform.renderer.material.shader = Shader.Find("Diffuse");
			yield WaitForSeconds(.1);
		}
		invencible = false;
	}
		
	public function matar()
	{
		var mn = gameObject.GetComponent(MovimientoNave);
		mn.destruirNave();
		
		var fondos : GameObject[];
		fondos = GameObject.FindGameObjectsWithTag("fondo");
		for (var fondo : GameObject in fondos)  { 
			fondo.GetComponent(rotar).cambiar_mover(false);
		}
		
		var  mainCamara : GameObject = GameObject.FindGameObjectWithTag("MainCamera");
		var myController = mainCamara.GetComponent(script_camara);
		if( myController!=null)
			myController.Gameover();
		var planeta : GameObject = GameObject.Find("Planeta");
		if( planeta!=null)
			planeta.GetComponent(rotar).mover = false;
		yield WaitForSeconds(2);
		Time.timeScale = 0;
	}
	

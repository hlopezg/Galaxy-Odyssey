var maxHealth : int= 100;
private var curHealth : int;
	
var dar_power_up : boolean = true;
var dar_escudo : boolean = false;
	
var power_up : Rigidbody;
var escudo : Rigidbody;
var explosion : Transform;
	
private var poder_desruir_al_salir : boolean = false;
	
private var numero : int;

var destruir : boolean = false;
private var tiempo_actual_para_destruir : float = 0;
var tiempo_extra_para_destruir : float = 0;

var pre_explosion : ParticleSystem;
var gold : Rigidbody;

function Start () {
	curHealth = maxHealth;
	dar_power_up = true;
	if(pre_explosion !=null)		//para el boos
	{
		pre_explosion.Stop();
		pre_explosion.Clear();
	}
}

function Update () {
	if(gameObject.renderer.isVisible)
		poder_desruir_al_salir = true;
	else if(!gameObject.renderer.isVisible && poder_desruir_al_salir == true)
		Destroy(gameObject);
		
	if(destruir == true && (Time.time > tiempo_actual_para_destruir + tiempo_extra_para_destruir))
	{
		//var explotar = Instantiate(explosion,transform.position, transform.rotation);
		Instantiate(explosion,transform.position, transform.rotation);
		Invoke("Load_creditos",tiempo_extra_para_destruir);
		gameObject.renderer.active = false;
		
	}
}

public function AddjustCurrentHealth(adj : int)
{
	curHealth += adj;
		
	if(curHealth <0)
		curHealth = 0;
	
	if(curHealth > maxHealth)
		curHealth = maxHealth;

	if(maxHealth <1)
		maxHealth = 1;
		
	if(curHealth == 0 && destruir == false)
	{
		Score.score = Score.score + maxHealth;
		//Debug.Log(Vida_player.score);
		numero = Random.Range(1,9);
		if(dar_escudo)
		{
			Instantiate(escudo,transform.position,transform.rotation);
		}
		else if(numero <5)
		{
			if(numero == 1)
			{
				if(dar_power_up == true)
				{
					if(power_up != null)
						Instantiate(power_up,transform.position,transform.rotation);
				}
			}
			else {
				if(gold != null)
					Instantiate(gold,transform.position,transform.rotation);
			}
		} 
			
		if(gameObject.name.Equals("boss"))
		{
			destruir= true;
			
		    tiempo_actual_para_destruir = Time.time ;
		    pre_explosion.Play();
		    var boss : GameObject;
		    boss = GameObject.FindGameObjectWithTag("boss");
		    boss.GetComponent(IA_boss).detener();
		}else
		{
			Instantiate(explosion,transform.position, transform.rotation);
			Destroy(gameObject);
		}
	}
} 

function Load_creditos()
{
	Application.LoadLevel("pronto_nuevas_etapas");	
}
private var Player : GameObject;
private var camara : Transform;
var cargando : GameObject;

function Start () {
	transform.parent = this.transform;
	transform.renderer.material.color = Color.blue;
	transform.renderer.material.color.a = 0;
	transform.renderer.material.shader = Shader.Find("Transparent/Diffuse");
	Player = GameObject.Find("Player 2");
	cargando.SetActive(false);
}


function OnTriggerEnter(other : Collider)
{
	if(other.collider.tag.Equals("Player"))
    {
    	var mn : GameObject = GameObject.Find("Player");
		mn.GetComponent(MovimientoNave).mover = false;
		var planeta : GameObject = GameObject.Find("Planeta");
		planeta.GetComponent(rotar).mover = false;
		if(Player.animation != null)
		{
	    	Player.animation.Play();
	    	yield WaitForSeconds (Player.animation.clip.length);
    	}
    	cargando.SetActive(true);
    	cargando.transform.position.z = 10;

    	var etapa : int;
    	if(Application.loadedLevelName.Equals("1"))
    		etapa = 2;
    	else if(Application.loadedLevelName.Equals("2"))
    		etapa = 3;
    	else if(Application.loadedLevelName.Equals("3"))
    		etapa = 4;
    	
    	guardar_score();
    	
    	PlayerPrefs.SetInt("LoadLevel",etapa);
        Application.LoadLevel(etapa+"");
    }
}

function guardar_score()
{
	if(Application.loadedLevelName.Equals("1"))
	{
		PlayerPrefs.SetInt("score_etapa_1",Score.score);
		if(PlayerPrefs.GetInt("score_etapa_1",0) > PlayerPrefs.GetInt("max_score_etapa_1",0))
			PlayerPrefs.SetInt("max_score_etapa_1",PlayerPrefs.GetInt("score_etapa_1",0));
	}else if(Application.loadedLevelName.Equals("2"))
	{
		PlayerPrefs.SetInt("score_etapa_2",Score.score);
		if(PlayerPrefs.GetInt("score_etapa_2",0) > PlayerPrefs.GetInt("max_score_etapa_2",0))
			PlayerPrefs.SetInt("max_score_etapa_2",PlayerPrefs.GetInt("score_etapa_2",0));
	}
	else if(Application.loadedLevelName.Equals("3"))
	{
		PlayerPrefs.SetInt("score_etapa_3",Score.score);
		if(PlayerPrefs.GetInt("score_etapa_3",0) > PlayerPrefs.GetInt("max_score_etapa_3",0))
			PlayerPrefs.SetInt("max_score_etapa_3",PlayerPrefs.GetInt("score_etapa_3",0));
	}
	else if(Application.loadedLevelName.Equals("4"))
	{
		PlayerPrefs.SetInt("score_etapa_4",Score.score);
		if(PlayerPrefs.GetInt("score_etapa_4",0) > PlayerPrefs.GetInt("max_score_etapa_4",0))
			PlayerPrefs.SetInt("max_score_etapa_4",PlayerPrefs.GetInt("score_etapa_4",0));
	}
}

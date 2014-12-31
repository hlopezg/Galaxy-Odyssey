#pragma strict
var como_jugar_1 : GameObject;
var como_jugar_2 : GameObject;
var como_jugar_3 : GameObject;

var cargando : GameObject;
var targetGui : GUITexture;
var hoverTex : Texture2D;
public var normalTex : Texture2D;

function Start () {
	cargando.SetActive(false);
	
	if (Application.platform == RuntimePlatform.WindowsEditor || Application.platform == RuntimePlatform.Android || Application.platform == RuntimePlatform.WP8Player || Application.platform == RuntimePlatform.BB10Player)
	{
		como_jugar_1.SetActive(false);
		como_jugar_2.SetActive(false);	
		como_jugar_3.SetActive(true);
	} 
}

function OnMouseUp(){
	targetGui.texture = normalTex;
	if(gameObject.name.Equals("Play"))
	{
		cargando.SetActive(true);
		gameObject.SetActive(false);
		Application.LoadLevel(PlayerPrefs.GetInt("LevelElejido",1).ToString());
		
	}
}

function OnMouseDown()
{
	targetGui.texture = hoverTex;
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape))
	{
		Application.LoadLevel("elegir_etapa");
	}
}
var paused : boolean = false;
var pausa_texto : GUIText;
var nombre_level : GUIText;
var hSliderValue : float  = 1;

var btnTexture : Texture;
var pausa_texture : Texture;
var pausa_pressed_texture : Texture;

var continuar_texture : GUITexture;
var reiniciar_texture : GUITexture;
var sonido_texture : GUITexture;
var salir_texture : GUITexture;

var puntajes_maximos : GameObject;

private var tiempo_de_pausa;
private var tiempo_pausa;
private var nave : GameObject; 

public var font : Font ; 
private var guiStyle : GUIStyle;

function Start () {
	 nave = GameObject.FindGameObjectWithTag("Player"); 
	 tiempo_de_pausa = 1.0f;
	 tiempo_pausa = 0.0f;
	 pausa_texto.enabled = false;
	 hSliderValue = 1;
	 
	continuar_texture.enabled = false;
	reiniciar_texture.enabled = false;
	sonido_texture.enabled = false;
	salir_texture.enabled = false;
	puntajes_maximos.SetActive(false);
	
	var newInset : Rect;
	Debug.Log("Screen.width " + Screen.width);
	if(Screen.width <= 479)
	{
		continuar_texture.transform.position.x = 0.75;
		sonido_texture.transform.position.x = 0.55;
		reiniciar_texture.transform.position.x = 0.35;
		salir_texture.transform.position.x = 0.15;
	}else if(Screen.width > 479 && Screen.width < 1200)
	{
		newInset = new Rect(0, continuar_texture.transform.position.y, continuar_texture.texture.width*0.6, continuar_texture.texture.height*0.6);  
 		continuar_texture.pixelInset = newInset;
 		sonido_texture.pixelInset = newInset;
 		reiniciar_texture.pixelInset = newInset;
 		salir_texture.pixelInset = newInset;
 		
 		continuar_texture.transform.position.x = 0.75;
		sonido_texture.transform.position.x = 0.55;
		reiniciar_texture.transform.position.x = 0.35;
		salir_texture.transform.position.x = 0.15;
	}
	else if(Screen.width >= 1200)
	{
		newInset = new Rect(0, continuar_texture.transform.position.y, continuar_texture.texture.width, continuar_texture.texture.height);  
 		continuar_texture.pixelInset = newInset;
 		sonido_texture.pixelInset = newInset;
 		reiniciar_texture.pixelInset = newInset;
 		salir_texture.pixelInset = newInset;
 		
 		continuar_texture.transform.position.x = 0.8;
		sonido_texture.transform.position.x = 0.6;
		reiniciar_texture.transform.position.x = 0.4;
		salir_texture.transform.position.x = 0.2;
	}
	if(Application.systemLanguage.ToString().Equals("English"))
	{
		pausa_texto.text = "Pause";
	}	
}

function Update () {
	if(Input.GetKeyDown("p") || Input.GetKeyDown(KeyCode.Escape) )
	{
		pausa();
	}
}

function OnMouseDown()
{
	pausa();
	guiTexture.texture = pausa_pressed_texture;
}

function OnMouseUp()
{
	guiTexture.texture = pausa_texture;
}

function pausa(p : boolean)
{
	paused = p;
	pausa();
}

function pausa()
{
	if(nave != null)
	{
		var mn = nave.GetComponent(MovimientoNave);

		if(!paused)
		{
			continuar_texture.enabled = true;
			reiniciar_texture.enabled = true;
			sonido_texture.enabled = true;
			salir_texture.enabled = true;
			puntajes_maximos.SetActive(true);
			nombre_level.gameObject.SetActive(true);
			
			Time.timeScale = 0;
			paused = true;
			mn.mover = false;
			pausa_texto.enabled = true;
		}else
		{
			continuar_texture.enabled = false;
			reiniciar_texture.enabled = false;
			sonido_texture.enabled = false;
			salir_texture.enabled = false;
			puntajes_maximos.SetActive(false);
			nombre_level.gameObject.SetActive(false);
			
			Time.timeScale = 1;
			paused = false;
			mn.mover = true;
			pausa_texto.enabled = false;
		}
	}
}
/*
function botones_antiguos()
{
	var espacio : int = 10;
	GUI.DrawTexture(Rect(Screen.width /2 - 150,Screen.height /2 - 180,250,80), btnTexture);
		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 180,250,80),"Volver al juego",guiStyle))
		{
			 pausa();
		}	
		GUI.DrawTexture(Rect(Screen.width /2 - 150,Screen.height /2 - 100+espacio,250,80), btnTexture);

		GUI.DrawTexture(Rect(Screen.width /2 - 150,Screen.height /2 - 0,250,80), btnTexture);
		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 0,250,80), "Volver a menu principal",guiStyle)){
			Application.LoadLevel("inicio");
		}
	
	// salir del juego
		GUI.DrawTexture(Rect(Screen.width /2 - 150,Screen.height /2 + 90,250,80), btnTexture);
		if (GUI.Button (Rect (Screen.width /2 - 150,Screen.height /2 + 90,250,80), "Salir del juego",guiStyle)){
			Application.Quit();
		}
		
		GUI.Label(Rect(Screen.width /2 - 150,Screen.height /2 - 100+espacio,250,80),"Volumen",guiStyle);
		hSliderValue = GUI.HorizontalSlider(Rect(Screen.width /2 - 150,Screen.height /2 - 45+espacio,250,80),hSliderValue,0.0,1.0);
		AudioListener.volume = hSliderValue;
}

function VolumeControl() {
	hSliderValue = GUI.HorizontalSlider(Rect(25,25,100,30),hSliderValue,0.0,1.0);
	AudioListener.volume = hSliderValue;
}
 
 */
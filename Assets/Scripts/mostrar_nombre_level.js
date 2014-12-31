#pragma strict

function Start () {
	
	Debug.Log(Application.systemLanguage);
	if(Application.systemLanguage.ToString().Equals("English"))
		guiText.text = "Stage " + Application.loadedLevelName; 
	else if(Application.systemLanguage.ToString().Equals("Spanish"))
		guiText.text = "Etapa " + Application.loadedLevelName; 
	else
		guiText.text = "Stage " + Application.loadedLevelName; 
	
	//this.transform.position = new Vector3(0.5f,0.5f,1.0f);
	yield WaitForSeconds(3);
	//guiText.active = false;
	guiText.gameObject.SetActive(false);
	//Destroy(gameObject);
}

function Update () {

}
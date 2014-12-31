using UnityEngine;
using System.Collections;

public class Vida_enemigo : MonoBehaviour {
	public int maxHealth = 100;
public int curHealth = 100;
	public int healthBarLength;
	public bool targeted = false; 

	// Use this for initialization
	void Start () {
		healthBarLength = Screen.width / 2;
	}
	
	void Update()
	{
		
		AddjustCurrentHealth(0);
	}
	
	public void AddjustCurrentHealth(int adj)
	{
		curHealth += adj;
		
		
		if(curHealth <0)
			curHealth = 0;
	
		if(curHealth > maxHealth)
			curHealth = maxHealth;
	
		if(maxHealth <1)
			maxHealth = 1;
			
		healthBarLength = (int)((Screen.width / 2) * (curHealth / ((float)maxHealth) ));
	}
	
	
	void OnGUI()
	{
		if(targeted)
			GUI.Box(new Rect(10,35, healthBarLength,20), curHealth + "/" + maxHealth);
	}
}








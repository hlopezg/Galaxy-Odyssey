using UnityEngine;
using System.Collections;

public class personaje : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if(Input.GetKeyDown("w"))
	 	{
			 animation.Play("caminar", PlayMode.StopSameLayer);
		}
	}
}

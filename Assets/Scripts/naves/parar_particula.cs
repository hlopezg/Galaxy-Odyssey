using UnityEngine;
using System.Collections;

public class parar_particula : MonoBehaviour {

public ParticleSystem DestructionEffect; //assign prefab in editor or elsewhere
void Start () {
	
   //Instantiate our one-off particle system
      
}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnCollisionEnter (Collision Target) 
    {
		 ParticleSystem explosionEffect = Instantiate(DestructionEffect) 
                                        as ParticleSystem;
       explosionEffect.transform.position = transform.position;
 
       //play it
       explosionEffect.loop = false;
       explosionEffect.Play();
 
       //destroy the particle system when its duration is up, right
       //it would play a second time.
       Destroy(explosionEffect.gameObject, explosionEffect.duration);
 
       //destroy our game object
       Destroy(gameObject);
	}
}

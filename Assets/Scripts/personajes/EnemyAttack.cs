using UnityEngine;
using System.Collections;

public class EnemyAttack : MonoBehaviour {
	public GameObject target;
	public float attacktimer;  //me permite no poder atacar en cierto tiempo
	public float coolDown;
	// Use this for initialization
	void Start () {
		attacktimer = 0;
		coolDown = 2.0f;
	}
	
	// Update is called once per frame
	void Update () {
		if(attacktimer > 0)
			attacktimer -= Time.deltaTime ;
		
		if(attacktimer <0)
				attacktimer = 0;
		
		if(Input.GetKeyUp(KeyCode.F))
		{
			if(attacktimer ==0)
				Attack();
			attacktimer = coolDown;
		}
	}
	
	private void Attack()
	{
		float distance = Vector3.Distance (target.transform.position, transform.position );
		
		Vector3 dir = (target.transform.position - transform.position).normalized;
		
		float direction = Vector3.Dot (dir, transform.forward );
		
	
		if(distance <100.5f)
		{
			if(direction > 0)
			{
				Vida eh = (Vida)target.GetComponent("Vida");
				
				eh.AddjustCurrentHealth(-10);
			}
		}
	}
}

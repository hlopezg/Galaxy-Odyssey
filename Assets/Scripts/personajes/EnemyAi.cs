using UnityEngine;
using System.Collections;

public class EnemyAi : MonoBehaviour {

	public Transform target;
	public int moveSpeed = 1;
	public int rotationSpeed = 1;
	public int maxDistance;
	
	private Transform myTransform;
	
	
	void Awake()
	{
		myTransform = transform;	
	
	}
	
	void Start()
	{
		GameObject go = GameObject.FindGameObjectWithTag("Player");
	
		target = go.transform;
	
		maxDistance = 2;
	}
	
	void Update()
	{
		Debug.DrawLine(target.position, myTransform.position, Color.yellow);
		float distance = Vector3.Distance (target.transform.position, transform.position );
		
		myTransform.rotation = Quaternion.Slerp (myTransform.rotation, Quaternion.LookRotation (target.position - myTransform.position),rotationSpeed * Time.deltaTime);
			
		if(distance < 40.0f && distance > maxDistance)
		{
			myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
		}
	}
}
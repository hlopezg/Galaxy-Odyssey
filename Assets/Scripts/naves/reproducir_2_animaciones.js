var animar : Transform;
var animacion1 : AnimationClip;
var animacion2 : AnimationClip;

private var animacion_started : boolean;

function Start () {
	animacion_started = false;
}

function Update () {
	if(animar.gameObject.renderer.isVisible)
    {
    	if(!animacion_started)
    	{
    		/*if(animar.parent.parent == null)
    		{
    			animar.parent.animation.Play();	
    			//GetAnimationNames(animar.parent.animation);
    			//for (var state : AnimationState in animar.parent.animation) {
				//	// add name to tmpList
				//	Debug.Log(state.name);
				//	animar.parent.animation.CrossFadeQueued(state.name);
			//	}
    		}
    		else
    			animar.parent.parent.animation.Play();	
    			*/
    		//Debug.Log(animacion1.name);
    		
    		animar.parent.animation.CrossFadeQueued(animacion1.name);  
    		animar.parent.animation.CrossFadeQueued(animacion2.name);  			
    			
    	 	animacion_started = true;
    	}
    }
}


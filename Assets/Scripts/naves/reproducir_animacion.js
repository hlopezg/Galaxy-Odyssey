#pragma strict
var animar : Transform;
var tiene_animacion : boolean = true;
private var animacion_started : boolean;

function Start () {
	animacion_started = false;
}

function Update () {
	if(animar.gameObject.renderer.isVisible)
    {
    	if(!animacion_started && tiene_animacion == true)
    	{
    		if(animar.parent.parent == null || animar.parent.parent.animation == null)
    		{
    			animar.parent.animation.Play();	
    		}
    		else
    		{
    			try
    			{
    				animar.parent.parent.animation.Play();	
    			}catch(Exception)
    			{
    			
    			}
    		}
    	 	animacion_started = true;
    	}
    }
}


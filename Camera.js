#pragma strict

var Target : Transform;
var distance = -1.5;
var lift = 5.5;

function Update () 
{
	transform.position = Target.position + Vector3(0, lift, distance);
	transform.LookAt (Target); 
}

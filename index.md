CSS: ./css/bootstrap.css
CSS: ./css/bootstrap-responsive.css
CSS: ./css/custom.css

<div class="container-fluid" markdown="1">
### RestApi - Documentation ###

The Dog RestAPI allows developers to easily integrate home and building automation into their applications, be they web applications, smartphone (Android, iOS) apps or standalone programs.

APIs allow to:

* manage connected devices
	* query the gateway about installed devices, their location, functionalities and configurations;
	* require execution of commands to existing devices;
	* monitor device statuses and measures in real-time;
	* add, modify or update the set of devices controlled through the gateway;
* manage rules and automation scenarios
	* insert, update, modify or delete automation rules;
	* insert, update, modify or delete scenarios.
* monitor the home/building performance
	* historical information on consumptions;
	* historical information on activations;
	* related statistics.
* manage Dog 
	* manage system performance
	* manage system updates
	* troubleshoot problems

---------------------------------

#### Querying devices ####

---------------------------------

##### Getting the list of registered devices #####

*URL:* /devices/status

|Method|Description|
|:-----|:----------|
| GET | List the current status of all devices actually managed by the Dog gateway, i.e. defined in the Dog configuration and registered within the gateway runtime,be they active or not |

** Request **

<div class="wells" markdown="1">
<pre>
GET http://{gateway-ip or dns name}/devices/status
</pre>
</div>

** response **

<div class="wells" markdown="1">
<pre>
{
	"devices":[
		{
			"uri" : "Lamp1",
			"description" : " The lamp over the closet near to the livingroom armchair",
			"active" : true,
			"status":[
				{
					"OnOffstate" : "on"
				}
			]
		}
		,
		{
			"uri" : "Plug_h725",
		}
	]
}
</pre>
</div>

##### Getting the list of configured devices #####

*URL:* /devices/configuration

|Method|Description|
|:-----|:----------|
| GET | List all device configurations used by the Dog gateway |
| PUT | Create / Update the set of device configurations that Dog should manage. Any device configuration matching an already configured device replaces the existing configuration, whereas devices not being mentioned in the current Dog configurations are added, and deployed at runtime, i.e., made available to calling applications.|

</div>
<script src="./js/jquery.js"></script>
<script src="./js/bootstrap.js"></script>
<script src="./js/ajax.js"></script>
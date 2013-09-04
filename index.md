CSS: ./css/bootstrap.css
CSS: ./css/bootstrap-responsive.css

	
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
---------------------------------

#### Querying devices ####

---------------------------------

##### Getting the list of available devices #####

*URL:* /devices

|Method|Description|
|:-----|:----------|
| GET | List all devices registered within the Dog gateway, be they active or not |


<script src="./js/jquery.js"></script>
<script src="./js/bootstrap.js"></script>
<script src="./js/ajax.js"></script>
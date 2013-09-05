CSS: ./css/bootstrap.css
CSS: ./css/bootstrap-responsive.css
CSS: ./css/custom.css


<div class="container-fluid" markdown="1">
<div class="navbar navbar-fixed-top span3" markdown="1">

#### Summary ####

--------------------

<div class="well" markdown="1">

* [Device API](#deviceAPI)
	* [Status](#status)
	* [Devices](#devices)

</div>
</div>

<div class="row-fluid" markdown="1">
<div class="span3" markdown="1"></div>
<div class="span9" markdown="1">

<div class="page-header" markdown="1">
## Dog RestAPI - Documentation ##
</div>

The Dog RestAPI allows developers to easily integrate home and building automation into their applications, be they web applications, smartphone (Android, iOS) apps or standalone programs.

APIs allow to:

* manage connected devices
	* query the gateway about installed devices, their location, functionalities and configurations;
	* require execution of commands to existing devices;
	* [monitor device statuses and measures in real-time](#status);
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

### Device API [deviceAPI]###

---------------------------------

</div>
</div>
<div class="row-fluid" markdown="1">
<div class="span3" markdown="1"></div>
<div class="span6" markdown="1">

#### Resource /devices/status [status]####

*Updated on Thu, 2013-09-05* <span class="label label-info pull-right">API version 1.0</span>

Represents the status of devices registered in the Dog gateway runtime, i.e., defined in the Dog [configuration][devicesConfiguration] and successfully registered within the gateway runtime.

**URL:** /devices/status

|Method|Description|
|:-----|:----------|
| GET | List the current status of all devices actually managed by the Dog gateway, i.e. defined in the Dog configuration and registered within the gateway runtime, be they active or not |

**Example Request**

	GET http://www.mydog.com/devices/status

**Example Response**

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
			"description":" The smart plug driving the dishwasher",
			"active": true,
			"status": [
				{
					"OnOffState" : "on"
				}
				,
				{
					"SinglePhaseActivePowerMeasurementState":"53.487 W"
				}
				,
				{
					"SinglePhaseActiveEnergyState":"7.543 kWh"
				}
			]
		}
		,
		{
			"uri" : "Meter_1",
			"description":" The  utility meter",
			"active": true,
			"status": [
				{
					"ThreePhaseActiveEnergyState":[
						{
							"phaseID" : "L1",
							"value" : "345.32 kWh"
						}
						,
						{
							"phaseID" : "L2",
							"value" : "237.56 kWh"
						}
						,
						{
							"phaseID" : "L3",
							"value" : "305.23 kWh"
						}
					]
				}
				,
				{
					"ThreePhaseActivePowerMeasurementState":[
						{
							"phaseID" : "L1",
							"value" : "3000 W"
						}
						,
						{
							"phaseID" : "L2",
							"value" : "2573.08 W"
						}
						,
						{
							"phaseID" : "L3",
							"value" : "1000,40 W"
						}
					]
				}
				,
				{
					"ThreePhaseApparentPowerMeasurementState":[
						{
							"phaseID" : "L1",
							"value" : "3000 Va"
						}
						,
						{
							"phaseID" : "L2",
							"value" : "2573.08 Va"
						}
						,
						{
							"phaseID" : "L3",
							"value" : "1000,40 Va"
						}
					]
				}
				,
				{
					"ThreePhaseCurrentState":[
						{
							"phaseID" : "L1",
							"value" : "8,758 A"
						}
						,
						{
							"phaseID" : "L2",
							"value" : "7.511 A"
						}
						,
						{
							"phaseID" : "L3",
							"value" : "2.919 A"
						}
					]
				}
				,
				{
					"ThreePhaseReactivePowerMeasurementState":[
						{
							"phaseID" : "L1",
							"value" : "333 Varh"
						}
						,
						{
							"phaseID" : "L2",
							"value" : "257,3 Varh"
						}
						,
						{
							"phaseID" : "L3",
							"value" : "98,57 Varh"
						}
					]
				}
				,
				{
					"ThreePhaseVoltageState":[
						{
							"phaseID" : "L12",
							"value" : "380 V"
						}
						,
						{
							"phaseID" : "L23",
							"value" : "380 V"
						}
						,
						{
							"phaseID" : "L31",
							"value" : "380 V"
						}
					]
				}
				,
				{
					"ThreePhaseVoltageState":[
						{
							"phaseID" : "L1N",
							"value" : "220 V"
						}
						,
						{
							"phaseID" : "L2N",
							"value" : "220 V"
						}
						,
						{
							"phaseID" : "L3N",
							"value" : "220 V"
						}
					]
				}
				,
				{
					"SinglePhaseActivePowerMeasurementState":"6873,48 W"
				}
				,
				{
					"SinglePhaseActiveEnergyState":"888.11 kWh"
				}
				,
				{
					"SinglePhaseReactiveEnergyState":"888.11 kWh"
				}
				,
				{
					"FrequencyMeasurementState":"888.11 kWh"
				}
				,
				{
					"PowerFactorMeasurementState" : "0.9"
				}
				
			]
		}
	]
	}
</div>
<div class="span3" markdown="1">
<div class="well" markdown="1">

#### Resource Information ####
||
|----------------|------------------|
|Authentication |**Requires app key**|
|Response Format|**json**|
|HTTP Methods|**GET**|
|Resource family|**statuses**|
|Response Object|**Array [ DeviceState ]**|
|API Version|**v1.0**|
 
</div>
</div>
</div>
<div class="row-fluid" markdown="1">
<div class="span3" markdown="1">
</div>
<div class="span9" markdown="1">

---------------------------------------

</div>
</div>
<div class="row-fluid" markdown="1">
<div class="span3" markdown="1"></div>
<div class="span6" markdown="1">

#### Resource /devices [devices] ####

*Updated on Thu, 2013-09-05* <span class="label label-info pull-right">API version 1.0</span>

Represents domotic devices handled by Dog and "controllable" by applications using this API. 

**URL:** /devices

|Method|Description|
|:-----|:----------|
| GET | List all devices (with their details) used by the Dog gateway |

**Example Request**

	GET http://www.mydog.com/devices/status

**Example Response (JSON)**

**Example Response (XML)**

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
 	  	<dhc:dogHomeConfiguration>
        	<dhc:buildingEnvironment>
            	<dhc:building name="SimpleHome">
                	<dhc:flat class="Flat" svgfootprint="simple_home.svg" name="Flat">
                    	<dhc:room class="Kitchen" name="kitchen">
                        	<dhc:ceiling class="Ceiling" name="Ceiling_kitchen"/>
                            <dhc:floor class="Floor" name="Floor_kitchen"/>
                            <dhc:wall class="Wall" name="Wall_kitchen_south"/>
                            <dhc:wall class="Wall" name="Wall_kicthen_west">
                            	<dhc:hasWallOpening class="Window" name="Window_w4_kitchen"/>
                            </dhc:wall>
                            <dhc:wall class="Wall" name="Wall_kitchen_storage_lobby"/>
                            <dhc:wall class="Wall" name="Wall_kitchen_lobby">
                            	<dhc:hasWallOpening class="Door" name="Door_kitchen_lobby"/>
                           	</dhc:wall>
                            <dhc:wall class="Wall" name="Wall_kitchen_livingroom">
                            	<dhc:hasWallOpening class="Door" name="Door_kitchen_living"/>
                            </dhc:wall>
                      	</dhc:room>
                 	</dhc:flat>
            	</dhc:building>
      	</dhc:buildingEnvironment>
		<dhc:controllables>
        	<dhc:device domoticSystem="ELITE" name="oven1" class="ElectricalOven">
            	<dhc:description>A ElectricalOven instance named oven1</dhc:description>
                <dhc:isIn>kitchen</dhc:isIn>
                <dhc:pluggedIn>MainsPowerOutlet_p12_kitchen</dhc:pluggedIn>
                <dhc:controlFunctionality class="OnOffFunctionality">
                	<dhc:commands>
                    	<dhc:command name="on" class="OnCommand"/>
                        <dhc:command name="off" class="OffCommand"/>
                    </dhc:commands>
                </dhc:controlFunctionality>
                <dhc:controlFunctionality class="QueryFunctionality">
                	<dhc:commands>
                    	<dhc:command name="getState" class="GetCommand"/>
                    </dhc:commands>
                </dhc:controlFunctionality>
                <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                	<dhc:notifications>
                    	<dhc:notification name="stateChanged" class="StateChangeNotification">
                        	<dhc:param type="State" name="notificationParamName"/>
                        </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="MainsPowerOutlet_p12_kitchen" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p12_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="on" class="OnCommand"/>
                                <dhc:command name="off" class="OffCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                </dhc:controllables>
		</dhc:dogHomeConfiguration>


</div>
<div class="span3" markdown="1">
<div class="well" markdown="1">

#### Resource Information ####

||
|----------------|------------------|
|Authentication |**Requires app key**|
|Response Format|**json** or **xml**|
|HTTP Methods|**GET**|
|Resource family|**devices**|
|Response Object|**Array [ Device ]**|
|API Version|**v1.0**|
 
</div>
</div>
</div>
<div class="row-fluid" markdown="1">
<div class="span3" markdown="1"></div>
<div class="span9" markdown="1">

----------------------------------

</div>
</div>
<div class="row-fluid" markdown="1">
<div class="span3" markdown="1"></div>
<div class="span6" markdown="1">


##### Handling the gateway configuration [devicesConfiguration]#####

*URL:* /dog/configuration

|Method|Description|
|:-----|:----------|
| GET | List all low-level device configurations used by the Dog gateway |
| PUT | Create / Update the set of low-level device configurations that Dog should manage. Any device configuration matching an already configured device replaces the existing configuration, whereas devices not being mentioned in the current Dog configurations are added, and deployed at runtime, i.e., made available to calling applications.|

</div>
<div class="span3" markdown="1">
<div class="well" markdown="1">

#### Resource Information ####

||
|----------------|------------------|
|Authentication |**Requires app key**|
|Response Format|**json**|
|HTTP Methods|**GET**|
|Resource family|**statuses**|
|Response Object|**DeviceStates**|
|API Version|**v1.0**|
 
</div>
</div>
</div>
</div>
<script src="./js/jquery.js"></script>
<script src="./js/bootstrap.js"></script>
<script src="./js/ajax.js"></script>

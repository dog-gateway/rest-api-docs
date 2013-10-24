CSS: ./css/bootstrap.css
CSS: ./css/bootstrap-responsive.css
CSS: ./css/custom.css


<div class="container-fluid" markdown="1">
<div class="navbar navbar-fixed-top span3" markdown="1">

#### Summary ####

--------------------

<div class="accordion" id="menu" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#menu" href="#collapseOne" markdown="1">
Device API
</a>
</div>
<div id="collapseOne" class="accordion-body collapse in" markdown="1">
<div class="accordion-inner" markdown="1">

* [Devices](#devices)
	* [Single Device](#singleDevice)
* [Status](#status)
	* [Single Device](#status-single)
* [Commands] (#command)
* [Configuration](#dogConfiguration)

</div>
</div>
</div>
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#menu" href="#collapseTwo" markdown="1">
Environment API
</a>
</div>
<div id="collapseTwo" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

* [Building](#environment)
* [Flats](#flats)
	* [Single Flat](#single-flat)
* [Rooms](#rooms-in-flat)
	* [Single Room](#single-room-in-flat)

</div>
</div>
</div>
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#menu" href="#collapseThree" markdown="1">
Rules API
</a>
</div>
<div id="collapseThree" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

* Definition

</div>
</div>
</div>
</div>

</div>

<div class="row-fluid" markdown="1">
<div class="span3" markdown="1"></div>
<div class="span9" markdown="1">

<div class="page-header" markdown="1">
## Dog REST API - Documentation ##
</div>

The Dog REST API allows developers to easily integrate home and building automation into their applications, be they web applications, smartphone (Android, iOS, etc.) apps or computer programs.

APIs allow to:

* manage connected devices
	* query the gateway about installed devices, their location, functionalities and configurations;
	* require execution of commands to existing devices;
	* [monitor device statuses and measures in real-time](#status);
	* add, modify or update the set of devices controlled through the gateway;
* manage information about the environment
	* insert, update, modify or delete rooms;
	* insert, update, modify or delete flats;
* manage rules and automation scenarios
	* insert, update, modify or delete automation rules;
	* insert, update, modify or delete scenarios;
* monitor the home/building performance
	* historical information on consumptions;
	* historical information on activations;
	* related statistics;
* manage Dog 
	* manage system performance;
	* manage system updates;
	* troubleshoot problems.


#### Function summary ####

|||
|----|----|
|[Resource /devices](#devices)|Represents domotic devices handled by Dog and "controllable" by applications using this API. |
|[Resource /devices/{device-id} ](#singleDevice)|Represents a single domotic device handled by Dog, identified by a unique *device-id* (currently encoded in the *name* attribute for the XML response to the [GET /devices](#devices) request), and "controllable" by applications using this API. |
|[Resource /devices/status](#status)|Represents the status of devices registered in the Dog gateway runtime, i.e., defined in the Dog [configuration](#devices) and successfully registered within the gateway runtime.|
|[Resource /devices/{device-id}/status](#status-single)|Represents the status of the device identified by the given *device-id*, registered in the Dog gateway runtime, i.e., defined in the Dog [configuration][devicesConfiguration] and successfully registered within the gateway runtime.|
|[Resource /devices/{device-id}/commands/{command-name} ](#command)|Represents a command, identified by a *command-name*, to be sent to the device identified by the given *device-id*. Commands are idempotent: the same command always results in the same behavior of the selected device. If the command brings the device in same state in which the device is, no differences will be appreciable.|
|[Resource /dog/configuration](#dogConfiguration)| Unsupported, to be implemented in future... |
|[Resource /environment](#environment)|Represents the environment (i.e., the building) configured in Dog.|
|[Resource /environment/flats](#flats)|Represents all the flats present in the environment (i.e., the building).|
|[Resource /environment/flats/{flat-id}](#single-flat)|Represents a specific flat present in the environment (i.e., the building).|
|[Resource /environment/{flat-id}/rooms](#rooms-in-flat)|Represents all the rooms present in a given flat.|
|[Resource /environment/{flat-id}/rooms/{room-id}](#single-room-in-flat)|Represents a specific room present in a given flat in the environment (i.e., the building).|


---------------------------------

### Device API [deviceAPI]###

---------------------------------

</div>
</div>
<div class="row-fluid" markdown="1">
<div class="span3" markdown="1"></div>
<div class="span6" markdown="1">

#### Resource /devices <a id="devices"></a> ####

*Updated on Thu, 2013-09-05* <span class="label label-info pull-right">API version 1.0</span>

Represents domotic devices handled by Dog and "controllable" by applications using this API. 

**URL:** /devices

|Method|Description|
|:-----|:----------|
| GET | List all devices (with their details) used by the Dog gateway |

**Example Request**

	GET http://www.mydog.com/devices

<div class="accordion" id="devices-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#devices-example" href="#devices-example-json" markdown="1">
**Example Response (JSON)**
</a>
</div>
<div id="devices-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">
</div>
</div>
</div>
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#devices-example" href="#devices-example-xml" markdown="1">
**Example Response (XML)**
</a>
</div>
<div id="devices-example-xml" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">




    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
 	  <dhc:dogHomeConfiguration>
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
</div>
</div>
</div>
</div>
<div class="span3" markdown="1">
<div class="well" markdown="1">

#### Resource Information ####

|||
|----------------|------------------|
|Authentication |**Requires app key**|
|Response Format|**json** or **xml**|
|HTTP Methods|**GET**|
|Resource family|**device**|
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

#### Resource /devices/{device-id} <a id="singleDevice"></a>####

*Updated on Fri, 2013-10-22* <span class="label label-info pull-right">API version 1.0</span>

Represents a single domotic device handled by Dog, identified by a unique *device-id* (currently encoded in the *name* attribute for the XML response to the [GET /devices](#devices) request),
and "controllable" by applications using this API. 

*URL:* /devices/{device-id}

|Method|Description|
|:-----|:----------|
| GET |Returns the details of the device identified by the given *device-id* |
| PUT |Update some details of the device identified by the given *device-id* |

**GET: Example**

   GET http://www.mydog.com/devices/MainsPowerOutlet_p12_kitchen

<div class="accordion" id="devices-single-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#devices-single-example" href="#devices-single-example-json" markdown="1">
**Example Response (JSON)**
</a>
</div>
<div id="devices-single-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

   	{
   		"name" : "MainsPowerOutlet_p12_kitchen",
   		"class" : "MainsPowerOutlet",
   		"description" : "The smart plug to which the dishwasher is connected",
   		"isIn" : "kitchen",
   		"hasMeter" : "energy_meter_1",
   		"controlFunctionalities":[
   			{
   				"class":"OnOffFunctionality",
   				"commands":[
   					{
   						"name":"on",
   						"class":"OnCommand"
   					}
   					,
   					{
   						"name" : "off",
   						"class" : "OffCommand"
   					}
   				]
   			}
   		]
   		,
   		"notificationFunctionalities" : [
   			{
   				"class" : "StateChangeNotificationFunctionality",
   				"notifications": [
   					{
   						"name" : "stateChanged",
   						"class" : "StateChangeNotification",
   						"parameters" : [
   							{
   								"name" : "notificationParamName",
   								"type" : "State"
   							}
   						]
   					}
   				]
   			}
   		]
   		,
   		"states" : [
   			{
   				"class" : "OnOffState",
   				"values" : [
   					{
   						"name" : "on",
   						"class" : "OnStateValue"
   					}
   					,
   					{
   						"name" : "off",
   						"class" : "OffStateValue"
   					}
   				]
   			}
   		]	
   	}

</div>
</div>
</div>
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#devices-single-example" href="#devices-single-example-xml" markdown="1">
**Example Response (XML)**
</a>
</div>
<div id="devices-single-example-xml" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

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
</div>
</div>
</div>
</div>

**PUT: Example**
<div class="accordion" id="device-update-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#device-update-example" href="#device-update-example-json" markdown="1">
**Example Request**
</a>
</div>
<div id="device-update-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	PUT http://www.mydog.com/devices/MainsPowerOutlet_p12_kitchen
	
	-- REQUEST-BODY: --
	
	{
		"isIn" : "lobby",
		"description" : "Lavastoviglie"
	}
</div>
</div>
</div>
</div>

</div>
<div class="span3" markdown="1">
<div class="well" markdown="1">

#### Resource Information ####

|||
|----------------|------------------|
|Authentication |**Requires app key**|
|Response Format|**json** or **xml**|
|HTTP Methods|**GET** or **PUT**|
|Resource family|**device**|
|Response Object|**Device**|
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

#### Resource /devices/status <a id="status"></a>####

*Updated on Thu, 2013-09-05* <span class="label label-info pull-right">API version 1.0</span>

Represents the status of devices registered in the Dog gateway runtime, i.e., defined in the Dog [configuration](#devicesConfiguration) and successfully registered within the gateway runtime.

**URL:** /devices/status

|Method|Description|
|:-----|:----------|
| GET | List the current status of all devices actually managed by the Dog gateway, i.e. defined in the Dog configuration and registered within the gateway runtime, be they active or not |

**Example Request**

	GET http://www.mydog.com/devices/status

<div class="accordion" id="devices-status-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#devices-status-example" href="#devices-status-example-json" markdown="1">
**Example Response (JSON)**
</a>
</div>
<div id="devices-status-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	{
	"devices":[
		{
			"name" : "Lamp1",
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
			"name" : "Plug_h725",
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
			"name" : "Meter_1",
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
</div>
</div>
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#devices-status-example" href="#devices-status-example-xml" markdown="1">
**Example Response (XML)**
</a>
</div>
<div id="devices-status-example-xml" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">
</div>
</div>
</div>
</div>
</div>
<div class="span3" markdown="1">
<div class="well" markdown="1">

#### Resource Information ####
|||
|----------------|------------------|
|Authentication |**Requires app key**|
|Response Format|**json**|
|HTTP Methods|**GET**|
|Resource family|**status**|
|Response Object|**Array [ DeviceState ]**|
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

#### Resource /devices/{device-id}/status <a id="status-single"></a>####

*Updated on Thu, 2013-10-23* <span class="label label-info pull-right">API version 1.0</span>

Represents the status of the device identified by the given *device-id* and registered in the Dog gateway runtime, i.e., defined in the Dog [configuration](#devicesConfiguration) and successfully registered within the gateway runtime.

**URL:** /devices/{device-id}/status

|Method|Description|
|:-----|:----------|
| GET | List the current status of the device identified by the given *device-id* and actually managed by the Dog gateway, i.e. defined in the Dog configuration and registered within the gateway runtime, be they active or not |

**Example Request**

	GET http://www.mydog.com/devices/Meter_1/status

<div class="accordion" id="single-device-status-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#single-device-status-example" href="#single-device-status-example-json" markdown="1">
**Example Response (JSON)**
</a>
</div>
<div id="single-device-status-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

		{
			"name" : "Meter_1",
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
</div>
</div>
</div>
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#single-device-status-example" href="#single-device-status-example-xml" markdown="1">
**Example Response (XML)**
</a>
</div>
<div id="single-device-status-example-xml" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">
</div>
</div>
</div>
</div>
</div>
<div class="span3" markdown="1">
<div class="well" markdown="1">

#### Resource Information ####
|||
|----------------|------------------|
|Authentication |**Requires app key**|
|Response Format|**json**|
|HTTP Methods|**GET**|
|Resource family|**status**|
|Response Object|**DeviceState**|
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

#### Resource /devices/{device-id}/commands/{command-name} <a id="command"></a>####

*Updated on Fri, 2013-09-06* <span class="label label-info pull-right">API version 1.0</span>

Represents a command, identified by a *command-name*, to be sent to the device identified by the given *device-id*. 
Commands are idempotent: the same command always results in the same behavior of the selected device. 
If the command brings the device in same state in which the device is, no differences will be appreciable. 

*URL:* /devices/{device-id}/commands/{command-name}

|Method|Description|
|:-----|:----------|
| PUT | sends the command identified by the given *command-name*|
| POST | sends the command identified by the given *command-name* (deprecated)|

<div class="accordion" id="devices-command-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#devices-command-example" href="#devices-command-example-json" markdown="1">
**Example Requests**
</a>
</div>
<div id="devices-command-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">
(simple command)

    PUT http://www.mydog.com/devices/MainsPowerOutlet_p12_kitchen/commands/on

(command with parameters)

	PUT http://www.mydog.com/devices/DimmerLamp_l4_livingroom/commands/set
	
	-- REQUEST-BODY: --
	
	{
		"value" : "63"
	}

(deprecated)    
   
    POST http://www.mydog.com/devices/MainsPowerOutlet_p12_kitchen/commands/off
</div>
</div>
</div>
</div>
</div>
<div class="span3" markdown="1">
<div class="well" markdown="1">

#### Resource Information ####

|||
|----------------|------------------|
|Authentication |**Requires app key**|
|Response Format|**json**|
|HTTP Methods|**PUT** or **POST**|
|Resource family|**device**|
|Response Object|**none**|
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


#### Resource /dog/configuration <a id="dogConfiguration"></a>####

*Updated on Tue, 2013-10-22* <span class="label label-important pull-right">Unavailable</span>

*URL:* /dog/configuration

|Method|Description|
|:-----|:----------|
| GET | List all low-level device configurations used by the Dog gateway |
| PUT | Create / Update the set of low-level device configurations that Dog should manage. Any device configuration matching an already configured device replaces the existing configuration, whereas devices not being mentioned in the current Dog configurations are added, and deployed at runtime, i.e., made available to calling applications.|

</div>
<div class="span3" markdown="1">
<div class="well" markdown="1">

#### Resource Information ####

|||
|----------------|------------------|
|Authentication |**Requires app key**|
|Response Format|**json**|
|HTTP Methods|**GET**|
|Resource family|**configuration**|
|Response Object|**DeviceConfigurations**|
|API Version|**v1.1**|
 
</div>
</div>
</div>

<div class="row-fluid" markdown="1">
<div class="span3" markdown="1"></div>
<div class="span9" markdown="1">

---------------------------------

### Environment API [environmentAPI]###

---------------------------------

</div>
</div>

<div class="row-fluid" markdown="1">
<div class="span3" markdown="1"></div>
<div class="span6" markdown="1">

#### Resource /environment <a id="environment"></a> ####

*Updated on Thu, 2013-10-22* <span class="label label-info pull-right">API version 1.0</span>

Represents the environment (i.e., the building) configured in Dog. 

**URL:** /environment

|Method|Description|
|:-----|:----------|
| GET | List the building environments configured in the Dog gateway. |

**Example Request**

	GET http://www.mydog.com/environment

<div class="accordion" id="environment-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#environment-example" href="#environment-example-json" markdown="1">
**Example Response (JSON)**
</a>
</div>
<div id="environment-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">
</div>
</div>
</div>
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#environment-example" href="#environment-example-xml" markdown="1">
**Example Response (XML)**
</a>
</div>
<div id="environment-example-xml" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">




    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
 	  	<dhc:dogHomeConfiguration>
        	<dhc:buildingEnvironment>
            	<dhc:building name="SimpleHome">
                	<dhc:flat class="Flat" svgfootprint="simple_home.svg" name="flat">
                		<dhc:description>The flat I rent in Turin.</dhc:description>
                    	<dhc:room class="Kitchen" name="kitchen">
                    		<dhc:description>The best room in the house.</dhc:description>
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
                      	<dhc:room class="Bedroom" name="sam_bedroom">
                    		<dhc:description>Sam's bedroom</dhc:description>
                        	<dhc:ceiling class="Ceiling" name="Ceiling_sam_bedroom"/>
                            <dhc:floor class="Floor" name="Floor_sam_bedroom"/>
                            <dhc:wall class="Wall" name="Wall_sam_bedroom_south"/>
                            <dhc:wall class="Wall" name="Wall_sam_bedroom_west">
                            	<dhc:hasWallOpening class="Window" name="Window_w1_sam_bedroom"/>
                            </dhc:wall>
                            <dhc:wall class="Wall" name="Wall_sam_bedroom_main_bathroom_lobby"/>
                            <dhc:wall class="Wall" name="Wall_sam_bedroom_lobby">
                            	<dhc:hasWallOpening class="Door" name="Door_sam_bedroom_lobby"/>
                           	</dhc:wall>
                            <dhc:wall class="Wall" name="Wall_sam-bedroom_livingroom">
                            	<dhc:hasWallOpening class="Door" name="Door_sam_bedroom_living"/>
                            </dhc:wall>
                      	</dhc:room>
                 	</dhc:flat>
            	</dhc:building>
      		</dhc:buildingEnvironment>
		</dhc:dogHomeConfiguration>

</div>
</div>
</div>
</div>
</div>
<div class="span3" markdown="1">
<div class="well" markdown="1">

#### Resource Information ####

|||
|----------------|------------------|
|Authentication |**Requires app key**|
|Response Format|**json** or **xml**|
|HTTP Methods|**GET**|
|Resource family|**environment**|
|Response Object|**Array [ Buildings ]**|
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

#### Resource /environment/flats <a id="flats"></a> ####

*Updated on Thu, 2013-10-22* <span class="label label-info pull-right">API version 1.0</span>

Represents all the flats present in the environment (i.e., the building). 

**URL:** /environment/flats

|Method|Description|
|:-----|:----------|
| GET | List all the flats present in the environment (i.e., in the building) configured in Dog. |
| POST | Add a new flat to the environment configured in Dog. |

**GET: Example**

	GET http://www.mydog.com/environment/flats

<div class="accordion" id="flats-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#flats-example" href="#flats-example-json" markdown="1">
**Example Response (JSON)**
</a>
</div>
<div id="flats-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	{
	"flats":[
		{
			"name" : "flat",
			"class" : "Flat",
			"description" : "The flat I rent in Turin",
			"rooms":[
				{
					"name" : "kitchen",
					"class" : "Kitchen",
					"description" : "The best room in the house"
				},
				{
					"name" : "sam_bedroom",
					"class": "Bedroom",
					"description" : "Sam's bedroom"
				}
			]
		},
		{
			"name" : "milan-flat",
			"class" : "Flat",
			"description" : "The flat I own in Milan",
			"rooms":[
				{
					"name" : "kitchen",
					"class" : "Kitchen",
					"description" : "The kitchen"
				},
				{
					"name" : "bathroom",
					"class": "Bathroom",
					"description" : "The only bathroom"
				}
			]
		}
	]
	}

</div>
</div>
</div>
</div>

**POST: Example**
<div class="accordion" id="add-flat-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#add-flat-example" href="#add-flat-example-json" markdown="1">
**Example Request**
</a>
</div>
<div id="add-flat-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	POST http://www.mydog.com/environment/flats
	
	-- REQUEST-BODY: --
	
	{
		"name" : "loft",
		"class" : "Flat",
		"description" : "The loft in the city center",
		"rooms":[
			{
				"name" : "kitchen",
				"class" : "Kitchen",
				"description" : "The kitchen with a wonderful view"
			},
			{
				"name" : "bedroom",
				"class": "Bedroom",
				"description" : "My bedroom"
			}
		]
	}
	
</div>
</div>
</div>
</div>

</div>
<div class="span3" markdown="1">
<div class="well" markdown="1">

#### Resource Information ####

|||
|----------------|------------------|
|Authentication |**Requires app key**|
|Response Format|**json**|
|HTTP Methods|**GET** or **POST**|
|Resource family|**environment**|
|Response Object|**Array [ Flat ]**|
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

#### Resource /environment/flats/{flat-id} <a id="single-flat"></a> ####

*Updated on Thu, 2013-10-22* <span class="label label-info pull-right">API version 1.0</span>

Represents a specific flat present in the environment (i.e., the building). 

**URL:** /environment/flats

|Method|Description|
|:-----|:----------|
| GET | Returns the details of the flat identified by the given *flat-id*. |
| PUT | Update some properties of the flat identified by the given *flat-id*. |

**GET: Example**

	GET http://www.mydog.com/environment/flats/flat

<div class="accordion" id="single-flat-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#single-flat-example" href="#single-flat-example-json" markdown="1">
**Example Response (JSON)**
</a>
</div>
<div id="single-flat-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	{
		"name" : "flat",
		"class" : "Flat",
		"description" : "The flat I rent in Turin",
		"rooms":[
			{
				"name" : "kitchen",
				"class" : "Kitchen",
				"description" : "The best room in the house"
			},
			{
				"name" : "sam_bedroom",
				"class": "Bedroom",
				"description" : "Sam's bedroom"
			}
		]
	}

</div>
</div>
</div>
</div>

**PUT: Example**
<div class="accordion" id="update-flat-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#update-flat-example" href="#update-flat-example-json" markdown="1">
**Example Request**
</a>
</div>
<div id="update-flat-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	PUT http://www.mydog.com/environment/flats/flat
	
	-- REQUEST-BODY: --
	
	{
		"description" : "The flat where I grew"
	}
</div>
</div>
</div>
</div>

</div>
<div class="span3" markdown="1">
<div class="well" markdown="1">

#### Resource Information ####

|||
|----------------|------------------|
|Authentication |**Requires app key**|
|Response Format|**json**|
|HTTP Methods|**GET** or **PUT**|
|Resource family|**environment**|
|Response Object|**Flat**|
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

#### Resource /environment/flats/{flat-id}/rooms <a id="rooms-in-flat"></a> ####

*Updated on Thu, 2013-10-22* <span class="label label-info pull-right">API version 1.0</span>

Represents all the rooms present in a given flat. 

**URL:** /environment/flats

|Method|Description|
|:-----|:----------|
| GET | List all the rooms present in the flat identified by the given *flat-id*. |
| POST | Add a new room to the flat identified by the given *flat-id*. |

**GET: Example**

	GET http://www.mydog.com/environment/flats/flat/rooms

<div class="accordion" id="rooms-in-flat-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#rooms-in-flat-example" href="#rooms-in-flat-example-json" markdown="1">
**Example Response (JSON)**
</a>
</div>
<div id="rooms-in-flat-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	{
	"rooms":[
		{
			"name" : "kitchen",
			"class" : "Kitchen",
			"description" : "The best room in the house"
		},
		{
			"name" : "sam_bedroom",
			"class": "Bedroom",
			"description" : "Sam's bedroom"
		}
	]
	}

</div>
</div>
</div>
</div>

**POST: Example**
<div class="accordion" id="add-room-in-flat-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#add-room-in-flat-example" href="#add-room-in-flat-example-json" markdown="1">
**Example Request**
</a>
</div>
<div id="add-room-in-flat-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	POST http://www.mydog.com/environment/flats/flat/rooms
	
	-- REQUEST-BODY: --
	
	{
		"name" : "bedroom",
		"class": "Bedroom",
		"description" : "My bedroom"
	}
	
</div>
</div>
</div>
</div>

</div>
<div class="span3" markdown="1">
<div class="well" markdown="1">

#### Resource Information ####

|||
|----------------|------------------|
|Authentication |**Requires app key**|
|Response Format|**json**|
|HTTP Methods|**GET** or **POST**|
|Resource family|**environment**|
|Response Object|**Array [ Rooms ]**|
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

#### Resource /environment/flats/{flat-id}/rooms/{room-id} <a id="single-room-in-flat"></a> ####

*Updated on Thu, 2013-10-22* <span class="label label-info pull-right">API version 1.0</span>

Represents a specific room in the flat identified by the given *flat-id*. 

**URL:** /environment/flats/{flat-id}/rooms/{room-id}

|Method|Description|
|:-----|:----------|
| GET | Returns the details of the room identified by the given *room-id* and located in the given flat. |
| PUT | Update some properties of the room identified by the given *room-id* and located in the given flat. |

**GET: Example**

	GET http://www.mydog.com/environment/flats/flat/rooms/kitchen

<div class="accordion" id="single-room-in-flat-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#single-room-in-flat-example" href="#single-room-in-flat-example-json" markdown="1">
**Example Response (JSON)**
</a>
</div>
<div id="single-room-in-flat-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	{
		"name" : "kitchen",
		"class" : "Kitchen",
		"description" : "The best room in the house"
	}

</div>
</div>
</div>
</div>

**PUT: Example**
<div class="accordion" id="update-single-room-in-flat-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#update-single-room-in-flat-example" href="#update-single-room-in-flat-example-json" markdown="1">
**Example Request**
</a>
</div>
<div id="update-single-room-in-flat-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	PUT http://www.mydog.com/environment/flats/flat/rooms/kitchen
	
	-- REQUEST-BODY: --
	
	{
		"description" : "The room I love: the kitchen"
	}
</div>
</div>
</div>
</div>

</div>
<div class="span3" markdown="1">
<div class="well" markdown="1">

#### Resource Information ####

|||
|----------------|------------------|
|Authentication |**Requires app key**|
|Response Format|**json**|
|HTTP Methods|**GET** or **PUT**|
|Resource family|**environment**|
|Response Object|**Room**|
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

</div>
</div>
<script src="./js/jquery.js"></script>
<script src="./js/bootstrap.js"></script>
<script src="./js/ajax.js"></script>

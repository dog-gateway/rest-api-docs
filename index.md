CSS: ./css/bootstrap.css
CSS: ./css/bootstrap-responsive.css
CSS: ./css/custom.css

<div class="container-fluid" markdown="1">
<div class="navbar navbar-fixed-top span3" markdown="1">
#### Summary ####

--------------------

<div class="well" markdown="1" >

* [Device API][deviceAPI]
	* [Status][status]
	* [Devices][devices]
</div>
</div>

<div class="row-fluid" markdown="1">
<div class="span3" markdown="1"></div>
<div class="span9" multimarkdown="1">

<div class="page-header" markdown="1">
## Dog RestAPI - Documentation ##
</div>

The Dog RestAPI allows developers to easily integrate home and building automation into their applications, be they web applications, smartphone (Android, iOS) apps or standalone programs.

APIs allow to:

* manage connected devices
	* query the gateway about installed devices, their location, functionalities and configurations;
	* require execution of commands to existing devices;
	* [monitor device statuses and measures in real-time][status];
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
                            <dhc:room class="Bedroom" name="bedroom">
                                <dhc:ceiling class="Ceiling" name="Ceiling_bedroom"/>
                                <dhc:floor class="Floor" name="Floor_bedroom"/>
                                <dhc:wall class="Wall" name="Wall_bedroom_bathroom"/>
                                <dhc:wall class="Wall" name="Wall_bed_north">
                                    <dhc:hasWallOpening class="Window" name="Window_w2_bed"/>
                                </dhc:wall>
                                <dhc:wall class="Wall" name="Wall_bed_west">
                                    <dhc:hasWallOpening class="Window" name="Window_w1_bedroom"/>
                                </dhc:wall>
                                <dhc:wall class="Wall" name="Wall_bedroom_lobby_storage">
                                    <dhc:hasWallOpening class="Door" name="Door_bedroom"/>
                                </dhc:wall>
                            </dhc:room>
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
                            <dhc:room class="Bathroom" name="bathroom">
                                <dhc:ceiling class="Ceiling" name="Ceiling_bathroom"/>
                                <dhc:floor class="Floor" name="Floor_bathroom"/>
                                <dhc:wall class="Wall" name="Wall_bathroom_east">
                                    <dhc:hasWallOpening class="Window" name="Window_w3_bath"/>
                                </dhc:wall>
                                <dhc:wall ref="Wall_bedroom_bathroom"/>
                                <dhc:wall class="Wall" name="Wall_bathroom_lobby">
                                    <dhc:hasWallOpening class="Door" name="Door_lobby_bathroom"/>
                                </dhc:wall>
                                <dhc:wall class="Wall" name="Wall_bathroom_north"/>
                            </dhc:room>
                            <dhc:room class="Lobby" name="lobby">
                                <dhc:ceiling class="Ceiling" name="Ceiling_lobby"/>
                                <dhc:floor class="Floor" name="Floor_lobby"/>
                                <dhc:wall class="Wall" name="Wall_storage_lobby">
                                    <dhc:hasWallOpening class="Door" name="Door_storage"/>
                                </dhc:wall>
                                <dhc:wall ref="Wall_bathroom_lobby"/>
                                <dhc:wall ref="Wall_kitchen_lobby"/>
                                <dhc:wall class="Wall" name="Wall_livingroom_lobby">
                                    <dhc:hasWallOpening class="Door" name="Door_living_lobby"/>
                                </dhc:wall>
                                <dhc:wall class="Wall" name="Wall_exterior_lobby">
                                    <dhc:hasWallOpening class="Entrance" name="main_door"/>
                                </dhc:wall>
                                <dhc:wall ref="Wall_bedroom_lobby_storage"/>
                            </dhc:room>
                            <dhc:room class="LivingRoom" name="livingroom">
                                <dhc:ceiling class="Ceiling" name="Ceiling_livingroom"/>
                                <dhc:floor class="Floor" name="Floor_livingroom"/>
                                <dhc:wall class="Wall" name="Wall_livingroom_east">
                                    <dhc:hasWallOpening class="Window" name="Window_w5_living"/>
                                    <dhc:hasWallOpening class="Window" name="Window_w6_living"/>
                                </dhc:wall>
                                <dhc:wall class="Wall" name="Wall_livingroom_south"/>
                                <dhc:wall ref="Wall_livingroom_lobby"/>
                                <dhc:wall ref="Wall_kitchen_livingroom"/>
                            </dhc:room>
                            <dhc:room class="StorageRoom" name="storageroom">
                                <dhc:ceiling class="Ceiling" name="Ceiling_storageroom"/>
                                <dhc:floor class="Floor" name="Floor_storageroom"/>
                                <dhc:wall class="Wall" name="Wall_exterior_storage"/>
                                <dhc:wall ref="Wall_kitchen_storage_lobby"/>
                                <dhc:wall ref="Wall_storage_lobby"/>
                                <dhc:wall ref="Wall_bedroom_lobby_storage"/>
                            </dhc:room>
                        </dhc:flat>
                    </dhc:building>
                </dhc:buildingEnvironment>
                <dhc:controllables>
                    <dhc:device domoticSystem="ELITE" name="oven1" class="ElectricalOven">
                        <dhc:description>A ElectricalOven instance named oven1</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:pluggedIn>MainsPowerOutlet_p14_kitchen</dhc:pluggedIn>
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
                    <dhc:device domoticSystem="ELITE" name="ShutterActuator_sh2_living" class="ShutterActuator">
                        <dhc:description>A ShutterActuator instance named ShutterActuator_sh2_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:controlFunctionality class="UpDownRestFunctionality">
                            <dhc:commands>
                                <dhc:command name="up" class="UpCommand"/>
                                <dhc:command name="down" class="DownCommand"/>
                                <dhc:command name="rest" class="RestCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="ShutterState">
                            <dhc:statevalues>
                                <dhc:statevalue name="rest" class="RestTripleStateValue"/>
                                <dhc:statevalue name="up" class="UpTripleStateValue"/>
                                <dhc:statevalue name="lowering" class="LoweringStateValue"/>
                                <dhc:statevalue name="down" class="DownTripleStateValue"/>
                                <dhc:statevalue name="raising" class="RaisingStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="BTICINO" name="Switch_b3_lobby" class="OnOffSwitch">
                        <dhc:description>A OnOffSwitch instance named Switch_b3_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="off" class="OffNotification"/>
                                <dhc:notification name="on" class="OnNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
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
                    <dhc:device domoticSystem="ELITE" name="ToggleRelay_lobby" class="ToggleRelay">
                        <dhc:description>A ToggleRelay instance named ToggleRelay_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:controlFunctionality class="ToggleFunctionality">
                            <dhc:commands>
                                <dhc:command name="toggle" class="ToggleCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="on" class="OnNotification"/>
                                <dhc:notification name="off" class="OffNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
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
                    <dhc:device domoticSystem="KONNEX" name="Button_down_21_bath" class="Button">
                        <dhc:description>A Button instance named Button_down_21_bath</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="fridge1" class="Fridge">
                        <dhc:description>A Fridge instance named fridge1</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:pluggedIn>MainsPowerOutlet_p12_kitchen</dhc:pluggedIn>
                        <dhc:controlFunctionality class="QueryFunctionality">
                            <dhc:commands>
                                <dhc:command name="getState" class="GetCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="BTICINO" name="SimpleLamp_lamp4_lobby" class="SimpleLamp">
                        <dhc:description>A SimpleLamp instance named SimpleLamp_lamp4_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
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
                    <dhc:device domoticSystem="ELITE" name="DoorActuator_d7_kitchen" class="DoorActuator">
                        <dhc:description>A DoorActuator instance named DoorActuator_d7_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:controlFunctionality class="OpenCloseFunctionality">
                            <dhc:commands>
                                <dhc:command name="close" class="CloseCommand"/>
                                <dhc:command name="open" class="OpenCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="MovementState">
                            <dhc:statevalues>
                                <dhc:statevalue name="isMoving" class="MovingStateValue"/>
                                <dhc:statevalue name="notMoving" class="NotMovingStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                        <dhc:state class="OpenCloseState">
                            <dhc:statevalues>
                                <dhc:statevalue name="close" class="CloseStateValue"/>
                                <dhc:statevalue name="open" class="OpenStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="Switch_b13_bath" class="OnOffSwitch">
                        <dhc:description>A OnOffSwitch instance named Switch_b13_bath</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="on" class="OnNotification"/>
                                <dhc:notification name="off" class="OffNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="WindowActuator_w3_bath" class="WindowActuator">
                        <dhc:description>A WindowActuator instance named WindowActuator_w3_bath</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
                        <dhc:controlFunctionality class="OpenCloseFunctionality">
                            <dhc:commands>
                                <dhc:command name="open" class="OpenCommand"/>
                                <dhc:command name="close" class="CloseCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OpenCloseState">
                            <dhc:statevalues>
                                <dhc:statevalue name="close" class="CloseStateValue"/>
                                <dhc:statevalue name="open" class="OpenStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                        <dhc:state class="MovementState">
                            <dhc:statevalues>
                                <dhc:statevalue name="notMoving" class="NotMovingStateValue"/>
                                <dhc:statevalue name="isMoving" class="MovingStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p16_kitchen" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p16_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
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
                    <dhc:device domoticSystem="KONNEX" name="Button_down_sh2_living" class="Button">
                        <dhc:description>A Button instance named Button_down_sh2_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
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
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p11_kitchen" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p11_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="KONNEX" name="SimpleLamp_lamp3_storage" class="SimpleLamp">
                        <dhc:description>A SimpleLamp instance named SimpleLamp_lamp3_storage</dhc:description>
                        <dhc:isIn>storageroom</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
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
                                <dhc:statevalue name="on" class="OnStateValue"/>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="SimpleLamp_lamp9_bath" class="SimpleLamp">
                        <dhc:description>A SimpleLamp instance named SimpleLamp_lamp9_bath</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="ELITE" name="InfraredSensor_IR3_lobby" class="InfraredSensor">
                        <dhc:description>A InfraredSensor instance named InfraredSensor_IR3_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:controlFunctionality class="QueryFunctionality">
                            <dhc:commands>
                                <dhc:command name="getState" class="GetCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="SensingNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="detected" class="DetectedNotification"/>
                                <dhc:notification name="notDetected" class="NotDetectedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="SensingState">
                            <dhc:statevalues>
                                <dhc:statevalue name="detected" class="DetectedStateValue"/>
                                <dhc:statevalue name="notDetected" class="NotDetectedStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="Switch_allPlugsStorage" class="OnOffSwitch">
                        <dhc:description>A OnOffSwitch instance named Switch_allPlugsStorage</dhc:description>
                        <dhc:isIn>storageroom</dhc:isIn>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="on" class="OnNotification"/>
                                <dhc:notification name="off" class="OffNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="Button_14_bath" class="Button">
                        <dhc:description>A Button instance named Button_14_bath</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="Button_down_17_sh1_bedroom" class="Button">
                        <dhc:description>A Button instance named Button_down_17_sh1_bedroom</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
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
                    <dhc:device name="aeonLabsZWaveUSBStick" class="ZWaveGateway">
                        <dhc:description>A ZWaveGateway instance named aeonLabsZWaveUSBStick</dhc:description>
                        <dhc:controlFunctionality class="AssociateFunctionality">
                            <dhc:commands>
                                <dhc:command name="associate" class="AssociateCommand"/>
                                <dhc:command name="disassociate" class="DisassociateCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="ShutterActuator_sh1_bedroom" class="ShutterActuator">
                        <dhc:description>A ShutterActuator instance named ShutterActuator_sh1_bedroom</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:controlFunctionality class="UpDownRestFunctionality">
                            <dhc:commands>
                                <dhc:command name="down" class="DownCommand"/>
                                <dhc:command name="rest" class="RestCommand"/>
                                <dhc:command name="up" class="UpCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="ShutterState">
                            <dhc:statevalues>
                                <dhc:statevalue name="raising" class="RaisingStateValue"/>
                                <dhc:statevalue name="rest" class="RestTripleStateValue"/>
                                <dhc:statevalue name="down" class="DownTripleStateValue"/>
                                <dhc:statevalue name="lowering" class="LoweringStateValue"/>
                                <dhc:statevalue name="up" class="UpTripleStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="DoorActuator_d1_bed" class="DoorActuator">
                        <dhc:description>A DoorActuator instance named DoorActuator_d1_bed</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:controlFunctionality class="OpenCloseFunctionality">
                            <dhc:commands>
                                <dhc:command name="close" class="CloseCommand"/>
                                <dhc:command name="open" class="OpenCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="MovementState">
                            <dhc:statevalues>
                                <dhc:statevalue name="isMoving" class="MovingStateValue"/>
                                <dhc:statevalue name="notMoving" class="NotMovingStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                        <dhc:state class="OpenCloseState">
                            <dhc:statevalues>
                                <dhc:statevalue name="close" class="CloseStateValue"/>
                                <dhc:statevalue name="open" class="OpenStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="Switch_b9_lobby" class="OnOffSwitch">
                        <dhc:description>A OnOffSwitch instance named Switch_b9_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="off" class="OffNotification"/>
                                <dhc:notification name="on" class="OnNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
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
                    <dhc:device domoticSystem="ELITE" name="InfraredSensor_IR5_living" class="InfraredSensor">
                        <dhc:description>A InfraredSensor instance named InfraredSensor_IR5_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:controlFunctionality class="QueryFunctionality">
                            <dhc:commands>
                                <dhc:command name="getState" class="GetCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="SensingNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="detected" class="DetectedNotification"/>
                                <dhc:notification name="notDetected" class="NotDetectedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="SensingState">
                            <dhc:statevalues>
                                <dhc:statevalue name="detected" class="DetectedStateValue"/>
                                <dhc:statevalue name="notDetected" class="NotDetectedStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="Button_down_19_sh2_bedroom" class="Button">
                        <dhc:description>A Button instance named Button_down_19_sh2_bedroom</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
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
                    <dhc:device domoticSystem="KONNEX" name="Switch_P12_kitchen" class="OnOffSwitch">
                        <dhc:description>A OnOffSwitch instance named Switch_P12_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="on" class="OnNotification"/>
                                <dhc:notification name="off" class="OffNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="BTICINO" name="Switch_b12_bath" class="OnOffSwitch">
                        <dhc:description>A OnOffSwitch instance named Switch_b12_bath</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="on" class="OnNotification"/>
                                <dhc:notification name="off" class="OffNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="BTICINO" name="ShutterActuator_sh1_living" class="ShutterActuator">
                        <dhc:description>A ShutterActuator instance named ShutterActuator_sh1_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:controlFunctionality class="UpDownRestFunctionality">
                            <dhc:commands>
                                <dhc:command name="up" class="UpCommand"/>
                                <dhc:command name="down" class="DownCommand"/>
                                <dhc:command name="rest" class="RestCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="ShutterState">
                            <dhc:statevalues>
                                <dhc:statevalue name="rest" class="RestTripleStateValue"/>
                                <dhc:statevalue name="raising" class="RaisingStateValue"/>
                                <dhc:statevalue name="up" class="UpTripleStateValue"/>
                                <dhc:statevalue name="down" class="DownTripleStateValue"/>
                                <dhc:statevalue name="lowering" class="LoweringStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="DoorActuator_d4_lobby_ext" class="DoorActuator">
                        <dhc:description>A DoorActuator instance named DoorActuator_d4_lobby_ext</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:controlFunctionality class="OpenCloseFunctionality">
                            <dhc:commands>
                                <dhc:command name="close" class="CloseCommand"/>
                                <dhc:command name="open" class="OpenCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OpenCloseState">
                            <dhc:statevalues>
                                <dhc:statevalue name="close" class="CloseStateValue"/>
                                <dhc:statevalue name="open" class="OpenStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                        <dhc:state class="MovementState">
                            <dhc:statevalues>
                                <dhc:statevalue name="notMoving" class="NotMovingStateValue"/>
                                <dhc:statevalue name="isMoving" class="MovingStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="Button_15_bath" class="Button">
                        <dhc:description>A Button instance named Button_15_bath</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
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
                    <dhc:device domoticSystem="KONNEX" name="Switch_b8_lobby" class="OnOffSwitch">
                        <dhc:description>A OnOffSwitch instance named Switch_b8_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="on" class="OnNotification"/>
                                <dhc:notification name="off" class="OffNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="ShutterActuator_bath" class="ShutterActuator">
                        <dhc:description>A ShutterActuator instance named ShutterActuator_bath</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
                        <dhc:controlFunctionality class="UpDownRestFunctionality">
                            <dhc:commands>
                                <dhc:command name="down" class="DownCommand"/>
                                <dhc:command name="rest" class="RestCommand"/>
                                <dhc:command name="up" class="UpCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="ShutterState">
                            <dhc:statevalues>
                                <dhc:statevalue name="rest" class="RestTripleStateValue"/>
                                <dhc:statevalue name="lowering" class="LoweringStateValue"/>
                                <dhc:statevalue name="raising" class="RaisingStateValue"/>
                                <dhc:statevalue name="up" class="UpTripleStateValue"/>
                                <dhc:statevalue name="down" class="DownTripleStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="WindowActuator_w6_living" class="WindowActuator">
                        <dhc:description>A WindowActuator instance named WindowActuator_w6_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:controlFunctionality class="OpenCloseFunctionality">
                            <dhc:commands>
                                <dhc:command name="close" class="CloseCommand"/>
                                <dhc:command name="open" class="OpenCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="MovementState">
                            <dhc:statevalues>
                                <dhc:statevalue name="isMoving" class="MovingStateValue"/>
                                <dhc:statevalue name="notMoving" class="NotMovingStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                        <dhc:state class="OpenCloseState">
                            <dhc:statevalues>
                                <dhc:statevalue name="close" class="CloseStateValue"/>
                                <dhc:statevalue name="open" class="OpenStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="InfraredSensor_IR2_lobby" class="InfraredSensor">
                        <dhc:description>A InfraredSensor instance named InfraredSensor_IR2_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
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
                        <dhc:notificationFunctionality class="SensingNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="detected" class="DetectedNotification"/>
                                <dhc:notification name="notDetected" class="NotDetectedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="SensingState">
                            <dhc:statevalues>
                                <dhc:statevalue name="detected" class="DetectedStateValue"/>
                                <dhc:statevalue name="notDetected" class="NotDetectedStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="InfraredSensor_IR4_kitchen" class="InfraredSensor">
                        <dhc:description>A InfraredSensor instance named InfraredSensor_IR4_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
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
                        <dhc:notificationFunctionality class="SensingNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="detected" class="DetectedNotification"/>
                                <dhc:notification name="notDetected" class="NotDetectedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="SensingState">
                            <dhc:statevalues>
                                <dhc:statevalue name="notDetected" class="NotDetectedStateValue"/>
                                <dhc:statevalue name="detected" class="DetectedStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="Button_1_lobby" class="Button">
                        <dhc:description>A Button instance named Button_1_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="Buzzer_bu1_lobby" class="Buzzer">
                        <dhc:description>A Buzzer instance named Buzzer_bu1_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="BTICINO" name="SimpleLamp_lamp2_bath" class="SimpleLamp">
                        <dhc:description>A SimpleLamp instance named SimpleLamp_lamp2_bath</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
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
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="Button_11_bedroom" class="Button">
                        <dhc:description>A Button instance named Button_11_bedroom</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p4" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p4</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
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
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p3" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p3</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
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
                    <dhc:device domoticSystem="ELITE" name="Button_7_lobby" class="Button">
                        <dhc:description>A Button instance named Button_7_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
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
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p20_living" class="LevelControllableOutput">
                        <dhc:description>A LevelControllableOutput instance named MainsPowerOutlet_p20_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="on" class="OnCommand"/>
                                <dhc:command name="off" class="OffCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:controlFunctionality class="LevelControlFunctionality">
                            <dhc:commands>
                                <dhc:command name="stepDown" class="StepDownCommand"/>
                                <dhc:command name="stepUp" class="StepUpCommand"/>
                                <dhc:command name="set" class="SetCommand"/>
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
                        <dhc:state class="LevelState">
                            <dhc:statevalues>
                                <dhc:statevalue name="" class="LevelStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="Lamp_1" class="Lamp">
                        <dhc:description>A Lamp instance named Lamp_1</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:controlFunctionality class="QueryFunctionality">
                            <dhc:commands>
                                <dhc:command name="getState" class="GetCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p23_living" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p23_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
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
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="Button_10_lobby" class="Button">
                        <dhc:description>A Button instance named Button_10_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
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
                    <dhc:device domoticSystem="ELITE" name="SmokeSensor_smoke_bedroom" class="SmokeSensor">
                        <dhc:description>A SmokeSensor instance named SmokeSensor_smoke_bedroom</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
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
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="on" class="OnNotification"/>
                                <dhc:notification name="off" class="OffNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="SensingState">
                            <dhc:statevalues>
                                <dhc:statevalue name="notDetected" class="NotDetectedStateValue"/>
                                <dhc:statevalue name="detected" class="DetectedStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p6" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p6</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p5" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p5</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="ELITE" name="Switch_allPlugsBathroom" class="OnOffSwitch">
                        <dhc:description>A OnOffSwitch instance named Switch_allPlugsBathroom</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="off" class="OffNotification"/>
                                <dhc:notification name="on" class="OnNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
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
                    <dhc:device domoticSystem="KONNEX" name="Button_2_lobby" class="Button">
                        <dhc:description>A Button instance named Button_2_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="SimpleLamp_lamp7_livingroom" class="SimpleLamp">
                        <dhc:description>A SimpleLamp instance named SimpleLamp_lamp7_livingroom</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="ELITE" name="SmokeSensor_smoke_living" class="SmokeSensor">
                        <dhc:description>A SmokeSensor instance named SmokeSensor_smoke_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
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
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="on" class="OnNotification"/>
                                <dhc:notification name="off" class="OffNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="SensingState">
                            <dhc:statevalues>
                                <dhc:statevalue name="detected" class="DetectedStateValue"/>
                                <dhc:statevalue name="notDetected" class="NotDetectedStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="ShutterActuator_kitchen" class="ShutterActuator">
                        <dhc:description>A ShutterActuator instance named ShutterActuator_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:controlFunctionality class="UpDownRestFunctionality">
                            <dhc:commands>
                                <dhc:command name="rest" class="RestCommand"/>
                                <dhc:command name="down" class="DownCommand"/>
                                <dhc:command name="up" class="UpCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="ShutterState">
                            <dhc:statevalues>
                                <dhc:statevalue name="rest" class="RestTripleStateValue"/>
                                <dhc:statevalue name="down" class="DownTripleStateValue"/>
                                <dhc:statevalue name="raising" class="RaisingStateValue"/>
                                <dhc:statevalue name="up" class="UpTripleStateValue"/>
                                <dhc:statevalue name="lowering" class="LoweringStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p2_lobby" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p2_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
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
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="Button_down_23_kitchen" class="Button">
                        <dhc:description>A Button instance named Button_down_23_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="DoorActuator_d2_bath" class="DoorActuator">
                        <dhc:description>A DoorActuator instance named DoorActuator_d2_bath</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:controlFunctionality class="OpenCloseFunctionality">
                            <dhc:commands>
                                <dhc:command name="open" class="OpenCommand"/>
                                <dhc:command name="close" class="CloseCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="MovementState">
                            <dhc:statevalues>
                                <dhc:statevalue name="isMoving" class="MovingStateValue"/>
                                <dhc:statevalue name="notMoving" class="NotMovingStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                        <dhc:state class="OpenCloseState">
                            <dhc:statevalues>
                                <dhc:statevalue name="close" class="CloseStateValue"/>
                                <dhc:statevalue name="open" class="OpenStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="BTICINO" name="SimpleLamp_lamp8_bath" class="SimpleLamp">
                        <dhc:description>A SimpleLamp instance named SimpleLamp_lamp8_bath</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="ELITE" name="SmokeSensor_smoke_bathroom" class="SmokeSensor">
                        <dhc:description>A SmokeSensor instance named SmokeSensor_smoke_bathroom</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
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
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="off" class="OffNotification"/>
                                <dhc:notification name="on" class="OnNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="SensingState">
                            <dhc:statevalues>
                                <dhc:statevalue name="detected" class="DetectedStateValue"/>
                                <dhc:statevalue name="notDetected" class="NotDetectedStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="Switch_allPlugsLobby" class="OnOffSwitch">
                        <dhc:description>A OnOffSwitch instance named Switch_allPlugsLobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="on" class="OnNotification"/>
                                <dhc:notification name="off" class="OffNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="Switch_b5_lobby" class="OnOffSwitch">
                        <dhc:description>A OnOffSwitch instance named Switch_b5_lobby</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="on" class="OnNotification"/>
                                <dhc:notification name="off" class="OffNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="TEXASINSTRUMENTS" name="chronos_watch1" class="eZ430Chronos">
                        <dhc:description>A eZ430Chronos instance named chronos_watch1</dhc:description>
                        <dhc:controlFunctionality class="SoundFunctionality">
                            <dhc:commands>
                                <dhc:command name="stop" class="StopPlayingCommand"/>
                                <dhc:command name="play" class="PlayCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:controlFunctionality class="DisplayFunctionality">
                            <dhc:commands>
                                <dhc:command name="display" class="DisplayCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="TridimensionalAccelerationNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="new3DAccelerationValue" class="TridimensionalAccelerationNotification">
                                    <dhc:param type="Double" name="notificationParamName"/>
                                    <dhc:param type="Double" name="notificationParamName"/>
                                    <dhc:param type="Double" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="ButtonMNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="released" class="ReleasedMNotification">
                                    <dhc:param type="String" name="notificationParamName"/>
                                </dhc:notification>
                                <dhc:notification name="pressed" class="PressedMNotification">
                                    <dhc:param type="String" name="notificationParamName"/>
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
                    <dhc:device domoticSystem="ELITE" name="DoorActuator_d6_living" class="DoorActuator">
                        <dhc:description>A DoorActuator instance named DoorActuator_d6_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:controlFunctionality class="OpenCloseFunctionality">
                            <dhc:commands>
                                <dhc:command name="open" class="OpenCommand"/>
                                <dhc:command name="close" class="CloseCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OpenCloseState">
                            <dhc:statevalues>
                                <dhc:statevalue name="close" class="CloseStateValue"/>
                                <dhc:statevalue name="open" class="OpenStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                        <dhc:state class="MovementState">
                            <dhc:statevalues>
                                <dhc:statevalue name="notMoving" class="NotMovingStateValue"/>
                                <dhc:statevalue name="isMoving" class="MovingStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="BTICINO" name="webcam_lobby" class="SnapshotCamera">
                        <dhc:description>A SnapshotCamera instance named webcam_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:controlFunctionality class="CameraPictureQualityControlFunctionality">
                            <dhc:commands>
                                <dhc:command name="increaseQuality" class="IncreaseQualityCommand"/>
                                <dhc:command name="decreaseQuality" class="DecreaseQualityCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:controlFunctionality class="CameraPictureZoomPanControlFunctionality">
                            <dhc:commands>
                                <dhc:command name="zoomIn" class="ZoomInCommand"/>
                                <dhc:command name="zoomOut" class="ZoomOutCommand"/>
                                <dhc:command name="panDown" class="PanDownCommand"/>
                                <dhc:command name="panUp" class="PanUpCommand"/>
                                <dhc:command name="panRight" class="PanRightCommand"/>
                                <dhc:command name="panLeft" class="PanLeftCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:controlFunctionality class="PictureGrabFunctionality">
                            <dhc:commands>
                                <dhc:command name="grabPicture" class="GrabPictureCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="on" class="OnCommand"/>
                                <dhc:command name="off" class="OffCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:controlFunctionality class="CameraPictureImageControlFunctionality">
                            <dhc:commands>
                                <dhc:command name="increaseContrast" class="IncreaseContrastCommand"/>
                                <dhc:command name="decreaseContrast" class="DecreaseContrastCommand"/>
                                <dhc:command name="increaseColor" class="IncreaseColorCommand"/>
                                <dhc:command name="decreaseColor" class="DecreaseColorCommand"/>
                                <dhc:command name="decreaseLuminosity" class="DecreaseLuminosityCommand"/>
                                <dhc:command name="increaseLuminosity" class="IncreaseLuminosityCommand"/>
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
                    <dhc:device domoticSystem="ELITE" name="WindowActuator_w2_bedroom" class="WindowActuator">
                        <dhc:description>A WindowActuator instance named WindowActuator_w2_bedroom</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:controlFunctionality class="OpenCloseFunctionality">
                            <dhc:commands>
                                <dhc:command name="open" class="OpenCommand"/>
                                <dhc:command name="close" class="CloseCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OpenCloseState">
                            <dhc:statevalues>
                                <dhc:statevalue name="open" class="OpenStateValue"/>
                                <dhc:statevalue name="close" class="CloseStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                        <dhc:state class="MovementState">
                            <dhc:statevalues>
                                <dhc:statevalue name="isMoving" class="MovingStateValue"/>
                                <dhc:statevalue name="notMoving" class="NotMovingStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="Switch_allPlugsBedroom" class="OnOffSwitch">
                        <dhc:description>A OnOffSwitch instance named Switch_allPlugsBedroom</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="off" class="OffNotification"/>
                                <dhc:notification name="on" class="OnNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
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
                    <dhc:device domoticSystem="ELITE" name="ToggleRelay_bedroom" class="ToggleRelay">
                        <dhc:description>A ToggleRelay instance named ToggleRelay_bedroom</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:controlFunctionality class="ToggleFunctionality">
                            <dhc:commands>
                                <dhc:command name="toggle" class="ToggleCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="on" class="OnNotification"/>
                                <dhc:notification name="off" class="OffNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="Button_up_sh2_living" class="Button">
                        <dhc:description>A Button instance named Button_up_sh2_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="ShutterActuator_sh2_bedroom" class="ShutterActuator">
                        <dhc:description>A ShutterActuator instance named ShutterActuator_sh2_bedroom</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:controlFunctionality class="UpDownRestFunctionality">
                            <dhc:commands>
                                <dhc:command name="down" class="DownCommand"/>
                                <dhc:command name="rest" class="RestCommand"/>
                                <dhc:command name="up" class="UpCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="ShutterState">
                            <dhc:statevalues>
                                <dhc:statevalue name="down" class="DownTripleStateValue"/>
                                <dhc:statevalue name="raising" class="RaisingStateValue"/>
                                <dhc:statevalue name="rest" class="RestTripleStateValue"/>
                                <dhc:statevalue name="lowering" class="LoweringStateValue"/>
                                <dhc:statevalue name="up" class="UpTripleStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="BTICINO" name="Button_4_lobby" class="Button">
                        <dhc:description>A Button instance named Button_4_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p21_living" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p21_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
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
                    <dhc:device domoticSystem="BTICINO" name="Button_updown_sh1_living" class="ShutterButton">
                        <dhc:description>A ShutterButton instance named Button_updown_sh1_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="UpDownNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="pressedUp" class="UpNotification"/>
                                <dhc:notification name="pressedDown" class="DownNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="UpDownRestState">
                            <dhc:statevalues>
                                <dhc:statevalue name="rest" class="RestTripleStateValue"/>
                                <dhc:statevalue name="up" class="UpTripleStateValue"/>
                                <dhc:statevalue name="down" class="DownTripleStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="BTICINO" name="SimpleLamp_lamp5_lobby" class="SimpleLamp">
                        <dhc:description>A SimpleLamp instance named SimpleLamp_lamp5_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:controlFunctionality class="QueryFunctionality">
                            <dhc:commands>
                                <dhc:command name="getState" class="GetCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
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
                    <dhc:device domoticSystem="ELITE" name="DoorActuator_d5_kitchen" class="DoorActuator">
                        <dhc:description>A DoorActuator instance named DoorActuator_d5_kitchen</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:controlFunctionality class="OpenCloseFunctionality">
                            <dhc:commands>
                                <dhc:command name="open" class="OpenCommand"/>
                                <dhc:command name="close" class="CloseCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OpenCloseState">
                            <dhc:statevalues>
                                <dhc:statevalue name="open" class="OpenStateValue"/>
                                <dhc:statevalue name="close" class="CloseStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                        <dhc:state class="MovementState">
                            <dhc:statevalues>
                                <dhc:statevalue name="isMoving" class="MovingStateValue"/>
                                <dhc:statevalue name="notMoving" class="NotMovingStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="Button_up_16_sh1_bedroom" class="Button">
                        <dhc:description>A Button instance named Button_up_16_sh1_bedroom</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="MainsPowerOutlet_p13_kitchen" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p13_kitchen</dhc:description>
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
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p1_lobby" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p1_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
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
                    <dhc:device domoticSystem="KONNEX" name="MainsPowerOutlet_p14_kitchen" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p14_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p22_living" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p22_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="KONNEX" name="SimpleLamp_lamp6_kitchen" class="SimpleLamp">
                        <dhc:description>A SimpleLamp instance named SimpleLamp_lamp6_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="ELITE" name="SmokeSensor_smoke_lobby" class="SmokeSensor">
                        <dhc:description>A SmokeSensor instance named SmokeSensor_smoke_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
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
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="off" class="OffNotification"/>
                                <dhc:notification name="on" class="OnNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="SensingState">
                            <dhc:statevalues>
                                <dhc:statevalue name="detected" class="DetectedStateValue"/>
                                <dhc:statevalue name="notDetected" class="NotDetectedStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="exhaustfan1" class="Fan">
                        <dhc:description>A Fan instance named exhaustfan1</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:pluggedIn>MainsPowerOutlet_p16_kitchen</dhc:pluggedIn>
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
                                <dhc:statevalue name="on" class="OnStateValue"/>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="SmokeSensor_smoke_storage" class="SmokeSensor">
                        <dhc:description>A SmokeSensor instance named SmokeSensor_smoke_storage</dhc:description>
                        <dhc:isIn>storageroom</dhc:isIn>
                        <dhc:controlFunctionality class="QueryFunctionality">
                            <dhc:commands>
                                <dhc:command name="getState" class="GetCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="off" class="OffNotification"/>
                                <dhc:notification name="on" class="OnNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="SensingState">
                            <dhc:statevalues>
                                <dhc:statevalue name="notDetected" class="NotDetectedStateValue"/>
                                <dhc:statevalue name="detected" class="DetectedStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="SmokeSensor_smoke_kitchen" class="SmokeSensor">
                        <dhc:description>A SmokeSensor instance named SmokeSensor_smoke_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
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
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="off" class="OffNotification"/>
                                <dhc:notification name="on" class="OnNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="SensingState">
                            <dhc:statevalues>
                                <dhc:statevalue name="detected" class="DetectedStateValue"/>
                                <dhc:statevalue name="notDetected" class="NotDetectedStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="WindowActuator_w5_living" class="WindowActuator">
                        <dhc:description>A WindowActuator instance named WindowActuator_w5_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:controlFunctionality class="OpenCloseFunctionality">
                            <dhc:commands>
                                <dhc:command name="open" class="OpenCommand"/>
                                <dhc:command name="close" class="CloseCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OpenCloseState">
                            <dhc:statevalues>
                                <dhc:statevalue name="open" class="OpenStateValue"/>
                                <dhc:statevalue name="close" class="CloseStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                        <dhc:state class="MovementState">
                            <dhc:statevalues>
                                <dhc:statevalue name="isMoving" class="MovingStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p18_living" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p18_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="ELITE" name="DoorActuator_d3_lobby_stor" class="DoorActuator">
                        <dhc:description>A DoorActuator instance named DoorActuator_d3_lobby_stor</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:controlFunctionality class="OpenCloseFunctionality">
                            <dhc:commands>
                                <dhc:command name="close" class="CloseCommand"/>
                                <dhc:command name="open" class="OpenCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="MovementState">
                            <dhc:statevalues>
                                <dhc:statevalue name="notMoving" class="NotMovingStateValue"/>
                                <dhc:statevalue name="isMoving" class="MovingStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                        <dhc:state class="OpenCloseState">
                            <dhc:statevalues>
                                <dhc:statevalue name="close" class="CloseStateValue"/>
                                <dhc:statevalue name="open" class="OpenStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="microwave1" class="MicrowaveOven">
                        <dhc:description>A MicrowaveOven instance named microwave1</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:pluggedIn>MainsPowerOutlet_p15_kitchen</dhc:pluggedIn>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                                <dhc:statevalue name="on" class="OnStateValue"/>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="WindowActuator_w1_bedroom" class="WindowActuator">
                        <dhc:description>A WindowActuator instance named WindowActuator_w1_bedroom</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:controlFunctionality class="OpenCloseFunctionality">
                            <dhc:commands>
                                <dhc:command name="open" class="OpenCommand"/>
                                <dhc:command name="close" class="CloseCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="MovementState">
                            <dhc:statevalues>
                                <dhc:statevalue name="isMoving" class="MovingStateValue"/>
                                <dhc:statevalue name="notMoving" class="NotMovingStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                        <dhc:state class="OpenCloseState">
                            <dhc:statevalues>
                                <dhc:statevalue name="close" class="CloseStateValue"/>
                                <dhc:statevalue name="open" class="OpenStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="energy_meter_1" class="MultiTariffSinglePhaseEnergyMeter">
                        <dhc:description>A MultiTariffSinglePhaseEnergyMeter instance named energy_meter_1</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:meterOf>Button_up_20_bath</dhc:meterOf>
                        <dhc:meterOf>SimpleLamp_lamp6_kitchen</dhc:meterOf>
                        <dhc:meterOf>Switch_b5_lobby</dhc:meterOf>
                        <dhc:meterOf>Button_down_23_kitchen</dhc:meterOf>
                        <dhc:meterOf>MainsPowerOutlet_p13_kitchen</dhc:meterOf>
                        <dhc:meterOf>MainsPowerOutlet_p12_kitchen</dhc:meterOf>
                        <dhc:meterOf>Lamp_1</dhc:meterOf>
                        <dhc:meterOf>Button_down_17_sh1_bedroom</dhc:meterOf>
                        <dhc:meterOf>SimpleLamp_lamp3_storage</dhc:meterOf>
                        <dhc:meterOf>Button_15_bath</dhc:meterOf>
                        <dhc:meterOf>MainsPowerOutlet_p14_kitchen</dhc:meterOf>
                        <dhc:meterOf>Button_down_21_bath</dhc:meterOf>
                        <dhc:meterOf>Button_2_lobby</dhc:meterOf>
                        <dhc:meterOf>Button_down_sh2_living</dhc:meterOf>
                        <dhc:meterOf>MainsPowerOutlet_p15_kitchen</dhc:meterOf>
                        <dhc:meterOf>Button_up_22_kitchen</dhc:meterOf>
                        <dhc:meterOf>Switch_b8_lobby</dhc:meterOf>
                        <dhc:meterOf>Button_14_bath</dhc:meterOf>
                        <dhc:meterOf>Button_up_16_sh1_bedroom</dhc:meterOf>
                        <dhc:meterOf>Switch_P12_kitchen</dhc:meterOf>
                        <dhc:meterOf>Button_up_sh2_living</dhc:meterOf>
                        <dhc:meterOf>Button_6_lobby</dhc:meterOf>
                        <dhc:meterOf>Switch_b9_lobby</dhc:meterOf>
                        <dhc:meterOf>SimpleLamp_lamp7_livingroom</dhc:meterOf>
                        <dhc:controlFunctionality class="MultiTariffSinglePhaseActiveEnergyMeasurementFunctionality">
                            <dhc:commands>
                                <dhc:command name="getActiveEnergyValue" class="GetMultiTariff1PhaseActiveEnergyCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="MultiTariffSinglePhaseActiveEnergyMeasurementNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="newActiveEnergyValue" class="MultiTariffSinglePhaseActiveEnergyMeasurementNotification">
                                    <dhc:param type="String" name="notificationParamName"/>
                                    <dhc:param type="Measure" name="notificationParamName"/>
                                </dhc:notification>
                                <dhc:notification name="newActiveEnergyValue" class="MultiTariffSinglePhaseActiveEnergyMeasurementNotification">
                                    <dhc:param type="String" name="notificationParamName"/>
                                    <dhc:param type="Measure" name="notificationParamName"/>
                                </dhc:notification>
                                <dhc:notification name="newActiveEnergyValue" class="MultiTariffSinglePhaseActiveEnergyMeasurementNotification">
                                    <dhc:param type="String" name="notificationParamName"/>
                                    <dhc:param type="Measure" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="MultiTariffSinglePhaseActiveEnergyState">
                            <dhc:statevalues>
                                <dhc:statevalue name="" class="MultiTariffActiveEnergyStateValue"/>
                                <dhc:statevalue name="" class="MultiTariffActiveEnergyStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="MainsPowerOutlet_p15_kitchen" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p15_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="KONNEX" name="Button_up_22_kitchen" class="Button">
                        <dhc:description>A Button instance named Button_up_22_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
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
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p10_storage" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p10_storage</dhc:description>
                        <dhc:isIn>storageroom</dhc:isIn>
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
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p8_bath" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p8_bath</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
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
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p9_bath" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p9_bath</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p17_kitchen" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p17_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="ELITE" name="Switch_allPlugsLiving" class="OnOffSwitch">
                        <dhc:description>A OnOffSwitch instance named Switch_allPlugsLiving</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:notificationFunctionality class="OnOffNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="on" class="OnNotification"/>
                                <dhc:notification name="off" class="OffNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
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
                    <dhc:device domoticSystem="ELITE" name="InfraredSensor_IR1_bed" class="InfraredSensor">
                        <dhc:description>A InfraredSensor instance named InfraredSensor_IR1_bed</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:controlFunctionality class="QueryFunctionality">
                            <dhc:commands>
                                <dhc:command name="getState" class="GetCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="SensingNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="detected" class="DetectedNotification"/>
                                <dhc:notification name="notDetected" class="NotDetectedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="SensingState">
                            <dhc:statevalues>
                                <dhc:statevalue name="detected" class="DetectedStateValue"/>
                                <dhc:statevalue name="notDetected" class="NotDetectedStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="KONNEX" name="Button_6_lobby" class="Button">
                        <dhc:description>A Button instance named Button_6_lobby</dhc:description>
                        <dhc:isIn>lobby</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
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
                    <dhc:device domoticSystem="KONNEX" name="Button_up_20_bath" class="Button">
                        <dhc:description>A Button instance named Button_up_20_bath</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
                        <dhc:hasMeter>energy_meter_1</dhc:hasMeter>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p7_bath" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p7_bath</dhc:description>
                        <dhc:isIn>bathroom</dhc:isIn>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="ELITE" name="MainsPowerOutlet_p19_living" class="MainsPowerOutlet">
                        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_p19_living</dhc:description>
                        <dhc:isIn>livingroom</dhc:isIn>
                        <dhc:controlFunctionality class="OnOffFunctionality">
                            <dhc:commands>
                                <dhc:command name="off" class="OffCommand"/>
                                <dhc:command name="on" class="OnCommand"/>
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
                    <dhc:device domoticSystem="ELITE" name="Button_up_18_sh2_bedroom" class="Button">
                        <dhc:description>A Button instance named Button_up_18_sh2_bedroom</dhc:description>
                        <dhc:isIn>bedroom</dhc:isIn>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:notificationFunctionality class="ButtonNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="released" class="ReleasedNotification"/>
                                <dhc:notification name="pressed" class="PressedNotification"/>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="OnOffState">
                            <dhc:statevalues>
                                <dhc:statevalue name="off" class="OffStateValue"/>
                                <dhc:statevalue name="on" class="OnStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                    <dhc:device domoticSystem="ELITE" name="dishwasher1" class="Dishwasher">
                        <dhc:description>A Dishwasher instance named dishwasher1</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:pluggedIn>MainsPowerOutlet_p13_kitchen</dhc:pluggedIn>
                        <dhc:controlFunctionality class="QueryFunctionality">
                            <dhc:commands>
                                <dhc:command name="getState" class="GetCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
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
                    <dhc:device domoticSystem="ELITE" name="WindowActuator_w4_kitchen" class="WindowActuator">
                        <dhc:description>A WindowActuator instance named WindowActuator_w4_kitchen</dhc:description>
                        <dhc:isIn>kitchen</dhc:isIn>
                        <dhc:controlFunctionality class="OpenCloseFunctionality">
                            <dhc:commands>
                                <dhc:command name="open" class="OpenCommand"/>
                                <dhc:command name="close" class="CloseCommand"/>
                            </dhc:commands>
                        </dhc:controlFunctionality>
                        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                            <dhc:notifications>
                                <dhc:notification name="stateChanged" class="StateChangeNotification">
                                    <dhc:param type="State" name="notificationParamName"/>
                                </dhc:notification>
                            </dhc:notifications>
                        </dhc:notificationFunctionality>
                        <dhc:state class="MovementState">
                            <dhc:statevalues>
                                <dhc:statevalue name="notMoving" class="NotMovingStateValue"/>
                                <dhc:statevalue name="isMoving" class="MovingStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                        <dhc:state class="OpenCloseState">
                            <dhc:statevalues>
                                <dhc:statevalue name="close" class="CloseStateValue"/>
                                <dhc:statevalue name="open" class="OpenStateValue"/>
                            </dhc:statevalues>
                        </dhc:state>
                    </dhc:device>
                </dhc:controllables>


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
<div class="span12" markdown="1"></div>
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
</div>
<script src="./js/jquery.js"></script>
<script src="./js/bootstrap.js"></script>
<script src="./js/ajax.js"></script>

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
* [Commands](#command)
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

* [Rules](#rules)
	* [Single Rule](#single-rule)

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
	* [query the gateway about installed devices, their location, functionalities and configurations](#devices);
	* [require execution of commands to existing devices](#command);
	* [monitor device statuses and measures in real-time](#status);
	* add or [update](#singleDevice) the set of devices controlled through the gateway;
* manage information about the environment
	* [insert](#rooms-in-flat), [update](#single-room-in-flat) or delete rooms;
	* [insert](#flats), [update](#single-flat), or delete flats;
* manage rules and automation scenarios
	* [insert](#rules), [update, or delete](#single-rule) automation rules;
	* insert, update, or delete scenarios;
* monitor the home/building performance
	* historical information on consumptions;
	* historical information on activations;
	* related statistics;
* manage Dog 
	* manage system performance;
	* manage system updates;
	* troubleshoot problems.

All API access is currently over HTTP, and accessed from `http://<dog-address>/api/`.
To select the desired response type (JSON or XML), the `Accept` header must be used in the request.

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
|[Resource /rules/](#rules)|Represents the rules registered in Dog. By using this resource, it is possible to get all the existing rules or add a new rule.|
|[Resource /rules/{rule-id}](#single-rule)|Represents a single rule registered in Dog. By using this resource, it is possible to update or delete an existing rule.|

---------------------------------

### Device API [deviceAPI]###

---------------------------------

</div>
</div>
<div class="row-fluid" markdown="1">
<div class="span3" markdown="1"></div>
<div class="span6" markdown="1">

#### <a id="devices"></a> Resource /devices ####

*Updated on Mon, 2013-11-04*
<span class="label label-info pull-right">API version 1.0</span>

Represents domotic devices handled by Dog and "controllable" by applications using this API.

**URL:** /devices

|Method|Description|
|:-----|:----------|
| GET | List all devices (with their details) used by the Dog gateway |

**Example Request**

	GET http://www.mydog.com/api/devices

<div class="accordion" id="devices-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#devices-example" href="#devices-example-json" markdown="1">
**Example Response (JSON)**
</a>
</div>
<div id="devices-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	{
	  "devices" : [ {
	    "description" : "The ZWave X gateway",
	    "id" : "zwave-gateway",
	    "isIn" : demo_room,
	    "domoticSystem" : "ZWave",
	    "class" : "ZWaveGateway",
	    "controlFunctionality" : [ {
	      "commands" : {
	        "command" : [ {
	          "param" : [ {
	            "name" : "realCommandName",
	            "value" : "associate"
	          } ],
	          "name" : "AssociateCommand_zwave-gateway",
	          "id" : "AssociateCommand_zwave-gateway",
	          "class" : "AssociateCommand"
	        }, {
	          "param" : [ {
	            "name" : "realCommandName",
	            "value" : "disassociate"
	          } ],
	          "name" : "DisassociateCommand_zwave-gateway",
	          "id" : "DisassociateCommand_zwave-gateway",
	          "class" : "DisassociateCommand"
	        } ]
	      },
	      "class" : "AssociateFunctionality"
	    } ]
	  }, {
	    "description" : "A MainsPowerOutlet instance named MainsPowerOutlet_ZW1",
	    "isIn" : "demo_room",
	    "controlFunctionality" : [ {
	      "commands" : {
	        "command" : [ {
	          "param" : [ {
	            "name" : "realCommandName",
	            "value" : "off"
	          } ],
	          "name" : "OffCommand_Lamp_Holder",
	          "id" : "OffCommand_Lamp_Holder",
	          "class" : "OffCommand"
	        }, {
	          "param" : [ {
	            "name" : "realCommandName",
	            "value" : "on"
	          } ],
	          "name" : "OnCommand_Lamp_Holder",
	          "id" : "OnCommand_Lamp_Holder",
	          "class" : "OnCommand"
	        } ]
	      },
	      "class" : "OnOffFunctionality"
	    } ],
	    "notificationFunctionality" : [ {
	      "notifications" : {
	        "notification" : [ {
	          "param" : [ {
	            "name" : "notificationName",
	            "value" : "stateChanged"
	          }, {
	            "name" : "notificationParamName",
	            "value" : "newState",
	            "type" : "State"
	          } ],
	          "id" : "StateChangeNotification_Lamp_Holder",
	          "class" : "StateChangeNotification"
	        } ]
	      },
	      "class" : "StateChangeNotificationFunctionality"
	    } ],
	    "state" : [ {
	      "statevalues" : {
	        "statevalue" : [ {
	          "name" : "off",
	          "class" : "OffStateValue"
	        }, {
	          "name" : "on",
	          "class" : "OnStateValue"
	        } ]
	      },
	      "class" : "OnOffState"
	    } ],
	    "id" : "Lamp_Holder",
	    "domoticSystem" : "ZWave",
	    "gateway" : "zwave-gateway",
	    "class" : "LampHolder"
	  }
	}


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
    <dhc:dogHomeConfiguration xmlns:dhc="http://elite.polito.it/dogHomeConfiguration">
    <dhc:controllables>
        <dhc:device class="ZWaveGateway" id="zwave-gateway" domoticSystem="ZWave">
            <dhc:description>The ZWave X gateway
			</dhc:description>
            <dhc:isIn>demo_room</dhc:isIn>
            <dhc:controlFunctionality class="AssociateFunctionality">
                <dhc:commands>
                    <dhc:command class="AssociateCommand" name="AssociateCommand_zwave-gateway" id="AssociateCommand_zwave-gateway">
                        <dhc:param name="realCommandName" value="associate"/>
                    </dhc:command>
                    <dhc:command class="DisassociateCommand" name="DisassociateCommand_zwave-gateway" id="DisassociateCommand_zwave-gateway">
                        <dhc:param name="realCommandName" value="disassociate"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
        </dhc:device>
        <dhc:device class="LampHolder" id="Lamp_Holder" domoticSystem="ZWave" gateway="zwave-gateway">
            <dhc:description>A MainsPowerOutlet instance named
				MainsPowerOutlet_ZW1</dhc:description>
            <dhc:isIn>demo_room</dhc:isIn>
            <dhc:controlFunctionality class="OnOffFunctionality">
                <dhc:commands>
                    <dhc:command class="OffCommand" name="OffCommand_Lamp_Holder" id="OffCommand_Lamp_Holder">
                        <dhc:param name="realCommandName" value="off"/>
                    </dhc:command>
                    <dhc:command class="OnCommand" name="OnCommand_Lamp_Holder" id="OnCommand_Lamp_Holder">
                        <dhc:param name="realCommandName" value="on"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="StateChangeNotification" id="StateChangeNotification_Lamp_Holder">
                        <dhc:param name="notificationName" value="stateChanged"/>
                        <dhc:param name="notificationParamName" value="newState" type="State"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:state class="OnOffState">
                <dhc:statevalues>
                    <dhc:statevalue class="OffStateValue" name="off"/>
                    <dhc:statevalue class="OnStateValue" name="on"/>
                </dhc:statevalues>
            </dhc:state>
        </dhc:device>
        <dhc:device class="MeteringPowerOutlet" id="SmartEnergySwitch" domoticSystem="ZWave" gateway="zwave-gateway">
            <dhc:description>A "MeteringPowerOutlet" instance named
				SmartEnergySwitch</dhc:description>
            <dhc:isIn>demo_room</dhc:isIn>
            <dhc:controlFunctionality class="OnOffFunctionality">
                <dhc:commands>
                    <dhc:command class="OffCommand" name="OffCommand_ZW8" id="OffCommand_ZW8">
                        <dhc:param name="realCommandName" value="off"/>
                    </dhc:command>
                    <dhc:command class="OnCommand" name="OnCommand_ZW8" id="OnCommand_ZW8">
                        <dhc:param name="realCommandName" value="on"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:controlFunctionality class="ActivePowerMeasurementFunctionality">
                <dhc:commands>
                    <dhc:command class="GetActivePowerCommand" name="GetActivePowerCommand_ZW8" id="GetActivePowerCommand_ZW8">
                        <dhc:param name="realCommandName" value="getActivePower"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:controlFunctionality class="ActivePowerMeasurementFunctionality">
                <dhc:commands>
                    <dhc:command class="GetActiveEnergyCommand" name="GetActiveEnergyValueCommand_ZW8" id="GetActiveEnergyValueCommand_ZW8">
                        <dhc:param name="realCommandName" value="getActiveEnergyValue"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="StateChangeNotification" id="StateChangeNotification_ZW8">
                        <dhc:param name="notificationName" value="stateChanged"/>
                        <dhc:param name="notificationParamName" value="newState" type="State"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:notificationFunctionality class="ActivePowerMeasurementNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="ActivePowerMeasurementNotification" id="ActivePowerMeasurementNotification_ZW8">
                        <dhc:param name="notificationName" value="newActivePowerValue"/>
                        <dhc:param name="notificationParamName" value="value" type="Measure"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:notificationFunctionality class="ActiveEnergyMeasurementNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="ActiveEnergyMeasurementNotification" id="ActiveEnergyMeasurementNotification_ZW8">
                        <dhc:param name="notificationName" value="newActiveEnergyValue"/>
                        <dhc:param name="notificationParamName" value="value" type="Measure"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:state class="OnOffState">
                <dhc:statevalues>
                    <dhc:statevalue class="OffStateValue" name="off"/>
                    <dhc:statevalue class="OnStateValue" name="on"/>
                </dhc:statevalues>
            </dhc:state>
            <dhc:state class="SinglePhaseEnergyMeasurementState">
                <dhc:statevalues>
                    <dhc:statevalue class="SinglePhaseActiveEnergyStateValue" name=""/>
                </dhc:statevalues>
            </dhc:state>
            <dhc:state class="SinglePhaseActivePowerMeasurementState">
                <dhc:statevalues>
                    <dhc:statevalue class="SinglePhaseActivePowerStateValue" name=""/>
                </dhc:statevalues>
            </dhc:state>
        </dhc:device>
        <dhc:device class="MeteringPowerOutlet" id="MeteringPowerOutlet" domoticSystem="ZWave" gateway="zwave-gateway">
            <dhc:description>A "MeteringPowerOutlet" instance named
				MeteringPowerOutlet</dhc:description>
            <dhc:isIn>demo_room</dhc:isIn>
            <dhc:controlFunctionality class="OnOffFunctionality">
                <dhc:commands>
                    <dhc:command class="OffCommand" name="OffCommand_ZW9" id="OffCommand_ZW9">
                        <dhc:param name="realCommandName" value="off"/>
                    </dhc:command>
                    <dhc:command class="OnCommand" name="OnCommand_ZW9" id="OnCommand_ZW9">
                        <dhc:param name="realCommandName" value="on"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:controlFunctionality class="ActivePowerMeasurementFunctionality">
                <dhc:commands>
                    <dhc:command class="GetActivePowerCommand" name="GetActivePowerCommand_ZW9" id="GetActivePowerCommand_ZW9">
                        <dhc:param name="realCommandName" value="getActivePower"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:controlFunctionality class="ActivePowerMeasurementFunctionality">
                <dhc:commands>
                    <dhc:command class="GetActiveEnergyCommand" name="GetActiveEnergyValueCommand_ZW9" id="GetActiveEnergyValueCommand_ZW9">
                        <dhc:param name="realCommandName" value="getActiveEnergyValue"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="StateChangeNotification" id="StateChangeNotification_ZW9">
                        <dhc:param name="notificationName" value="stateChanged"/>
                        <dhc:param name="notificationParamName" value="newState" type="State"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:notificationFunctionality class="ActivePowerMeasurementNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="ActivePowerMeasurementNotification" id="ActivePowerMeasurementNotification_ZW9">
                        <dhc:param name="notificationName" value="newActivePowerValue"/>
                        <dhc:param name="notificationParamName" value="value" type="Measure"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:notificationFunctionality class="ActiveEnergyMeasurementNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="ActiveEnergyMeasurementNotification" id="ActiveEnergyMeasurementNotification_ZW9">
                        <dhc:param name="notificationName" value="newActiveEnergyValue"/>
                        <dhc:param name="notificationParamName" value="value" type="Measure"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:state class="OnOffState">
                <dhc:statevalues>
                    <dhc:statevalue class="OffStateValue" name="off"/>
                    <dhc:statevalue class="OnStateValue" name="on"/>
                </dhc:statevalues>
            </dhc:state>
            <dhc:state class="SinglePhaseEnergyMeasurementState">
                <dhc:statevalues>
                    <dhc:statevalue class="SinglePhaseActiveEnergyStateValue" name=""/>
                </dhc:statevalues>
            </dhc:state>
            <dhc:state class="SinglePhaseActivePowerMeasurementState">
                <dhc:statevalues>
                    <dhc:statevalue class="SinglePhaseActivePowerStateValue" name=""/>
                </dhc:statevalues>
            </dhc:state>
        </dhc:device>
        <dhc:device class="TemperatureAndHumiditySensor" id="Temperature_and_Humidity_sensor" domoticSystem="ZWave" gateway="zwave-gateway">
            <dhc:description>A "TemperatureAndHumiditySensor" instance
				named TempAndHumidity_Temperature_and_Humidity_sensor
			</dhc:description>
            <dhc:isIn>storageroom</dhc:isIn>
            <dhc:controlFunctionality class="TemperatureMeasurementFunctionality">
                <dhc:commands>
                    <dhc:command class="GetTemperatureCommand" name="GetTemperatureCommand_Temperature_and_Humidity_sensor" id="GetTemperatureCommand_Temperature_and_Humidity_sensor">
                        <dhc:param name="realCommandName" value="getTemperature"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:controlFunctionality class="HumidityMeasurementFunctionality">
                <dhc:commands>
                    <dhc:command class="GetRelativeHumidityCommand" name="GetRelativeHumidityCommand_Temperature_and_Humidity_sensor" id="GetRelativeHumidityCommand_Temperature_and_Humidity_sensor">
                        <dhc:param name="realCommandName" value="getRelativeHumidity"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="StateChangeNotification" id="StateChangeNotification_Temperature_and_Humidity_sensor">
                        <dhc:param name="notificationName" value="stateChanged"/>
                        <dhc:param name="notificationParamName" value="newState" type="State"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:notificationFunctionality class="TemperatureMeasurementNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="TemperatureMeasurementNotification" id="TemperatureMeasurementNotification_Temperature_and_Humidity_sensor">
                        <dhc:param name="notificationName" value="newTemperatureValue"/>
                        <dhc:param name="notificationParamName" value="temperatureValue" type="Measure"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:notificationFunctionality class="HumidityMeasurementNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="HumidityMeasurementNotification" id="HumidityMeasurementNotification_Temperature_and_Humidity_sensor">
                        <dhc:param name="notificationName" value="changedRelativeHumidity"/>
                        <dhc:param name="notificationParamName" value="relativeHumidity" type="Measure"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:state class="TemperatureState">
                <dhc:statevalues>
                    <dhc:statevalue class="TemperatureStateValue" name=""/>
                </dhc:statevalues>
            </dhc:state>
            <dhc:state class="HumidityMeasurementState">
                <dhc:statevalues>
                    <dhc:statevalue class="HumidityStateValue" name=""/>
                </dhc:statevalues>
            </dhc:state>
        </dhc:device>
        <dhc:device class="MovementSensor" id="ZP3102EU" domoticSystem="ZWave" gateway="zwave-gateway">
            <dhc:description>A MovementSensor instance named MovementSensor_ZW6
			</dhc:description>
            <dhc:isIn>storageroom</dhc:isIn>
            <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="StateChangeNotification" id="StateChangeNotification_ZP3102EU">
                        <dhc:param name="notificationName" value="stateChanged"/>
                        <dhc:param name="notificationParamName" value="newState" type="State"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:notificationFunctionality class="MovementNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="MovementCeasedNotification" id="MovementCeasedNotification_ZP3102EU">
                        <dhc:param name="notificationName" value="ceasedMovement"/>
                    </dhc:notification>
                    <dhc:notification class="MovementDetectedNotification" id="MovementDetectedNotification_ZP3102EU">
                        <dhc:param name="notificationName" value="detectedMovement"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:state class="MovementState">
                <dhc:statevalues>
                    <dhc:statevalue class="MovingStateValue" name="isMoving"/>
                    <dhc:statevalue class="NotMovingStateValue" name="notMoving"/>
                </dhc:statevalues>
            </dhc:state>
        </dhc:device>
        <dhc:device class="SinglePhaseElectricityMeter" id="AEON_HEM" domoticSystem="ZWave" gateway="zwave-gateway">
            <dhc:description>The Aeon Labs Home Energy Meter</dhc:description>
            <dhc:isIn>demo_room</dhc:isIn>
            <dhc:controlFunctionality class="SinglePhaseActivePowerMeasurementFunctionality">
                <dhc:commands>
                    <dhc:command class="Get1PhaseActivePowerCommand" name="Get1PhaseActivePowerCommand_AEON_HEM" id="Get1PhaseActivePowerCommand_AEON_HEM">
                        <dhc:param name="realCommandName" value="getActivePower"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:controlFunctionality class="SinglePhaseActiveEnergyMeasurementFunctionality">
                <dhc:commands>
                    <dhc:command class="Get1PhaseActiveEnergyCommand" name="Get1PhaseActiveEnergyValueCommand_AEON_HEM" id="Get1PhaseActiveEnergyValueCommand_AEON_HEM">
                        <dhc:param name="realCommandName" value="getActiveEnergyValue"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="StateChangeNotification" id="StateChangeNotification_AEON_HEM">
                        <dhc:param name="notificationName" value="stateChanged"/>
                        <dhc:param name="notificationParamName" value="newState" type="State"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:notificationFunctionality class="SinglePhaseActivePowerMeasurementNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="SinglePhaseActivePowerMeasurementNotification" id="SinglePhaseActivePowerMeasurementNotification_AEON_HEM">
                        <dhc:param name="notificationName" value="newActivePowerValue"/>
                        <dhc:param name="notificationParamName" value="value" type="Measure"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:notificationFunctionality class="SinglePhaseActiveEnergyMeasurementNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="SinglePhaseActiveEnergyMeasurementNotification" id="SinglePhaseActiveEnergyMeasurementNotification_AEON_HEM">
                        <dhc:param name="notificationName" value="newActiveEnergyValue"/>
                        <dhc:param name="notificationParamName" value="value" type="Measure"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:state class="SinglePhaseActiveEnergyMeasurementState">
                <dhc:statevalues>
                    <dhc:statevalue class="SinglePhaseActiveEnergyStateValue" name=""/>
                </dhc:statevalues>
            </dhc:state>
            <dhc:state class="SinglePhaseActivePowerMeasurementState">
                <dhc:statevalues>
                    <dhc:statevalue class="SinglePhaseActivePowerStateValue" name=""/>
                </dhc:statevalues>
            </dhc:state>
        </dhc:device>
        <dhc:device class="MeteringPowerOutlet" id="AEOTEC_SmartSwitch_G2" domoticSystem="ZWave" gateway="zwave-gateway">
            <dhc:description>A "MeteringPowerOutlet" instance named
				SmartEnergySwitch</dhc:description>
            <dhc:isIn>demo_room</dhc:isIn>
            <dhc:controlFunctionality class="OnOffFunctionality">
                <dhc:commands>
                    <dhc:command class="OffCommand" name="OffCommand_AEOTEC_SmartSwitch_G2" id="OffCommand_AEOTEC_SmartSwitch_G2">
                        <dhc:param name="realCommandName" value="off"/>
                    </dhc:command>
                    <dhc:command class="OnCommand" name="OnCommand_AEOTEC_SmartSwitch_G2" id="OnCommand_AEOTEC_SmartSwitch_G2">
                        <dhc:param name="realCommandName" value="on"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:controlFunctionality class="ActivePowerMeasurementFunctionality">
                <dhc:commands>
                    <dhc:command class="GetActivePowerCommand" name="GetActivePowerCommand_AEOTEC_SmartSwitch_G2" id="GetActivePowerCommand_AEOTEC_SmartSwitch_G2">
                        <dhc:param name="realCommandName" value="getActivePower"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:controlFunctionality class="ActivePowerMeasurementFunctionality">
                <dhc:commands>
                    <dhc:command class="GetActiveEnergyCommand" name="GetActiveEnergyValueCommand_AEOTEC_SmartSwitch_G2" id="GetActiveEnergyValueCommand_AEOTEC_SmartSwitch_G2">
                        <dhc:param name="realCommandName" value="getActiveEnergyValue"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="StateChangeNotification" id="StateChangeNotification_AEOTEC_SmartSwitch_G2">
                        <dhc:param name="notificationName" value="stateChanged"/>
                        <dhc:param name="notificationParamName" value="newState" type="State"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:notificationFunctionality class="ActivePowerMeasurementNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="ActivePowerMeasurementNotification">
                        <dhc:param name="notificationName" value="newActivePowerValue"/>
                        <dhc:param name="notificationParamName" value="value" type="Measure"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:notificationFunctionality class="ActiveEnergyMeasurementNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="ActiveEnergyMeasurementNotification">
                        <dhc:param name="notificationName" value="newActiveEnergyValue"/>
                        <dhc:param name="notificationParamName" value="value" type="Measure"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:state class="OnOffState">
                <dhc:statevalues>
                    <dhc:statevalue class="OffStateValue" name="off"/>
                    <dhc:statevalue class="OnStateValue" name="on"/>
                </dhc:statevalues>
            </dhc:state>
            <dhc:state class="SinglePhaseEnergyMeasurementState">
                <dhc:statevalues>
                    <dhc:statevalue class="SinglePhaseActiveEnergyStateValue" name=""/>
                </dhc:statevalues>
            </dhc:state>
            <dhc:state class="SinglePhaseActivePowerMeasurementState">
                <dhc:statevalues>
                    <dhc:statevalue class="SinglePhaseActivePowerStateValue" name=""/>
                </dhc:statevalues>
            </dhc:state>
        </dhc:device>
        <dhc:device class="DoorSensor" id="ZW_DoorWindowSensor_Vision_ZD202EU" domoticSystem="ZWave" gateway="zwave-gateway">
            <dhc:description>A DoorWindowSensor instance named
				DoorWindowSensor_ZW5</dhc:description>
            <dhc:isIn>storageroom</dhc:isIn>
            <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="StateChangeNotification">
                        <dhc:param name="notificationName" value="stateChanged"/>
                        <dhc:param name="notificationParamName" value="newState" type="State"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:notificationFunctionality class="OpenCloseNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="CloseNotification">
                        <dhc:param name="notificationName" value="close"/>
                    </dhc:notification>
                    <dhc:notification class="OpenNotification">
                        <dhc:param name="notificationName" value="open"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:state class="OpenCloseState">
                <dhc:statevalues>
                    <dhc:statevalue class="OpenStateValue" name="open"/>
                    <dhc:statevalue class="CloseStateValue" name="close"/>
                </dhc:statevalues>
            </dhc:state>
        </dhc:device>
        <dhc:device class="MeteringPowerOutlet" id="MeteringPowerOutlet_20" domoticSystem="ZWave" gateway="zwave-gateway">
            <dhc:description>New Device of type MeteringPowerOutlet
			</dhc:description>
            <dhc:isIn></dhc:isIn>
            <dhc:controlFunctionality class="OnOffFunctionality">
                <dhc:commands>
                    <dhc:command class="OffCommand" name="OffCommand_MeteringPowerOutlet_20" id="OffCommand_MeteringPowerOutlet_20">
                        <dhc:param name="realCommandName" value="off"/>
                    </dhc:command>
                    <dhc:command class="OnCommand" name="OnCommand_MeteringPowerOutlet_20" id="OnCommand_MeteringPowerOutlet_20"/>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:controlFunctionality class="ActivePowerMeasurementFunctionality">
                <dhc:commands>
                    <dhc:command class="GetActivePowerCommand" name="GetActivePowerCommand_MeteringPowerOutlet_20" id="GetActivePowerCommand_MeteringPowerOutlet_20">
                        <dhc:param name="realCommandName" value="getActivePower"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:controlFunctionality class="ActivePowerMeasurementFunctionality">
                <dhc:commands>
                    <dhc:command class="GetActiveEnergyCommand" name="GetActiveEnergyValueCommand_MeteringPowerOutlet_20" id="GetActiveEnergyValueCommand_MeteringPowerOutlet_20"/>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="StateChangeNotification">
                        <dhc:param name="notificationName" value="stateChanged"/>
                        <dhc:param name="notificationParamName" value="newState" type="State"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:notificationFunctionality class="ActivePowerMeasurementNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="ActivePowerMeasurementNotification">
                        <dhc:param name="notificationName" value="newActivePowerValue"/>
                        <dhc:param name="notificationParamName" value="value" type="Measure"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:notificationFunctionality class="ActiveEnergyMeasurementNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="ActiveEnergyMeasurementNotification">
                        <dhc:param name="notificationName" value="newActiveEnergyValue"/>
                        <dhc:param name="notificationParamName" value="value" type="Measure"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:state class="OnOffState">
                <dhc:statevalues>
                    <dhc:statevalue class="OffStateValue" name="off"/>
                    <dhc:statevalue class="OnStateValue" name="on"/>
                </dhc:statevalues>
            </dhc:state>
            <dhc:state class="SinglePhaseEnergyMeasurementState">
                <dhc:statevalues>
                    <dhc:statevalue class="SinglePhaseActiveEnergyStateValue" name=""/>
                </dhc:statevalues>
            </dhc:state>
            <dhc:state class="SinglePhaseActivePowerMeasurementState">
                <dhc:statevalues>
                    <dhc:statevalue class="SinglePhaseActivePowerStateValue" name=""/>
                </dhc:statevalues>
            </dhc:state>
        </dhc:device>
        <dhc:device class="ThermostaticRadiatorValve" id="ThermostaticRadiatorValve_1" domoticSystem="ZWave" gateway="zwave-gateway">
            <dhc:description>Danfoss Thermostatic Radiator Valve 
			</dhc:description>
            <dhc:isIn></dhc:isIn>
            <dhc:controlFunctionality class="ClimateScheduleFunctionality">
                <dhc:commands>
                    <dhc:command class="SetClimateScheduleCommand" name="SetClimateScheduleCommand_ThermostaticRadiatorValve_1" id="SetClimateScheduleCommand_ThermostaticRadiatorValve_1">
                        <dhc:param name="realCommandName" value="setDaySchedule"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:controlFunctionality class="ClimateScheduleQueryFunctionality">
                <dhc:commands>
                    <dhc:command class="GetClimateScheduleCommand" name="GetClimateScheduleCommand_ThermostaticRadiatorValve_1" id="GetClimateScheduleCommand_ThermostaticRadiatorValve_1">
                        <dhc:param name="realCommandName" value="getDaySchedule"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:controlFunctionality class="ThermostatControlFunctionality">
                <dhc:commands>
                    <dhc:command class="CoolCommand" name="CoolCommand_ThermostaticRadiatorValve_1" id="CoolCommand_ThermostaticRadiatorValve_1">
                        <dhc:param name="realCommandName" value="cool"/>
                    </dhc:command>
                    <dhc:command class="HeatCommand" name="HeatCommand_ThermostaticRadiatorValve_1" id="HeatCommand_ThermostaticRadiatorValve_1">
                        <dhc:param name="realCommandName" value="heat"/>
                    </dhc:command>
                    <dhc:command class="StopHeatingCoolingCommand" name="StopHeatingCoolingCommand_ThermostaticRadiatorValve_1" id="StopHeatingCoolingCommand_ThermostaticRadiatorValve_1">
                        <dhc:param name="realCommandName" value="stopHeatingOrCooling"/>
                    </dhc:command>
                    <dhc:command class="SetDesiredTemperatureCommand" name="SetDesiredTemperatureCommand_ThermostaticRadiatorValve_1" id="SetDesiredTemperatureCommand_ThermostaticRadiatorValve_1">
                        <dhc:param name="realCommandName" value="setTemperatureAt"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:controlFunctionality class="ThermostatQueryFunctionality">
                <dhc:commands>
                    <dhc:command class="GetCommand" name="GetCommand_ThermostaticRadiatorValve_1" id="GetCommand_ThermostaticRadiatorValve_1">
                        <dhc:param name="realCommandName" value="getState"/>
                    </dhc:command>
                </dhc:commands>
            </dhc:controlFunctionality>
            <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
                <dhc:notifications>
                    <dhc:notification class="StateChangeNotification">
                        <dhc:param name="notificationName" value="stateChanged"/>
                        <dhc:param name="notificationParamName" value="newState" type="State"/>
                    </dhc:notification>
                </dhc:notifications>
            </dhc:notificationFunctionality>
            <dhc:state class="ClimateScheduleState">
                <dhc:statevalues>
                    <dhc:statevalue class="ClimateScheduleStateValue" name=""/>
                    <dhc:statevalue class="ClimateScheduleStateValue" name=""/>
                    <dhc:statevalue class="ClimateScheduleStateValue" name=""/>
                    <dhc:statevalue class="ClimateScheduleStateValue" name=""/>
                    <dhc:statevalue class="ClimateScheduleStateValue" name=""/>
                    <dhc:statevalue class="ClimateScheduleStateValue" name=""/>
                    <dhc:statevalue class="ClimateScheduleStateValue" name=""/>
                </dhc:statevalues>
            </dhc:state>
            <dhc:state class="TemperatureState">
                <dhc:statevalues>
                    <dhc:statevalue class="TemperatureStateValue" name=""/>
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

#### <a id="singleDevice"></a> Resource /devices/{device-id} ####

*Updated on Thu, 2013-11-04*
<span class="label label-info pull-right">API version 1.0</span>

Represents a single domotic device handled by Dog, identified by a unique *device-id* (currently encoded in the *id* attribute for the XML response to the [GET /devices](#devices) request),
and "controllable" by applications using this API. 

*URL:* /devices/{device-id}

|Method|Description|
|:-----|:----------|
| GET |Returns the details of the device identified by the given *device-id* |
| PUT |Update some details of the device identified by the given *device-id* |

**GET: Example**

   GET http://www.mydog.com/api/devices/Lamp_Holder

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
	    "description" : "A MainsPowerOutlet instance named MainsPowerOutlet_ZW1",
	    "isIn" : "demo_room",
	    "controlFunctionality" : [ {
	      "commands" : {
	        "command" : [ {
	          "param" : [ {
	            "name" : "realCommandName",
	            "value" : "off"
	          } ],
	          "name" : "OffCommand_Lamp_Holder",
	          "id" : "OffCommand_Lamp_Holder",
	          "class" : "OffCommand"
	        }, {
	          "param" : [ {
	            "name" : "realCommandName",
	            "value" : "on"
	          } ],
	          "name" : "OnCommand_Lamp_Holder",
	          "id" : "OnCommand_Lamp_Holder",
	          "class" : "OnCommand"
	        } ]
	      },
	      "class" : "OnOffFunctionality"
	    } ],
	    "notificationFunctionality" : [ {
	      "notifications" : {
	        "notification" : [ {
	          "param" : [ {
	            "name" : "notificationName",
	            "value" : "stateChanged"
	          }, {
	            "name" : "notificationParamName",
	            "value" : "newState",
	            "type" : "State"
	          } ],
	          "id" : "StateChangeNotification_Lamp_Holder",
	          "class" : "StateChangeNotification"
	        } ]
	      },
	      "class" : "StateChangeNotificationFunctionality"
	    } ],
	    "state" : [ {
	      "statevalues" : {
	        "statevalue" : [ {
	          "name" : "off",
	          "class" : "OffStateValue"
	        }, {
	          "name" : "on",
	          "class" : "OnStateValue"
	        } ]
	      },
	      "class" : "OnOffState"
	    } ],
	    "id" : "Lamp_Holder",
	    "domoticSystem" : "ZWave",
	    "gateway" : "zwave-gateway",
	    "class" : "LampHolder"
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

	<dhc:dogHomeConfiguration xmlns:dhc="http://elite.polito.it/dogHomeConfiguration">
	    <dhc:controllables>
	        <dhc:device class="LampHolder" id="Lamp_Holder" domoticSystem="ZWave" gateway="zwave-gateway">
		        <dhc:description>A MainsPowerOutlet instance named MainsPowerOutlet_ZW1</dhc:description>
		        <dhc:isIn>demo_room</dhc:isIn>
		        <dhc:controlFunctionality class="OnOffFunctionality">
		            <dhc:commands>
		                <dhc:command class="OffCommand" name="OffCommand_Lamp_Holder" id="OffCommand_Lamp_Holder">
		                    <dhc:param name="realCommandName" value="off"/>
		                </dhc:command>
		                <dhc:command class="OnCommand" name="OnCommand_Lamp_Holder" id="OnCommand_Lamp_Holder">
		                    <dhc:param name="realCommandName" value="on"/>
		                </dhc:command>
		            </dhc:commands>
		        </dhc:controlFunctionality>
		        <dhc:notificationFunctionality class="StateChangeNotificationFunctionality">
		            <dhc:notifications>
		                <dhc:notification class="StateChangeNotification" id="StateChangeNotification_Lamp_Holder">
		                    <dhc:param name="notificationName" value="stateChanged"/>
		                    <dhc:param name="notificationParamName" value="newState" type="State"/>
		                </dhc:notification>
		            </dhc:notifications>
		        </dhc:notificationFunctionality>
		        <dhc:state class="OnOffState">
		            <dhc:statevalues>
		                <dhc:statevalue class="OffStateValue" name="off"/>
		                <dhc:statevalue class="OnStateValue" name="on"/>
		            </dhc:statevalues>
		        </dhc:state>
		    </dhc:device>
	    </dhc:controllables>
	</dhc:dogHomeConfiguration>
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

	PUT http://www.mydog.com/api/devices/Lamp_Holder
	
	-- REQUEST-BODY: --
	
	{
		"isIn" : "lobby",
		"description" : "Portalampada"
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

#### <a id="status"></a> Resource /devices/status ####

*Updated on Mon, 2013-11-04* <span class="label label-info pull-right">API version 1.0</span>

Represents the status of devices registered in the Dog gateway runtime, i.e., defined in the Dog [configuration](#devicesConfiguration) and successfully registered within the gateway runtime.

**URL:** /devices/status

|Method|Description|
|:-----|:----------|
| GET | List the current status of all devices actually managed by the Dog gateway, i.e. defined in the Dog configuration and registered within the gateway runtime, be they active or not |

**Example Request**

	GET http://www.mydog.com/api/devices/status

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
      "devices" : [ {
        "active" : true,
        "description" : "A \"MeteringPowerOutlet\" instance named MeteringPowerOutlet",
        "id" : "MeteringPowerOutlet",
        "status" : {
          "SinglePhaseActiveEnergyState" : [ {
            "value" : "0.0 kWh"
          } ],
          "OnOffState" : [ {
            "value" : "off"
          } ],
          "SinglePhaseActivePowerMeasurementState" : [ {
            "value" : "0.0 W"
          } ]
        }
      }, {
        "active" : true,
        "description" : "The ZWave X gateway",
        "id" : "zwave-gateway",
        "status" : {
          "DeviceAssociationState" : [ {
            "value" : "idle"
          } ]
        }
      }, {
        "active" : true,
        "description" : "A \"MeteringPowerOutlet\" instance named SmartEnergySwitch",
        "id" : "SmartEnergySwitch",
        "status" : {
          "SinglePhaseActiveEnergyState" : [ {
            "value" : "0.028 kWh"
          } ],
          "OnOffState" : [ {
            "value" : "off"
          } ],
          "SinglePhaseActivePowerMeasurementState" : [ {
            "value" : "0.0 W"
          } ]
        }
      }, {
        "active" : true,
        "description" : "Danfoss Thermostatic Radiator Valve",
        "id" : "ThermostaticRadiatorValve_1",
        "status" : {
          "ClimateScheduleState" : [ {
            "value" : {
              "switchPoints" : [ {
                "desiredTemperature" : "20.5 C",
                "timeAt" : 1382449500000
              }, {
                "desiredTemperature" : "17.5 C",
                "timeAt" : 1382467500000
              } ],
              "weekDay" : 1
            }
          }, {
            "value" : {
              "switchPoints" : [ {
                "desiredTemperature" : "20.5 C",
                "timeAt" : 1382456700000
              }, {
                "desiredTemperature" : "19.5 C",
                "timeAt" : 1382453100000
              } ],
              "weekDay" : 2
            }
          }, {
            "value" : {
              "switchPoints" : [ {
                "desiredTemperature" : "25.5 C",
                "timeAt" : 1382445180000
              }, {
                "desiredTemperature" : "20.5 C",
                "timeAt" : 1382448840000
              } ],
              "weekDay" : 3
            }
          }, {
            "value" : {
              "switchPoints" : [ {
                "desiredTemperature" : "20.5 C",
                "timeAt" : 1382456700000
              }, {
                "desiredTemperature" : "19.5 C",
                "timeAt" : 1382453100000
              } ],
              "weekDay" : 4
            }
          }, {
            "value" : {
              "switchPoints" : [ {
                "desiredTemperature" : "20.5 C",
                "timeAt" : 1382456700000
              }, {
                "desiredTemperature" : "19.5 C",
                "timeAt" : 1382453100000
              } ],
              "weekDay" : 5
            }
          }, {
            "value" : {
              "switchPoints" : [ {
                "desiredTemperature" : "20.5 C",
                "timeAt" : 1382456700000
              }, {
                "desiredTemperature" : "19.5 C",
                "timeAt" : 1382453100000
              } ],
              "weekDay" : 6
            }
          }, {
            "value" : {
              "switchPoints" : [ {
                "desiredTemperature" : "20.5 C",
                "timeAt" : 1382456700000
              }, {
                "desiredTemperature" : "19.5 C",
                "timeAt" : 1382453100000
              } ],
              "weekDay" : 7
            }
          } ],
          "TemperatureState" : [ {
            "value" : "19.5 C"
          } ]
        }
      }, {
        "active" : true,
        "description" : "A \"TemperatureAndHumiditySensor\" instance named TempAndHumidity_Temperature_and_Humidity_sensor",
        "id" : "Temperature_and_Humidity_sensor",
        "status" : {
          "TemperatureState" : [ {
            "value" : "22.5 C"
          } ],
          "HumidityMeasurementState" : [ {
            "value" : "39.0 %"
          } ]
        }
      }, {
        "active" : true,
        "description" : "A DoorWindowSensor instance named DoorWindowSensor_ZW5",
        "id" : "ZW_DoorWindowSensor_Vision_ZD202EU",
        "status" : {
          "OpenCloseState" : [ {
            "value" : "close"
          } ]
        }
      }, {
        "active" : true,
        "description" : "A \"MeteringPowerOutlet\" instance named SmartEnergySwitch",
        "id" : "AEOTEC_SmartSwitch_G2",
        "status" : {
          "SinglePhaseActiveEnergyState" : [ {
            "value" : "0.023 kWh"
          } ],
          "OnOffState" : [ {
            "value" : "off"
          } ],
          "SinglePhaseActivePowerMeasurementState" : [ {
            "value" : "0.0 "
          } ]
        }
      }, {
        "active" : true,
        "description" : "A MainsPowerOutlet instance named MainsPowerOutlet_ZW1",
        "id" : "Lamp_Holder",
        "status" : {
          "OnOffState" : [ {
            "value" : "off"
          } ]
        }
      }, {
        "active" : true,
        "description" : "New Device of type MeteringPowerOutlet",
        "id" : "MeteringPowerOutlet_20",
        "status" : {
          "SinglePhaseActiveEnergyState" : [ {
            "value" : "0.0 kWh"
          } ],
          "OnOffState" : [ {
            "value" : "off"
          } ],
          "SinglePhaseActivePowerMeasurementState" : [ {
            "value" : "0.0 W"
          } ]
        }
      }, {
        "active" : true,
        "description" : "The Aeon Labs Home Energy Meter",
        "id" : "AEON_HEM",
        "status" : {
          "SinglePhaseActiveEnergyState" : [ {
            "value" : "5.425 kWh"
          } ],
          "SinglePhaseActivePowerMeasurementState" : [ {
            "value" : "6.67 W"
          } ]
        }
      }, {
        "active" : true,
        "description" : "A MovementSensor instance named MovementSensor_ZW6",
        "id" : "ZP3102EU",
        "status" : {
          "MovementState" : [ {
            "value" : "notMoving"
          } ]
        }
      } ]
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

#### <a id="status-single"></a> Resource /devices/{device-id}/status ####

*Updated on Thu, 2013-11-04*
<span class="label label-info pull-right">API version 1.0</span>

Represents the status of the device identified by the given *device-id* and registered in the Dog gateway runtime, i.e., defined in the Dog [configuration](#devicesConfiguration) and successfully registered within the gateway runtime.

**URL:** /devices/{device-id}/status

|Method|Description|
|:-----|:----------|
| GET | List the current status of the device identified by the given *device-id* and actually managed by the Dog gateway, i.e. defined in the Dog configuration and registered within the gateway runtime, be they active or not |

**Example Request**

	GET http://www.mydog.com/api/devices/MeteringPowerOutlet/status

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
			"active" : true,
	        "description" : "A \"MeteringPowerOutlet\" instance named MeteringPowerOutlet",
	        "id" : "MeteringPowerOutlet",
	        "status" : {
	          "SinglePhaseActiveEnergyState" : [ {
	            "value" : "0.0 kWh"
	          } ],
	          "OnOffState" : [ {
	            "value" : "off"
	          } ],
	          "SinglePhaseActivePowerMeasurementState" : [ {
	            "value" : "0.0 W"
	          } ]
	        }
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

#### <a id="command"></a> Resource /devices/{device-id}/commands/{command-name} ####

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

    PUT http://www.mydog.com/api/devices/MainsPowerOutlet_p12_kitchen/commands/on

(command with parameters)

	PUT http://www.mydog.com/api/devices/DimmerLamp_l4_livingroom/commands/set
	
	-- REQUEST-BODY: --
	
	{
		"value" : "63"
	}

(deprecated)    
   
    POST http://www.mydog.com/api/devices/MainsPowerOutlet_p12_kitchen/commands/off
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


#### <a id="dogConfiguration"></a> Resource /dog/configuration ####

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

#### <a id="environment"></a> Resource /environment ####

*Updated on Thu, 2013-11-09*
<span class="label label-info pull-right">API version 1.0</span>

Represents the environment (i.e., the building) configured in Dog. 

**URL:** /environment

|Method|Description|
|:-----|:----------|
| GET | List the building environments (i.e., the building) configured in the Dog gateway. |

**Example Request**

	GET http://www.mydog.com/api/environment

<div class="accordion" id="environment-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#environment-example" href="#environment-example-json" markdown="1">
**Example Response (JSON)**
</a>
</div>
<div id="environment-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	{
	  "building" : [ {
	    "flats" : [ {
	      "description" : "The flat I rent",
	      "rooms" : [ {
	        "description : "The best room in the house",
	        "ceiling" : {
	          "id" : "ceiling",
	          "class" : "Ceiling"
	        },
	        "floor" : {
	          "id" : "floor",
	          "class" : "Floor"
	        },
	        "walls" : [ {
	          "id" : "wall",
	          "class" : "Wall"
	        } ],
	        "id" : "kitchen",
	        "class" : "Kitchen"
	      } ],
	      "id" : "flat",
	      "class" : "Flat"
	    } ],
	    "id" : "SimpleHome"
	  } ]
	}

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
            	<dhc:building id="SimpleHome">
                	<dhc:flat class="Flat" svgfootprint="simple_home.svg" id="flat">
                		<dhc:description>The flat I rent</dhc:description>
                    	<dhc:room class="Kitchen" id="kitchen">
                    		<dhc:description>The best room in the house.</dhc:description>
                        	<dhc:ceiling class="Ceiling" id="Ceiling_kitchen"/>
                            <dhc:floor class="Floor" id="Floor_kitchen"/>
                            <dhc:wall class="Wall" id="Wall_kitchen_south"/>
                            <dhc:wall class="Wall" id="Wall_kicthen_west">
                            	<dhc:hasWallOpening class="Window" id="Window_w4_kitchen"/>
                            </dhc:wall>
                            <dhc:wall class="Wall" id="Wall_kitchen_storage_lobby"/>
                            <dhc:wall class="Wall" id="Wall_kitchen_lobby">
                            	<dhc:hasWallOpening class="Door" id="Door_kitchen_lobby"/>
                           	</dhc:wall>
                            <dhc:wall class="Wall" id="Wall_kitchen_livingroom">
                            	<dhc:hasWallOpening class="Door" id="Door_kitchen_living"/>
                            </dhc:wall>
                      	</dhc:room>
                      	<dhc:room class="Bedroom" id="sam_bedroom">
                    		<dhc:description>Sam's bedroom</dhc:description>
                        	<dhc:ceiling class="Ceiling" id="Ceiling_sam_bedroom"/>
                            <dhc:floor class="Floor" id="Floor_sam_bedroom"/>
                            <dhc:wall class="Wall" id="Wall_sam_bedroom_south"/>
                            <dhc:wall class="Wall" id="Wall_sam_bedroom_west">
                            	<dhc:hasWallOpening class="Window" id="Window_w1_sam_bedroom"/>
                            </dhc:wall>
                            <dhc:wall class="Wall" id="Wall_sam_bedroom_main_bathroom_lobby"/>
                            <dhc:wall class="Wall" id="Wall_sam_bedroom_lobby">
                            	<dhc:hasWallOpening class="Door" id="Door_sam_bedroom_lobby"/>
                           	</dhc:wall>
                            <dhc:wall class="Wall" id="Wall_sam-bedroom_livingroom">
                            	<dhc:hasWallOpening class="Door" id="Door_sam_bedroom_living"/>
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

#### <a id="flats"></a> Resource /environment/flats ####

*Updated on Thu, 2013-11-09*
<span class="label label-info pull-right">API version 1.0</span>

Represents all the flats present in the environment (i.e., int the building). 

**URL:** /environment/flats

|Method|Description|
|:-----|:----------|
| GET | List all the flats present in the in the (only, right now) building configured in Dog. |
| POST | Add a new flat to the building configured in Dog. |

**GET: Example**

	GET http://www.mydog.com/api/environment/flats

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
			"id" : "flat",
			"class" : "Flat",
			"description" : "The flat I rent",
			"rooms":[
				{
					"id" : "kitchen",
					"class" : "Kitchen",
					"description" : "The best room in the house"
				},
				{
					"id" : "sam_bedroom",
					"class": "Bedroom",
					"description" : "Sam's bedroom"
				}
			]
		},
		{
			"id" : "other-flat",
			"class" : "Flat",
			"description" : "The flat I own",
			"rooms":[
				{
					"id" : "kitchen",
					"class" : "Kitchen",
					"description" : "The kitchen"
				},
				{
					"id" : "bathroom",
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

	POST http://www.mydog.com/api/environment/flats
	
	-- REQUEST-BODY: --
	
	{
		"id" : "loft",
		"class" : "Flat",
		"description" : "The loft in the city center",
		"rooms":[
			{
				"id" : "kitchen",
				"class" : "Kitchen",
				"description" : "The kitchen with a wonderful view"
			},
			{
				"id" : "bedroom",
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

#### <a id="single-flat"></a> Resource /environment/flats/{flat-id} ####

*Updated on Thu, 2013-11-10*
<span class="label label-info pull-right">API version 1.0</span>

Represents a specific flat present in the environment (i.e., in the building). 

**URL:** /environment/flats

|Method|Description|
|:-----|:----------|
| GET | Returns the details of the flat identified by the given *flat-id*. |
| PUT | Update the flat identified by the given *flat-id*. |

**GET: Example**

	GET http://www.mydog.com/api/environment/flats/flat

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
		"id" : "flat",
		"class" : "Flat",
		"description" : "The flat I rent",
		"rooms":[
			{
				"id" : "kitchen",
				"class" : "Kitchen",
				"description" : "The best room in the house"
			},
			{
				"id" : "sam_bedroom",
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

	PUT http://www.mydog.com/api/environment/flats/flat
	
	-- REQUEST-BODY: --
	
	{
		"id" : "flat",
		"class" : "Flat",
		"description" : "The flat where I grew",
		"rooms":[
			{
				"id" : "kitchen",
				"class" : "Kitchen",
				"description" : "The best room in the house"
			},
			{
				"id" : "sam_bedroom",
				"class": "Bedroom",
				"description" : "Sam's bedroom"
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

#### <a id="rooms-in-flat"></a> Resource /environment/flats/{flat-id}/rooms ####

*Updated on Thu, 2013-11-09*
<span class="label label-info pull-right">API version 1.0</span>

Represents all the rooms present in a given flat. 

**URL:** /environment/flats

|Method|Description|
|:-----|:----------|
| GET | List all the rooms present in the flat identified by the given *flat-id*. |
| POST | Add a new room to the flat identified by the given *flat-id*. |

**GET: Example**

	GET http://www.mydog.com/api/environment/flats/flat/rooms

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
			"id" : "kitchen",
			"class" : "Kitchen",
			"description" : "The best room in the house"
		},
		{
			"id" : "sam_bedroom",
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

	POST http://www.mydog.com/api/environment/flats/flat/rooms
	
	-- REQUEST-BODY: --
	
	{
		"id" : "bedroom",
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
|Response Object|**Array [ Room ]**|
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

#### <a id="single-room-in-flat"></a> Resource /environment/flats/{flat-id}/rooms/{room-id} ####

*Updated on Thu, 2013-11-10*
<span class="label label-info pull-right">API version 1.0</span>

Represents a specific room in the flat identified by the given *flat-id*. 

**URL:** /environment/flats/{flat-id}/rooms/{room-id}

|Method|Description|
|:-----|:----------|
| GET | Returns the details of the room identified by the given *room-id* and located in the given flat. |
| PUT | Update the room identified by the given *room-id* and located in the given flat. |

**GET: Example**

	GET http://www.mydog.com/api/environment/flats/flat/rooms/kitchen

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
		"id" : "kitchen",
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

	PUT http://www.mydog.com/api/environment/flats/flat/rooms/kitchen
	
	-- REQUEST-BODY: --
	
	{
		"id" : "kitchen",
		"class" : "Kitchen",
		"description" : "The room I love"
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

---------------------------------

### Rules API [rulesAPI]###

---------------------------------

</div>
</div>

<div class="row-fluid" markdown="1">
<div class="span3" markdown="1"></div>
<div class="span6" markdown="1">

#### <a id="rules"></a> Resource /rules/ ####

*Updated on Thu, 2013-11-08*
<span class="label label-info pull-right">API version 1.0</span>

Represents the rules registered in Dog. By using this resource, it is possible to get all the existing rules or add a new rule.

Currently, all the responses and the requests are in XML format.


**URL:** /rules/

|Method|Description|
|:-----|:----------|
| GET | Returns all the existing rules. |
| POST | Add a new rule to the current rules set. If the rule already exists, it will be overwritten. |

**GET: Example**

	GET http://www.mydog.com/api/rules

<div class="accordion" id="rules-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#rules-example" href="#rules-example-json" markdown="1">
**Example Response (JSON)**
</a>
</div>
<div id="rules-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	{
		// not yet supported
	}

</div>
</div>
</div>
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#devices-example" href="#rules-example-xml" markdown="1">
**Example Response (XML)**
</a>
</div>
<div id="rules-example-xml" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
	<dogrules:ruleList xmlns:dogrules="http://elite.polito.it/domotics/dog/rules/rule_definition">
	    <dogrules:rule name="onToOn">
	        <dogrules:if>
	            <dogrules:event>
	                <dogrules:notification name="stateChanged" class="StateChangeNotification" fromDevice="MeteringPowerOutlet_1">
	                    <dogrules:param name="newState" value="on" type="OnOffState"/>
	                </dogrules:notification>
	            </dogrules:event>
	            <dogrules:when>
	                <dogrules:state name="off" class="OnOffState" ofDevice="LampHolder_3"/>
	            </dogrules:when>
	        </dogrules:if>
	        <dogrules:then>
	            <dogrules:action>
	                <dogrules:command name="on" class="OnOffFunctionality" toDevice="MeteringPowerOutlet_2"/>
	            </dogrules:action>
	        </dogrules:then>
	    </dogrules:rule>
	    <dogrules:rule name="temporaryDisconnection">
	        <dogrules:if>
	            <dogrules:event>
	                <dogrules:notification name="newActivePowerValue" class="SinglePhaseActivePowerMeasurementNotification" fromDevice="SmartEnergySwitch_5"/>
	            </dogrules:event>
	            <dogrules:when>
	                <dogrules:state class="SinglePhaseActivePowerMeasurementState" ofDevice="SmartEnergySwitch_5" value="50.0" evaluator="&gt;"/>
	            </dogrules:when>
	        </dogrules:if>
	        <dogrules:then>
	            <dogrules:action>
	                <dogrules:command name="off" class="OnOffFunctionality" toDevice="SmartEnergySwitch_5"/>
	            </dogrules:action>
	        </dogrules:then>
    	</dogrules:rule>
	</dogrules:ruleList>

</div>
</div>
</div>
</div>

**POST: Example**
<div class="accordion" id="add-rule-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#add-rule-example" href="#add-rule-example-xml" markdown="1">
**Example Request**
</a>
</div>
<div id="add-rule-example-xml" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	POST http://www.mydog.com/api/rules/
	
	-- REQUEST-BODY: --
	
	<dogrules:ruleList xmlns:dogrules="http://elite.polito.it/domotics/dog/rules/rule_definition">
		<dogrules:rule name="consumptionTooHigh">
	        <dogrules:if>
	            <dogrules:event>
	                <dogrules:notification name="newActivePowerValue" class="SinglePhaseActivePowerMeasurementNotification" fromDevice="MeteringPowerOutlet_1"/>
	            </dogrules:event>
	            <dogrules:when>
	                <dogrules:state class="SinglePhaseActivePowerMeasurementState" ofDevice="MeteringPowerOutlet_1" value="50.0" evaluator="&gt;"/>
	            </dogrules:when>
	        </dogrules:if>
	        <dogrules:then>
	            <dogrules:action>
	                <dogrules:command name="off" class="OnOffFunctionality" toDevice="MeteringPowerOutlet_1"/>
	            </dogrules:action>
	        </dogrules:then>
	    </dogrules:rule>
	</dogrules:ruleList>
	
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
|Response Format|**xml** or **json**|
|HTTP Methods|**GET** or **POST**|
|Resource family|**rules**|
|Response Object|**Array [ Rule ]**|
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

#### <a id="single-rule"></a> Resource /rules/{rule-id} ####

*Updated on Thu, 2013-11-08*
<span class="label label-info pull-right">API version 1.0</span>

Represents an existing rule registered in Dog. By using this resource, it is possible to update or delete an existing rule.

Currently, all the responses and the requests are in XML format.

**URL:** /rules/{rule-id}

|Method|Description|
|:-----|:----------|
| GET | Returns the details of the rules identified by *rule-id*. |
| PUT | Update the rule identified by *rule-id*. |
| DELETE | Remove the rule identified by the given *rule-id*. |

**GET: Example**

	GET http://www.mydog.com/api/rules/onToOn

<div class="accordion" id="single-rule-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#single-rule-example" href="#single-rule-example-json" markdown="1">
**Example Response (JSON)**
</a>
</div>
<div id="single-rule-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	{
		// not yet supported
	}

</div>
</div>
</div>
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#devices-example" href="#rules-example-xml" markdown="1">
**Example Response (XML)**
</a>
</div>
<div id="rules-example-xml" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
	<dogrules:ruleList xmlns:dogrules="http://elite.polito.it/domotics/dog/rules/rule_definition">
	    <dogrules:rule name="onToOn">
	        <dogrules:if>
	            <dogrules:event>
	                <dogrules:notification name="stateChanged" class="StateChangeNotification" fromDevice="MeteringPowerOutlet_1">
	                    <dogrules:param name="newState" value="on" type="OnOffState"/>
	                </dogrules:notification>
	            </dogrules:event>
	            <dogrules:when>
	                <dogrules:state name="off" class="OnOffState" ofDevice="LampHolder_3"/>
	            </dogrules:when>
	        </dogrules:if>
	        <dogrules:then>
	            <dogrules:action>
	                <dogrules:command name="on" class="OnOffFunctionality" toDevice="MeteringPowerOutlet_2"/>
	            </dogrules:action>
	        </dogrules:then>
	    </dogrules:rule>
	</dogrules:ruleList>

</div>
</div>
</div>
</div>

**PUT: Example**
<div class="accordion" id="update-rule-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#update-rule-example" href="#update-rule-example-json" markdown="1">
**Example Request**
</a>
</div>
<div id="update-rule-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	PUT http://www.mydog.com/api/rules/consumptionToHigh
	
	-- REQUEST-BODY: --
	
	<dogrules:ruleList xmlns:dogrules="http://elite.polito.it/domotics/dog/rules/rule_definition">
		<dogrules:rule name="consumptionTooHigh">
	        <dogrules:if>
	            <dogrules:event>
	                <dogrules:notification name="newActivePowerValue" class="SinglePhaseActivePowerMeasurementNotification" fromDevice="MeteringPowerOutlet_1"/>
	            </dogrules:event>
	            <dogrules:when>
	                <dogrules:state class="SinglePhaseActivePowerMeasurementState" ofDevice="MeteringPowerOutlet_1" value="20.0" evaluator="&gt;"/>
	            </dogrules:when>
	        </dogrules:if>
	        <dogrules:then>
	            <dogrules:action>
	                <dogrules:command name="off" class="OnOffFunctionality" toDevice="MeteringPowerOutlet_1"/>
	            </dogrules:action>
	        </dogrules:then>
	    </dogrules:rule>
	</dogrules:ruleList>
	
</div>
</div>
</div>
</div>

**DELETE: Example**
<div class="accordion" id="remove-rule-example" markdown="1">
<div class="accordion-group" markdown="1">
<div class="accordion-heading" markdown="1">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#remove-rule-example" href="#remove-rule-example-json" markdown="1">
**Example Request**
</a>
</div>
<div id="remove-rule-example-json" class="accordion-body collapse" markdown="1">
<div class="accordion-inner" markdown="1">

	DELETE http://www.mydog.com/api/rules/onToOn
	
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
|Response Format|**xml** or **json**|
|HTTP Methods|**GET**, **PUT** or **DELETE**|
|Resource family|**rules**|
|Response Object|**Rule**|
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

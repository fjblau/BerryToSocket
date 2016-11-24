# BerryToSocket

Displays real-time data from sensors on a Raspberry Pi

There are 4 sensors:

Accelerometer (X,Y,Z) : Measures motion (a poor man's seismometer)
Magnetomter (X,Y,Z) : Measures the earth's magnetic field
Barometer : Barometric pressure (in hPa units)
Temperature : In Celsius

Due to the scale (still adjusting) you won't see much movement in Barometer or Temperature over a minute range.

The data starts over every time you refresh the page.

# Ideas

##Wrap UI in something like ExtJS
##Combo-charts for Mag and ACC
##Better colors
##Make Temp and Baro database calls for longer time period display (graph with ExtJS?)

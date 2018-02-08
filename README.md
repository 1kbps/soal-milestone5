Convert prices to a factor of 100000 (i.e. 1lk = 1)
Use faker to generate 120 entries
Create 3 object prototypes Teams, Players, Staff.
Create one blank object bidPool
Generate 7 Arrays with a value that is random
Array 1 - Batsmen and Bowlers - Length 60 - values between 20 and 200
Array 2 - All Rounders - Length 18 - values between 50 and 200
Array 3 - Wicket Keepers - Length 12 - values between 100 and 200
Array 4 - Coaches - Length 6 - Values Between 20 and 50
Array 5 - Medics - Length 6 - Values Between 5 and 10
Array 6 - Trainers - Length 12 - values between 1 and 5

Map these arrays to the relevant properties in the Players and Staff Objects

Checkpoint: Release 0 Done

Release 1.0
Generate an array 1,2,3,4,5,6, of length 114
Shuffle the array
Use array to determine draft order

Release 1.1
sendBid function to setTime out based on array values
Map 1000ms to each array value
pass array values as trigger for sendBid function

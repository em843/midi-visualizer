/*
Author: Erin
Created: 4/20/21
Modified: 4/21/21 parse events in MIDI data
Modified: 4/26/21 display multiple shapes on canvas

WHERE YOU LEFT OFF:
Trying to figure out a solution for placeNotes() with xPosition, xSum and deltaTime.
I think the solution is to have two separate methods, placeNote and createNote.


short term
TODO: Figure out difference between drawCircle x y parameters and circle.x + circle.y
TODO: Initialize grid
TODO: Figure out proportion formulas for placing notes

long term
TODO: Add support for multiple tracks
*/


var stage = new Rune({
    container: "body",
    width: 500,
    height: 400
});

// initialize note grid


stage.line(0, 0, 0, 294);
stage.line(44, 0, 44, 294);



var i;
for (i = 0; i < 5; i++){
}
stage.draw()


function onLoad(midiData) {
    console.log("load successful");
    
    // select the INPUT element that will handle
    // the file selection.
    let source = document.getElementById("filereader");


    MidiParser.parse(source, function (obj) {
        console.log(obj);
        
        


        //var shape = new createjs.Shape();
        //shape.graphics.lineTo(10, 0);
        
        
        /*
        for (var i = 0; i < 10; i++)
        {
            shape.graphics.lineTo(i*10, 0);
            // Since shapes have no bounds, you will have to know the bounds based on what you draw:
            shape.cache(0, 100, 50, 50);
            var bmp = new createjs.Bitmap(shape.cacheCanvas);
        }
        */

        // Parse notes
        var firstNote;
        var events = obj.track[1].event;

        // Get rid of non-note info
        for (var i = 0; i < events.length; i++) {
            console.log("Checking for the first note...");
            if (Array.isArray(events[i].data)) { // Once we find a note, break the loop.
                firstNote = i;
                console.log("Found first note at index " + firstNote);
                break;
            }
        }
        console.log("Time to process events.");

        for (var i = firstNote; i < events.length-1; i++) { // For each note in track chunk
            var currEvent = events[i];
            var xSum = 0;
            if (currEvent.data[1] !=0 ) { // If it's a 'note on' event, place it; otherwise ignore it
                console.log(currEvent);
                //console.log("Value: " + currEvent.data[0]);
                xSum += currEvent[0]; // Add deltaTime to next note's x position
                placeNote(currEvent.data[0], currEvent[0], stage)
            }
        }
    
    });
    }


    function placeNote(noteValue, notePlacement, stage){



       


        
       /*
        var yPosition = noteValue; // change to calculated formula once you find one that works
        var xPosition = notePlacement; // change to calculated formula once you find one that works
        var circle = new createjs.Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(100, yPosition, 4); // change this to xPosition when you figure it out
        circle.x = 100;
        circle.y = 100;
        stage.addChild(circle);
        stage.update();
        //console.log("Note should be visible on screen.");
        */
    }






    

/* Discarded code:

        var xPosition;
        var xSum;
        if (typeof xSum === 'undefined') { // if this is the first note placed
            xPosition = 0;
            console.log("First note x position set.")
        }
        else {
            xPosition = xSum + Math.floor(deltaTime/4);
        } 
        xSum = xPosition;

*/
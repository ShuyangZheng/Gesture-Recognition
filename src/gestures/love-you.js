import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";


// describe ok gesture :ok
const lyDescription = new GestureDescription('love_you');


// thumb:
lyDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
lyDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
lyDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
lyDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
lyDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
lyDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
lyDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// middle:
lyDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
lyDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

// ring:
lyDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
lyDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

// pinky:
lyDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
lyDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.75);
lyDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.75);
lyDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.75);

// give additional weight to index and ring fingers
lyDescription.setWeight(Finger.Thumb, 2);
lyDescription.setWeight(Finger.Index, 2);
lyDescription.setWeight(Finger.Pinky, 2);

export default lyDescription;

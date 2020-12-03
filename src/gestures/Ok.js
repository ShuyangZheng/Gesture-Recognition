import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";


// describe ok gesture :ok
const okDescription = new GestureDescription('ok');


// thumb:
okDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
okDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
okDescription.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
okDescription.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
okDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
okDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
okDescription.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
okDescription.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
okDescription.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
okDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
okDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// middle:
okDescription.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.5);
okDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
okDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);
okDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);
okDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.75);

// ring:
okDescription.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.5);
okDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
okDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.75);
okDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.75);
okDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.75);

// pinky:
okDescription.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.5);
okDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
okDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.75);
okDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.75);
okDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.75);

// give additional weight to index and ring fingers
okDescription.setWeight(Finger.Middle, 2);
okDescription.setWeight(Finger.Ring, 2);
okDescription.setWeight(Finger.Pinky, 2);

export default okDescription;

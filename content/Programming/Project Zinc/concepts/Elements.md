A Zinc element is the primitive unit of a [[Components|component]]. It consists of a single source image, optional image sequences, and has several properties that can be controlled by [[Animations|animations]].

### Static Properties

Static properties are constant values that cannot be changed by an animation.

|Property|Description|
|---|---|
|x|The horziontal position of the element relative to its parent component.|
|y|The vertical position of the element relative to its parent component.|

### Dynamic Properties

Dynamic properties are properties that **can** be changed by an animation.

|Property|Description|Default Value|
|---|---|---|
|ofsX|The relative horziontal position of the element.|0|
|ofsY|The relative vertical position of the element.|0|
|scaleX|The horizontal scale of the element.|1|
|scaleY|The verticle scale of the element.|1|
|rotation|The rotation of the element in degrees.|0|
|sequenceIndex|The index of the [[Image Sequences\|image sequence]] to use.|0|
|imageIndex|The index of the image to show within the current image sequence.|0|

Other properties may be added in the future.

Components may also be used as elements.
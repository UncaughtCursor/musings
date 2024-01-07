Zinc Components are animatable objects made up of controllable [[Parameters|parameters]].

Components are made up of [[Elements|elements]], and themselves may be controlled as an element.

Components may also contain other components. The contained components are called subcomponents.

When previewing a component, sliders for the parameters and subcomponents' parameters will appear.
![[Zinc Component UI Concept.png]]
NOTE: "Actor" here refers to components. We should probably revise this image.

[[Zinc API|Programmatically]], a parameter can be accessed using `component.subcomponent.parameter`.
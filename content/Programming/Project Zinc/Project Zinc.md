Project Zinc is a simple 2D animation web app designed to make it easy to animate our art.

Zinc allows for parameterized animations from a set of connected images. Parameters abstract complex movements into simpler representations, allowing for easy use.

For example, given a set of arm segments, Zinc would allow control parameters for the arm angle and hand position to be defined and animated. This would be done through keyframes and different interpolation functions. Each image segment could have its position, scale, rotation, etc controlled and animated.

This method could is similar to the Pokemon in Black and White or some boss sprites in Undertale.

The use of parameters allows for multiple animations to be derived from the same configuration.

[[Components|Components]] define parameterized animation elements.
[[Animations|Animations]] define changes in components' parameters over time.

Animations can be played and parameters can be manually controlled programmatically using the [[Zinc API|Zinc API]].
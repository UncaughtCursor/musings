[[Project Pulsar]]'s language must be intuitive and efficient.

We use characters to map to human intuition and provide reasonably fast reading speeds.

With this in mind, we propose the following properties:

- One character per pulse. This lines up with pre-existing intuition.
- A simple ruleset. This makes adoption simple.
- A customizable number of channels. This accomodates for processing speed and sensory ability.
- Should be readable and writable by a human.

## Base 8

A possible solution is base 8, or octal, indexing the letters based on their numerical position in the alphabet and using 8 distinct signal types.

## Mappings

| Key             | Signal 1 | Signal 2 |
| --------------- | -------- | -------- |
| SPACE           | 0        | 0        |
| A               | 0        | 1        |
| B               | 0        | 2        |
| C               | 0        | 3        |
| D               | 0        | 4        |
| E               | 0        | 5        |
| F               | 0        | 6        |
| G               | 0        | 7        |
| H               | 1        | 0        |
| I               | 1        | 1        |
| J               | 1        | 2        |
| K               | 1        | 3        |
| L               | 1        | 4        |
| M               | 1        | 5        |
| N               | 1        | 6        |
| O               | 1        | 7        |
| P               | 2        | 0        |
| Q               | 2        | 1        |
| R               | 2        | 2        |
| S               | 2        | 3        |
| T               | 2        | 4        |
| U               | 2        | 5        |
| V               | 2        | 6        |
| W               | 2        | 7        |
| X               | 3        | 0        |
| Y               | 3        | 1        |
| Z               | 3        | 2        |
| .               | 3        | 3        |
| ,               | 3        | 4        |
| ?               | 3        | 5        |
| !               | 3        | 6        |
| EMOJI           | 3        | 7        |
| 0               | 4        | 0        |
| 1               | 4        | 1        |
| 2               | 4        | 2        |
| 3               | 4        | 3        |
| 4               | 4        | 4        |
| 5               | 4        | 5        |
| 6               | 4        | 6        |
| 7               | 4        | 7        |
| 8               | 5        | 0        |
| 9               | 5        | 1        |
| ---             | ---      | ---      |
| EXPLAIN CONTEXT | 7        | 0        |
| TAB             | 7        | 1        |
| ENTER           | 7        | 2        |
| BACKSPACE       | 7        | 3        |

Notes:
- System commands are accessed with Signal 1 being at maximum value for it to be easy to remember.
- The EXPLAIN CONTEXT command explains the current input field, current value, and surrounding context, acting as a sort of help button.

TODO: Other ASCII symbols, control characters like capitalizing the next character
## Efficiency

Each signal is exactly 3 bits of information. With 2 signals required for each character, there are 6 bits per character.

We can derive the total data transmission rate from the formula on the [[Project Pulsar|main project pulsar note]], using 8 for the number of distinct signals. Dividing by 6 bits to account for the size of one character, this simplifies to:
$$
R_\text{char}=\frac{C}{2D}
$$
Where:
$R_\text{char}$ is the transmission rate in characters per second,
$C$ is the number of concurrent channels,
$D$ is the pulse length in seconds.

The values of $C$ and $D$ depend on the speed and concurrency with which the user can process or input signals.

It is perhaps not inconceivable for 4 channels with an average pulse length of 0.25 seconds to be readable. In this case, the rate would be 8 characters per second, or 480 characters per minute. If we take the average word to be 5 characters, this is 96 words per minute.
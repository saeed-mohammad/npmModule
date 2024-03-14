# react-ntest-btn

test package on npm for trial

## Installation

```sh
npm install react-ntest-btn
```

## Usage

```js
import { multiply } from 'react-ntest-btn';
OR
import react-ntest-btn from 'react-ntest-btn';
// ...
# Methods1:

const handleMsg = () => {
    ReactNtestBtn.testing(' sidoo', (error, response) => {
      if (error != null) {
        console.log('Failur!', error);
      } else {
        console.log('Message:- ', response);
      }
    });
  };

# Methods2:

 const handleMsg1 = () => {
    ReactNtestBtn.anothertesting(' testing another message', (error, response) => {
      if (error != null) {
        console.log('Failur!', error);
      } else {
        console.log('Message1:- ', response);
      }
    });
  };
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

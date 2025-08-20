import React from 'react';

type State = {
  pressedKey: string;
};
export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  keyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.keyPress);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.keyPress);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;
    const message = pressedKey
      ? `The last pressed key is [${pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}

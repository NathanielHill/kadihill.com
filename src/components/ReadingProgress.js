import React from 'react';
import ScrollProgress from 'scrollprogress';

export default class ReadingProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    this.progressObserver = new ScrollProgress((x, y) => {
      this.setState({ progress: y * 100 });
    });
  }

  componentWillUnmount() {
    this.progressObserver.destroy();
  }

  render() {
    const style = {
      backgroundColor: 'rgb(160, 214, 180)',
      height: '8px',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      width: `${this.state.progress}%`,
    };

    return <div className='progress-bar' style={style} />;
  }
}

import React from 'react';

class Hello extends React.Component {
  reverse(x: string | number): number | string {
    if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
      return x.split('').reverse().join('');
    } else {
      return 'unknown'
    }
  }
  render() {
    return (
      <div>
        hello ts class!
        <br/>
        {
          `${this.reverse(123)},${this.reverse('hello')}`
        }
      </div>
    )
  }
}
export default Hello;
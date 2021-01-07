import React, { PureComponent } from 'react'

export class Button extends PureComponent {
  render() {
    return (
      <>
        <button onClick={this.props.btnClick}>
            {this.props.name}
        </button>
      </>
    )
  }
}

export default Button

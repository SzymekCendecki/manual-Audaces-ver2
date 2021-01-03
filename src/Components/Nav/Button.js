import React, { PureComponent } from 'react'

export class Button extends PureComponent {
  render() {
    return (
      <>
        <button>
            {this.props.name}
        </button>
      </>
    )
  }
}

export default Button

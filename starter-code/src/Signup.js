import React from 'react'

import FormField from './FormField'
import CoolButton from './CoolButton'

class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Signup</h1>
        <div>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Email" type="password" placeholder="*******" />
        </div>
        <CoolButton isSmall is Primary>Submit</CoolButton>
      </div>
    )
  }
}

export default Signup
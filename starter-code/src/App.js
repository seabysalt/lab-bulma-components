import React from 'react'

import Navbar from './Navbar'
import FormField from './FormField'
import Signup from './Signup'


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
        <Signup />
      </div>
    )
  }
}

export default App;



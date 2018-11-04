import React from 'react';

import TextField from '@material-ui/core/TextField';

const subjects = ['Suggestion', 'Question'];

class ContactSubject extends React.PureComponent {
  state = {
    subject: 'Suggestion',
  };

  handleChange = type => e => {
    this.setState({
      [type]: e.target.value,
    });
  };

  render() {
    const { subject } = this.state;

    return (
      <div>
        <TextField
          label=" "
          id="select-subject"
          select
          SelectProps={{
            native: true,
          }}
          value={subject}
          onChange={this.handleChange('subject')}
        >
          {subjects.map(option => (
            <option key={option[0]} value={option[0]}>
              {option}
            </option>
          ))}
        </TextField>
      </div>
    );
  }
}

export default ContactSubject;

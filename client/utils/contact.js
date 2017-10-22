import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.updateInput = this.updateInput.bind(this)
    this.toggleSelected = this.toggleSelected.bind(this)
    this.handleSubmission = this.handleSubmission.bind(this)
  }
  toggleSelected(event) {
    const selected = event.target.dataset.topic === this.props.selected
      ? ''
      : event.target.dataset.topic
    this.props.dispatch({
      type: 'TOGGLED_CONTACT_SUGGESTION',
      payload: { selected }
    })
  }
  updateInput(event) {
    this.props.dispatch({
      type: 'UPDATED_CONTACT_INPUT',
      payload: {
        text: event.target.value
      }
    })
  }
  handleSubmission(event) {
    event.preventDefault()
    fetch('/contact-submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ text: this.props.inputContents })
    }).then(response => console.log(response))
  }
  render() {
    return (
      <div id="about-section" className={'row' + (this.props.view === 'contact' ? '' : ' hidden')}>
        <ContactSplash></ContactSplash>
        <DarkeningLayer />
        <ContactWrapper className="col-sm-6 col-sm-offset-3">
          <FormWrapper>
            <DescriptionWrapper>
              <div>If you have any</div>
              <ContactQueryLink className={'btn btn-default col-sm-4' + (this.props.selected === 'questions' ? ' btn-primary' : '')}
                data-topic="questions" onClick={this.toggleSelected}>questions</ContactQueryLink>
              <ContactQueryLink className={'btn btn-default col-sm-4' + (this.props.selected === 'job' ? ' btn-primary' : '')}
                data-topic="job" onClick={this.toggleSelected}>opportunities</ContactQueryLink>
              <ContactQueryLink className={'btn btn-default col-sm-4' + (this.props.selected === 'feedback' ? ' btn-primary' : '')}
                data-topic="feedback" onClick={this.toggleSelected}>feedback</ContactQueryLink>
              <p>or something more specific, please feel free to reach out to me on LinkedIn, via email, or by using the form below.</p>
            </DescriptionWrapper>
            <ContactForm onSubmit={this.handleSubmission}>
              <div>
                <ContactInput value={this.props.inputContents} onChange={this.updateInput}/>
              </div>
              <SubmitButton className="btn btn-default">Submit</SubmitButton>
            </ContactForm>
          </FormWrapper>
        </ContactWrapper>
      </div>
    )
  }
}

const ContactQueryLink = styled.button`
  margin: 10px 0;
`

const DescriptionWrapper = styled.div`
  width: 500px;
  padding: 10px 20px;
  margin: 0 auto;
  font-size: 1.15em;
`

const FormWrapper = styled.div`
  text-align: center;
`

const ContactForm = styled.form`
  height: 350px;
`

const SubmitButton = styled.button`
  position: relative;
`

const ContactInput = styled.textarea`
  height: 200px;
  width: 500px;
  resize: none;
  padding: 10px;
`

const ContactWrapper = styled.div`
  background-color: rgba(250, 250, 250, 0.8);
  position: relative;
  top: 100px;
  height: 400px;
  padding: 0;
`

const ContactSplash = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 50px;
  background-image: url('images/contact-splash.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const DarkeningLayer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
`

function mapStateToProps(state) {
  return {
    view: state.view,
    inputContents: state.contact.input,
    selected: state.contact.selected
  }
}

const Connected = connect(mapStateToProps)(Contact)
export default Connected

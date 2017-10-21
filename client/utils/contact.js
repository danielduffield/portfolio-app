import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class About extends React.Component {
  render() {
    return (
      <div id="about-section" className={'row' + (this.props.view === 'contact' ? '' : ' hidden')}>
        <ContactSplash></ContactSplash>
        <DarkeningLayer />
        <ContactWrapper className="col-sm-6 col-sm-offset-3">
          <FormWrapper>
            <DescriptionWrapper>
              <div>If you have any:</div>
              <ContactQueryLink className="btn btn-default col-sm-4">questions</ContactQueryLink>
              <ContactQueryLink className="btn btn-default col-sm-4">feedback</ContactQueryLink>
              <ContactQueryLink className="btn btn-default col-sm-4">job info</ContactQueryLink>
              <p>or exceptional cases, please feel free to reach out to me on LinkedIn, via email, or via the form below.</p>
            </DescriptionWrapper>
            <ContactForm>
              <InputWrapper>
                <ContactInput />
              </InputWrapper>
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

const InputWrapper = styled.div`

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

const Connected = connect(mapStateToProps)(About)
export default Connected

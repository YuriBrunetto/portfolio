import React from 'react'
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaMediumM,
  FaSoundcloud
} from 'react-icons/fa'

// JSON
import socials from '../../../static/socials.json'

import { Container } from './styles'

const Socials = props => (
  <Container>
    {socials.map((item, i) => (
      <a
        key={i}
        href={item.href}
        title={`Follow me on ${item.title}`}
        className="socials-a"
        target="_blank"
      >
        {(() => {
          switch (item.title) {
            case 'GitHub':
              return <FaGithub />
            case 'LinkedIn':
              return <FaLinkedinIn />
            case 'Facebook':
              return <FaFacebookF />
            case 'Instagram':
              return <FaInstagram />
            case 'Medium':
              return <FaMediumM />
            case 'SoundCloud':
              return <FaSoundcloud />
            default:
              return null
          }
        })()}
      </a>
    ))}
  </Container>
)

export default Socials

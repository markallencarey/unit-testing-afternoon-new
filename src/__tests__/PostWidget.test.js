import React from 'react'
import { render, act } from '@testing-library/react'
import Post from '../views/Post'
import axios from 'axios'
import { MemoryRouter } from 'react-router-dom'
import { longText, posts } from './__data__/testData'
import PostWidget from '../components/PostWidget'
import { shortenText } from '../utils/functions'

const longPost = posts[0]
const post = posts[1]

it('renders PostWidget', () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget {...post} />
    </MemoryRouter>
  )
  expect(container.textContent).toContain(post.text)
})


it('shortens display text when expanded is false', () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget {...longPost} />
    </MemoryRouter>
  )
  expect(container.textContent).toContain(shortenText(longPost.text))
})

it('Displays all text when expanded is true', () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget expanded={true} {...longPost} />
    </MemoryRouter>
  )
  expect(container.textContent).toContain(longPost.text)
})
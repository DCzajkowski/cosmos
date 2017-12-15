import React from 'react'
import styled from 'styled-components'

import { Heading1, Heading2, Logo } from '../components'
import Center from '../components/_helpers/center'
import { colors } from '../tokens'

/* Get sources from the file generated by tooling/find-imports */
import sources from './sources.json'
const dummyComponents = sources['./dummy-components']
const realComponents = sources['../components'] || 0

const Node = styled.span`
  margin: 10px;
  g {
    fill: ${props => (props.pass ? 'normal' : colors.grayLightest)};
  }
`

/* Create an array of nodes with pass or fail status */
const nodes = []

for (let i = 0; i < realComponents; i++) nodes.push({ pass: true })
for (let i = 0; i < dummyComponents; i++) nodes.push({ pass: false })
const percentage = parseInt(100 * realComponents / (realComponents + dummyComponents), 10)

export default () => (
  <Center>
    <Heading1>Milestone 1: Manage PoC {sources['']}</Heading1>
    <Heading2>{percentage}%</Heading2>
    <div>
      {nodes.map((node, index) => (
        <Node key={index} pass={node.pass}>
          <Logo />
        </Node>
      ))}
    </div>
  </Center>
)

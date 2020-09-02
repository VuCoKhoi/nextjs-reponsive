import React from 'react'
import Head from 'next/head'
import { Col, Grid, Row } from '../src/components/Layout'
import FlexBox from '../src/components/FlexBox'

export default function Home() {
  return (
    <FlexBox>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Grid>
        <Row>
          <Col size={1}>1</Col>
        </Row>
        <Row>
          <Col size={1} styles={{ justifyContent: 'center' }}>
            2
          </Col>
          <Col size={2}>3</Col>
          <Col size={1} justifyContent='center'>
            4
          </Col>
          <Col size={2}>5</Col>
          <Col size={1} justifyContent='center' collapse='xs'>
            6
          </Col>
          <Col size={2}>7</Col>
          <Col size={1} justifyContent='center'>
            8
          </Col>
          <Col size={2}>9</Col>
          <Col size={1} justifyContent='center'>
            10
          </Col>
          <Col size={2}>11</Col>
        </Row>
      </Grid>
    </FlexBox>
  )
}

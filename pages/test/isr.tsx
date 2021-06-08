import { GetStaticProps } from 'next'
import React from 'react'

interface Props {
  date: Date
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toLocaleString(),
    },
    revalidate: 5,
  }
}

const Isr: React.VFC<Props> = ({ date }) => <p>{date}</p>

export default Isr

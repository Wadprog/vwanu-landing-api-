/* eslint-disable react-hooks/exhaustive-deps */

import { Container } from 'reactstrap'

// core dependencies
import PageWrapper from '../components/PageWrapper'
import Header from '../components/Headers/SimpleHeader'
import Transaction from '../components/Transaction'
const Dashboard = () => {
  return (
    <PageWrapper>
      <Header transactions={[]} />
      <Container className="mt--7" fluid>
        <h1> chart and date range picker was in there</h1>
        <div className="mt-5">
          <Transaction />
        </div>
      </Container>
    </PageWrapper>
  )
}

export default Dashboard

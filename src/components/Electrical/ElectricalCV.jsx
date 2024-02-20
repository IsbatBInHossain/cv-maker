import { ElectricalBody } from './ElectricalBody'

import { Sidebar } from '../Sidebar'

const ElectricalCV = () => {
  return (
    <div className=' mt-16 grid grid-cols-3'>
      <Sidebar />
      <ElectricalBody />
    </div>
  )
}

export default ElectricalCV

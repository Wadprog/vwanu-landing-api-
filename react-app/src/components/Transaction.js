import { useEffect, useState } from 'react'
import MaterialTable from 'material-table'
import { useSelector, useDispatch } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core'

// Icons Needed
import LockIcon from '@material-ui/icons/Lock'
import EditIcon from '@material-ui/icons/Edit'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import FilterList from '@material-ui/icons/FilterList'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Email from '@material-ui/icons/Email'
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox'
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck'
// import ForwardToInboxRoundedIcon from '@mui/icons-material/'

// Core components

import useToggle from '../hooks/useToggle'
import { getTesters, testers, sendEmail } from '../store/testers'
import TableIcons from './TransactionListIcon'

// Default function
const Testers = () => {
  const dispatch = useDispatch()

  const [preferDarkMode, setPreferDarkMode] = useState(() => {
    const mode = localStorage.getItem('_tableDarkMode')
    return mode === 'true' || false
  })

  useEffect(() => dispatch(getTesters()), [dispatch, getTesters])

  const Testers = useSelector(testers)
  const data = Testers.data.map((o) => ({ ...o, d: {} }))
  const [filter, toggleFilter] = useToggle(false)

  // const theme = createMuiTheme({
  //   palette: {
  //     type: preferDarkMode ? 'dark' : 'light',
  //   },
  // })

  const columns = [
    {
      title: 'First Name',
      field: 'firstName',
    },
    {
      title: 'last name',
      field: 'lastName',
    },
    {
      title: 'email',
      field: 'email',
    },
    {
      title: 'email sent ',
      field: 'emailSent',
      render: (rowData) => (
        <span>
          {rowData?.emailSent ? (
            <>
              Yes <LibraryAddCheckIcon color="blue" size={10} />
            </>
          ) : (
            <>
              NO
              <IndeterminateCheckBoxIcon />
            </>
          )}
        </span>
      ),
    },
  ]
  const handleDarkModeChange = () => {
    setPreferDarkMode(!preferDarkMode)
    localStorage.setItem('_tableDarkMode', !preferDarkMode)
  }

  // const handleDelete = async (rowData) =>
  //   dispatch(deleteTransaction(rowData._id))
  // const handleSubmit = (date) => dispatch(lockTransaction(date))

  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }} className="rounded">
      {/* <MuiThemeProvider theme={theme}> */}
      <MaterialTable
        isLoading={Testers.loading}
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          filtering: filter,
          grouping: true,
          headerStyle: {
            paddingTop: 2,
            paddingBottom: 2,
            backgroundColor: '#01579b',
            color: '#FFF',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontWeight: 'bold',
    
          },
        }}
        icons={TableIcons}
        columns={columns}
        data={data}
        title={`Current testers list`}
        actions={[
          {
            icon: () => <FilterList />,
            tooltip: 'Toggle deep filter',
            onClick: toggleFilter,
            isFreeAction: true,
          },

          {
            icon: () =>
              preferDarkMode ? <Brightness7Icon /> : <Brightness4Icon />,
            tooltip: 'Toggle light/dark mode',
            onClick: handleDarkModeChange,
            isFreeAction: true,
          },

          (rowData) => ({
            icon: () => <Email />,
            tooltip: 'send an email',
            onClick: (event, rowData) => {
              console.log('clicked')
              dispatch(sendEmail(rowData))
              console.log(rowData)
            },
          }),
        ]}
      />
      {/* </MuiThemeProvider> */}
      {/* <LockRange
        state={lockModal}
        toggle={toggleLockModal}
        onSubmit={handleSubmit}
      /> */}
    </div>
  )
}

export default Testers

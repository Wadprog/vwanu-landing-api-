import { useFormikContext } from 'formik'

import { Button } from 'reactstrap'

function SubmitBtn({ title, ...otherProps }) {
  const { handleSubmit } = useFormikContext()

  return (
    <Button
      color="primary"
      type="button"
      onClick={handleSubmit}
      {...otherProps}
    >
      {title}
    </Button>
  )
}

export default SubmitBtn

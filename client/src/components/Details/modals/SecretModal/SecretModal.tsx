import React from 'react'
import Modal from '../../../Modal/Modal'
import icons from '../../../../utils/icons'
import Input from '../../../Input/Input'

type PropsType = {
    name: string
    secret: string
    onClose: () => void
}

/**
 * SecretModal component
 * 
 * @param props - Component props
 * @param props.name - Name of a variable
 * @param props.secret - Secret value
 * @param props.onClose - onClose callback
 * @returns SecretModal
 */
const SecretModal = ({
    name,
    secret,
    onClose
}: PropsType) => {
  return (
      <Modal
          title="Secret"
          textProceed='Done'
          textCancel='Cancel'
          icon={icons.lock}
          onClose={onClose}
          onSubmit={onClose}>
          <Input
              disabled
              isFlex
              isCopy
              value={secret}
              renderLeft={name}
              width='70%' />
      </Modal>
  )
}

export default SecretModal
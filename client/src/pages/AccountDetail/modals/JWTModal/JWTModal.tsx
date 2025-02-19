import React from 'react';
import Modal from '../../../../components/Modal/Modal';
import Input from '../../../../components/Input/Input';
import icons from '../../../../utils/icons';

/**
 * JWTModal component props.
 */
type PropsType = {
  token: string;
  onClose: () => void;
};

/**
 * JWTModal component for displaying JWT token.
 *
 * @param token JWT token to be displayed.
 * @param onClose Callback function to close the modal.
 */
const JWTModal = ({
    token,
    onClose,
}: PropsType) => {
    return (
        <Modal
            title="JWT Token"
            textProceed='Done'
            textCancel='Cancel'
            icon={icons.lock}
            onClose={onClose}
            onSubmit={onClose}>
            <Input
                disabled
                isFlex
                isCopy
                value={token}
                renderLeft="Token"
                width='70%' />
        </Modal>
    )
}

export default JWTModal;

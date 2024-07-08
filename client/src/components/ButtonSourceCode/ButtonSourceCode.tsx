import React, { useState } from 'react'
import Button from '../Button/Button'
import { Icon } from '@iconify/react'
import icons from '../../utils/icons'
import SourceCodeModal from "./modals/SourceCodeModal/SourceCodeModal"

type PropsType = {
    data: object
}

/**
 * ButtonSourceCode component
 * 
 * @param props - Component props 
 * @param props.data - Object to be converted in JSON
 * @returns ButtonSourceCode
 */
const ButtonSourceCode = ({
    data
}: PropsType) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <Button onClick={() => setIsActive(true)}>
                <Icon icon={icons.code} width={20} height={20} />

            </Button>
            {isActive && (
                <SourceCodeModal data={JSON.stringify(data, null, 2)} onClose={() => setIsActive(false)} />
            )}
        </>
    )
}

export default ButtonSourceCode
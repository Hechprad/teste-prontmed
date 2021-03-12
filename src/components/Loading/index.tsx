import React from 'react'

import LoadingIcon from './styles'

/**
 * Loading React Component
 *
 * @component
 * @example
 *
 * import { Loading } from 'components'
 *
 * const Component: React.FC = () => (
 *   <Loading />
 * )
 *
 * @returns {React.FC} React Component
 */

const Loading: React.FC = ({ ...rest }) => <LoadingIcon {...rest} />

export default Loading

import styled from 'styled-components'

import { FiLoader } from 'react-icons/fi'

const LoadingIcon = styled(FiLoader)`
  min-width: 40px;
  height: 40px;
  color: ${({ theme: { colors } }) => colors.blue};

  animation: spin-animation 1.2s infinite;
  animation-timing-function: linear;

  @keyframes spin-animation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`

export default LoadingIcon

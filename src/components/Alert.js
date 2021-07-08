import styled from 'styled-components'

const Alert = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default styled(Alert)`
  background-color: #e55039;
  text-align: center;
  margin-top: 20px;
  padding: 15px;
  font-size: 1.5rem;
`

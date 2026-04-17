import React, { useEffect } from 'react'

const BasicEffect = () => {

  useEffect(() => {
    console.log('useEffect called')
  }, []);

  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect
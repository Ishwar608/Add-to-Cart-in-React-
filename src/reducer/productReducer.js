
export default (state = [], { type, payload }) => {
  switch (type) {

  case 'PRODUCTDATA':
    return [...payload ]

 
  default:
    return state
  }
}


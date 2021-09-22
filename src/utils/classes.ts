const prefix = 'cdk'

const classes = (componentName: string, ...args: any): string => {
  const className = new Array<string>()
  args.forEach(arg => {
    if (typeof arg === 'string') {
      className.push(`${prefix}-${componentName.toLowerCase()}${arg && "-" + arg}`)
    } else if (Array.isArray(arg)) {
      arg.forEach(str => {
        typeof str === 'string' && className.push(str)
      })
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          className.push(key)
        }
      }
    }
  })
  return className.filter(v => v).join('')
}

export default classes
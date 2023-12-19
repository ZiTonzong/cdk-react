const ELE_FACTORS = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
]

const calculateNodeHeight = (node: HTMLTextAreaElement): number => {
  const hiddenEle = getHiddenEle() as HTMLTextAreaElement
  const value = node.value
  const placeholder = node.placeholder
  const style = window.getComputedStyle(node)

  ELE_FACTORS.forEach(key => {
    hiddenEle.style[key] = style.getPropertyValue(key)
  })

  hiddenEle.value = value || placeholder || ''
  const height = hiddenEle.scrollHeight
  hiddenEle.value = ''

  return height
}

const getHiddenEle = (): HTMLElement => {
  const hiddenEle: HTMLElement | null = document.querySelector('.cdk-ui-hidden-textarea')
  if (hiddenEle) {
    return hiddenEle
  } else {
    const textarea = document.createElement('textarea')
    textarea.className = 'cdk-ui-hidden-textarea'
    document.body.append(textarea)
    return textarea
  }
}

export default calculateNodeHeight
import fs from 'fs'

function getInputFilePath(): string {
  // determine which input file to use based on process.argv[2]
  let pathFragments = process.argv[1].split('/')
  pathFragments.pop()
  if (process.argv[2] == 'test') {
    pathFragments.push('input_test.txt')
  } else {
    pathFragments.push('input.txt')
  }
  return pathFragments.join('/')
}

export const getInputFile = (): string => {
  const path = getInputFilePath()
  console.log(`using file: ${path}`)
  return fs.readFileSync(path, 'utf-8')
}

export const getInputLines = (): string[] => {
  return getInputFile().split(/\r?\n/)
}

export const lines = getInputLines()
export const file = getInputFile()

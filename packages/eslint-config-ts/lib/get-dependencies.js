const fs = require('fs')
const path = require('path')

const directory = process.cwd()

module.exports = () => {
  try {
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(directory || '.', './package.json'), {
        encoding: 'utf-8',
      })
    )

    const dependencies = Object.keys({
      ...packageJson.peerDependencies,
      ...packageJson.devDependencies,
      ...packageJson.dependencies,
    })

    return dependencies
  } catch (e) {
    throw new Error(e)
  }
}

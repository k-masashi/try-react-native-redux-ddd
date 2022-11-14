import container from '../config/inversify.config'

function bindDependencies(func: any, dependencies: string[]) {
  let injections = dependencies.map(dependency => {
    return container.get(dependency)
  })
  return func.bind(func, ...injections)
}

export { bindDependencies }
